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

const productCopy = {
  flight: "Ofertas recomendadas de vuelos",
  hotel: "Hoteles recomendados",
  car: "Coches recomendados",
};

const productRange = {
  flight: { min: 60, max: 1800, value: 650 },
  hotel: { min: 120, max: 2400, value: 900 },
  car: { min: 40, max: 900, value: 420 },
};

const state = {
  product: "flight",
  notice: "",
};

const currency = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const form = document.querySelector("#searchForm");
const tabs = document.querySelectorAll(".tab");
const productNavLinks = document.querySelectorAll("[data-nav-product]");
const origin = document.querySelector("#origin");
const destination = document.querySelector("#destination");
const startDate = document.querySelector("#startDate");
const endDate = document.querySelector("#endDate");
const travelers = document.querySelector("#travelers");
const maxPrice = document.querySelector("#maxPrice");
const priceValue = document.querySelector("#priceValue");
const stops = document.querySelector("#stops");
const rating = document.querySelector("#rating");
const sortBy = document.querySelector("#sortBy");
const flexDates = document.querySelector("#flexDates");
const providerFilter = document.querySelector("#providerFilter");
const maxDuration = document.querySelector("#maxDuration");
const durationValue = document.querySelector("#durationValue");
const durationLabel = document.querySelector("#durationLabel");
const timeOfDay = document.querySelector("#timeOfDay");
const timeFilterWrap = document.querySelector("#timeFilterWrap");
const flexiblePolicy = document.querySelector("#flexiblePolicy");
const policyLabel = document.querySelector("#policyLabel");
const filterStatus = document.querySelector("#filterStatus");
const resultsList = document.querySelector("#resultsList");
const resultTitle = document.querySelector("#resultTitle");
const resultCount = document.querySelector("#resultCount");
const bestPrice = document.querySelector("#bestPrice");
const bestDates = document.querySelector("#bestDates");
const saving = document.querySelector("#saving");
const dateGrid = document.querySelector("#dateGrid");
const resetFilters = document.querySelector("#resetFilters");
const searchHint = document.querySelector("#searchHint");
const formMessage = document.querySelector("#formMessage");
const activeFilters = document.querySelector("#activeFilters");
const cityOptions = document.querySelector("#cityOptions");
const originSuggestions = document.querySelector("#originSuggestions");
const destinationSuggestions = document.querySelector("#destinationSuggestions");
const authActions = document.querySelector("#authActions");
const userMenu = document.querySelector("#userMenu");
const userName = document.querySelector("#userName");
const loginOpen = document.querySelector("#loginOpen");
const registerOpen = document.querySelector("#registerOpen");
const logoutButton = document.querySelector("#logoutButton");
const authModal = document.querySelector("#authModal");
const authClose = document.querySelector("#authClose");
const authTitle = document.querySelector("#authTitle");
const authForm = document.querySelector("#authForm");
const authTabs = document.querySelectorAll(".auth-tab");
const authSubmit = document.querySelector("#authSubmit");
const authMessage = document.querySelector("#authMessage");
const authName = document.querySelector("#authName");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const nameField = document.querySelector("#nameField");
const saveSearchButton = document.querySelector("#saveSearchButton");
const savedList = document.querySelector("#savedList");
const refreshSaved = document.querySelector("#refreshSaved");

let currentUser = null;
let authMode = "login";

function normalizeText(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getCity(value) {
  const raw = String(value || "");
  const codeFromLabel = raw.match(/\(([A-Z0-9]{3,4})\)/i)?.[1] || raw.match(/\b([A-Z]{3})\b/)?.[1] || "";
  const normalized = normalizeText(codeFromLabel || raw);
  const match = cities.find((city) => normalizeText(city.name) === normalized || normalizeText(city.code) === normalized);
  if (match) return match;

  const cleanName = value.trim() || "Destino";
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

function formatShortDate(value) {
  return new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "short" }).format(new Date(value));
}

function getTripDays() {
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  const diff = Math.round((end - start) / 86400000);
  return Number.isFinite(diff) ? Math.max(1, diff) : 1;
}

function normalizeDates() {
  if (!startDate.value) startDate.value = toInputDate(addDays(new Date(), 21));
  if (!endDate.value) endDate.value = toInputDate(addDays(new Date(startDate.value), 4));

  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  if (end <= start) {
    endDate.value = toInputDate(addDays(start, 4));
    state.notice = "He ajustado la vuelta para que sea posterior a la ida.";
  }
}

function getWeekendWeight(dateValue) {
  const day = new Date(dateValue).getDay();
  return day === 5 || day === 6 || day === 0 ? 1.14 : 0.94;
}

function routeDistanceFactor(fromCity, toCity) {
  if (fromCity.code === toCity.code) return 0.55;
  return Math.max(0.75, (fromCity.factor + toCity.factor) / 2);
}

function buildOffer(product, index) {
  const fromCity = getCity(origin.value);
  const toCity = getCity(destination.value);
  const pax = Math.max(1, Number(travelers.value) || 1);
  const days = getTripDays();
  const distance = routeDistanceFactor(fromCity, toCity);
  const weekend = getWeekendWeight(startDate.value);
  const flexibleDiscount = flexDates.checked ? 0.9 : 1;
  const provider = providerSets[product][index];
  const qualityLift = index * 0.16;
  const variance = [0.86, 1, 1.18, 1.34][index];

  let basePrice = 0;
  let title = "";
  let route = "";
  let duration = 0;
  let stopsCount = 0;
  let detail = "";
  let tag = "";
  let departureHour = 8 + index * 4;
  let flexiblePolicyAvailable = index !== 0;

  if (product === "flight") {
    const directPossible = distance < 1.55 || index !== 3;
    stopsCount = directPossible ? (index === 1 && distance > 1.1 ? 1 : 0) : 2;
    basePrice = 78 * distance * weekend * flexibleDiscount * pax * variance;
    duration = Math.round((95 + distance * 80 + stopsCount * 75) * (1 + index * 0.05));
    title = `${fromCity.name} - ${toCity.name} ${stopsCount === 0 ? "directo" : "con escala"}`;
    route = `${fromCity.code} -> ${toCity.code}`;
    detail = `${Math.floor(duration / 60)}h ${duration % 60}m, ${pax} viajero${pax === 1 ? "" : "s"}`;
    tag = index === 0 ? "Mejor precio" : index === 1 ? "Flexible" : index === 2 ? "Buen horario" : "Premium";
    departureHour = [7, 11, 16, 21][index];
    flexiblePolicyAvailable = index > 0;
  }

  if (product === "hotel") {
    basePrice = 62 * toCity.factor * days * weekend * variance;
    duration = days;
    title = ["Hotel Centro", "Apartahotel Familiar", "Boutique Vista", "Resort Superior"][index];
    title = `${title} ${toCity.name}`;
    route = `${toCity.name}, zona recomendada`;
    detail = `${days} noche${days === 1 ? "" : "s"}, ${pax} huesped${pax === 1 ? "" : "es"}`;
    tag = index === 0 ? "Ahorro" : index === 1 ? "Familias" : index === 2 ? "Mejor valorado" : "Cancelacion flexible";
    flexiblePolicyAvailable = index !== 0;
  }

  if (product === "car") {
    basePrice = 32 * toCity.factor * days * variance;
    duration = days;
    title = ["Economico", "Compacto", "SUV familiar", "Automatico premium"][index];
    title = `${title} en ${toCity.name}`;
    route = `Recogida en ${toCity.code}`;
    detail = `${days} dia${days === 1 ? "" : "s"}, kilometraje incluido`;
    tag = index === 0 ? "Mas barato" : index === 1 ? "Popular" : index === 2 ? "Maletero amplio" : "Confort";
    flexiblePolicyAvailable = index !== 0;
  }

  const price = Math.max(38, Math.round(basePrice));
  const oldPrice = Math.round(price * (1.14 + index * 0.08));
  const ratingValue = Math.min(4.9, 4 + index * 0.22 + qualityLift / 4);

  return {
    product,
    provider,
    title,
    route,
    price,
    oldPrice,
    rating: ratingValue,
    stops: stopsCount,
    duration,
    departureHour,
    flexiblePolicyAvailable,
    tag,
    detail,
  };
}

function buildOffers() {
  return providerSets[state.product].map((_, index) => buildOffer(state.product, index));
}

function getFilteredOffers() {
  const minRating = Number(rating.value);
  const stopValue = stops.value;
  const priceLimit = Number(maxPrice.value);
  const providerValue = providerFilter.value;
  const durationLimit = Number(maxDuration.value);
  const timeValue = timeOfDay.value;
  const requiresFlexiblePolicy = flexiblePolicy.checked;

  const filtered = buildOffers().filter((offer) => {
    const matchesPrice = offer.price <= priceLimit;
    const matchesRating = offer.rating >= minRating;
    const matchesProvider = providerValue === "any" || offer.provider === providerValue;
    const matchesDuration = offer.duration <= durationLimit;
    const matchesStops =
      state.product !== "flight" || stopValue === "any" || offer.stops <= Number(stopValue);
    const matchesTime =
      state.product !== "flight" ||
      timeValue === "any" ||
      (timeValue === "morning" && offer.departureHour >= 5 && offer.departureHour < 12) ||
      (timeValue === "afternoon" && offer.departureHour >= 12 && offer.departureHour < 19) ||
      (timeValue === "evening" && (offer.departureHour >= 19 || offer.departureHour < 5));
    const matchesPolicy = !requiresFlexiblePolicy || offer.flexiblePolicyAvailable;
    return matchesPrice && matchesRating && matchesProvider && matchesDuration && matchesStops && matchesTime && matchesPolicy;
  });

  return filtered.sort((a, b) => {
    if (sortBy.value === "price") return a.price - b.price;
    if (sortBy.value === "rating") return b.rating - a.rating;
    if (sortBy.value === "duration") return a.duration - b.duration;

    const scoreA = a.price * 0.72 + a.duration * 0.13 - a.rating * 24;
    const scoreB = b.price * 0.72 + b.duration * 0.13 - b.rating * 24;
    return scoreA - scoreB;
  });
}

function providerInitials(provider) {
  return provider
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function apiAvailable() {
  return location.protocol === "http:" || location.protocol === "https:";
}

async function apiFetch(path, options = {}) {
  if (!apiAvailable()) {
    throw new Error("Abre la app desde el servidor local para usar cuentas y guardados.");
  }
  const response = await fetch(path, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "No se pudo completar la operacion.");
  return payload;
}

function currentCriteria() {
  return {
    product: state.product,
    origin: origin.value.trim(),
    destination: destination.value.trim(),
    startDate: startDate.value,
    endDate: endDate.value,
    travelers: Number(travelers.value) || 1,
    maxPrice: Number(maxPrice.value),
    maxDuration: Number(maxDuration.value),
    provider: providerFilter.value,
    stops: stops.value,
    rating: Number(rating.value),
    sortBy: sortBy.value,
    flexDates: flexDates.checked,
    timeOfDay: timeOfDay.value,
    flexiblePolicy: flexiblePolicy.checked,
  };
}

function renderUser() {
  authActions.hidden = Boolean(currentUser);
  userMenu.hidden = !currentUser;
  userName.textContent = currentUser ? currentUser.name : "";
}

function setAuthMode(mode) {
  authMode = mode;
  authTitle.textContent = mode === "register" ? "Crear cuenta" : "Entrar";
  authSubmit.textContent = mode === "register" ? "Crear cuenta" : "Entrar";
  nameField.hidden = mode !== "register";
  authPassword.autocomplete = mode === "register" ? "new-password" : "current-password";
  authTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.authMode === mode));
  authMessage.textContent = "";
}

function openAuth(mode) {
  setAuthMode(mode);
  authModal.hidden = false;
  window.setTimeout(() => (mode === "register" ? authName : authEmail).focus(), 20);
}

function closeAuth() {
  authModal.hidden = true;
  authForm.reset();
  authMessage.textContent = "";
}

async function loadMe() {
  try {
    const payload = await apiFetch("/api/me");
    currentUser = payload.user;
  } catch {
    currentUser = null;
  }
  renderUser();
  await loadSavedSearches();
}

async function loadSavedSearches() {
  if (!currentUser) {
    savedList.innerHTML = "<p>Inicia sesion para guardar viajes, fechas y filtros.</p>";
    return;
  }
  try {
    const payload = await apiFetch("/api/saved-searches");
    if (!payload.savedSearches.length) {
      savedList.innerHTML = "<p>Aun no tienes busquedas guardadas.</p>";
      return;
    }
    savedList.innerHTML = payload.savedSearches
      .map((item) => {
        const criteria = item.criteria || {};
        return `
          <article class="saved-item">
            <strong>${escapeHtml(item.name)}</strong>
            <span>${escapeHtml(criteria.product || "flight")} - ${escapeHtml(criteria.origin || "")} -> ${escapeHtml(criteria.destination || "")}</span>
            <span>${escapeHtml(criteria.startDate || "")} / ${escapeHtml(criteria.endDate || "")}</span>
            <div class="saved-actions">
              <button type="button" data-load-search="${escapeHtml(item.id)}">Cargar</button>
              <button type="button" data-delete-search="${escapeHtml(item.id)}">Borrar</button>
            </div>
          </article>
        `;
      })
      .join("");
    savedList.dataset.searches = JSON.stringify(payload.savedSearches);
  } catch (error) {
    savedList.innerHTML = `<p>${escapeHtml(error.message)}</p>`;
  }
}

function applyCriteria(criteria) {
  origin.value = criteria.origin || origin.value;
  destination.value = criteria.destination || destination.value;
  startDate.value = criteria.startDate || startDate.value;
  endDate.value = criteria.endDate || endDate.value;
  travelers.value = criteria.travelers || travelers.value;
  maxPrice.value = criteria.maxPrice || maxPrice.value;
  maxDuration.value = criteria.maxDuration || maxDuration.value;
  providerFilter.value = criteria.provider || "any";
  stops.value = criteria.stops || "any";
  rating.value = criteria.rating || 0;
  sortBy.value = criteria.sortBy || "smart";
  flexDates.checked = Boolean(criteria.flexDates);
  timeOfDay.value = criteria.timeOfDay || "any";
  flexiblePolicy.checked = Boolean(criteria.flexiblePolicy);
  setProduct(criteria.product || state.product);
}

function renderActiveFilters() {
  const labels = [
    `Hasta ${currency.format(Number(maxPrice.value))}`,
    rating.value === "0" ? "Todas las valoraciones" : `${rating.value}+ estrellas`,
    flexDates.checked ? "Fechas flexibles" : "Fechas exactas",
  ];

  if (providerFilter.value !== "any") {
    labels.push(providerFilter.value);
  }

  if (Number(maxDuration.value) < Number(maxDuration.max)) {
    labels.push(`${durationLabel.textContent}: ${formatDuration(Number(maxDuration.value))}`);
  }

  if (state.product === "flight" && stops.value !== "any") {
    labels.push(stops.value === "0" ? "Solo directos" : "Max. 1 escala");
  }

  if (state.product === "flight" && timeOfDay.value !== "any") {
    const timeLabels = { morning: "Salida manana", afternoon: "Salida tarde", evening: "Salida noche" };
    labels.push(timeLabels[timeOfDay.value]);
  }

  if (flexiblePolicy.checked) {
    labels.push(policyLabel.textContent);
  }

  activeFilters.innerHTML = labels.map((label) => `<span class="filter-pill">${label}</span>`).join("");
}

function resetFiltersState(options = {}) {
  const range = productRange[state.product];
  maxPrice.value = range.value;
  configureProductFilters(state.product);
  stops.value = "any";
  providerFilter.value = "any";
  timeOfDay.value = "any";
  rating.value = 0;
  sortBy.value = "smart";
  flexDates.checked = options.keepFlexDates === false ? false : true;
  flexiblePolicy.checked = false;
}

function closeLocationPanels() {
  originSuggestions.classList.remove("open");
  destinationSuggestions.classList.remove("open");
}

function renderSummary(results) {
  if (!results.length) {
    bestPrice.textContent = "--";
    bestDates.textContent = "--";
    saving.textContent = "--";
    return;
  }

  const cheapest = Math.min(...results.map((offer) => offer.price));
  const topSaving = Math.max(...results.map((offer) => offer.oldPrice - offer.price));
  const bestDate = getBestDateOption();

  bestPrice.textContent = currency.format(cheapest);
  bestDates.textContent = bestDate.label;
  saving.textContent = currency.format(topSaving);
}

function formatDuration(value) {
  if (state.product === "flight") {
    return `${Math.floor(value / 60)}h ${value % 60}m`;
  }
  return `${value} dia${value === 1 ? "" : "s"}`;
}

function configureProductFilters(product, options = {}) {
  const preserveDuration = Boolean(options.preserveDuration);
  const currentProvider = providerFilter.value;
  providerFilter.innerHTML = [
    '<option value="any">Todos</option>',
    ...providerSets[product].map((provider) => `<option value="${escapeHtml(provider)}">${escapeHtml(provider)}</option>`),
  ].join("");
  providerFilter.value = providerSets[product].includes(currentProvider) ? currentProvider : "any";

  const offers = buildOffers();
  const maxOfferDuration = Math.max(...offers.map((offer) => offer.duration));
  const minOfferDuration = Math.min(...offers.map((offer) => offer.duration));
  maxDuration.min = minOfferDuration;
  maxDuration.max = maxOfferDuration;
  maxDuration.step = product === "flight" ? 5 : 1;
  if (!preserveDuration || Number(maxDuration.value) > maxOfferDuration || Number(maxDuration.value) < minOfferDuration) {
    maxDuration.value = maxOfferDuration;
  }

  durationLabel.textContent = product === "flight" ? "Duracion maxima" : product === "hotel" ? "Estancia maxima" : "Alquiler maximo";
  stops.disabled = product !== "flight";
  timeOfDay.disabled = product !== "flight";
  timeFilterWrap.classList.toggle("is-disabled", product !== "flight");
  policyLabel.textContent =
    product === "flight" ? "Cambios flexibles" : product === "hotel" ? "Cancelacion flexible" : "Cancelacion flexible";
}

function renderResults() {
  normalizeDates();
  configureProductFilters(state.product, { preserveDuration: true });
  priceValue.textContent = maxPrice.value;
  durationValue.textContent = formatDuration(Number(maxDuration.value));
  resultTitle.textContent = productCopy[state.product];
  searchHint.textContent = `${origin.value.trim() || "Origen"} -> ${destination.value.trim() || "Destino"} - ${
    flexDates.checked ? "fechas flexibles" : "fechas exactas"
  }`;

  const results = getFilteredOffers();
  resultCount.textContent = `${results.length} resultado${results.length === 1 ? "" : "s"}`;
  filterStatus.textContent = `${results.length} opcion${results.length === 1 ? "" : "es"} visibles con los filtros actuales`;
  renderSummary(results);
  renderActiveFilters();
  renderDates();

  formMessage.classList.toggle("ok", Boolean(state.notice));
  formMessage.textContent = state.notice;
  state.notice = "";

  if (!results.length) {
    resultsList.innerHTML = `
      <div class="result-card empty">
        <h3>No hay resultados con estos filtros</h3>
        <p>Sube el precio maximo, baja la valoracion minima o permite mas escalas para ver mas opciones.</p>
      </div>
    `;
    return;
  }

  resultsList.innerHTML = results
    .map(
      (offer) => `
        <article class="result-card">
          <div class="result-main">
            <span class="provider-badge">${providerInitials(offer.provider)}</span>
            <div>
              <h3>${escapeHtml(offer.title)}</h3>
              <div class="result-meta">
                <span>${escapeHtml(offer.provider)}</span>
                <span>${escapeHtml(offer.route)}</span>
                <span>${offer.rating.toFixed(1)} / 5</span>
                <span>${
                  state.product === "flight"
                    ? `${offer.stops} escala${offer.stops === 1 ? "" : "s"} - salida ${String(offer.departureHour).padStart(2, "0")}:00`
                    : `${offer.duration} dia${offer.duration === 1 ? "" : "s"}`
                }</span>
                <span class="tag">${escapeHtml(offer.tag)}</span>
              </div>
              <p>${escapeHtml(offer.detail)}</p>
              <span class="demo-note">Precio actualizado con origen, destino, fechas, viajeros y filtros.</span>
            </div>
          </div>
          <div class="price">
            <strong>${currency.format(offer.price)}</strong>
            <span>antes ${currency.format(offer.oldPrice)}</span>
            <div class="result-actions">
              <a class="deal-button" href="#" data-deal="${escapeHtml(offer.title)}">Ver disponibilidad</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function getDateOptions() {
  const base = new Date(startDate.value || toInputDate(addDays(new Date(), 21)));
  const days = getTripDays();
  const fromCity = getCity(origin.value);
  const toCity = getCity(destination.value);
  const distance = routeDistanceFactor(fromCity, toCity);

  return [-7, -2, 0, 4, 9].map((offset, index) => {
    const start = addDays(base, offset);
    const end = addDays(start, days);
    const weight = [0.86, 0.93, 1.04, 0.91, 1.16][index] * getWeekendWeight(toInputDate(start));
    return {
      label: `${formatShortDate(start)}-${formatShortDate(end)}`,
      start: toInputDate(start),
      end: toInputDate(end),
      price: Math.round(92 * distance * weight * (state.product === "flight" ? 1 : 1.8)),
      note: index === 0 ? "Salida anticipada" : index === 1 ? "Buen ahorro" : index === 2 ? "Fechas elegidas" : index === 3 ? "Mejor combinacion" : "Demanda alta",
    };
  });
}

function getBestDateOption() {
  const options = getDateOptions();
  return options.reduce((best, item) => (item.price < best.price ? item : best), options[0]);
}

function renderDates() {
  const options = getDateOptions();
  const best = Math.min(...options.map((item) => item.price));
  dateGrid.innerHTML = options
    .map(
      (item) => `
        <button class="date-cell ${item.price === best ? "best" : ""}" type="button" data-start="${item.start}" data-end="${item.end}">
          <span>${item.label}</span>
          <strong>${currency.format(item.price)}</strong>
          <p>${item.note}</p>
        </button>
      `
    )
    .join("");
}

function renderCityOptions() {
  if (!apiAvailable()) {
    cityOptions.innerHTML = cities
      .map((city) => `<option value="${escapeHtml(city.name)}">${escapeHtml(city.code)} - ${escapeHtml(city.country)}</option>`)
      .join("");
    return;
  }

  apiFetch("/api/locations?limit=20")
    .then((payload) => {
      cityOptions.innerHTML = payload.locations
        .map((airport) => `<option value="${escapeHtml(locationInputValue(airport))}">${escapeHtml(locationMeta(airport))}</option>`)
        .join("");
    })
    .catch(() => {
      cityOptions.innerHTML = "";
    });
}

function getCityMatches(value) {
  const normalized = normalizeText(value);
  const matches = cities.filter((city) => {
    const haystack = normalizeText(`${city.name} ${city.code} ${city.country}`);
    return !normalized || haystack.includes(normalized);
  });
  return matches.slice(0, 6);
}

function locationInputValue(airport) {
  const city = airport.city || airport.name;
  const code = airport.iata || airport.icao || airport.labelCode;
  return `${city} (${code})`;
}

function locationMeta(airport) {
  const code = airport.iata || airport.icao || airport.labelCode;
  const place = [airport.name, airport.country].filter(Boolean).join(", ");
  return `${code} - ${place}`;
}

function locationTypeLabel(type) {
  const labels = {
    large_airport: "Aeropuerto principal",
    medium_airport: "Aeropuerto",
  };
  return labels[type] || "Ubicacion";
}

async function fetchLocationMatches(value) {
  if (!apiAvailable()) {
    return getCityMatches(value).map((city) => ({
      inputValue: city.name,
      title: city.name,
      meta: `${city.code} - ${city.country}`,
    }));
  }

  const payload = await apiFetch(`/api/locations?q=${encodeURIComponent(value)}&limit=8`);
  return payload.locations.map((airport) => ({
    inputValue: locationInputValue(airport),
    code: airport.type === "country" ? airport.countryCode : airport.iata || airport.icao || airport.labelCode,
    type: airport.type,
    typeLabel: locationTypeLabel(airport.type),
    title: `${airport.city || airport.name} (${airport.iata || airport.icao || airport.labelCode})`,
    subtitle: airport.name,
    meta: locationMeta(airport),
  }));
}

async function renderSuggestions(input, container) {
  const requestValue = input.value;
  container.dataset.pendingValue = requestValue;
  const fieldName = input === origin ? "origen" : "destino";

  try {
    const matches = await fetchLocationMatches(requestValue);
    if (container.dataset.pendingValue !== requestValue) return;
    const list = matches.length
      ? matches
          .map(
            (item) => `
              <button class="suggestion-button" type="button" data-city="${escapeHtml(item.inputValue)}">
                <span class="suggestion-icon">${escapeHtml((item.code || "?").slice(0, 1))}</span>
                <span class="suggestion-main">
                  <span class="suggestion-title">${escapeHtml(item.title)}</span>
                  <span class="suggestion-sub">${escapeHtml(item.subtitle)}</span>
                  <span class="suggestion-meta">${escapeHtml(item.meta)} - ${escapeHtml(item.typeLabel)}</span>
                </span>
                <span class="suggestion-code">${escapeHtml(item.code || "")}</span>
              </button>
            `
          )
          .join("")
      : `<div class="suggestion-empty">No encontramos coincidencias. Prueba con ciudad, pais, IATA o nombre del aeropuerto.</div>`;

    container.innerHTML = `
      <div class="suggestion-head">
        <strong>Elige ${fieldName}</strong>
        <span>Busca aeropuertos comerciales por ciudad, pais, nombre, codigo IATA o ICAO.</span>
      </div>
      <div class="suggestion-list">${list}</div>
    `;
    container.classList.toggle("open", document.activeElement === input);
  } catch {
    container.innerHTML = "";
    container.classList.remove("open");
  }
}

function wireSuggestions(input, container) {
  input.addEventListener("focus", () => renderSuggestions(input, container));
  input.addEventListener("input", () => {
    renderSuggestions(input, container);
    renderResults();
  });
  input.addEventListener("blur", () => {
    window.setTimeout(() => container.classList.remove("open"), 130);
  });
  container.addEventListener("click", (event) => {
    const button = event.target.closest(".suggestion-button");
    if (!button) return;
    input.value = button.dataset.city;
    container.classList.remove("open");
    state.notice = `Busqueda actualizada para ${button.dataset.city}.`;
    resetFiltersState();
    renderResults();
  });
}

function setProduct(product) {
  state.product = product;
  tabs.forEach((item) => item.classList.toggle("active", item.dataset.product === product));
  productNavLinks.forEach((item) => item.classList.toggle("active", item.dataset.navProduct === product));
  const range = productRange[product];
  maxPrice.min = range.min;
  maxPrice.max = range.max;
  maxPrice.value = Math.min(Number(maxPrice.value), range.max);
  if (Number(maxPrice.value) < range.min || Number(maxPrice.value) === Number(productRange.flight.value)) {
    maxPrice.value = range.value;
  }
  configureProductFilters(product);
  renderResults();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setProduct(tab.dataset.product));
});

productNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setProduct(link.dataset.navProduct);
    closeLocationPanels();
    document.querySelector("#buscador").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

[maxPrice, maxDuration, providerFilter, stops, rating, sortBy, flexDates, timeOfDay, flexiblePolicy, startDate, endDate, travelers].forEach((control) => {
  control.addEventListener("input", renderResults);
  control.addEventListener("change", renderResults);
});

resetFilters.addEventListener("click", () => {
  resetFiltersState();
  state.notice = "Filtros reiniciados.";
  renderResults();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  resetFiltersState();
  closeLocationPanels();
  try {
    const payload = await apiFetch("/api/search", {
      method: "POST",
      body: JSON.stringify(currentCriteria()),
    });
    state.notice = "Ofertas actualizadas por Flyvero.";
  } catch (error) {
    state.notice = error.message;
  }
  renderResults();
  document.querySelector(".results-area").scrollIntoView({ behavior: "smooth", block: "start" });
});

dateGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".date-cell");
  if (!button) return;
  startDate.value = button.dataset.start;
  endDate.value = button.dataset.end;
  state.notice = "Fechas aplicadas desde el calendario inteligente.";
  renderResults();
});

resultsList.addEventListener("click", (event) => {
  const link = event.target.closest(".deal-button");
  if (!link) return;
  event.preventDefault();
  state.notice = `Disponibilidad preparada para "${link.dataset.deal}".`;
  renderResults();
});

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => setAuthMode(tab.dataset.authMode));
});

loginOpen.addEventListener("click", () => openAuth("login"));
registerOpen.addEventListener("click", () => openAuth("register"));
authClose.addEventListener("click", closeAuth);
authModal.addEventListener("click", (event) => {
  if (event.target === authModal) closeAuth();
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  authMessage.textContent = "";
  const payload = {
    name: authName.value.trim(),
    email: authEmail.value.trim(),
    password: authPassword.value,
  };
  try {
    const response = await apiFetch(authMode === "register" ? "/api/register" : "/api/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    currentUser = response.user;
    renderUser();
    closeAuth();
    state.notice = `Sesion iniciada como ${currentUser.name}.`;
    renderResults();
    await loadSavedSearches();
  } catch (error) {
    authMessage.textContent = error.message;
  }
});

logoutButton.addEventListener("click", async () => {
  try {
    await apiFetch("/api/logout", { method: "POST", body: "{}" });
  } catch {
    // If the backend is unavailable, still clear the local UI state.
  }
  currentUser = null;
  renderUser();
  await loadSavedSearches();
  state.notice = "Sesion cerrada.";
  renderResults();
});

saveSearchButton.addEventListener("click", async () => {
  if (!currentUser) {
    openAuth("register");
    authMessage.textContent = "Crea una cuenta para guardar esta busqueda.";
    return;
  }
  const criteria = currentCriteria();
  try {
    await apiFetch("/api/saved-searches", {
      method: "POST",
      body: JSON.stringify({
        name: `${criteria.origin || "Origen"} - ${criteria.destination || "Destino"} (${criteria.product})`,
        criteria,
      }),
    });
    state.notice = "Busqueda guardada en tu cuenta.";
    renderResults();
    await loadSavedSearches();
  } catch (error) {
    state.notice = error.message;
    renderResults();
  }
});

refreshSaved.addEventListener("click", loadSavedSearches);

savedList.addEventListener("click", async (event) => {
  const loadButton = event.target.closest("[data-load-search]");
  const deleteButton = event.target.closest("[data-delete-search]");
  const searches = JSON.parse(savedList.dataset.searches || "[]");

  if (loadButton) {
    const saved = searches.find((item) => item.id === loadButton.dataset.loadSearch);
    if (saved) {
      applyCriteria(saved.criteria);
      state.notice = "Busqueda guardada cargada.";
      renderResults();
    }
  }

  if (deleteButton) {
    try {
      await apiFetch(`/api/saved-searches/${encodeURIComponent(deleteButton.dataset.deleteSearch)}`, {
        method: "DELETE",
      });
      await loadSavedSearches();
      state.notice = "Busqueda borrada.";
      renderResults();
    } catch (error) {
      state.notice = error.message;
      renderResults();
    }
  }
});

wireSuggestions(origin, originSuggestions);
wireSuggestions(destination, destinationSuggestions);
renderCityOptions();
setProduct("flight");
loadMe();
