const airports = [
  { city: "Barcelona", code: "BCN", name: "Barcelona-El Prat", country: "Espana", nearby: [
    { city: "Barcelona", code: "BCN", name: "Barcelona-El Prat", country: "Espana" },
    { city: "Girona", code: "GRO", name: "Girona-Costa Brava", country: "Espana" },
    { city: "Reus", code: "REU", name: "Reus Airport", country: "Espana" },
  ] },
  { city: "Madrid", code: "MAD", name: "Adolfo Suarez Madrid-Barajas", country: "Espana", nearby: [
    { city: "Madrid", code: "MAD", name: "Adolfo Suarez Madrid-Barajas", country: "Espana" },
  ] },
  { city: "Malaga", code: "AGP", name: "Malaga-Costa del Sol", country: "Espana", nearby: [
    { city: "Malaga", code: "AGP", name: "Malaga-Costa del Sol", country: "Espana" },
    { city: "Granada", code: "GRX", name: "Federico Garcia Lorca Granada-Jaen", country: "Espana" },
  ] },
  { city: "Valencia", code: "VLC", name: "Valencia Airport", country: "Espana", nearby: [
    { city: "Valencia", code: "VLC", name: "Valencia Airport", country: "Espana" },
    { city: "Alicante", code: "ALC", name: "Alicante-Elche", country: "Espana" },
  ] },
  { city: "Paris", code: "CDG", name: "Charles de Gaulle", country: "Francia", nearby: [
    { city: "Paris", code: "CDG", name: "Charles de Gaulle", country: "Francia" },
    { city: "Paris Orly", code: "ORY", name: "Paris-Orly", country: "Francia" },
    { city: "Paris Beauvais", code: "BVA", name: "Beauvais-Tille", country: "Francia" },
  ] },
  { city: "Londres", code: "LHR", name: "Heathrow", country: "Reino Unido", nearby: [
    { city: "Londres", code: "LHR", name: "Heathrow", country: "Reino Unido" },
    { city: "Londres Gatwick", code: "LGW", name: "Gatwick", country: "Reino Unido" },
    { city: "Londres Stansted", code: "STN", name: "Stansted", country: "Reino Unido" },
    { city: "Londres Luton", code: "LTN", name: "Luton", country: "Reino Unido" },
  ] },
  { city: "Roma", code: "FCO", name: "Fiumicino", country: "Italia", nearby: [
    { city: "Roma", code: "FCO", name: "Fiumicino", country: "Italia" },
    { city: "Roma Ciampino", code: "CIA", name: "Ciampino", country: "Italia" },
  ] },
];

const hotelPlaces = [
  { title: "Madrid", detail: "Comunidad de Madrid, Espana", type: "ciudad", icon: "H" },
  { title: "Hotel Riu Plaza Espana", detail: "Madrid, Espana", type: "hotel", icon: "H" },
  { title: "Centro Madrid", detail: "Madrid, Espana", type: "zona", icon: "Z" },
  { title: "Paris", detail: "Isla de Francia, Francia", type: "ciudad", icon: "H" },
  { title: "Centro Paris", detail: "Paris, Francia", type: "zona", icon: "Z" },
  { title: "Pullman Paris Tour Eiffel", detail: "Paris, Francia", type: "hotel", icon: "H" },
  { title: "Barcelona", detail: "Cataluna, Espana", type: "ciudad", icon: "H" },
  { title: "Hotel Arts Barcelona", detail: "Barcelona, Espana", type: "hotel", icon: "H" },
];

const carPlaces = [
  { title: "Madrid Aeropuerto T4", detail: "Madrid-Barajas, Espana", type: "oficina", icon: "C" },
  { title: "Madrid Atocha", detail: "Estacion de tren, Madrid", type: "oficina", icon: "C" },
  { title: "Barcelona Aeropuerto", detail: "El Prat, Espana", type: "oficina", icon: "C" },
  { title: "Barcelona Sants", detail: "Estacion de tren, Barcelona", type: "oficina", icon: "C" },
  { title: "Malaga Aeropuerto", detail: "Costa del Sol, Espana", type: "oficina", icon: "C" },
  { title: "Valencia Aeropuerto", detail: "Valencia, Espana", type: "oficina", icon: "C" },
];

const productConfig = {
  flight: {
    origin: "Origen",
    destination: "Destino",
    date: "Fechas",
    emptyDate: "Fechas flexibles - calendario de precios",
    selectedDate: "Ida y vuelta seleccionadas",
    pendingDate: "Ahora elige la vuelta",
    stepStart: "Primero elige la ida",
    stepEnd: "Ahora elige la vuelta",
    originDefault: "Barcelona (BCN)",
    destinationDefault: "Paris (CDG)",
    showOrigin: true,
    showSwap: true,
    showOneWay: true,
    travelerTitle: "Pasajeros",
  },
  hotel: {
    origin: "",
    destination: "Destino o nombre de hotel",
    date: "Entrada - salida",
    emptyDate: "Selecciona estancia",
    selectedDate: "Estancia seleccionada",
    pendingDate: "Ahora elige la salida",
    stepStart: "Elige la entrada",
    stepEnd: "Ahora elige la salida",
    originDefault: "",
    destinationDefault: "Madrid",
    showOrigin: false,
    showSwap: false,
    showOneWay: false,
    travelerTitle: "Personas y habitaciones",
  },
  car: {
    origin: "Recogida",
    destination: "Entrega",
    date: "Fechas de alquiler",
    emptyDate: "Recogida y entrega",
    selectedDate: "Alquiler seleccionado",
    pendingDate: "Ahora elige la entrega",
    stepStart: "Elige la recogida",
    stepEnd: "Ahora elige la entrega",
    originDefault: "Madrid Aeropuerto T4",
    destinationDefault: "Madrid Aeropuerto T4",
    showOrigin: true,
    showSwap: true,
    showOneWay: false,
    travelerTitle: "Conductor y extras",
  },
  package: {
    origin: "Origen",
    destination: "Destino o hotel",
    date: "Vuelo y hotel",
    emptyDate: "Vuelo y estancia",
    selectedDate: "Pack seleccionado",
    pendingDate: "Ahora elige la vuelta",
    stepStart: "Elige la ida",
    stepEnd: "Ahora elige la vuelta",
    originDefault: "Barcelona (BCN)",
    destinationDefault: "Paris",
    showOrigin: true,
    showSwap: true,
    showOneWay: false,
    travelerTitle: "Viajeros y habitaciones",
  },
};

const els = {
  productTabs: document.querySelectorAll(".product-tab"),
  productNavLinks: document.querySelectorAll("[data-nav-product]"),
  tripForm: document.querySelector("#tripForm"),
  flightOptions: document.querySelector("#flightOptions"),
  tripTypeTrigger: document.querySelector("#tripTypeTrigger"),
  tripTypePanel: document.querySelector("#tripTypePanel"),
  closeTripType: document.querySelector("#closeTripType"),
  tripTypeInput: document.querySelector("#tripTypeInput"),
  tripTypeText: document.querySelector("#tripTypeText"),
  tripTypeIcon: document.querySelector("#tripTypeIcon"),
  tripTypeOptions: document.querySelectorAll(".trip-type-option"),
  multiCityPanel: document.querySelector("#multiCityPanel"),
  origin: document.querySelector("#originInput"),
  originLabel: document.querySelector("#originLabel"),
  dest: document.querySelector("#destinationInput"),
  destLabel: document.querySelector("#destinationLabel"),
  originSuggest: document.querySelector("#originSuggest"),
  destSuggest: document.querySelector("#destinationSuggest"),
  swap: document.querySelector("#swapBtn"),
  form: document.querySelector("#tripForm"),
  dateTrigger: document.querySelector("#dateTrigger"),
  dateLabel: document.querySelector("#dateLabel"),
  calendarPanel: document.querySelector("#calendarPanel"),
  closeCalendar: document.querySelector("#closeCalendar"),
  calendarGrid: document.querySelector("#calendarGrid"),
  calendarMonth: document.querySelector("#calendarMonth"),
  calendarStep: document.querySelector("#calendarStep"),
  prevMonth: document.querySelector("#prevMonth"),
  nextMonth: document.querySelector("#nextMonth"),
  dateTitle: document.querySelector("#dateTitle"),
  dateSubtitle: document.querySelector("#dateSubtitle"),
  startDate: document.querySelector("#startDate"),
  endDate: document.querySelector("#endDate"),
  clearDates: document.querySelector("#clearDates"),
  applyDates: document.querySelector("#applyDates"),
  travelers: document.querySelector("#travelersSelect"),
  travelerTrigger: document.querySelector("#travelerTrigger"),
  travelerPanel: document.querySelector("#travelerPanel"),
  travelerTitle: document.querySelector("#travelerTitle"),
  travelerSubtitle: document.querySelector("#travelerSubtitle"),
  resultsGrid: document.querySelector("#resultsGrid"),
  resultsHeading: document.querySelector("#resultsHeading"),
  resultSummary: document.querySelector("#resultSummary"),
  resultsCount: document.querySelector("#resultsCount"),
  priceFilter: document.querySelector("#priceFilter"),
  priceValue: document.querySelector("#priceValue"),
  sortFilter: document.querySelector("#sortFilter"),
  flexFilter: document.querySelector("#flexFilter"),
  resetFilters: document.querySelector("#resetFilters"),
  cheapDeals: document.querySelector("#cheapDeals"),
};

let product = "flight";
let tripType = "roundtrip";
let selecting = "start";
let calendarMonthDate = new Date(2026, 5, 1);
const travelerState = { adults: 1, children: 0, babies: 0, pets: 0, rooms: 1, drivers: 1, babySeats: 0 };
const multiFlights = [
  { from: "Barcelona (BCN)", to: "Santorini (Thira) (JTR)", date: "2026-06-02" },
  { from: "", to: "", date: "2026-06-09" },
];
const isResultsPage = location.pathname.toLowerCase().endsWith("/results.html");
const productTitles = {
  flight: "Vuelos recomendados",
  hotel: "Hoteles recomendados",
  car: "Coches recomendados",
  package: "Paquetes vuelo + hotel",
};
const fmt = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "short" });
const euro = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

function normalize(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function label(airport) {
  return `${airport.city} (${airport.code})`;
}

function findAirport(value) {
  const q = normalize(value).replace(/[()]/g, " ");
  return airports.find((airport) => q.includes(normalize(airport.code)) || q.includes(normalize(airport.city))) || airports[0];
}

function activeConfig() {
  return productConfig[product] || productConfig.flight;
}

function findPlace(value, fallbackList) {
  const q = normalize(value);
  return fallbackList.find((place) => normalize(`${place.title} ${place.detail}`).includes(q) || q.includes(normalize(place.title))) || fallbackList[0];
}

function matches(value) {
  const q = normalize(value);
  if (!q) return airports.slice(0, 6);
  return airports
    .filter((airport) => normalize(`${airport.city} ${airport.code} ${airport.name} ${airport.country}`).includes(q))
    .slice(0, 6);
}

function matchesPlaces(value, list) {
  const q = normalize(value);
  if (!q) return list.slice(0, 7);
  return list.filter((place) => normalize(`${place.title} ${place.detail} ${place.type}`).includes(q)).slice(0, 7);
}

function locationTitle(value) {
  if (product === "hotel") return findPlace(value, hotelPlaces).title;
  if (product === "car") return findPlace(value, carPlaces).title;
  if (product === "package" && !String(value || "").includes("(")) return findPlace(value, hotelPlaces).title;
  return findAirport(value).city;
}

function toIso(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function parseIso(value) {
  const [year, month, day] = String(value || "").split("-").map(Number);
  return new Date(year || 2026, (month || 6) - 1, day || 1);
}

function getCriteria() {
  return {
    product,
    origin: els.origin?.value || "Barcelona (BCN)",
    destination: els.dest?.value || "Paris (CDG)",
    startDate: els.startDate?.value || "",
    endDate: els.endDate?.value || "",
    travelers: els.travelers?.value || "1 viajero",
    tripType,
    oneWay: tripType === "oneway",
  };
}

function criteriaToParams() {
  const criteria = getCriteria();
  return new URLSearchParams({
    product: criteria.product,
    origin: criteria.origin,
    destination: criteria.destination,
    startDate: criteria.startDate,
    endDate: criteria.endDate,
    travelers: criteria.travelers,
    tripType: criteria.tripType,
    oneWay: criteria.oneWay ? "1" : "0",
    adults: String(travelerState.adults),
    children: String(travelerState.children),
    babies: String(travelerState.babies),
    pets: String(travelerState.pets),
    rooms: String(travelerState.rooms),
    drivers: String(travelerState.drivers),
    babySeats: String(travelerState.babySeats),
  });
}

function applyCriteriaFromUrl() {
  const params = new URLSearchParams(location.search);
  product = params.get("product") || product;
  if (els.origin) els.origin.value = params.get("origin") || els.origin.value;
  if (els.dest) els.dest.value = params.get("destination") || els.dest.value;
  if (els.startDate) els.startDate.value = params.get("startDate") || "";
  if (els.endDate) els.endDate.value = params.get("endDate") || "";
  if (els.startDate?.value) {
    const selectedStart = parseIso(els.startDate.value);
    calendarMonthDate = new Date(selectedStart.getFullYear(), selectedStart.getMonth(), 1);
  }
  if (params.get("adults")) travelerState.adults = Math.max(1, Number(params.get("adults")) || 1);
  if (params.get("children")) travelerState.children = Math.max(0, Number(params.get("children")) || 0);
  if (params.get("babies")) travelerState.babies = Math.max(0, Number(params.get("babies")) || 0);
  if (params.get("pets")) travelerState.pets = Math.max(0, Number(params.get("pets")) || 0);
  if (params.get("rooms")) travelerState.rooms = Math.max(1, Number(params.get("rooms")) || 1);
  if (params.get("drivers")) travelerState.drivers = Math.max(1, Number(params.get("drivers")) || 1);
  if (params.get("babySeats")) travelerState.babySeats = Math.max(0, Number(params.get("babySeats")) || 0);
  tripType = params.get("tripType") || (params.get("oneWay") === "1" ? "oneway" : "roundtrip");
  if (!["oneway", "roundtrip", "multi"].includes(tripType)) tripType = "roundtrip";
  if (tripType === "oneway" && els.endDate) els.endDate.value = "";
  if (els.travelers && params.get("travelers")) els.travelers.value = params.get("travelers");
  els.productTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.product === product));
  applyProductMode(false);
  updateTravelerText();
  updateDateText();
}

function syncResultsUrl() {
  if (!isResultsPage) return;
  history.replaceState(null, "", `results.html?${criteriaToParams().toString()}`);
}

function renderSuggest(input, panel) {
  if (!input || !panel) return;
  if (product === "hotel" || (product === "package" && input === els.dest)) {
    const items = matchesPlaces(input.value, hotelPlaces);
    panel.innerHTML = `
      <div class="suggest-head"><strong>Destinos, zonas y hoteles</strong><span>Busca por ciudad, zona o nombre de hotel</span></div>
      ${items.map((place) => `<button type="button" class="suggest-item" data-value="${place.title}"><span class="airport-icon">${place.icon}</span><span class="suggest-main"><strong>${place.title}</strong><span>${place.detail}</span></span><span class="airport-code">${place.type}</span></button>`).join("")}
    `;
    panel.hidden = false;
    return;
  }
  if (product === "car") {
    const items = matchesPlaces(input.value, carPlaces);
    panel.innerHTML = `
      <div class="suggest-head"><strong>Oficinas de alquiler</strong><span>Aeropuertos, estaciones y puntos de recogida disponibles</span></div>
      ${items.map((place) => `<button type="button" class="suggest-item" data-value="${place.title}"><span class="airport-icon">${place.icon}</span><span class="suggest-main"><strong>${place.title}</strong><span>${place.detail}</span></span><span class="airport-code">${place.type}</span></button>`).join("")}
    `;
    panel.hidden = false;
    return;
  }
  const items = matches(input.value);
  const nearby = findAirport(input.value).nearby || [];
  panel.innerHTML = `
    <div class="suggest-head"><strong>Aeropuertos disponibles</strong><span>Incluye aeropuertos cercanos cuando buscas por ciudad o codigo</span></div>
    ${items.map((airport) => `<button type="button" class="suggest-item" data-value="${label(airport)}"><span class="airport-icon">A</span><span class="suggest-main"><strong>${label(airport)}</strong><span>${airport.name} - ${airport.country}</span></span><span class="airport-code">${airport.code}</span></button>`).join("")}
    ${nearby.length > 1 ? `<div class="suggest-head"><strong>Cerca de ${findAirport(input.value).city}</strong><span>Alternativas utiles para encontrar mejor precio</span></div>${nearby.map((airport) => `<button type="button" class="suggest-item" data-value="${label(airport)}"><span class="airport-icon">+</span><span class="suggest-main"><strong>${label(airport)}</strong><span>${airport.name} - ${airport.country}</span></span><span class="airport-code">${airport.code}</span></button>`).join("")}` : ""}
  `;
  panel.hidden = false;
}

function wireSuggest(input, panel) {
  if (!input || !panel) return;
  input.addEventListener("focus", () => renderSuggest(input, panel));
  input.addEventListener("input", () => {
    renderSuggest(input, panel);
    updateResults();
  });
  panel.addEventListener("click", (event) => {
    const button = event.target.closest(".suggest-item");
    if (!button) return;
    input.value = button.dataset.value;
    panel.hidden = true;
    updateResults();
  });
}

function priceFor(day) {
  const n = day.getDate();
  const target = normalize(els.dest?.value || "flyvero");
  const codeWeight = (target.charCodeAt(0) || 70) % 17;
  return 38 + ((n * 13 + codeWeight * 7) % 150);
}

function level(price) {
  return price < 80 ? "cheap" : price < 135 ? "mid" : "high";
}

function updateDateText() {
  if (!els.dateTitle || !els.dateSubtitle) return;
  const config = activeConfig();
  const oneWay = product === "flight" && tripType === "oneway";
  if (els.startDate.value && els.endDate.value) {
    els.dateTitle.textContent = `${fmt.format(parseIso(els.startDate.value))} - ${fmt.format(parseIso(els.endDate.value))}`;
    els.dateSubtitle.textContent = config.selectedDate;
  } else if (els.startDate.value && oneWay) {
    els.dateTitle.textContent = `${fmt.format(parseIso(els.startDate.value))}`;
    els.dateSubtitle.textContent = "Solo ida seleccionado";
  } else if (els.startDate.value) {
    els.dateTitle.textContent = `${fmt.format(parseIso(els.startDate.value))} - vuelta`;
    els.dateSubtitle.textContent = config.pendingDate;
  } else {
    els.dateTitle.textContent = "Selecciona fechas";
    els.dateSubtitle.textContent = config.emptyDate;
  }
}

function updateTravelerText() {
  const adultText = `${travelerState.adults} adulto${travelerState.adults === 1 ? "" : "s"}`;
  const childText = `${travelerState.children} nino${travelerState.children === 1 ? "" : "s"}`;
  const babyText = `${travelerState.babies} bebe${travelerState.babies === 1 ? "" : "s"}`;
  const people = travelerState.adults + travelerState.children + travelerState.babies;
  let title = `${adultText}, ${childText}, ${babyText}`;
  let subtitle = `${people} pasajero${people === 1 ? "" : "s"}`;
  if (product === "hotel" || product === "package") {
    title = `${people} persona${people === 1 ? "" : "s"}, ${travelerState.rooms} habitacion${travelerState.rooms === 1 ? "" : "es"}`;
    subtitle = travelerState.pets ? `${travelerState.pets} mascota${travelerState.pets === 1 ? "" : "s"}` : "Sin mascotas";
  }
  if (product === "car") {
    title = `${travelerState.drivers} conductor${travelerState.drivers === 1 ? "" : "es"}`;
    subtitle = `${travelerState.babySeats} silla${travelerState.babySeats === 1 ? "" : "s"} de bebe`;
  }
  if (els.travelerTitle) els.travelerTitle.textContent = title;
  if (els.travelerSubtitle) els.travelerSubtitle.textContent = subtitle;
  if (els.travelers) els.travelers.value = `${title} - ${subtitle}`;
}

function renderTravelerPanel() {
  if (!els.travelerPanel) return;
  const config = activeConfig();
  const rows =
    product === "car"
      ? [
        { key: "drivers", title: "Conductores", sub: "Personas que conduciran el coche", min: 1 },
        { key: "babySeats", title: "Sillas de bebe", sub: "Extras para bebes o ninos pequenos", min: 0 },
      ]
      : product === "hotel" || product === "package"
        ? [
          { key: "adults", title: "Adultos", sub: "16 anos o mas", min: 1 },
          { key: "children", title: "Ninos", sub: "2 - 15 anos", min: 0 },
          { key: "babies", title: "Bebes", sub: "Hasta 2 anos", min: 0 },
          { key: "rooms", title: "Habitaciones", sub: "Numero de habitaciones", min: 1 },
          { key: "pets", title: "Mascotas", sub: "Alojamientos que aceptan mascotas", min: 0 },
        ]
        : [
          { key: "adults", title: "Adultos", sub: "16 anos o mas al volar", min: 1 },
          { key: "children", title: "Ninos", sub: "2 - 15 anos al volar", min: 0 },
          { key: "babies", title: "Bebes", sub: "Hasta 2 anos al volar", min: 0 },
        ];
  els.travelerPanel.innerHTML = `
    <div class="traveler-head">${config.travelerTitle}</div>
    ${rows.map((row) => `
      <div class="traveler-row">
        <div><strong>${row.title}</strong><span>${row.sub}</span></div>
        <div class="stepper">
          <button type="button" data-traveler="${row.key}" data-step="-1" ${travelerState[row.key] <= row.min ? "disabled" : ""}>-</button>
          <b>${travelerState[row.key]}</b>
          <button type="button" data-traveler="${row.key}" data-step="1">+</button>
        </div>
      </div>
    `).join("")}
  `;
}

function renderCalendar() {
  if (!els.calendarGrid) return;
  const first = new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth(), 1);
  const offset = (first.getDay() + 6) % 7;
  const days = new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth() + 1, 0).getDate();
  if (els.calendarMonth) {
    els.calendarMonth.textContent = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(calendarMonthDate);
  }
  let html = "";
  for (let i = 0; i < offset; i += 1) html += '<span class="day-empty"></span>';
  for (let day = 1; day <= days; day += 1) {
    const date = new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth(), day);
    const value = toIso(date);
    const price = priceFor(date);
    const start = els.startDate.value;
    const end = els.endDate.value;
    const inRange = start && end && parseIso(value) > parseIso(start) && parseIso(value) < parseIso(end);
    const selected = value === start || value === end;
    html += `<button type="button" class="day-btn ${level(price)} ${selected ? "selected" : ""} ${inRange ? "in-range" : ""}" data-date="${value}"><strong>${day}</strong><span>${euro.format(price)}</span></button>`;
  }
  els.calendarGrid.innerHTML = html;
  if (els.calendarStep) {
    const config = activeConfig();
    els.calendarStep.textContent = product === "flight" && tripType === "oneway" ? "Elige la fecha de ida" : selecting === "start" ? config.stepStart : config.stepEnd;
  }
  updateDateText();
}

function basePrice() {
  return { flight: 62, hotel: 88, car: 34, package: 240 }[product] || 62;
}

function buildOffers() {
  const from = { city: product === "hotel" ? "" : locationTitle(els.origin?.value), code: "" };
  const to = { city: locationTitle(els.dest?.value), code: "" };
  const providers =
    product === "hotel"
      ? ["Hotel Centro", "Apartahotel Familiar", "Boutique Vista", "Resort Superior"]
      : product === "car"
        ? ["Economico", "SUV familiar", "Premium automatico", "Compacto"]
        : product === "package"
          ? ["Pack ahorro", "Hotel centrico", "Flexible recomendado", "Escapada completa"]
          : ["Directo recomendado", "Mejor precio", "Horario flexible", "Equipaje incluido"];

  return providers.map((name, index) => {
    const price = Math.round(basePrice() * (1 + index * 0.34) + (normalize(to.city).charCodeAt(0) % 20));
    const duration = product === "flight" ? 105 + index * 35 : product === "car" || product === "hotel" ? 4 + index : 190 + index * 25;
    const meta =
      product === "flight"
        ? ["Directo", "Equipaje opcional", "Fechas flexibles", "Buen horario"][index]
        : product === "hotel"
          ? ["Centro", "Cancelacion flexible", "Muy valorado", "Desayuno disponible"][index]
          : product === "car"
            ? ["Kilometraje incluido", "Maletero amplio", "Cancelacion flexible", "Recogida rapida"][index]
            : ["Vuelo + hotel", "Ahorro combinado", "Mejor valorado", "Flexible"][index];
    return { name, price, duration, meta, from, to };
  });
}

function filteredOffers() {
  const limit = Number(els.priceFilter?.value || 99999);
  const sort = els.sortFilter?.value || "smart";
  const offers = buildOffers().filter((offer) => offer.price <= limit);
  if (sort === "price") offers.sort((a, b) => a.price - b.price);
  if (sort === "duration") offers.sort((a, b) => a.duration - b.duration);
  return offers;
}

function renderOffers() {
  if (!els.resultsGrid || !els.resultsHeading || !els.resultSummary) return;
  const from = product === "hotel" ? null : { city: locationTitle(els.origin?.value) };
  const to = { city: locationTitle(els.dest?.value) };
  const offers = filteredOffers();
  els.resultsHeading.textContent = productTitles[product] || "Resultados recomendados";
  const route = product === "hotel" ? to.city : `${from.city} -> ${to.city}`;
  els.resultSummary.textContent = `${route} - ${els.dateTitle?.textContent || "fechas flexibles"} - ${els.travelers?.value || "1 viajero"}`;
  if (els.resultsCount) els.resultsCount.textContent = `${offers.length} resultado${offers.length === 1 ? "" : "s"}`;
  els.resultsGrid.innerHTML = offers.length
    ? offers.map((offer) => `
      <article class="offer-card">
        <div class="offer-left">
          <span class="provider-logo">F</span>
          <div>
            <h3>${offer.name} - ${product === "hotel" ? offer.to.city : `${offer.from.city} a ${offer.to.city}`}</h3>
            <div class="offer-meta">
              <span>${offer.meta}</span>
              <span>${product === "flight" ? `${Math.floor(offer.duration / 60)}h ${offer.duration % 60}m` : `${offer.duration} dias`}</span>
              <span>${els.flexFilter?.checked === false ? "Fechas exactas" : "Fechas flexibles"}</span>
            </div>
          </div>
        </div>
        <div class="offer-price">
          <strong>${euro.format(offer.price)}</strong>
          <span>precio estimado</span>
          <a class="deal-link" href="#">Ver oferta</a>
        </div>
      </article>
    `).join("")
    : '<article class="offer-card"><div><h3>No hay resultados con estos filtros</h3><p>Sube el precio maximo o cambia destino y fechas.</p></div></article>';
}

function renderCheapDeals() {
  if (!els.cheapDeals) return;
  const titles = {
    flight: "Opciones mas baratas ahora",
    hotel: "Hoteles con mejor precio",
    car: "Coches mas economicos",
    package: "Paquetes con ahorro",
  };
  const offers = buildOffers().sort((a, b) => a.price - b.price).slice(0, 3);
  els.cheapDeals.innerHTML = `
    <div class="cheap-deals-head">
      <strong>${titles[product] || "Opciones mas baratas"}</strong>
      <span>${activeConfig().emptyDate}</span>
    </div>
    <div class="cheap-deals-grid">
      ${offers.map((offer) => `
        <article class="cheap-deal-card">
          <span>${offer.meta}</span>
          <strong>${euro.format(offer.price)}</strong>
          <small>${product === "hotel" ? offer.to.city : `${offer.from.city} - ${offer.to.city}`}</small>
        </article>
      `).join("")}
    </div>
  `;
}

function updateTripTypeText() {
  const labels = {
    oneway: { text: "Solo ida", icon: "->" },
    roundtrip: { text: "Ida y vuelta", icon: "R" },
    multi: { text: "Multiples destinos", icon: "M" },
  };
  const current = labels[tripType] || labels.roundtrip;
  if (els.tripTypeInput) els.tripTypeInput.value = tripType;
  if (els.tripTypeText) els.tripTypeText.textContent = current.text;
  if (els.tripTypeIcon) els.tripTypeIcon.textContent = current.icon;
  els.tripTypeOptions.forEach((option) => option.classList.toggle("active", option.dataset.tripType === tripType));
}

function renderMultiCityPanel() {
  if (!els.multiCityPanel) return;
  els.multiCityPanel.hidden = !(product === "flight" && tripType === "multi");
  if (els.multiCityPanel.hidden) return;
  els.multiCityPanel.innerHTML = `
    <div class="multi-city-head">
      <strong>Multiples destinos</strong>
      <span>Combina varios vuelos en una sola busqueda</span>
    </div>
    ${multiFlights.map((flight, index) => `
      <section class="multi-flight-card" data-index="${index}">
        <div class="multi-flight-title">
          <strong>Vuelo ${index + 1}</strong>
          ${multiFlights.length > 2 ? `<button type="button" class="multi-remove" data-remove-flight="${index}">Quitar</button>` : ""}
        </div>
        <label class="multi-row">
          <span class="multi-icon">O</span>
          <input data-multi-field="from" data-index="${index}" value="${flight.from}" placeholder="Elige un lugar de salida" autocomplete="off" />
        </label>
        <label class="multi-row">
          <span class="multi-icon">D</span>
          <input data-multi-field="to" data-index="${index}" value="${flight.to}" placeholder="Elige el destino" autocomplete="off" />
          <button type="button" class="multi-swap" data-swap-flight="${index}" aria-label="Intercambiar vuelo ${index + 1}">&lt;&gt;</button>
        </label>
        <label class="multi-row">
          <span class="multi-icon">F</span>
          <input data-multi-field="date" data-index="${index}" value="${fmt.format(parseIso(flight.date))}" placeholder="Fecha" autocomplete="off" />
        </label>
      </section>
    `).join("")}
    <button type="button" class="add-flight-btn" id="addFlightBtn">+ Anadir otro vuelo</button>
  `;
}

function applyProductMode(resetValues = true) {
  const config = activeConfig();
  els.tripForm?.classList.toggle("is-hotel", product === "hotel");
  els.tripForm?.classList.toggle("is-car", product === "car");
  els.tripForm?.classList.toggle("is-package", product === "package");
  els.tripForm?.classList.toggle("is-multi", product === "flight" && tripType === "multi");
  if (els.originLabel) els.originLabel.textContent = config.origin;
  if (els.destLabel) els.destLabel.textContent = config.destination;
  if (els.dateLabel) els.dateLabel.textContent = config.date;
  if (els.flightOptions) els.flightOptions.hidden = !config.showOneWay;
  if (els.origin) {
    els.origin.closest(".origin-wrap")?.classList.toggle("field-hidden", !config.showOrigin);
    if (resetValues && config.originDefault) els.origin.value = config.originDefault;
  }
  els.swap?.classList.toggle("field-hidden", !config.showSwap);
  if (els.dest && resetValues) els.dest.value = config.destinationDefault;
  if (!config.showOneWay) tripType = "roundtrip";
  if (tripType === "oneway" && els.endDate) els.endDate.value = "";
  updateTripTypeText();
  renderMultiCityPanel();
  if (product === "car") {
    travelerState.drivers = Math.max(1, travelerState.drivers);
  }
  if (product === "hotel" || product === "package") {
    travelerState.rooms = Math.max(1, travelerState.rooms);
  }
  updateDateText();
  updateTravelerText();
}

function updateResults() {
  applyProductMode(false);
  updateDateText();
  updateTravelerText();
  renderTravelerPanel();
  if (els.priceValue && els.priceFilter) els.priceValue.textContent = els.priceFilter.value;
  renderCalendar();
  renderCheapDeals();
  renderOffers();
  syncResultsUrl();
}

function goToResults() {
  location.href = `results.html?${criteriaToParams().toString()}`;
}

function setProduct(nextProduct) {
  product = nextProduct;
  els.productTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.product === product));
  applyProductMode(true);
  updateResults();
}

els.productTabs.forEach((tab) => tab.addEventListener("click", () => setProduct(tab.dataset.product)));
els.productNavLinks.forEach((link) => link.addEventListener("click", () => setProduct(link.dataset.navProduct)));
els.swap?.addEventListener("click", () => {
  const tmp = els.origin.value;
  els.origin.value = els.dest.value;
  els.dest.value = tmp;
  updateResults();
});
els.form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (isResultsPage) updateResults();
  else goToResults();
});
els.dateTrigger?.addEventListener("click", () => {
  els.calendarPanel.hidden = false;
  renderCalendar();
});
els.closeCalendar?.addEventListener("click", () => {
  els.calendarPanel.hidden = true;
});
els.prevMonth?.addEventListener("click", () => {
  calendarMonthDate = new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth() - 1, 1);
  renderCalendar();
});
els.nextMonth?.addEventListener("click", () => {
  calendarMonthDate = new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth() + 1, 1);
  renderCalendar();
});
els.tripTypeTrigger?.addEventListener("click", () => {
  if (!els.tripTypePanel) return;
  els.tripTypePanel.hidden = !els.tripTypePanel.hidden;
});
els.closeTripType?.addEventListener("click", () => {
  if (els.tripTypePanel) els.tripTypePanel.hidden = true;
});
els.tripTypePanel?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-trip-type]");
  if (!button) return;
  tripType = button.dataset.tripType;
  if (tripType === "oneway") {
    els.endDate.value = "";
    selecting = "start";
  }
  if (tripType === "multi") {
    els.endDate.value = "";
    selecting = "start";
  }
  updateTripTypeText();
  els.tripTypePanel.hidden = true;
  updateResults();
});
els.multiCityPanel?.addEventListener("input", (event) => {
  const input = event.target.closest("[data-multi-field]");
  if (!input) return;
  const index = Number(input.dataset.index);
  const field = input.dataset.multiField;
  if (!multiFlights[index]) return;
  multiFlights[index][field] = input.value;
  syncResultsUrl();
});
els.multiCityPanel?.addEventListener("click", (event) => {
  const add = event.target.closest("#addFlightBtn");
  const remove = event.target.closest("[data-remove-flight]");
  const swap = event.target.closest("[data-swap-flight]");
  if (add) {
    multiFlights.push({ from: "", to: "", date: "2026-06-16" });
    renderMultiCityPanel();
    updateResults();
    return;
  }
  if (remove) {
    const index = Number(remove.dataset.removeFlight);
    if (multiFlights.length > 2) multiFlights.splice(index, 1);
    renderMultiCityPanel();
    updateResults();
    return;
  }
  if (swap) {
    const index = Number(swap.dataset.swapFlight);
    const flight = multiFlights[index];
    if (!flight) return;
    const tmp = flight.from;
    flight.from = flight.to;
    flight.to = tmp;
    renderMultiCityPanel();
    updateResults();
  }
});
els.clearDates?.addEventListener("click", () => {
  els.startDate.value = "";
  els.endDate.value = "";
  selecting = "start";
  updateResults();
});
els.applyDates?.addEventListener("click", () => {
  if (els.startDate.value && (els.endDate.value || (product === "flight" && tripType !== "roundtrip"))) els.calendarPanel.hidden = true;
  updateResults();
});
els.calendarGrid?.addEventListener("click", (event) => {
  const button = event.target.closest(".day-btn");
  if (!button) return;
  if (product === "flight" && tripType !== "roundtrip") {
    els.startDate.value = button.dataset.date;
    els.endDate.value = "";
    selecting = "start";
  } else if (selecting === "start" || (els.startDate.value && parseIso(button.dataset.date) <= parseIso(els.startDate.value))) {
    els.startDate.value = button.dataset.date;
    els.endDate.value = "";
    selecting = "end";
  } else {
    els.endDate.value = button.dataset.date;
    selecting = "start";
  }
  updateResults();
});
els.travelerTrigger?.addEventListener("click", () => {
  if (!els.travelerPanel) return;
  els.travelerPanel.hidden = !els.travelerPanel.hidden;
  renderTravelerPanel();
});
els.travelerPanel?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-traveler]");
  if (!button) return;
  const key = button.dataset.traveler;
  const step = Number(button.dataset.step);
  const min = key === "adults" ? 1 : 0;
  travelerState[key] = Math.max(min, travelerState[key] + step);
  updateResults();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".origin-wrap") && els.originSuggest) els.originSuggest.hidden = true;
  if (!event.target.closest(".destination-wrap") && els.destSuggest) els.destSuggest.hidden = true;
  if (!event.target.closest(".travelers-wrap") && els.travelerPanel) els.travelerPanel.hidden = true;
  if (!event.target.closest(".trip-options") && els.tripTypePanel) els.tripTypePanel.hidden = true;
});
[els.origin, els.dest, els.travelers, els.priceFilter, els.sortFilter, els.flexFilter].forEach((control) => {
  control?.addEventListener("input", updateResults);
  control?.addEventListener("change", updateResults);
});
els.resetFilters?.addEventListener("click", () => {
  if (els.priceFilter) els.priceFilter.value = "900";
  if (els.sortFilter) els.sortFilter.value = "smart";
  if (els.flexFilter) els.flexFilter.checked = true;
  updateResults();
});

wireSuggest(els.origin, els.originSuggest);
wireSuggest(els.dest, els.destSuggest);
applyCriteriaFromUrl();
renderCalendar();
updateResults();
