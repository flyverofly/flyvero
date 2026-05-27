const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const sources = path.join(root, "data", "sources");
const outPath = path.join(root, "data", "airports.json");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (quoted && char === '"' && next === '"') {
      value += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (!quoted && char === ",") {
      row.push(value);
      value = "";
      continue;
    }

    if (!quoted && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(value);
      if (row.some(Boolean)) rows.push(row);
      row = [];
      value = "";
      continue;
    }

    value += char;
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  const headers = rows.shift();
  return rows.map((items) => Object.fromEntries(headers.map((header, index) => [header, items[index] || ""])));
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const countries = new Map(
  parseCsv(fs.readFileSync(path.join(sources, "countries.csv"), "utf8")).map((country) => [
    country.code,
    country.name,
  ])
);

const typeRank = {
  large_airport: 6,
  medium_airport: 5,
  small_airport: 4,
  seaplane_base: 3,
  heliport: 2,
  balloonport: 1,
};

const airports = parseCsv(fs.readFileSync(path.join(sources, "airports.csv"), "utf8"))
  .filter((airport) => airport.type !== "closed")
  .map((airport) => {
    const iata = airport.iata_code || "";
    const icao = airport.gps_code || airport.ident || "";
    const country = countries.get(airport.iso_country) || airport.iso_country;
    const labelCode = iata || icao || airport.local_code || airport.ident;
    const searchText = [
      airport.name,
      airport.municipality,
      country,
      airport.iso_country,
      airport.iso_region,
      iata,
      icao,
      airport.local_code,
      airport.ident,
      airport.keywords,
    ]
      .map(normalize)
      .join(" ");

    return {
      id: airport.ident,
      name: airport.name,
      city: airport.municipality,
      country,
      countryCode: airport.iso_country,
      region: airport.iso_region,
      type: airport.type,
      iata,
      icao,
      localCode: airport.local_code,
      lat: Number(airport.latitude_deg) || null,
      lon: Number(airport.longitude_deg) || null,
      labelCode,
      rank: (typeRank[airport.type] || 0) + (iata ? 4 : 0),
      searchText,
    };
  })
  .sort((a, b) => b.rank - a.rank || a.country.localeCompare(b.country) || a.name.localeCompare(b.name));

fs.writeFileSync(outPath, JSON.stringify({ updatedAt: new Date().toISOString(), airports }, null, 0));
console.log(`Wrote ${airports.length} active airport records to ${outPath}`);
