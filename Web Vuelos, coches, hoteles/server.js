const crypto = require("crypto");
const fs = require("fs/promises");
const http = require("http");
const path = require("path");
const { URL } = require("url");

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const DB_PATH = path.join(DATA_DIR, "db.json");
const AIRPORTS_PATH = path.join(DATA_DIR, "airports.json");
const sessions = new Map();
let airportIndexCache = null;
let countryIndexCache = null;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

const cities = [
  { name: "Madrid", code: "MAD", country: "Espana", factor: 1 },
  { name: "Barcelona", code: "BCN", country: "Espana", factor: 0.96 },
  { name: "Valencia", code: "VLC", country: "Espana", factor: 0.92 },
  { name: "Sevilla", code: "SVQ", country: "Espana", factor: 0.91 },
  { name: "Malaga", code: "AGP", country: "Espana", factor: 0.9 },
  { name: "Bilbao", code: "BIO", country: "Espana", factor: 0.97 },
  { name: "Paris", code: "PAR", country: "Francia", factor: 1.08 },
  { name: "Londres", code: "LON", country: "Reino Unido", factor: 1.18 },
  { name: "Roma", code: "ROM", country: "Italia", factor: 1.02 },
  { name: "Lisboa", code: "LIS", country: "Portugal", factor: 0.88 },
  { name: "Amsterdam", code: "AMS", country: "Paises Bajos", factor: 1.16 },
  { name: "Berlin", code: "BER", country: "Alemania", factor: 1.05 },
  { name: "Tokio", code: "TYO", country: "Japon", factor: 2.72 },
  { name: "Nueva York", code: "NYC", country: "Estados Unidos", factor: 2.05 },
  { name: "Cancun", code: "CUN", country: "Mexico", factor: 1.82 },
  { name: "Dubai", code: "DXB", country: "Emiratos Arabes", factor: 2.14 },
];

const providerSets = {
  flight: ["Amadeus", "Kiwi.com", "Travelpayouts", "Duffel"],
  hotel: ["Hotelbeds", "Expedia", "Booking.com", "Google Hotels"],
  car: ["CarTrawler", "DiscoverCars", "Rentalcars", "Auto Europe"],
};

async function ensureDb() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DB_PATH);
  } catch {
    await fs.writeFile(DB_PATH, JSON.stringify({ users: [], savedSearches: [] }, null, 2));
  }
}

async function readDb() {
  await ensureDb();
  return JSON.parse(await fs.readFile(DB_PATH, "utf8"));
}

async function writeDb(db) {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
}

function send(res, status, payload, headers = {}) {
  const body = typeof payload === "string" ? payload : JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": typeof payload === "string" ? "text/plain; charset=utf-8" : "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    ...headers,
  });
  res.end(body);
}

function parseCookies(req) {
  return Object.fromEntries(
    String(req.headers.cookie || "")
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf("=");
        return [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
      })
  );
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(password, salt, 120000, 32, "sha256").toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  const [salt, expected] = stored.split(":");
  const actual = hashPassword(password, salt).split(":")[1];
  return crypto.timingSafeEqual(Buffer.from(actual, "hex"), Buffer.from(expected, "hex"));
}

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email };
}

function createSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, { userId, expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 7 });
  return token;
}

function getSessionUserId(req) {
  const token = parseCookies(req).flyvero_session;
  const session = token && sessions.get(token);
  if (!session || session.expiresAt < Date.now()) return null;
  return session.userId;
}

async function requireUser(req, res) {
  const userId = getSessionUserId(req);
  if (!userId) {
    send(res, 401, { error: "Inicia sesion para continuar." });
    return null;
  }
  const db = await readDb();
  const user = db.users.find((item) => item.id === userId);
  if (!user) {
    send(res, 401, { error: "Sesion no valida." });
    return null;
  }
  return { db, user };
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 1_000_000) {
        req.destroy();
        reject(new Error("Body demasiado grande."));
      }
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        reject(new Error("JSON no valido."));
      }
    });
    req.on("error", reject);
  });
}

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function airportIndex() {
  if (!airportIndexCache) {
    try {
      airportIndexCache = JSON.parse(require("fs").readFileSync(AIRPORTS_PATH, "utf8")).airports || [];
    } catch {
      airportIndexCache = [];
    }
  }
  return airportIndexCache;
}

function countryIndex() {
  if (!countryIndexCache) {
    const byCode = new Map();
    for (const airport of airportIndex().filter((item) =>
      ["large_airport", "medium_airport"].includes(item.type)
    )) {
      if (!airport.countryCode || !airport.country) continue;
      const existing = byCode.get(airport.countryCode);
      byCode.set(airport.countryCode, {
        id: `country-${airport.countryCode}`,
        name: airport.country,
        city: "",
        country: airport.country,
        countryCode: airport.countryCode,
        type: "country",
        iata: "",
        icao: "",
        labelCode: airport.countryCode,
        lat: null,
        lon: null,
        rank: 120,
        searchText: normalizeText(`${airport.country} ${airport.countryCode}`),
        airportCount: (existing?.airportCount || 0) + 1,
      });
    }
    countryIndexCache = [...byCode.values()].sort((a, b) => a.name.localeCompare(b.name));
  }
  return countryIndexCache;
}

function publicAirport(airport) {
  return {
    id: airport.id,
    name: airport.name,
    city: airport.city,
    country: airport.country,
    countryCode: airport.countryCode,
    type: airport.type,
    iata: airport.iata,
    icao: airport.icao,
    labelCode: airport.labelCode,
    lat: airport.lat,
    lon: airport.lon,
    airportCount: airport.airportCount,
  };
}

function locationScore(airport, query) {
  const q = normalizeText(query);
  const code = normalizeText(airport.iata || airport.icao || airport.labelCode);
  const name = normalizeText(airport.name);
  const city = normalizeText(airport.city);
  const country = normalizeText(airport.country);

  if (code === q) return 10000 + airport.rank;
  if (airport.iata && normalizeText(airport.iata).startsWith(q)) return 9000 + airport.rank;
  if (city === q) return 8000 + airport.rank;
  if (name.startsWith(q)) return 7000 + airport.rank;
  if (city.startsWith(q)) return 6500 + airport.rank;
  if (country.startsWith(q)) return 5000 + airport.rank;
  return airport.rank;
}

function searchLocations(query, limit = 12) {
  const q = normalizeText(query);
  const usableAirports = airportIndex().filter((airport) =>
    ["large_airport", "medium_airport"].includes(airport.type)
  );
  if (q.length < 2) {
    return usableAirports
      .filter((airport) => airport.iata && (airport.type === "large_airport" || airport.type === "medium_airport"))
      .slice(0, limit)
      .map(publicAirport);
  }

  const airports = usableAirports
    .filter((airport) => airport.searchText.includes(q))
    .sort((a, b) => locationScore(b, query) - locationScore(a, query) || a.name.localeCompare(b.name))
    .slice(0, limit);

  return airports.map(publicAirport);
}

function getCity(value) {
  const raw = String(value || "");
  const codeFromLabel = raw.match(/\(([A-Z0-9]{3,4})\)/i)?.[1] || raw.match(/\b([A-Z]{3})\b/)?.[1] || "";
  const normalized = normalizeText(codeFromLabel || raw);
  const airportMatch = airportIndex().find((airport) => {
    return (
      normalizeText(airport.iata) === normalized ||
      normalizeText(airport.icao) === normalized ||
      normalizeText(airport.labelCode) === normalized ||
      normalizeText(airport.name) === normalized ||
      normalizeText(airport.city) === normalized
    );
  });
  if (airportMatch) {
    return {
      name: airportMatch.city || airportMatch.name,
      code: airportMatch.iata || airportMatch.icao || airportMatch.labelCode,
      country: airportMatch.country,
      factor: airportMatch.type === "large_airport" ? 1.15 : airportMatch.type === "medium_airport" ? 1 : 0.88,
    };
  }

  const countryMatch = countryIndex().find((country) => {
    return normalizeText(country.countryCode) === normalized || normalizeText(country.country) === normalized;
  });
  if (countryMatch) {
    return {
      name: countryMatch.country,
      code: countryMatch.countryCode,
      country: countryMatch.country,
      factor: 1,
    };
  }

  const match = cities.find((city) => normalizeText(city.name) === normalized || normalizeText(city.code) === normalized);
  if (match) return match;
  const cleanName = String(value || "Destino").trim();
  return {
    name: cleanName,
    code: cleanName.slice(0, 3).toUpperCase().padEnd(3, "X"),
    country: "Busqueda personalizada",
    factor: 1.2,
  };
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function toInputDate(date) {
  return date.toISOString().slice(0, 10);
}

function tripDays(criteria) {
  const start = new Date(criteria.startDate);
  const end = new Date(criteria.endDate);
  const diff = Math.round((end - start) / 86400000);
  return Number.isFinite(diff) ? Math.max(1, diff) : 1;
}

function weekendWeight(value) {
  const day = new Date(value).getDay();
  return day === 5 || day === 6 || day === 0 ? 1.14 : 0.94;
}

function routeDistanceFactor(fromCity, toCity) {
  if (fromCity.code === toCity.code) return 0.55;
  return Math.max(0.75, (fromCity.factor + toCity.factor) / 2);
}

function buildOffer(product, criteria, index) {
  const fromCity = getCity(criteria.origin);
  const toCity = getCity(criteria.destination);
  const pax = Math.max(1, Number(criteria.travelers) || 1);
  const days = tripDays(criteria);
  const distance = routeDistanceFactor(fromCity, toCity);
  const weekend = weekendWeight(criteria.startDate);
  const flexibleDiscount = criteria.flexDates ? 0.9 : 1;
  const provider = providerSets[product][index];
  const variance = [0.86, 1, 1.18, 1.34][index];

  let basePrice = 0;
  let title = "";
  let route = "";
  let duration = 0;
  let stops = 0;
  let detail = "";
  let tag = "";
  let departureHour = 8 + index * 4;
  let flexiblePolicyAvailable = index !== 0;

  if (product === "flight") {
    stops = distance > 1.2 && index > 0 ? Math.min(index, 2) : 0;
    basePrice = 78 * distance * weekend * flexibleDiscount * pax * variance;
    duration = Math.round((95 + distance * 80 + stops * 75) * (1 + index * 0.05));
    title = `${fromCity.name} - ${toCity.name} ${stops === 0 ? "directo" : "con escala"}`;
    route = `${fromCity.code} -> ${toCity.code}`;
    detail = `${Math.floor(duration / 60)}h ${duration % 60}m, ${pax} viajero${pax === 1 ? "" : "s"}`;
    tag = index === 0 ? "Mejor precio" : index === 1 ? "Flexible" : index === 2 ? "Buen horario" : "Premium";
    departureHour = [7, 11, 16, 21][index];
    flexiblePolicyAvailable = index > 0;
  }

  if (product === "hotel") {
    basePrice = 62 * toCity.factor * days * weekend * variance;
    duration = days;
    title = `${["Hotel Centro", "Apartahotel Familiar", "Boutique Vista", "Resort Superior"][index]} ${toCity.name}`;
    route = `${toCity.name}, zona recomendada`;
    detail = `${days} noche${days === 1 ? "" : "s"}, ${pax} huesped${pax === 1 ? "" : "es"}`;
    tag = index === 0 ? "Ahorro" : index === 1 ? "Familias" : index === 2 ? "Mejor valorado" : "Cancelacion flexible";
    flexiblePolicyAvailable = index !== 0;
  }

  if (product === "car") {
    basePrice = 32 * toCity.factor * days * variance;
    duration = days;
    title = `${["Economico", "Compacto", "SUV familiar", "Automatico premium"][index]} en ${toCity.name}`;
    route = `Recogida en ${toCity.code}`;
    detail = `${days} dia${days === 1 ? "" : "s"}, kilometraje incluido`;
    tag = index === 0 ? "Mas barato" : index === 1 ? "Popular" : index === 2 ? "Maletero amplio" : "Confort";
    flexiblePolicyAvailable = index !== 0;
  }

  const price = Math.max(38, Math.round(basePrice));
  return {
    id: crypto.createHash("sha1").update(`${product}:${provider}:${title}:${price}`).digest("hex").slice(0, 12),
    product,
    provider,
    title,
    route,
    price,
    oldPrice: Math.round(price * (1.14 + index * 0.08)),
    rating: Math.min(4.9, 4 + index * 0.26),
    stops,
    duration,
    departureHour,
    flexiblePolicyAvailable,
    tag,
    detail,
    bookingUrl: "#",
  };
}

function searchTravel(criteria) {
  const product = criteria.product || "flight";
  const offers = providerSets[product].map((_, index) => buildOffer(product, criteria, index));
  const maxPrice = Number(criteria.maxPrice || 99999);
  const maxDuration = Number(criteria.maxDuration || 99999);
  const minRating = Number(criteria.rating || 0);
  const stopValue = criteria.stops || "any";
  const providerValue = criteria.provider || "any";
  const timeValue = criteria.timeOfDay || "any";
  const requiresFlexiblePolicy = Boolean(criteria.flexiblePolicy);
  const filtered = offers
    .filter((offer) => offer.price <= maxPrice)
    .filter((offer) => offer.duration <= maxDuration)
    .filter((offer) => offer.rating >= minRating)
    .filter((offer) => providerValue === "any" || offer.provider === providerValue)
    .filter((offer) => product !== "flight" || stopValue === "any" || offer.stops <= Number(stopValue))
    .filter((offer) => {
      if (product !== "flight" || timeValue === "any") return true;
      if (timeValue === "morning") return offer.departureHour >= 5 && offer.departureHour < 12;
      if (timeValue === "afternoon") return offer.departureHour >= 12 && offer.departureHour < 19;
      if (timeValue === "evening") return offer.departureHour >= 19 || offer.departureHour < 5;
      return true;
    })
    .filter((offer) => !requiresFlexiblePolicy || offer.flexiblePolicyAvailable)
    .sort((a, b) => {
      if (criteria.sortBy === "price") return a.price - b.price;
      if (criteria.sortBy === "rating") return b.rating - a.rating;
      if (criteria.sortBy === "duration") return a.duration - b.duration;
      return a.price * 0.72 + a.duration * 0.13 - a.rating * 24 - (b.price * 0.72 + b.duration * 0.13 - b.rating * 24);
    });

  const dateOptions = [-7, -2, 0, 4, 9].map((offset, index) => {
    const start = addDays(new Date(criteria.startDate), offset);
    const end = addDays(start, tripDays(criteria));
    const distance = routeDistanceFactor(getCity(criteria.origin), getCity(criteria.destination));
    const weight = [0.86, 0.93, 1.04, 0.91, 1.16][index] * weekendWeight(toInputDate(start));
    return {
      label: `${start.getDate()}/${start.getMonth() + 1}-${end.getDate()}/${end.getMonth() + 1}`,
      start: toInputDate(start),
      end: toInputDate(end),
      price: Math.round(92 * distance * weight * (product === "flight" ? 1 : 1.8)),
      note: index === 0 ? "Salida anticipada" : index === 1 ? "Buen ahorro" : index === 2 ? "Fechas elegidas" : index === 3 ? "Mejor combinacion" : "Demanda alta",
    };
  });

  return {
    providerMode: process.env.TRAVEL_API_MODE || "demo-adapter",
    offers: filtered,
    dateOptions,
    summary: {
      cheapest: filtered.length ? Math.min(...filtered.map((offer) => offer.price)) : null,
      saving: filtered.length ? Math.max(...filtered.map((offer) => offer.oldPrice - offer.price)) : null,
      bestDates: dateOptions.reduce((best, item) => (item.price < best.price ? item : best), dateOptions[0]),
    },
  };
}

async function handleApi(req, res, url) {
  if (url.pathname === "/api/health") {
    return send(res, 200, {
      ok: true,
      providerMode: process.env.TRAVEL_API_MODE || "demo-adapter",
      airports: airportIndex().length,
    });
  }

  if (url.pathname === "/api/locations" && req.method === "GET") {
    return send(res, 200, {
      locations: searchLocations(url.searchParams.get("q") || "", Number(url.searchParams.get("limit") || 12)),
      totalAirports: airportIndex().length,
    });
  }

  if (url.pathname === "/api/search" && req.method === "POST") {
    const body = await readBody(req);
    return send(res, 200, searchTravel(body));
  }

  if (url.pathname === "/api/register" && req.method === "POST") {
    const body = await readBody(req);
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    if (name.length < 2 || !email.includes("@") || password.length < 8) {
      return send(res, 400, { error: "Nombre, email y contrasena de 8 caracteres son obligatorios." });
    }
    const db = await readDb();
    if (db.users.some((user) => user.email === email)) {
      return send(res, 409, { error: "Ya existe una cuenta con ese email." });
    }
    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      passwordHash: hashPassword(password),
      createdAt: new Date().toISOString(),
    };
    db.users.push(user);
    await writeDb(db);
    const token = createSession(user.id);
    return send(res, 201, { user: publicUser(user) }, { "Set-Cookie": sessionCookie(token) });
  }

  if (url.pathname === "/api/login" && req.method === "POST") {
    const body = await readBody(req);
    const db = await readDb();
    const user = db.users.find((item) => item.email === String(body.email || "").trim().toLowerCase());
    if (!user || !verifyPassword(String(body.password || ""), user.passwordHash)) {
      return send(res, 401, { error: "Email o contrasena incorrectos." });
    }
    const token = createSession(user.id);
    return send(res, 200, { user: publicUser(user) }, { "Set-Cookie": sessionCookie(token) });
  }

  if (url.pathname === "/api/logout" && req.method === "POST") {
    const token = parseCookies(req).flyvero_session;
    if (token) sessions.delete(token);
    return send(res, 200, { ok: true }, { "Set-Cookie": "flyvero_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0" });
  }

  if (url.pathname === "/api/me" && req.method === "GET") {
    const userId = getSessionUserId(req);
    if (!userId) return send(res, 200, { user: null });
    const db = await readDb();
    const user = db.users.find((item) => item.id === userId);
    return send(res, 200, { user: user ? publicUser(user) : null });
  }

  if (url.pathname === "/api/saved-searches" && req.method === "GET") {
    const auth = await requireUser(req, res);
    if (!auth) return;
    return send(res, 200, { savedSearches: auth.db.savedSearches.filter((item) => item.userId === auth.user.id) });
  }

  if (url.pathname === "/api/saved-searches" && req.method === "POST") {
    const auth = await requireUser(req, res);
    if (!auth) return;
    const body = await readBody(req);
    const saved = {
      id: crypto.randomUUID(),
      userId: auth.user.id,
      name: String(body.name || `${body.criteria?.origin || "Origen"} - ${body.criteria?.destination || "Destino"}`).slice(0, 80),
      criteria: body.criteria || {},
      createdAt: new Date().toISOString(),
    };
    auth.db.savedSearches.unshift(saved);
    await writeDb(auth.db);
    return send(res, 201, { savedSearch: saved });
  }

  if (url.pathname.startsWith("/api/saved-searches/") && req.method === "DELETE") {
    const auth = await requireUser(req, res);
    if (!auth) return;
    const id = decodeURIComponent(url.pathname.split("/").pop());
    auth.db.savedSearches = auth.db.savedSearches.filter((item) => !(item.id === id && item.userId === auth.user.id));
    await writeDb(auth.db);
    return send(res, 200, { ok: true });
  }

  return send(res, 404, { error: "Endpoint no encontrado." });
}

function sessionCookie(token) {
  return `flyvero_session=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${60 * 60 * 24 * 7}`;
}

async function serveStatic(req, res, url) {
  const requested = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const filePath = path.normalize(path.join(ROOT, requested));
  if (!filePath.startsWith(ROOT)) return send(res, 403, "Acceso denegado.");
  try {
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(data);
  } catch {
    send(res, 404, "Archivo no encontrado.");
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url);
      return;
    }
    await serveStatic(req, res, url);
  } catch (error) {
    send(res, 500, { error: error.message || "Error interno." });
  }
});

ensureDb().then(() => {
  server.listen(PORT, () => {
    console.log(`Flyvero escuchando en http://localhost:${PORT}`);
  });
});
