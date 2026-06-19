const airports = [
  { city: "Barcelona", code: "BCN", name: "Barcelona-El Prat", country: "España", nearby: [
    { city: "Barcelona", code: "BCN", name: "Barcelona-El Prat", country: "España" },
    { city: "Girona", code: "GRO", name: "Girona-Costa Brava", country: "España" },
    { city: "Reus", code: "REU", name: "Reus Airport", country: "España" },
  ] },
  { city: "Madrid", code: "MAD", name: "Adolfo Suárez Madrid-Barajas", country: "España", nearby: [
    { city: "Madrid", code: "MAD", name: "Adolfo Suárez Madrid-Barajas", country: "España" },
  ] },
  { city: "Málaga", code: "AGP", name: "Málaga-Costa del Sol", country: "España", nearby: [
    { city: "Málaga", code: "AGP", name: "Málaga-Costa del Sol", country: "España" },
    { city: "Granada", code: "GRX", name: "Federico García Lorca Granada-Jaén", country: "España" },
  ] },
  { city: "Valencia", code: "VLC", name: "Valencia Airport", country: "España", nearby: [
    { city: "Valencia", code: "VLC", name: "Valencia Airport", country: "España" },
    { city: "Alicante", code: "ALC", name: "Alicante-Elche", country: "España" },
  ] },
  { city: "París", code: "CDG", name: "Charles de Gaulle", country: "Francia", nearby: [
    { city: "París", code: "CDG", name: "Charles de Gaulle", country: "Francia" },
    { city: "París Orly", code: "ORY", name: "Paris-Orly", country: "Francia" },
    { city: "París Beauvais", code: "BVA", name: "Beauvais-Tille", country: "Francia" },
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

const airportCatalog = [
  ["A Coruña", "LCG", "A Coruña Airport", "España"],
  ["Alicante", "ALC", "Alicante-Elche Miguel Hernández", "España"],
  ["Almería", "LEI", "Almería Airport", "España"],
  ["Asturias", "OVD", "Asturias Airport", "España"],
  ["Bilbao", "BIO", "Bilbao Airport", "España"],
  ["Fuerteventura", "FUE", "Fuerteventura Airport", "España"],
  ["Gran Canaria", "LPA", "Gran Canaria Airport", "España"],
  ["Ibiza", "IBZ", "Ibiza Airport", "España"],
  ["Jerez", "XRY", "Jerez Airport", "España"],
  ["Lanzarote", "ACE", "César Manrique-Lanzarote", "España"],
  ["Mallorca", "PMI", "Palma de Mallorca", "España"],
  ["Menorca", "MAH", "Menorca Airport", "España"],
  ["Murcia", "RMU", "Región de Murcia International", "España"],
  ["Pamplona", "PNA", "Pamplona Airport", "España"],
  ["Santander", "SDR", "Seve Ballesteros-Santander", "España"],
  ["Santiago de Compostela", "SCQ", "Santiago-Rosalía de Castro", "España"],
  ["Sevilla", "SVQ", "Sevilla Airport", "España"],
  ["Tenerife Norte", "TFN", "Tenerife Norte-Ciudad de La Laguna", "España"],
  ["Tenerife Sur", "TFS", "Tenerife Sur", "España"],
  ["Vigo", "VGO", "Vigo Airport", "España"],
  ["Zaragoza", "ZAZ", "Zaragoza Airport", "España"],
  ["Lisboa", "LIS", "Humberto Delgado", "Portugal"],
  ["Oporto", "OPO", "Francisco Sá Carneiro", "Portugal"],
  ["Faro", "FAO", "Faro Airport", "Portugal"],
  ["Ámsterdam", "AMS", "Amsterdam Schiphol", "Países Bajos"],
  ["Atenas", "ATH", "Athens International", "Grecia"],
  ["Berlín", "BER", "Berlin Brandenburg", "Alemania"],
  ["Bruselas", "BRU", "Brussels Airport", "Bélgica"],
  ["Budapest", "BUD", "Budapest Ferenc Liszt", "Hungría"],
  ["Copenhague", "CPH", "Copenhagen Airport", "Dinamarca"],
  ["Dublín", "DUB", "Dublin Airport", "Irlanda"],
  ["Düsseldorf", "DUS", "Düsseldorf Airport", "Alemania"],
  ["Edimburgo", "EDI", "Edinburgh Airport", "Reino Unido"],
  ["Estocolmo", "ARN", "Stockholm Arlanda", "Suecia"],
  ["Frankfurt", "FRA", "Frankfurt Airport", "Alemania"],
  ["Ginebra", "GVA", "Geneva Airport", "Suiza"],
  ["Hamburgo", "HAM", "Hamburg Airport", "Alemania"],
  ["Helsinki", "HEL", "Helsinki-Vantaa", "Finlandia"],
  ["Lyon", "LYS", "Lyon-Saint Exupéry", "Francia"],
  ["Manchester", "MAN", "Manchester Airport", "Reino Unido"],
  ["Marsella", "MRS", "Marseille Provence", "Francia"],
  ["Milán Bergamo", "BGY", "Orio al Serio", "Italia"],
  ["Milán Linate", "LIN", "Milano Linate", "Italia"],
  ["Milán Malpensa", "MXP", "Milano Malpensa", "Italia"],
  ["Múnich", "MUC", "Munich Airport", "Alemania"],
  ["Nápoles", "NAP", "Naples International", "Italia"],
  ["Niza", "NCE", "Nice Côte d'Azur", "Francia"],
  ["Oslo", "OSL", "Oslo Gardermoen", "Noruega"],
  ["Praga", "PRG", "Václav Havel Prague", "República Checa"],
  ["Reikiavik", "KEF", "Keflavík International", "Islandia"],
  ["Varsovia", "WAW", "Warsaw Chopin", "Polonia"],
  ["Venecia", "VCE", "Venice Marco Polo", "Italia"],
  ["Viena", "VIE", "Vienna International", "Austria"],
  ["Zúrich", "ZRH", "Zurich Airport", "Suiza"],
  ["Casablanca", "CMN", "Mohammed V International", "Marruecos"],
  ["Marrakech", "RAK", "Marrakesh Menara", "Marruecos"],
  ["Agadir", "AGA", "Agadir Al Massira", "Marruecos"],
  ["Tánger", "TNG", "Tangier Ibn Battouta", "Marruecos"],
  ["Estambul", "IST", "Istanbul Airport", "Turquía"],
  ["Estambul Sabiha", "SAW", "Sabiha Gökçen", "Turquía"],
  ["Dubái", "DXB", "Dubai International", "Emiratos Árabes Unidos"],
  ["Doha", "DOH", "Hamad International", "Catar"],
  ["Abu Dabi", "AUH", "Zayed International", "Emiratos Árabes Unidos"],
  ["Tel Aviv", "TLV", "Ben Gurion", "Israel"],
  ["El Cairo", "CAI", "Cairo International", "Egipto"],
  ["Nueva York JFK", "JFK", "John F. Kennedy International", "Estados Unidos"],
  ["Nueva York Newark", "EWR", "Newark Liberty International", "Estados Unidos"],
  ["Nueva York LaGuardia", "LGA", "LaGuardia Airport", "Estados Unidos"],
  ["Miami", "MIA", "Miami International", "Estados Unidos"],
  ["Los Ángeles", "LAX", "Los Angeles International", "Estados Unidos"],
  ["San Francisco", "SFO", "San Francisco International", "Estados Unidos"],
  ["Chicago", "ORD", "O'Hare International", "Estados Unidos"],
  ["Boston", "BOS", "Logan International", "Estados Unidos"],
  ["Atlanta", "ATL", "Hartsfield-Jackson Atlanta", "Estados Unidos"],
  ["Dallas", "DFW", "Dallas Fort Worth International", "Estados Unidos"],
  ["Toronto", "YYZ", "Toronto Pearson", "Canadá"],
  ["Montreal", "YUL", "Montréal-Trudeau", "Canadá"],
  ["Vancouver", "YVR", "Vancouver International", "Canadá"],
  ["Ciudad de México", "MEX", "Benito Juárez International", "México"],
  ["Cancún", "CUN", "Cancún International", "México"],
  ["Buenos Aires", "EZE", "Ministro Pistarini Ezeiza", "Argentina"],
  ["São Paulo", "GRU", "São Paulo-Guarulhos", "Brasil"],
  ["Río de Janeiro", "GIG", "Rio de Janeiro-Galeão", "Brasil"],
  ["Bogotá", "BOG", "El Dorado", "Colombia"],
  ["Lima", "LIM", "Jorge Chávez", "Perú"],
  ["Santiago de Chile", "SCL", "Arturo Merino Benítez", "Chile"],
  ["Tokio Haneda", "HND", "Tokyo Haneda", "Japón"],
  ["Tokio Narita", "NRT", "Narita International", "Japón"],
  ["Seúl", "ICN", "Incheon International", "Corea del Sur"],
  ["Singapur", "SIN", "Singapore Changi", "Singapur"],
  ["Bangkok", "BKK", "Suvarnabhumi", "Tailandia"],
  ["Hong Kong", "HKG", "Hong Kong International", "Hong Kong"],
  ["Pekín", "PEK", "Beijing Capital", "China"],
  ["Shanghái", "PVG", "Shanghai Pudong", "China"],
  ["Sídney", "SYD", "Sydney Kingsford Smith", "Australia"],
  ["Melbourne", "MEL", "Melbourne Airport", "Australia"],
  ["Auckland", "AKL", "Auckland Airport", "Nueva Zelanda"],
  ["Badajoz", "BJZ", "Badajoz Airport", "España"],
  ["Castellón", "CDT", "Castellón-Costa Azahar", "España"],
  ["Girona", "GRO", "Girona-Costa Brava", "España"],
  ["Granada", "GRX", "Federico García Lorca Granada-Jaén", "España"],
  ["La Gomera", "GMZ", "La Gomera Airport", "España"],
  ["La Palma", "SPC", "La Palma Airport", "España"],
  ["León", "LEN", "León Airport", "España"],
  ["Logroño", "RJL", "Logroño-Agoncillo", "España"],
  ["Melilla", "MLN", "Melilla Airport", "España"],
  ["Reus", "REU", "Reus Airport", "España"],
  ["San Sebastián", "EAS", "San Sebastián Airport", "España"],
  ["Valladolid", "VLL", "Valladolid Airport", "España"],
  ["Vitoria", "VIT", "Vitoria Airport", "España"],
  ["El Hierro", "VDE", "El Hierro Airport", "España"],
  ["Basilea", "BSL", "EuroAirport Basel Mulhouse Freiburg", "Suiza"],
  ["Birmingham", "BHX", "Birmingham Airport", "Reino Unido"],
  ["Bolonia", "BLQ", "Bologna Guglielmo Marconi", "Italia"],
  ["Bristol", "BRS", "Bristol Airport", "Reino Unido"],
  ["Burdeos", "BOD", "Bordeaux-Mérignac", "Francia"],
  ["Catania", "CTA", "Catania-Fontanarossa", "Italia"],
  ["Colonia", "CGN", "Cologne Bonn Airport", "Alemania"],
  ["Cracovia", "KRK", "Kraków John Paul II", "Polonia"],
  ["Florencia", "FLR", "Florence Peretola", "Italia"],
  ["Glasgow", "GLA", "Glasgow Airport", "Reino Unido"],
  ["Gotemburgo", "GOT", "Göteborg Landvetter", "Suecia"],
  ["Hanóver", "HAJ", "Hannover Airport", "Alemania"],
  ["Innsbruck", "INN", "Innsbruck Airport", "Austria"],
  ["Leeds", "LBA", "Leeds Bradford", "Reino Unido"],
  ["Liverpool", "LPL", "Liverpool John Lennon", "Reino Unido"],
  ["Luxemburgo", "LUX", "Luxembourg Airport", "Luxemburgo"],
  ["Nantes", "NTE", "Nantes Atlantique", "Francia"],
  ["Palermo", "PMO", "Palermo Falcone Borsellino", "Italia"],
  ["Pisa", "PSA", "Pisa Galileo Galilei", "Italia"],
  ["Riga", "RIX", "Riga International", "Letonia"],
  ["Salzburgo", "SZG", "Salzburg Airport", "Austria"],
  ["Sofía", "SOF", "Sofia Airport", "Bulgaria"],
  ["Stuttgart", "STR", "Stuttgart Airport", "Alemania"],
  ["Tallin", "TLL", "Tallinn Airport", "Estonia"],
  ["Toulouse", "TLS", "Toulouse-Blagnac", "Francia"],
  ["Turín", "TRN", "Turin Airport", "Italia"],
  ["Vilna", "VNO", "Vilnius Airport", "Lituania"],
  ["Zagreb", "ZAG", "Zagreb Airport", "Croacia"],
  ["Amán", "AMM", "Queen Alia International", "Jordania"],
  ["Delhi", "DEL", "Indira Gandhi International", "India"],
  ["Mumbai", "BOM", "Chhatrapati Shivaji Maharaj", "India"],
  ["Kuala Lumpur", "KUL", "Kuala Lumpur International", "Malasia"],
  ["Yakarta", "CGK", "Soekarno-Hatta International", "Indonesia"],
  ["Manila", "MNL", "Ninoy Aquino International", "Filipinas"],
  ["Ho Chi Minh", "SGN", "Tan Son Nhat International", "Vietnam"],
  ["Hanoi", "HAN", "Noi Bai International", "Vietnam"],
  ["Johannesburgo", "JNB", "O. R. Tambo International", "Sudáfrica"],
  ["Ciudad del Cabo", "CPT", "Cape Town International", "Sudáfrica"],
  ["Nairobi", "NBO", "Jomo Kenyatta International", "Kenia"],
  ["Moscú Sheremetyevo", "SVO", "Sheremetyevo International", "Rusia"],
  ["Riad", "RUH", "King Khalid International", "Arabia Saudí"],
  ["Yeda", "JED", "King Abdulaziz International", "Arabia Saudí"],
  ["Washington Dulles", "IAD", "Washington Dulles International", "Estados Unidos"],
  ["Washington Reagan", "DCA", "Ronald Reagan Washington National", "Estados Unidos"],
  ["Seattle", "SEA", "Seattle-Tacoma International", "Estados Unidos"],
  ["Las Vegas", "LAS", "Harry Reid International", "Estados Unidos"],
  ["Orlando", "MCO", "Orlando International", "Estados Unidos"],
  ["Denver", "DEN", "Denver International", "Estados Unidos"],
  ["Houston", "IAH", "George Bush Intercontinental", "Estados Unidos"],
  ["Filadelfia", "PHL", "Philadelphia International", "Estados Unidos"],
  ["Minneapolis", "MSP", "Minneapolis-Saint Paul", "Estados Unidos"],
  ["Phoenix", "PHX", "Phoenix Sky Harbor", "Estados Unidos"],
  ["Charlotte", "CLT", "Charlotte Douglas International", "Estados Unidos"],
  ["San Diego", "SAN", "San Diego International", "Estados Unidos"],
  ["Dublín", "DUB", "Dublin Airport", "Irlanda"],
  ["Panamá", "PTY", "Tocumen International", "Panamá"],
  ["Punta Cana", "PUJ", "Punta Cana International", "República Dominicana"],
  ["San José Costa Rica", "SJO", "Juan Santamaría International", "Costa Rica"],
  ["Quito", "UIO", "Mariscal Sucre International", "Ecuador"],
  ["Guayaquil", "GYE", "José Joaquín de Olmedo", "Ecuador"],
  ["Montevideo", "MVD", "Carrasco International", "Uruguay"],
  ["Asunción", "ASU", "Silvio Pettirossi International", "Paraguay"],
  ["La Paz", "LPB", "El Alto International", "Bolivia"],
  ["Medellín", "MDE", "José María Córdova", "Colombia"],
  ["Cartagena", "CTG", "Rafael Núñez International", "Colombia"],
];

airportCatalog.forEach(([city, code, name, country]) => {
  if (!airports.some((airport) => airport.code === code)) {
    airports.push({ city, code, name, country, nearby: [{ city, code, name, country }] });
  }
});

const hotelPlaces = [
  { title: "Madrid", detail: "Comunidad de Madrid, España", type: "ciudad", icon: "H" },
  { title: "Hotel Riu Plaza España", detail: "Madrid, España", type: "hotel", icon: "H" },
  { title: "Centro Madrid", detail: "Madrid, España", type: "zona", icon: "Z" },
  { title: "París", detail: "Isla de Francia, Francia", type: "ciudad", icon: "H" },
  { title: "Centro París", detail: "París, Francia", type: "zona", icon: "Z" },
  { title: "Pullman Paris Tour Eiffel", detail: "París, Francia", type: "hotel", icon: "H" },
  { title: "Barcelona", detail: "Cataluña, España", type: "ciudad", icon: "H" },
  { title: "Hotel Arts Barcelona", detail: "Barcelona, España", type: "hotel", icon: "H" },
  { title: "Centro Barcelona", detail: "Barcelona, España", type: "zona", icon: "Z" },
  { title: "Eixample", detail: "Barcelona, España", type: "zona", icon: "Z" },
  { title: "Barceló Sants", detail: "Barcelona, España", type: "hotel", icon: "H" },
  { title: "Málaga", detail: "Andalucía, España", type: "ciudad", icon: "H" },
  { title: "Centro Málaga", detail: "Málaga, España", type: "zona", icon: "Z" },
  { title: "Gran Hotel Miramar", detail: "Málaga, España", type: "hotel", icon: "H" },
  { title: "Sevilla", detail: "Andalucía, España", type: "ciudad", icon: "H" },
  { title: "Santa Cruz", detail: "Sevilla, España", type: "zona", icon: "Z" },
  { title: "Hotel Alfonso XIII", detail: "Sevilla, España", type: "hotel", icon: "H" },
  { title: "Valencia", detail: "Comunidad Valenciana, España", type: "ciudad", icon: "H" },
  { title: "Ciutat Vella", detail: "Valencia, España", type: "zona", icon: "Z" },
  { title: "Only YOU Hotel Valencia", detail: "Valencia, España", type: "hotel", icon: "H" },
  { title: "Palma de Mallorca", detail: "Islas Baleares, España", type: "ciudad", icon: "H" },
  { title: "Playa de Palma", detail: "Mallorca, España", type: "zona", icon: "Z" },
  { title: "Nixe Palace", detail: "Mallorca, España", type: "hotel", icon: "H" },
  { title: "Tenerife", detail: "Canarias, España", type: "isla", icon: "Z" },
  { title: "Costa Adeje", detail: "Tenerife, España", type: "zona", icon: "Z" },
  { title: "Iberostar Selection Anthelia", detail: "Tenerife, España", type: "hotel", icon: "H" },
  { title: "Lisboa", detail: "Lisboa, Portugal", type: "ciudad", icon: "H" },
  { title: "Baixa", detail: "Lisboa, Portugal", type: "zona", icon: "Z" },
  { title: "Hotel Avenida Palace", detail: "Lisboa, Portugal", type: "hotel", icon: "H" },
  { title: "Londres", detail: "Inglaterra, Reino Unido", type: "ciudad", icon: "H" },
  { title: "Westminster", detail: "Londres, Reino Unido", type: "zona", icon: "Z" },
  { title: "The Tower Hotel", detail: "Londres, Reino Unido", type: "hotel", icon: "H" },
  { title: "Roma", detail: "Lacio, Italia", type: "ciudad", icon: "H" },
  { title: "Centro Histórico", detail: "Roma, Italia", type: "zona", icon: "Z" },
  { title: "Hotel Artemide", detail: "Roma, Italia", type: "hotel", icon: "H" },
  { title: "Nueva York", detail: "Nueva York, Estados Unidos", type: "ciudad", icon: "H" },
  { title: "Manhattan", detail: "Nueva York, Estados Unidos", type: "zona", icon: "Z" },
  { title: "Arlo Midtown", detail: "Nueva York, Estados Unidos", type: "hotel", icon: "H" },
  { title: "Dubái", detail: "Emiratos Árabes Unidos", type: "ciudad", icon: "H" },
  { title: "Downtown Dubai", detail: "Dubái, Emiratos Árabes Unidos", type: "zona", icon: "Z" },
  { title: "Atlantis The Palm", detail: "Dubái, Emiratos Árabes Unidos", type: "hotel", icon: "H" },
];

const carPlaces = [
  { title: "Madrid Aeropuerto T4", detail: "Madrid-Barajas, España", type: "aeropuerto", icon: "C" },
  { title: "Madrid Atocha", detail: "Estación de tren, Madrid", type: "estación", icon: "C" },
  { title: "Madrid Centro", detail: "Oficinas de alquiler en Madrid", type: "ciudad", icon: "C" },
  { title: "Europcar Madrid", detail: "Agencia de alquiler de coches", type: "agencia", icon: "C" },
  { title: "Hertz Madrid", detail: "Agencia de alquiler de coches", type: "agencia", icon: "C" },
  { title: "Sixt Madrid", detail: "Agencia de alquiler de coches", type: "agencia", icon: "C" },
  { title: "Avis Madrid", detail: "Agencia de alquiler de coches", type: "agencia", icon: "C" },
  { title: "Enterprise Madrid", detail: "Agencia de alquiler de coches", type: "agencia", icon: "C" },
  { title: "Barcelona Aeropuerto", detail: "El Prat, España", type: "aeropuerto", icon: "C" },
  { title: "Barcelona Sants", detail: "Estación de tren, Barcelona", type: "estación", icon: "C" },
  { title: "Barcelona Centro", detail: "Oficinas de alquiler en Barcelona", type: "ciudad", icon: "C" },
  { title: "Europcar Barcelona", detail: "Agencia de alquiler de coches", type: "agencia", icon: "C" },
  { title: "Hertz Barcelona", detail: "Agencia de alquiler de coches", type: "agencia", icon: "C" },
  { title: "Sixt Barcelona", detail: "Agencia de alquiler de coches", type: "agencia", icon: "C" },
  { title: "Málaga Aeropuerto", detail: "Costa del Sol, España", type: "aeropuerto", icon: "C" },
  { title: "Málaga María Zambrano", detail: "Estación de tren, Málaga", type: "estación", icon: "C" },
  { title: "Valencia Aeropuerto", detail: "Valencia, España", type: "aeropuerto", icon: "C" },
  { title: "Valencia Joaquín Sorolla", detail: "Estación de tren, Valencia", type: "estación", icon: "C" },
  { title: "Sevilla Aeropuerto", detail: "Sevilla, España", type: "aeropuerto", icon: "C" },
  { title: "Sevilla Santa Justa", detail: "Estación de tren, Sevilla", type: "estación", icon: "C" },
  { title: "Alicante Aeropuerto", detail: "Alicante-Elche, España", type: "aeropuerto", icon: "C" },
  { title: "Palma Aeropuerto", detail: "Mallorca, España", type: "aeropuerto", icon: "C" },
  { title: "Tenerife Sur Aeropuerto", detail: "Tenerife, España", type: "aeropuerto", icon: "C" },
  { title: "Lisboa Aeropuerto", detail: "Humberto Delgado, Portugal", type: "aeropuerto", icon: "C" },
  { title: "Oporto Aeropuerto", detail: "Francisco Sá Carneiro, Portugal", type: "aeropuerto", icon: "C" },
  { title: "París Charles de Gaulle", detail: "Oficinas de alquiler en CDG", type: "aeropuerto", icon: "C" },
  { title: "París Orly", detail: "Oficinas de alquiler en ORY", type: "aeropuerto", icon: "C" },
  { title: "Londres Heathrow", detail: "Oficinas de alquiler en LHR", type: "aeropuerto", icon: "C" },
  { title: "Roma Fiumicino", detail: "Oficinas de alquiler en FCO", type: "aeropuerto", icon: "C" },
];

[
  { title: "Gran Canaria Aeropuerto", detail: "Las Palmas, Canarias, España", type: "aeropuerto" },
  { title: "Tenerife Sur Aeropuerto", detail: "Costa Adeje y sur de Tenerife, Canarias, España", type: "aeropuerto" },
  { title: "Tenerife Norte Aeropuerto", detail: "La Laguna y Santa Cruz de Tenerife, Canarias, España", type: "aeropuerto" },
  { title: "Lanzarote Aeropuerto", detail: "Arrecife, Canarias, España", type: "aeropuerto" },
  { title: "Fuerteventura Aeropuerto", detail: "Puerto del Rosario, Canarias, España", type: "aeropuerto" },
  { title: "Ibiza Aeropuerto", detail: "Ibiza, Islas Baleares, España", type: "aeropuerto" },
  { title: "Menorca Aeropuerto", detail: "Mahón, Islas Baleares, España", type: "aeropuerto" },
  { title: "Bilbao Aeropuerto", detail: "Loiu, País Vasco, España", type: "aeropuerto" },
  { title: "Santiago Aeropuerto", detail: "Santiago de Compostela, Galicia, España", type: "aeropuerto" },
  { title: "A Coruña Estación", detail: "Estación de tren, Galicia, España", type: "estación" },
  { title: "Bilbao Abando", detail: "Estación de tren, Bilbao, España", type: "estación" },
  { title: "Zaragoza Delicias", detail: "Estación de tren, Zaragoza, España", type: "estación" },
  { title: "Europcar Málaga", detail: "Agencia de alquiler de coches", type: "agencia" },
  { title: "Avis Sevilla", detail: "Agencia de alquiler de coches", type: "agencia" },
  { title: "Enterprise Valencia", detail: "Agencia de alquiler de coches", type: "agencia" },
  { title: "OK Mobility Palma", detail: "Agencia de alquiler de coches", type: "agencia" },
  { title: "Record Go Alicante", detail: "Agencia de alquiler de coches", type: "agencia" },
  { title: "Goldcar Tenerife", detail: "Agencia de alquiler de coches", type: "agencia" },
  { title: "Centauro Alicante", detail: "Agencia de alquiler de coches", type: "agencia" },
  { title: "Alamo Madrid", detail: "Agencia de alquiler de coches", type: "agencia" },
  { title: "Oficina Madrid Centro", detail: "Alquiler de coches en zona centro", type: "oficina" },
  { title: "Oficina Barcelona Centro", detail: "Alquiler de coches en zona centro", type: "oficina" },
  { title: "Oficina Málaga Centro", detail: "Alquiler de coches en zona centro", type: "oficina" },
  { title: "Oficina Valencia Centro", detail: "Alquiler de coches en zona centro", type: "oficina" },
].forEach((place) => {
  if (!carPlaces.some((item) => normalize(item.title) === normalize(place.title))) carPlaces.push({ icon: "C", ...place });
});

[
  { title: "Gran Canaria", detail: "Canarias, España", type: "ciudad" },
  { title: "Las Palmas de Gran Canaria", detail: "Canarias, España", type: "ciudad" },
  { title: "Santa Cruz de Tenerife", detail: "Tenerife, Canarias, España", type: "ciudad" },
  { title: "Lanzarote", detail: "Canarias, España", type: "isla" },
  { title: "Fuerteventura", detail: "Canarias, España", type: "isla" },
  { title: "Ibiza", detail: "Islas Baleares, España", type: "isla" },
  { title: "Menorca", detail: "Islas Baleares, España", type: "isla" },
  { title: "Alicante", detail: "Comunidad Valenciana, España", type: "ciudad" },
  { title: "Bilbao", detail: "País Vasco, España", type: "ciudad" },
  { title: "Granada", detail: "Andalucía, España", type: "ciudad" },
  { title: "Córdoba", detail: "Andalucía, España", type: "ciudad" },
  { title: "Cádiz", detail: "Andalucía, España", type: "ciudad" },
  { title: "Oporto", detail: "Norte, Portugal", type: "ciudad" },
  { title: "Ámsterdam", detail: "Países Bajos", type: "ciudad" },
  { title: "Berlín", detail: "Alemania", type: "ciudad" },
  { title: "Múnich", detail: "Alemania", type: "ciudad" },
  { title: "Milán", detail: "Lombardía, Italia", type: "ciudad" },
  { title: "Venecia", detail: "Véneto, Italia", type: "ciudad" },
  { title: "Nueva York", detail: "Estados Unidos", type: "ciudad" },
  { title: "Miami", detail: "Florida, Estados Unidos", type: "ciudad" },
  { title: "Cancún", detail: "Quintana Roo, México", type: "ciudad" },
  { title: "Santiago de Chile", detail: "Región Metropolitana, Chile", type: "ciudad" },
  { title: "Centro Las Palmas", detail: "Gran Canaria, España", type: "zona" },
  { title: "Maspalomas", detail: "Gran Canaria, España", type: "zona" },
  { title: "Santa Cruz de Tenerife Centro", detail: "Tenerife, España", type: "zona" },
  { title: "Playa de las Américas", detail: "Tenerife, España", type: "zona" },
  { title: "Puerto del Carmen", detail: "Lanzarote, España", type: "zona" },
  { title: "Corralejo", detail: "Fuerteventura, España", type: "zona" },
  { title: "Centro Alicante", detail: "Alicante, España", type: "zona" },
  { title: "Casco Viejo", detail: "Bilbao, España", type: "zona" },
  { title: "NH Collection Madrid Suecia", detail: "Madrid, España", type: "hotel" },
  { title: "H10 Madison", detail: "Barcelona, España", type: "hotel" },
  { title: "Lopesan Costa Meloneras", detail: "Gran Canaria, España", type: "hotel" },
  { title: "Hard Rock Hotel Tenerife", detail: "Tenerife, España", type: "hotel" },
  { title: "Meliá Alicante", detail: "Alicante, España", type: "hotel" },
  { title: "Hotel Carlton Bilbao", detail: "Bilbao, España", type: "hotel" },
  { title: "Pestana CR7 Gran Vía", detail: "Madrid, España", type: "hotel" },
  { title: "W Barcelona", detail: "Barcelona, España", type: "hotel" },
  { title: "Hotel Regina Louvre", detail: "París, Francia", type: "hotel" },
].forEach((place) => {
  if (!hotelPlaces.some((item) => normalize(item.title) === normalize(place.title))) hotelPlaces.push({ icon: place.type === "hotel" ? "H" : "Z", ...place });
});

const translations = {
  es: {
    flights: "Vuelos", hotels: "Hoteles", cars: "Coches", deals: "Ofertas", guides: "Guías", help: "Ayuda", search: "Buscar ofertas", update: "Actualizar",
    origin: "Origen", destination: "Destino", airport: "Aeropuerto", dates: "Fechas", travelers: "Viajeros", roundtrip: "Ida y vuelta", oneway: "Solo ida", multi: "Múltiples destinos", direct: "Directo", directFlights: "Vuelos directos",
    hotelDestination: "Destino o nombre de hotel", entryExit: "Entrada - salida", pickup: "Recogida", returnOffice: "Devolución", pickupReturn: "Recogida - devolución", package: "Vuelo + hotel",
    selectDates: "Selecciona fechas", firstOutbound: "Primero elige la ida", chooseReturn: "Ahora elige la vuelta", chooseEntry: "Elige la entrada", chooseExit: "Ahora elige la salida", choosePickup: "Elige la recogida", chooseCarReturn: "Ahora elige la devolución",
    cheap: "barato", mid: "medio", high: "alto", flexibleMonth: "Mes flexible", clear: "Limpiar", applyDates: "Aplicar fechas",
    passengers: "Pasajeros", peopleRooms: "Personas y habitaciones", driverExtras: "Conductor y extras", travelersRooms: "Viajeros y habitaciones", adults: "Adultos", children: "Niños", rooms: "Habitaciones", drivers: "Conductores", cabin: "Clase", economy: "Turista", business: "Business", first: "Primera",
    pets: "Mascotas", petsSub: "Buscar alojamientos que acepten mascotas", babySeats: "Asientos para bebés", options: "Opciones",
    adultsSub: "18 años o más", childrenSub: "0 - 17 años", roomsSub: "Número de habitaciones", driversSub: "Personas que conducirán el coche",
    sameOffice: "Misma oficina", otherOffice: "Otra oficina", pickupTime: "Hora recogida", returnTime: "Hora devolución", driverAge: "Conductor entre 25 y 70 años", youngDriver: "Conductor menor de 25 años", driverAgeSelect: "Edad del conductor", differentOffice: "Devolver en otra oficina",
    cheapOptions: "Opciones más baratas ahora", bestHotels: "Hoteles con mejor precio", cheapCars: "Coches más económicos", packageDeals: "Paquetes con ahorro", sortedEstimated: "Ordenadas por precio estimado",
    bestPrice: "Mejor precio", center: "Centro", topRated: "Muy valorado", breakfast: "Desayuno disponible", includedKm: "Kilometraje incluido", largeBoot: "Maletero amplio", fastPickup: "Recogida rápida", lowPrice: "Precio bajo", goodTime: "Buen horario", clearPrice: "Precio claro",
    recommendedFlights: "Vuelos recomendados", recommendedHotels: "Hoteles recomendados", recommendedCars: "Coches recomendados", recommendedPackages: "Paquetes vuelo + hotel", estimatedPrice: "precio estimado", viewDeal: "Ver oferta", noResults: "No hay resultados con estos filtros", noResultsText: "Sube el precio máximo o cambia destino y fechas.",
    filters: "Filtros", maxPrice: "Precio máximo", sortBy: "Ordenar por", bestOption: "Mejor opción", price: "Precio", duration: "Duración", newSearch: "Nueva búsqueda", results: "Resultados",
    privacy: "Privacidad", cookies: "Cookies", affiliates: "Afiliados", terms: "Términos", searchTrips: "Buscar viajes", configure: "Configurar", accept: "Aceptar", prevMonth: "Mes anterior", nextMonth: "Mes siguiente",
    cookieTitle: "Privacidad y cookies", cookieText: "Usamos cookies técnicas y medición básica para mejorar Flyvero. Los enlaces de reserva pueden ser de afiliado.",
    affiliateNote: "Flyvero puede recibir una comisión si reservas desde un enlace de proveedor. Los precios son orientativos y se confirman antes de reservar.",
    footerDisclosure: "Flyvero compara opciones de viaje y puede recibir comisión si reservas desde enlaces de proveedores. Los precios son orientativos hasta confirmar disponibilidad en la web final del proveedor.",
    legalEyebrow: "Flyvero legal", privacyTitle: "Política de privacidad", privacyIntro: "Flyvero es un comparador de viajes en fase de presentación comercial. Recogemos únicamente la información necesaria para operar la búsqueda, mejorar la experiencia y medir clics de afiliación.", dataTitle: "Datos que podemos tratar", dataText: "Destino, origen, fechas, tipo de producto, idioma, moneda, preferencias de búsqueda y eventos anónimos de clic. No solicitamos datos de pago ni documentación personal dentro de Flyvero.", purposeTitle: "Finalidad", purposeText: "Usamos estos datos para mostrar resultados, recordar preferencias, medir rendimiento de enlaces y preparar integraciones con proveedores de viajes.", providersTitle: "Proveedores externos", providersText: "Cuando el usuario pulsa una oferta, la reserva se completa en la web del proveedor. Ese proveedor aplicará sus propias condiciones y política de privacidad.", rightsTitle: "Derechos", rightsText: "El usuario puede solicitar acceso, rectificación o eliminación de sus datos cuando Flyvero active su canal de contacto definitivo.",
    cookiesTitle: "Política de cookies", cookiesIntro: "Flyvero utiliza almacenamiento local y cookies técnicas para recordar idioma, consentimiento y preferencias de búsqueda.", technicalCookiesTitle: "Cookies técnicas", technicalCookiesText: "Son necesarias para mantener la experiencia de usuario, recordar filtros y conservar el consentimiento de cookies.", measurementTitle: "Medición", measurementText: "Podemos medir clics en ofertas para saber qué búsquedas funcionan mejor. Esta medición no incluye datos de pago ni datos sensibles.", affiliationTitle: "Afiliación", affiliationText: "Los enlaces hacia proveedores pueden incluir identificadores de afiliado para atribuir reservas o clics a Flyvero.",
    affiliateTitle: "Aviso de afiliados", affiliateIntro: "Flyvero puede recibir una comisión cuando el usuario reserva o pulsa una oferta desde nuestros enlaces. Esto no debería aumentar el precio final del usuario.", pricesTitle: "Precios", pricesText: "Los precios mostrados son orientativos y deben confirmarse en la web del proveedor antes de reservar.", independenceTitle: "Independencia", independenceText: "Ordenamos resultados por criterios de precio estimado, disponibilidad, comodidad y filtros seleccionados. La integración comercial final puede añadir proveedores concretos.", bookingsTitle: "Reservas", bookingsText: "Flyvero no emite billetes ni reservas. La compra se completa en el proveedor correspondiente.",
    termsTitle: "Términos de uso", termsIntro: "Flyvero es un comparador de viajes. La información se ofrece para ayudar al usuario a decidir, pero la disponibilidad, precio final y condiciones dependen del proveedor.", serviceUseTitle: "Uso del servicio", serviceUseText: "El usuario debe revisar fechas, pasajeros, equipaje, condiciones de cancelación, seguros y requisitos del proveedor antes de completar una reserva.", responsibilityTitle: "Responsabilidad", responsibilityText: "Flyvero no será responsable de cambios de precio, disponibilidad, políticas del proveedor o incidencias externas a la plataforma.", contentTitle: "Contenido", contentText: "Las guías y recomendaciones tienen carácter informativo y pueden actualizarse según datos comerciales, SEO y disponibilidad.",
  },
  en: {
    flights: "Flights", hotels: "Hotels", cars: "Cars", deals: "Deals", guides: "Guides", help: "Help", search: "Search deals", update: "Update",
    origin: "Origin", destination: "Destination", airport: "Airport", dates: "Dates", travelers: "Travelers", roundtrip: "Round trip", oneway: "One way", multi: "Multi-city", direct: "Direct", directFlights: "Direct flights",
    hotelDestination: "Destination or hotel name", entryExit: "Check-in - check-out", pickup: "Pick-up", returnOffice: "Return", pickupReturn: "Pick-up - return", package: "Flight + hotel",
    selectDates: "Select dates", firstOutbound: "Choose outbound first", chooseReturn: "Now choose return", chooseEntry: "Choose check-in", chooseExit: "Now choose check-out", choosePickup: "Choose pick-up", chooseCarReturn: "Now choose return",
    cheap: "cheap", mid: "medium", high: "high", flexibleMonth: "Flexible month", clear: "Clear", applyDates: "Apply dates",
    passengers: "Passengers", peopleRooms: "People and rooms", driverExtras: "Driver and extras", travelersRooms: "Travelers and rooms", adults: "Adults", children: "Children", rooms: "Rooms", drivers: "Drivers", cabin: "Cabin", economy: "Economy", business: "Business", first: "First",
    pets: "Pets", petsSub: "Search pet-friendly stays", babySeats: "Baby seats", options: "Options",
    adultsSub: "18 years or older", childrenSub: "0 - 17 years", roomsSub: "Number of rooms", driversSub: "People who will drive",
    sameOffice: "Same office", otherOffice: "Different office", pickupTime: "Pick-up time", returnTime: "Return time", driverAge: "Driver aged 25 to 70", youngDriver: "Driver under 25", driverAgeSelect: "Driver age", differentOffice: "Return to another office",
    cheapOptions: "Cheapest options now", bestHotels: "Best-price hotels", cheapCars: "Cheapest cars", packageDeals: "Package savings", sortedEstimated: "Sorted by estimated price",
    bestPrice: "Best price", center: "Central", topRated: "Highly rated", breakfast: "Breakfast available", includedKm: "Mileage included", largeBoot: "Large boot", fastPickup: "Fast pick-up", lowPrice: "Low price", goodTime: "Good schedule", clearPrice: "Clear price",
    recommendedFlights: "Recommended flights", recommendedHotels: "Recommended hotels", recommendedCars: "Recommended cars", recommendedPackages: "Flight + hotel packages", estimatedPrice: "estimated price", viewDeal: "View deal", noResults: "No results with these filters", noResultsText: "Raise the maximum price or change destination and dates.",
    filters: "Filters", maxPrice: "Maximum price", sortBy: "Sort by", bestOption: "Best option", price: "Price", duration: "Duration", newSearch: "New search", results: "Results",
    privacy: "Privacy", cookies: "Cookies", affiliates: "Affiliates", terms: "Terms", searchTrips: "Search trips", configure: "Configure", accept: "Accept", prevMonth: "Previous month", nextMonth: "Next month",
    cookieTitle: "Privacy and cookies", cookieText: "We use technical cookies and basic measurement to improve Flyvero. Booking links may be affiliate links.",
    affiliateNote: "Flyvero may receive a commission if you book through a provider link. Prices are indicative and confirmed before booking.",
    footerDisclosure: "Flyvero compares travel options and may receive a commission if you book through provider links. Prices are indicative until availability is confirmed on the provider website.",
    legalEyebrow: "Flyvero legal", privacyTitle: "Privacy policy", privacyIntro: "Flyvero is a travel comparison MVP for commercial presentation. We collect only the information needed to run searches, improve the experience and measure affiliate clicks.", dataTitle: "Data we may process", dataText: "Destination, origin, dates, product type, language, currency, search preferences and anonymous click events. We do not request payment data or personal documents inside Flyvero.", purposeTitle: "Purpose", purposeText: "We use this data to show results, remember preferences, measure link performance and prepare provider integrations.", providersTitle: "External providers", providersText: "When a user clicks an offer, the booking is completed on the provider website. That provider applies its own terms and privacy policy.", rightsTitle: "Rights", rightsText: "Users may request access, correction or deletion of their data once Flyvero activates its final contact channel.",
    cookiesTitle: "Cookie policy", cookiesIntro: "Flyvero uses local storage and technical cookies to remember language, consent and search preferences.", technicalCookiesTitle: "Technical cookies", technicalCookiesText: "They are needed to keep the experience working, remember filters and store cookie consent.", measurementTitle: "Measurement", measurementText: "We may measure offer clicks to understand which searches perform best. This does not include payment or sensitive data.", affiliationTitle: "Affiliation", affiliationText: "Provider links may include affiliate identifiers to attribute bookings or clicks to Flyvero.",
    affiliateTitle: "Affiliate disclosure", affiliateIntro: "Flyvero may receive a commission when a user books or clicks an offer through our links. This should not increase the final user price.", pricesTitle: "Prices", pricesText: "Displayed prices are indicative and must be confirmed on the provider website before booking.", independenceTitle: "Independence", independenceText: "We sort results by estimated price, availability, convenience and selected filters. Final commercial integrations may add specific providers.", bookingsTitle: "Bookings", bookingsText: "Flyvero does not issue tickets or reservations. Purchases are completed with the corresponding provider.",
    termsTitle: "Terms of use", termsIntro: "Flyvero is a travel comparison service. Information is provided to help users decide, but availability, final price and conditions depend on the provider.", serviceUseTitle: "Service use", serviceUseText: "Users should review dates, passengers, baggage, cancellation terms, insurance and provider requirements before completing a booking.", responsibilityTitle: "Liability", responsibilityText: "Flyvero is not responsible for price changes, availability, provider policies or incidents outside the platform.", contentTitle: "Content", contentText: "Guides and recommendations are informational and may be updated according to commercial data, SEO and availability.",
  },
  fr: {
    flights: "Vols", hotels: "Hôtels", cars: "Voitures", deals: "Offres", guides: "Guides", help: "Aide", search: "Chercher des offres", update: "Mettre à jour",
    origin: "Origine", destination: "Destination", airport: "Aéroport", dates: "Dates", travelers: "Voyageurs", roundtrip: "Aller-retour", oneway: "Aller simple", multi: "Multi-destinations", direct: "Direct", directFlights: "Vols directs",
    hotelDestination: "Destination ou nom de l'hôtel", entryExit: "Arrivée - départ", pickup: "Prise en charge", returnOffice: "Retour", pickupReturn: "Prise en charge - retour", package: "Vol + hôtel",
    selectDates: "Sélectionner les dates", firstOutbound: "Choisissez d'abord l'aller", chooseReturn: "Choisissez maintenant le retour", chooseEntry: "Choisissez l'arrivée", chooseExit: "Choisissez maintenant le départ", choosePickup: "Choisissez la prise en charge", chooseCarReturn: "Choisissez maintenant le retour",
    cheap: "bas", mid: "moyen", high: "élevé", flexibleMonth: "Mois flexible", clear: "Effacer", applyDates: "Appliquer",
    passengers: "Passagers", peopleRooms: "Personnes et chambres", driverExtras: "Conducteur et options", travelersRooms: "Voyageurs et chambres", adults: "Adultes", children: "Enfants", rooms: "Chambres", drivers: "Conducteurs", cabin: "Classe", economy: "Économie", business: "Affaires", first: "Première",
    pets: "Animaux", petsSub: "Chercher des hébergements acceptant les animaux", babySeats: "Sièges bébé", options: "Options",
    adultsSub: "18 ans ou plus", childrenSub: "0 - 17 ans", roomsSub: "Nombre de chambres", driversSub: "Personnes qui conduiront",
    sameOffice: "Même agence", otherOffice: "Autre agence", pickupTime: "Heure de prise en charge", returnTime: "Heure de retour", driverAge: "Conducteur entre 25 et 70 ans", youngDriver: "Conducteur de moins de 25 ans", driverAgeSelect: "Âge du conducteur", differentOffice: "Retourner dans une autre agence",
    cheapOptions: "Options les moins chères", bestHotels: "Hôtels au meilleur prix", cheapCars: "Voitures les moins chères", packageDeals: "Économies forfait", sortedEstimated: "Triées par prix estimé",
    bestPrice: "Meilleur prix", center: "Centre", topRated: "Très bien noté", breakfast: "Petit-déjeuner disponible", includedKm: "Kilométrage inclus", largeBoot: "Grand coffre", fastPickup: "Prise en charge rapide", lowPrice: "Prix bas", goodTime: "Bon horaire", clearPrice: "Prix clair",
    recommendedFlights: "Vols recommandés", recommendedHotels: "Hôtels recommandés", recommendedCars: "Voitures recommandées", recommendedPackages: "Forfaits vol + hôtel", estimatedPrice: "prix estimé", viewDeal: "Voir l'offre", noResults: "Aucun résultat avec ces filtres", noResultsText: "Augmentez le prix maximum ou changez la destination et les dates.",
    filters: "Filtres", maxPrice: "Prix maximum", sortBy: "Trier par", bestOption: "Meilleure option", price: "Prix", duration: "Durée", newSearch: "Nouvelle recherche", results: "Résultats",
    privacy: "Confidentialité", cookies: "Cookies", affiliates: "Affiliation", terms: "Conditions", searchTrips: "Chercher un voyage", configure: "Configurer", accept: "Accepter", prevMonth: "Mois précédent", nextMonth: "Mois suivant",
    cookieTitle: "Confidentialité et cookies", cookieText: "Nous utilisons des cookies techniques et une mesure de base pour améliorer Flyvero. Les liens de réservation peuvent être affiliés.",
    affiliateNote: "Flyvero peut recevoir une commission si vous réservez via un lien fournisseur. Les prix sont indicatifs et confirmés avant la réservation.",
    footerDisclosure: "Flyvero compare des options de voyage et peut recevoir une commission si vous réservez via des liens fournisseurs. Les prix sont indicatifs jusqu'à confirmation sur le site du fournisseur.",
    legalEyebrow: "Mentions légales Flyvero", privacyTitle: "Politique de confidentialité", privacyIntro: "Flyvero est un comparateur de voyages MVP pour présentation commerciale. Nous collectons uniquement les informations nécessaires à la recherche, à l'amélioration de l'expérience et à la mesure des clics affiliés.", dataTitle: "Données traitées", dataText: "Destination, origine, dates, type de produit, langue, devise, préférences de recherche et clics anonymes. Nous ne demandons pas de paiement ni de documents personnels dans Flyvero.", purposeTitle: "Finalité", purposeText: "Nous utilisons ces données pour afficher les résultats, mémoriser les préférences, mesurer les liens et préparer les intégrations fournisseurs.", providersTitle: "Fournisseurs externes", providersText: "Lorsqu'un utilisateur clique sur une offre, la réservation se termine sur le site du fournisseur, avec ses propres conditions et politique de confidentialité.", rightsTitle: "Droits", rightsText: "L'utilisateur pourra demander l'accès, la rectification ou la suppression de ses données lorsque Flyvero activera son canal de contact final.",
    cookiesTitle: "Politique de cookies", cookiesIntro: "Flyvero utilise le stockage local et des cookies techniques pour mémoriser la langue, le consentement et les préférences de recherche.", technicalCookiesTitle: "Cookies techniques", technicalCookiesText: "Ils sont nécessaires pour maintenir l'expérience, mémoriser les filtres et conserver le consentement.", measurementTitle: "Mesure", measurementText: "Nous pouvons mesurer les clics sur les offres afin de comprendre les recherches les plus performantes. Cela n'inclut pas de données de paiement ou sensibles.", affiliationTitle: "Affiliation", affiliationText: "Les liens fournisseurs peuvent inclure des identifiants affiliés pour attribuer réservations ou clics à Flyvero.",
    affiliateTitle: "Avis d'affiliation", affiliateIntro: "Flyvero peut recevoir une commission lorsqu'un utilisateur réserve ou clique sur une offre via nos liens. Cela ne devrait pas augmenter le prix final.", pricesTitle: "Prix", pricesText: "Les prix affichés sont indicatifs et doivent être confirmés sur le site du fournisseur avant réservation.", independenceTitle: "Indépendance", independenceText: "Nous trions les résultats selon prix estimé, disponibilité, confort et filtres sélectionnés. L'intégration commerciale finale peut ajouter des fournisseurs précis.", bookingsTitle: "Réservations", bookingsText: "Flyvero n'émet pas de billets ni de réservations. L'achat se termine auprès du fournisseur correspondant.",
    termsTitle: "Conditions d'utilisation", termsIntro: "Flyvero est un comparateur de voyages. Les informations aident l'utilisateur à décider, mais disponibilité, prix final et conditions dépendent du fournisseur.", serviceUseTitle: "Utilisation du service", serviceUseText: "L'utilisateur doit vérifier dates, passagers, bagages, annulation, assurances et exigences du fournisseur avant de réserver.", responsibilityTitle: "Responsabilité", responsibilityText: "Flyvero n'est pas responsable des changements de prix, disponibilité, politiques fournisseur ou incidents externes à la plateforme.", contentTitle: "Contenu", contentText: "Les guides et recommandations sont informatifs et peuvent être mis à jour selon les données commerciales, le SEO et la disponibilité.",
  },
  de: {
    flights: "Flüge", hotels: "Hotels", cars: "Autos", deals: "Angebote", guides: "Reiseführer", help: "Hilfe", search: "Angebote suchen", update: "Aktualisieren",
    origin: "Abflugort", destination: "Ziel", airport: "Flughafen", dates: "Daten", travelers: "Reisende", roundtrip: "Hin und zurück", oneway: "Nur Hinflug", multi: "Mehrere Ziele", direct: "Direkt", directFlights: "Direktflüge",
    hotelDestination: "Ziel oder Hotelname", entryExit: "Anreise - Abreise", pickup: "Abholung", returnOffice: "Rückgabe", pickupReturn: "Abholung - Rückgabe", package: "Flug + Hotel",
    selectDates: "Daten wählen", firstOutbound: "Zuerst Hinreise wählen", chooseReturn: "Jetzt Rückreise wählen", chooseEntry: "Anreise wählen", chooseExit: "Jetzt Abreise wählen", choosePickup: "Abholung wählen", chooseCarReturn: "Jetzt Rückgabe wählen",
    cheap: "günstig", mid: "mittel", high: "hoch", flexibleMonth: "Flexibler Monat", clear: "Löschen", applyDates: "Daten übernehmen",
    passengers: "Passagiere", peopleRooms: "Personen und Zimmer", driverExtras: "Fahrer und Extras", travelersRooms: "Reisende und Zimmer", adults: "Erwachsene", children: "Kinder", rooms: "Zimmer", drivers: "Fahrer", cabin: "Klasse", economy: "Economy", business: "Business", first: "First",
    pets: "Haustiere", petsSub: "Haustierfreundliche Unterkünfte suchen", babySeats: "Babysitze", options: "Optionen",
    adultsSub: "18 Jahre oder älter", childrenSub: "0 - 17 Jahre", roomsSub: "Anzahl der Zimmer", driversSub: "Personen, die fahren",
    sameOffice: "Gleiche Station", otherOffice: "Andere Station", pickupTime: "Abholzeit", returnTime: "Rückgabezeit", driverAge: "Fahrer zwischen 25 und 70", youngDriver: "Fahrer unter 25", driverAgeSelect: "Alter des Fahrers", differentOffice: "An anderer Station zurückgeben",
    cheapOptions: "Günstigste Optionen jetzt", bestHotels: "Hotels zum besten Preis", cheapCars: "Günstigste Autos", packageDeals: "Paket-Ersparnis", sortedEstimated: "Nach geschätztem Preis sortiert",
    bestPrice: "Bester Preis", center: "Zentrum", topRated: "Sehr gut bewertet", breakfast: "Frühstück verfügbar", includedKm: "Kilometer inklusive", largeBoot: "Großer Kofferraum", fastPickup: "Schnelle Abholung", lowPrice: "Niedriger Preis", goodTime: "Gute Zeit", clearPrice: "Klarer Preis",
    recommendedFlights: "Empfohlene Flüge", recommendedHotels: "Empfohlene Hotels", recommendedCars: "Empfohlene Autos", recommendedPackages: "Flug + Hotel Pakete", estimatedPrice: "geschätzter Preis", viewDeal: "Angebot ansehen", noResults: "Keine Ergebnisse mit diesen Filtern", noResultsText: "Erhöhen Sie den Maximalpreis oder ändern Sie Ziel und Daten.",
    filters: "Filter", maxPrice: "Maximalpreis", sortBy: "Sortieren nach", bestOption: "Beste Option", price: "Preis", duration: "Dauer", newSearch: "Neue Suche", results: "Ergebnisse",
    privacy: "Datenschutz", cookies: "Cookies", affiliates: "Partnerprogramm", terms: "Bedingungen", searchTrips: "Reisen suchen", configure: "Konfigurieren", accept: "Akzeptieren", prevMonth: "Vorheriger Monat", nextMonth: "Nächster Monat",
    cookieTitle: "Datenschutz und Cookies", cookieText: "Wir verwenden technische Cookies und grundlegende Messung, um Flyvero zu verbessern. Buchungslinks können Affiliate-Links sein.",
    affiliateNote: "Flyvero kann eine Provision erhalten, wenn Sie über einen Anbieterlink buchen. Preise sind Richtwerte und werden vor der Buchung bestätigt.",
    footerDisclosure: "Flyvero vergleicht Reiseoptionen und kann eine Provision erhalten, wenn Sie über Anbieterlinks buchen. Preise sind Richtwerte, bis die Verfügbarkeit auf der Anbieterwebsite bestätigt wird.",
    legalEyebrow: "Flyvero Rechtliches", privacyTitle: "Datenschutzerklärung", privacyIntro: "Flyvero ist ein Reisevergleichs-MVP für kommerzielle Präsentationen. Wir erfassen nur Daten, die für Suche, Nutzererlebnis und Affiliate-Klickmessung nötig sind.", dataTitle: "Verarbeitete Daten", dataText: "Ziel, Abflugort, Daten, Produkttyp, Sprache, Währung, Sucheinstellungen und anonyme Klickereignisse. Zahlungsdaten oder persönliche Dokumente werden in Flyvero nicht angefordert.", purposeTitle: "Zweck", purposeText: "Wir nutzen diese Daten, um Ergebnisse zu zeigen, Einstellungen zu speichern, Links zu messen und Anbieterintegrationen vorzubereiten.", providersTitle: "Externe Anbieter", providersText: "Wenn ein Nutzer ein Angebot anklickt, erfolgt die Buchung auf der Anbieterwebsite mit deren Bedingungen und Datenschutzrichtlinie.", rightsTitle: "Rechte", rightsText: "Nutzer können Zugriff, Berichtigung oder Löschung ihrer Daten anfordern, sobald Flyvero den endgültigen Kontaktkanal aktiviert.",
    cookiesTitle: "Cookie-Richtlinie", cookiesIntro: "Flyvero nutzt lokalen Speicher und technische Cookies, um Sprache, Einwilligung und Sucheinstellungen zu merken.", technicalCookiesTitle: "Technische Cookies", technicalCookiesText: "Sie sind nötig, damit die Erfahrung funktioniert, Filter gespeichert und die Cookie-Einwilligung behalten wird.", measurementTitle: "Messung", measurementText: "Wir können Angebotsklicks messen, um erfolgreiche Suchanfragen zu verstehen. Dies umfasst keine Zahlungsdaten oder sensiblen Daten.", affiliationTitle: "Affiliate", affiliationText: "Anbieterlinks können Affiliate-Kennungen enthalten, um Buchungen oder Klicks Flyvero zuzuordnen.",
    affiliateTitle: "Affiliate-Hinweis", affiliateIntro: "Flyvero kann eine Provision erhalten, wenn Nutzer über unsere Links buchen oder Angebote anklicken. Dies sollte den Endpreis nicht erhöhen.", pricesTitle: "Preise", pricesText: "Angezeigte Preise sind Richtwerte und müssen vor der Buchung auf der Anbieterwebsite bestätigt werden.", independenceTitle: "Unabhängigkeit", independenceText: "Wir sortieren Ergebnisse nach geschätztem Preis, Verfügbarkeit, Komfort und ausgewählten Filtern. Finale kommerzielle Integrationen können konkrete Anbieter hinzufügen.", bookingsTitle: "Buchungen", bookingsText: "Flyvero stellt keine Tickets oder Reservierungen aus. Der Kauf erfolgt beim jeweiligen Anbieter.",
    termsTitle: "Nutzungsbedingungen", termsIntro: "Flyvero ist ein Reisevergleich. Informationen helfen bei der Entscheidung, aber Verfügbarkeit, Endpreis und Bedingungen hängen vom Anbieter ab.", serviceUseTitle: "Nutzung", serviceUseText: "Nutzer sollten Daten, Passagiere, Gepäck, Stornierung, Versicherungen und Anbieteranforderungen vor der Buchung prüfen.", responsibilityTitle: "Haftung", responsibilityText: "Flyvero haftet nicht für Preisänderungen, Verfügbarkeit, Anbieterbedingungen oder Vorfälle außerhalb der Plattform.", contentTitle: "Inhalte", contentText: "Reiseführer und Empfehlungen sind informativ und können je nach Geschäftsdaten, SEO und Verfügbarkeit aktualisiert werden.",
  },
  it: {
    flights: "Voli", hotels: "Hotel", cars: "Auto", deals: "Offerte", guides: "Guide", help: "Aiuto", search: "Cerca offerte", update: "Aggiorna",
    origin: "Origine", destination: "Destinazione", airport: "Aeroporto", dates: "Date", travelers: "Viaggiatori", roundtrip: "Andata e ritorno", oneway: "Solo andata", multi: "Multi-città", direct: "Diretto", directFlights: "Voli diretti",
    hotelDestination: "Destinazione o nome hotel", entryExit: "Check-in - check-out", pickup: "Ritiro", returnOffice: "Riconsegna", pickupReturn: "Ritiro - riconsegna", package: "Volo + hotel",
    selectDates: "Seleziona date", firstOutbound: "Scegli prima l'andata", chooseReturn: "Ora scegli il ritorno", chooseEntry: "Scegli il check-in", chooseExit: "Ora scegli il check-out", choosePickup: "Scegli il ritiro", chooseCarReturn: "Ora scegli la riconsegna",
    cheap: "basso", mid: "medio", high: "alto", flexibleMonth: "Mese flessibile", clear: "Cancella", applyDates: "Applica date",
    passengers: "Passeggeri", peopleRooms: "Persone e camere", driverExtras: "Conducente ed extra", travelersRooms: "Viaggiatori e camere", adults: "Adulti", children: "Bambini", rooms: "Camere", drivers: "Conducenti", cabin: "Classe", economy: "Economy", business: "Business", first: "Prima",
    pets: "Animali", petsSub: "Cerca strutture che accettano animali", babySeats: "Seggiolini bebé", options: "Opzioni",
    adultsSub: "18 anni o più", childrenSub: "0 - 17 anni", roomsSub: "Numero di camere", driversSub: "Persone che guideranno",
    sameOffice: "Stesso ufficio", otherOffice: "Altro ufficio", pickupTime: "Ora ritiro", returnTime: "Ora riconsegna", driverAge: "Conducente tra 25 e 70 anni", youngDriver: "Conducente sotto i 25 anni", driverAgeSelect: "Età del conducente", differentOffice: "Restituisci in un altro ufficio",
    cheapOptions: "Opzioni più economiche ora", bestHotels: "Hotel al miglior prezzo", cheapCars: "Auto più economiche", packageDeals: "Risparmio pacchetti", sortedEstimated: "Ordinate per prezzo stimato",
    bestPrice: "Miglior prezzo", center: "Centro", topRated: "Molto apprezzato", breakfast: "Colazione disponibile", includedKm: "Chilometraggio incluso", largeBoot: "Bagagliaio ampio", fastPickup: "Ritiro rapido", lowPrice: "Prezzo basso", goodTime: "Buon orario", clearPrice: "Prezzo chiaro",
    recommendedFlights: "Voli consigliati", recommendedHotels: "Hotel consigliati", recommendedCars: "Auto consigliate", recommendedPackages: "Pacchetti volo + hotel", estimatedPrice: "prezzo stimato", viewDeal: "Vedi offerta", noResults: "Nessun risultato con questi filtri", noResultsText: "Aumenta il prezzo massimo o cambia destinazione e date.",
    filters: "Filtri", maxPrice: "Prezzo massimo", sortBy: "Ordina per", bestOption: "Migliore opzione", price: "Prezzo", duration: "Durata", newSearch: "Nuova ricerca", results: "Risultati",
    privacy: "Privacy", cookies: "Cookie", affiliates: "Affiliati", terms: "Termini", searchTrips: "Cerca viaggi", configure: "Configura", accept: "Accetta", prevMonth: "Mese precedente", nextMonth: "Mese successivo",
    cookieTitle: "Privacy e cookie", cookieText: "Usiamo cookie tecnici e misurazione di base per migliorare Flyvero. I link di prenotazione possono essere affiliati.",
    affiliateNote: "Flyvero può ricevere una commissione se prenoti tramite un link del fornitore. I prezzi sono indicativi e confermati prima della prenotazione.",
    footerDisclosure: "Flyvero confronta opzioni di viaggio e può ricevere una commissione se prenoti tramite link dei fornitori. I prezzi sono indicativi finché la disponibilità non viene confermata sul sito del fornitore.",
    legalEyebrow: "Flyvero legale", privacyTitle: "Informativa sulla privacy", privacyIntro: "Flyvero è un MVP di comparazione viaggi per presentazione commerciale. Raccogliamo solo le informazioni necessarie per ricerca, esperienza e misurazione dei clic affiliati.", dataTitle: "Dati trattati", dataText: "Destinazione, origine, date, tipo di prodotto, lingua, valuta, preferenze di ricerca ed eventi di clic anonimi. Non richiediamo dati di pagamento o documenti personali dentro Flyvero.", purposeTitle: "Finalità", purposeText: "Usiamo questi dati per mostrare risultati, ricordare preferenze, misurare i link e preparare integrazioni con fornitori.", providersTitle: "Fornitori esterni", providersText: "Quando l'utente clicca un'offerta, la prenotazione si completa sul sito del fornitore, con le sue condizioni e privacy.", rightsTitle: "Diritti", rightsText: "L'utente potrà richiedere accesso, rettifica o cancellazione dei dati quando Flyvero attiverà il canale di contatto definitivo.",
    cookiesTitle: "Politica sui cookie", cookiesIntro: "Flyvero usa archiviazione locale e cookie tecnici per ricordare lingua, consenso e preferenze di ricerca.", technicalCookiesTitle: "Cookie tecnici", technicalCookiesText: "Sono necessari per mantenere l'esperienza, ricordare filtri e conservare il consenso.", measurementTitle: "Misurazione", measurementText: "Possiamo misurare i clic sulle offerte per capire quali ricerche funzionano meglio. Non include dati di pagamento o sensibili.", affiliationTitle: "Affiliazione", affiliationText: "I link ai fornitori possono includere identificativi affiliati per attribuire prenotazioni o clic a Flyvero.",
    affiliateTitle: "Avviso affiliati", affiliateIntro: "Flyvero può ricevere una commissione quando l'utente prenota o clicca un'offerta dai nostri link. Questo non dovrebbe aumentare il prezzo finale.", pricesTitle: "Prezzi", pricesText: "I prezzi mostrati sono indicativi e devono essere confermati sul sito del fornitore prima della prenotazione.", independenceTitle: "Indipendenza", independenceText: "Ordiniamo i risultati per prezzo stimato, disponibilità, comodità e filtri selezionati. L'integrazione commerciale finale può aggiungere fornitori specifici.", bookingsTitle: "Prenotazioni", bookingsText: "Flyvero non emette biglietti né prenotazioni. L'acquisto si completa presso il fornitore corrispondente.",
    termsTitle: "Termini di utilizzo", termsIntro: "Flyvero è un comparatore di viaggi. Le informazioni aiutano l'utente a decidere, ma disponibilità, prezzo finale e condizioni dipendono dal fornitore.", serviceUseTitle: "Uso del servizio", serviceUseText: "L'utente deve controllare date, passeggeri, bagagli, cancellazione, assicurazioni e requisiti del fornitore prima di prenotare.", responsibilityTitle: "Responsabilità", responsibilityText: "Flyvero non è responsabile di cambi prezzo, disponibilità, politiche del fornitore o incidenti esterni alla piattaforma.", contentTitle: "Contenuto", contentText: "Guide e raccomandazioni sono informative e possono essere aggiornate secondo dati commerciali, SEO e disponibilità.",
  },
};

let currentLang = localStorage.getItem("flyveroLang") || "es";
function t(key) {
  return translations[currentLang]?.[key] || translations.es[key] || key;
}

const productConfig = {
  flight: {
    origin: "Origen",
    destination: "Destino",
    date: "Fechas",
    emptyDate: "Ida y vuelta",
    selectedDate: "Ida y vuelta",
    pendingDate: "Ahora elige la vuelta",
    stepStart: "Primero elige la ida",
    stepEnd: "Ahora elige la vuelta",
    originDefault: "Barcelona (BCN)",
    destinationDefault: "París (CDG)",
    showOrigin: true,
    showSwap: true,
    showOneWay: true,
    travelerTitle: "Pasajeros",
  },
  hotel: {
    origin: "",
    destination: "Destino o nombre de hotel",
    date: "Entrada - salida",
    emptyDate: "",
    selectedDate: "Entrada y salida",
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
    destination: "Devolución",
    date: "Recogida - devolución",
    emptyDate: "Recogida - devolución",
    selectedDate: "Alquiler seleccionado",
    pendingDate: "Ahora elige la devolución",
    stepStart: "Elige la recogida",
    stepEnd: "Ahora elige la devolución",
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
    emptyDate: "",
    selectedDate: "Vuelo + hotel",
    pendingDate: "Ahora elige la vuelta",
    stepStart: "Elige la ida",
    stepEnd: "Ahora elige la vuelta",
    originDefault: "Barcelona (BCN)",
    destinationDefault: "París",
    showOrigin: true,
    showSwap: true,
    showOneWay: false,
    travelerTitle: "Viajeros y habitaciones",
  },
};

const productVisuals = {
  flight: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=82",
    alt: "Avión comercial despegando al atardecer",
  },
  hotel: {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=82",
    alt: "Hotel moderno con piscina y zonas de descanso",
  },
  car: {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=82",
    alt: "Coche de alquiler circulando por carretera",
  },
  package: {
    src: "assets/travel-hero.png",
    alt: "Viaje combinado con destino, hotel y transporte",
  },
};

const els = {
  hero: document.querySelector(".hero"),
  heroBg: document.querySelector(".hero-bg"),
  productTabs: document.querySelectorAll(".product-tab"),
  productNavLinks: document.querySelectorAll("[data-nav-product]"),
  tripForm: document.querySelector("#tripForm"),
  flightOptions: document.querySelector("#flightOptions"),
  directOption: document.querySelector("#directOption"),
  directFlights: document.querySelector("#directFlights"),
  productExtraOptions: document.querySelector("#productExtraOptions"),
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
  priceLegend: document.querySelector(".price-legend"),
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
  resultsCount: document.querySelector("#resultsCount"),
  priceFilter: document.querySelector("#priceFilter"),
  priceValue: document.querySelector("#priceValue"),
  sortFilter: document.querySelector("#sortFilter"),
  flexFilter: document.querySelector("#flexFilter"),
  smartFilterLabel: document.querySelector("#smartFilterLabel"),
  resetFilters: document.querySelector("#resetFilters"),
  languageSelects: document.querySelectorAll("[data-language-select]"),
};

let product = "flight";
let tripType = "roundtrip";
let selecting = "start";
let calendarMonthDate = new Date(2026, 5, 1);
const travelerState = { adults: 1, children: 0, pets: 0, rooms: 1, drivers: 1, babySeats: 0, cabin: "economy" };
const carState = { pickupTime: "", returnTime: "", age25to70: true, youngDriverAge: "24", differentOffice: false };
const multiFlights = [
  { from: "Barcelona (BCN)", to: "Santorini (Thira) (JTR)", date: "2026-06-02" },
  { from: "", to: "", date: "2026-06-09" },
];
const isResultsPage = location.pathname.toLowerCase().endsWith("/results.html");
const localeMap = { es: "es-ES", en: "en-GB", fr: "fr-FR", de: "de-DE", it: "it-IT" };
const productTitles = {
  flight: "Vuelos recomendados",
  hotel: "Hoteles recomendados",
  car: "Coches recomendados",
  package: "Paquetes vuelo + hotel",
};
function activeLocale() {
  return localeMap[currentLang] || "es-ES";
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat(activeLocale(), { day: "numeric", month: "short" }).format(date);
}

function formatMonthTitle(date) {
  return new Intl.DateTimeFormat(activeLocale(), { month: "long", year: "numeric" }).format(date);
}

function formatWeekdays() {
  const names = {
    es: ["Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb.", "Dom."],
    en: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."],
    fr: ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."],
    de: ["Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa.", "So."],
    it: ["Lun.", "Mar.", "Mer.", "Gio.", "Ven.", "Sab.", "Dom."],
  };
  return names[currentLang] || names.es;
}

function formatEuro(value) {
  return new Intl.NumberFormat(activeLocale(), { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

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

function dateModeLabel() {
  if (product === "hotel") return "";
  if (product === "car") return "";
  if (product === "package") return t("package");
  return tripType === "oneway" ? t("oneway") : t("roundtrip");
}

function updateHeroVisual() {
  if (!els.hero || !els.heroBg) return;
  const visual = productVisuals[product] || productVisuals.flight;
  els.hero.dataset.product = product;
  if (els.heroBg.getAttribute("src") !== visual.src) {
    els.heroBg.src = visual.src;
    els.heroBg.alt = visual.alt;
  }
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  els.languageSelects?.forEach((select) => {
    select.value = currentLang;
  });
  const navMap = isResultsPage
    ? [
      [".main-nav a:nth-child(1)", "newSearch"],
      [".main-nav a:nth-child(2)", "results"],
      [".main-nav a:nth-child(3)", "filters"],
    ]
    : [
      [".main-nav a:nth-child(1)", "flights"],
      [".main-nav a:nth-child(2)", "hotels"],
      [".main-nav a:nth-child(3)", "cars"],
      [".main-nav a:nth-child(4)", "deals"],
      [".main-nav a:nth-child(5)", "guides"],
    ];
  navMap.forEach(([selector, key]) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = t(key);
  });
  document.querySelectorAll(".header-actions .ghost-btn:last-child").forEach((button) => {
    button.textContent = t("help");
  });
  els.productTabs?.forEach((tab) => {
    const labels = { flight: "flights", hotel: "hotels", car: "cars", package: "package" };
    tab.textContent = t(labels[tab.dataset.product] || "deals");
  });
  document.querySelectorAll(".search-btn").forEach((button) => {
    button.textContent = isResultsPage ? t("update") : t("search");
  });
  const heroTitle = document.querySelector(".hero h1");
  if (heroTitle && currentLang !== "es") heroTitle.textContent = { en: "Search less. Travel better.", fr: "Cherchez moins. Voyagez mieux.", de: "Weniger suchen. Besser reisen.", it: "Cerca meno. Viaggia meglio." }[currentLang];
  if (heroTitle && currentLang === "es") heroTitle.textContent = "Busca menos. Viaja mejor.";
  const heroCopy = document.querySelector(".hero-copy");
  if (heroCopy) {
    heroCopy.textContent = {
      es: "Compara vuelos, hoteles, coches y paquetes con precios claros y opciones preparadas para cada tipo de viaje.",
      en: "Compare flights, hotels, cars and packages with clear prices and options for every trip.",
      fr: "Comparez vols, hôtels, voitures et forfaits avec des prix clairs pour chaque voyage.",
      de: "Vergleichen Sie Flüge, Hotels, Mietwagen und Pakete mit klaren Preisen für jede Reise.",
      it: "Confronta voli, hotel, auto e pacchetti con prezzi chiari per ogni viaggio.",
    }[currentLang];
  }
  const highlights = document.querySelectorAll(".hero-highlights span");
  if (highlights[0]) highlights[0].textContent = t("directFlights");
  if (highlights[1]) highlights[1].textContent = currentLang === "es" ? "Hoteles y coches" : currentLang === "en" ? "Hotels and cars" : currentLang === "fr" ? "Hôtels et voitures" : currentLang === "de" ? "Hotels und Autos" : "Hotel e auto";
  if (highlights[2]) highlights[2].textContent = currentLang === "es" ? "Precios ordenados" : currentLang === "en" ? "Sorted prices" : currentLang === "fr" ? "Prix triés" : currentLang === "de" ? "Sortierte Preise" : "Prezzi ordinati";
  const resultsTitle = document.querySelector(".results-title h1");
  if (resultsTitle) resultsTitle.textContent = { es: "Resultados de tu búsqueda", en: "Your search results", fr: "Résultats de votre recherche", de: "Ihre Suchergebnisse", it: "Risultati della ricerca" }[currentLang];
  if (els.clearDates) els.clearDates.textContent = t("clear");
  if (els.applyDates) els.applyDates.textContent = t("applyDates");
  const directLabel = els.directOption?.childNodes?.[2];
  if (directLabel) directLabel.textContent = ` ${t("directFlights")}`;
  if (els.resetFilters) els.resetFilters.textContent = t("clear");
  const filterTitle = document.querySelector(".filter-title h2");
  if (filterTitle) filterTitle.textContent = t("filters");
  const priceLabel = document.querySelector(".filters-panel label:nth-of-type(1)");
  if (priceLabel?.childNodes?.[0]) priceLabel.childNodes[0].textContent = `${t("maxPrice")} `;
  const sortLabel = document.querySelector(".filters-panel label:nth-of-type(2)");
  if (sortLabel?.childNodes?.[0]) sortLabel.childNodes[0].textContent = `${t("sortBy")} `;
  document.querySelectorAll("#sortFilter option").forEach((option) => {
    const map = { smart: "bestOption", price: "price", duration: "duration" };
    option.textContent = t(map[option.value] || "bestOption");
  });
  const sectionHead = document.querySelector("#hotels .section-head h2");
  if (sectionHead) sectionHead.textContent = { es: "Destinos populares", en: "Popular destinations", fr: "Destinations populaires", de: "Beliebte Ziele", it: "Destinazioni popolari" }[currentLang];
  const sectionCopy = document.querySelector("#hotels .section-head > p");
  if (sectionCopy) sectionCopy.textContent = { es: "Escapadas seleccionadas para viajar mejor y pagar menos.", en: "Selected escapes to travel better and pay less.", fr: "Escapades sélectionnées pour mieux voyager et payer moins.", de: "Ausgewählte Kurztrips, um besser zu reisen und weniger zu zahlen.", it: "Fughe selezionate per viaggiare meglio e pagare meno." }[currentLang];
  const benefits = document.querySelectorAll(".benefit-card");
  const benefitTexts = {
    es: [["Precios claros", "Ordena las opciones por precio, duración y mejor valor para decidir rápido."], ["Fechas claras", "Selecciona ida, vuelta, entrada, salida o devolución según el servicio."], ["Hoteles", "Busca por destino, zona o nombre de hotel con entrada, salida y habitaciones."], ["Coches", "Selecciona recogida, devolución, conductores y extras desde el mismo buscador."]],
    en: [["Clear prices", "Sort options by price, duration and value."], ["Clear dates", "Select outbound, return, check-in, check-out or car return."], ["Hotels", "Search by destination, area or hotel name with rooms."], ["Cars", "Choose pick-up, return, drivers and extras from the same search."]],
    fr: [["Prix clairs", "Triez par prix, durée et valeur."], ["Dates claires", "Sélectionnez aller, retour, arrivée, départ ou retour voiture."], ["Hôtels", "Recherchez par destination, zone ou hôtel."], ["Voitures", "Choisissez prise en charge, retour, conducteurs et options."]],
    de: [["Klare Preise", "Nach Preis, Dauer und Wert sortieren."], ["Klare Daten", "Hinreise, Rückreise, Anreise, Abreise oder Rückgabe wählen."], ["Hotels", "Nach Ziel, Region oder Hotel suchen."], ["Autos", "Abholung, Rückgabe, Fahrer und Extras wählen."]],
    it: [["Prezzi chiari", "Ordina per prezzo, durata e valore."], ["Date chiare", "Seleziona andata, ritorno, check-in, check-out o riconsegna."], ["Hotel", "Cerca per destinazione, zona o nome hotel."], ["Auto", "Scegli ritiro, riconsegna, conducenti ed extra."]],
  }[currentLang];
  benefits.forEach((card, index) => {
    if (!benefitTexts?.[index]) return;
    const h3 = card.querySelector("h3");
    const p = card.querySelector("p");
    if (h3) h3.textContent = benefitTexts[index][0];
    if (p) p.textContent = benefitTexts[index][1];
  });
  const footerLinks = document.querySelectorAll(".site-footer a");
  if (footerLinks[0]) footerLinks[0].textContent = t("searchTrips");
  if (footerLinks[1]) footerLinks[1].textContent = t("deals");
  if (footerLinks[2]) footerLinks[2].textContent = t("guides");
  if (footerLinks[3]) footerLinks[3].textContent = t("privacy");
  if (footerLinks[4]) footerLinks[4].textContent = t("cookies");
  if (footerLinks[5]) footerLinks[5].textContent = t("affiliates");
  if (footerLinks[6]) footerLinks[6].textContent = t("terms");
}

function findPlace(value, fallbackList) {
  const q = normalize(value);
  return fallbackList.find((place) => normalize(`${place.title} ${place.detail}`).includes(q) || q.includes(normalize(place.title))) || fallbackList[0];
}

const airportSearchAliases = {
  LPA: "canarias islas canarias canary islands gran canaria las palmas",
  TFS: "canarias islas canarias canary islands tenerife santa cruz costa adeje",
  TFN: "canarias islas canarias canary islands tenerife santa cruz la laguna",
  ACE: "canarias islas canarias canary islands lanzarote arrecife",
  FUE: "canarias islas canarias canary islands fuerteventura puerto del rosario",
  SPC: "canarias islas canarias canary islands la palma",
  GMZ: "canarias islas canarias canary islands la gomera",
  VDE: "canarias islas canarias canary islands el hierro",
  PMI: "baleares islas baleares balearic islands mallorca palma",
  IBZ: "baleares islas baleares balearic islands ibiza",
  MAH: "baleares islas baleares balearic islands menorca mahon",
};

const airportDestinationGroups = [
  { key: "canarias", title: "Canarias", codes: ["LPA", "TFS", "TFN", "ACE", "FUE", "SPC", "GMZ", "VDE"] },
  { key: "islas canarias", title: "Canarias", codes: ["LPA", "TFS", "TFN", "ACE", "FUE", "SPC", "GMZ", "VDE"] },
  { key: "baleares", title: "Islas Baleares", codes: ["PMI", "IBZ", "MAH"] },
  { key: "islas baleares", title: "Islas Baleares", codes: ["PMI", "IBZ", "MAH"] },
];

function airportText(airport) {
  return normalize(`${airport.city} ${airport.code} ${airport.name} ${airport.country} ${airportSearchAliases[airport.code] || ""}`);
}

function uniqueBy(items, getKey) {
  const seen = new Set();
  return items.filter((item) => {
    const key = getKey(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function matches(value) {
  const q = normalize(value);
  if (!q) return airports.slice(0, 30);
  return airports
    .map((airport) => {
      const code = normalize(airport.code);
      const city = normalize(airport.city);
      const name = normalize(airport.name);
      const country = normalize(airport.country);
      const haystack = airportText(airport);
      let score = 0;
      if (code === q) score += 100;
      if (city === q) score += 90;
      if (country === q) score += 85;
      if (code.startsWith(q)) score += 70;
      if (city.startsWith(q)) score += 60;
      if (name.startsWith(q)) score += 45;
      if (country.startsWith(q)) score += 30;
      if (haystack.includes(q)) score += 10;
      return { airport, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.airport.city.localeCompare(b.airport.city))
    .map((item) => item.airport)
    .slice(0, 40);
}

function nearbyMatches(value) {
  const q = normalize(value);
  if (!q) return [];
  const exact = airports.find((airport) => normalize(airport.code) === q || normalize(airport.city) === q || normalize(label(airport)) === q);
  return exact?.nearby || [];
}

function airportDetail(airport) {
  return `${airport.name} · ${airport.city}, ${airport.country}`;
}

function matchesPlaces(value, list) {
  const q = normalize(value);
  const scored = list.map((place, index) => {
    const title = normalize(place.title);
    const detail = normalize(place.detail);
    const type = normalize(place.type);
    const haystack = `${title} ${detail} ${type}`;
    let score = q ? 0 : Math.max(1, 30 - index);
    if (q) {
      if (title === q) score += 100;
      if (title.startsWith(q)) score += 75;
      if (detail.startsWith(q)) score += 45;
      if (haystack.includes(q)) score += 20;
      if (type.includes(q)) score += 8;
    }
    return { place, score };
  });
  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.place.title.localeCompare(b.place.title))
    .map((item) => item.place)
    .slice(0, 36);
}

function groupTitle(kind, type) {
  const labels = {
    es: {
      hotel: { ciudad: "Ciudades y destinos", isla: "Islas y destinos", zona: "Zonas", hotel: "Hoteles" },
      car: { aeropuerto: "Aeropuertos", estación: "Estaciones", ciudad: "Ciudades", oficina: "Oficinas", agencia: "Agencias" },
    },
    en: {
      hotel: { ciudad: "Cities and destinations", isla: "Islands and destinations", zona: "Areas", hotel: "Hotels" },
      car: { aeropuerto: "Airports", estación: "Stations", ciudad: "Cities", oficina: "Offices", agencia: "Agencies" },
    },
    fr: {
      hotel: { ciudad: "Villes et destinations", isla: "Îles et destinations", zona: "Zones", hotel: "Hôtels" },
      car: { aeropuerto: "Aéroports", estación: "Gares", ciudad: "Villes", oficina: "Bureaux", agencia: "Agences" },
    },
    de: {
      hotel: { ciudad: "Städte und Ziele", isla: "Inseln und Ziele", zona: "Gebiete", hotel: "Hotels" },
      car: { aeropuerto: "Flughäfen", estación: "Bahnhöfe", ciudad: "Städte", oficina: "Stationen", agencia: "Anbieter" },
    },
    it: {
      hotel: { ciudad: "Città e destinazioni", isla: "Isole e destinazioni", zona: "Zone", hotel: "Hotel" },
      car: { aeropuerto: "Aeroporti", estación: "Stazioni", ciudad: "Città", oficina: "Uffici", agencia: "Agenzie" },
    },
  };
  return labels[currentLang]?.[kind]?.[type] || labels.es[kind]?.[type] || type;
}

function renderGroup(title, rows) {
  if (!rows.length) return "";
  return `<section class="suggest-group"><div class="suggest-group-title">${title}</div>${rows.join("")}</section>`;
}

function renderPlaceButton(place) {
  return `
    <button type="button" class="suggest-item place-suggest" data-value="${place.title}">
      <span class="suggest-main"><strong>${place.title}</strong><span>${place.detail}</span></span>
      <span class="suggest-type">${place.type}</span>
    </button>
  `;
}

function renderPlaceGroups(items, kind) {
  const order = kind === "car"
    ? ["aeropuerto", "estación", "ciudad", "oficina", "agencia"]
    : ["ciudad", "isla", "zona", "hotel"];
  return order
    .map((type) => renderGroup(groupTitle(kind, type), items.filter((item) => item.type === type).map(renderPlaceButton)))
    .join("") || `<div class="suggest-empty">${{
      es: "No hay resultados para esa búsqueda",
      en: "No results for that search",
      fr: "Aucun résultat pour cette recherche",
      de: "Keine Ergebnisse für diese Suche",
      it: "Nessun risultato per questa ricerca",
    }[currentLang] || "No hay resultados para esa búsqueda"}</div>`;
}

function renderAirportButton(airport) {
  return `
    <button type="button" class="suggest-item airport-suggest" data-value="${label(airport)}">
      <span class="suggest-main"><strong>${label(airport)}</strong><span>${airportDetail(airport)}</span></span>
      <span class="airport-code">${airport.code}</span>
    </button>
  `;
}

function airportsByCodes(codes) {
  return codes.map((code) => airports.find((airport) => airport.code === code)).filter(Boolean);
}

function matchedDestinationGroup(value) {
  const q = normalize(value);
  if (!q) return null;
  return airportDestinationGroups.find((group) => normalize(group.key).includes(q) || q.includes(normalize(group.key))) || null;
}

function renderAirportGroups(value, items, nearby) {
  const q = normalize(value);
  const destinationGroup = matchedDestinationGroup(value);
  let destinationRows = "";
  let airportRows = uniqueBy([...nearby, ...items], (airport) => airport.code);

  if (destinationGroup) {
    const groupAirports = airportsByCodes(destinationGroup.codes);
    const primary = groupAirports[0];
    if (primary) {
      destinationRows = renderGroup({ es: "Destinos", en: "Destinations", fr: "Destinations", de: "Ziele", it: "Destinazioni" }[currentLang] || "Destinos", [`
        <button type="button" class="suggest-item destination-suggest" data-value="${label(primary)}">
          <span class="suggest-main"><strong>${destinationGroup.title}</strong><span>${{ es: "Todos los aeropuertos comerciales disponibles", en: "All available commercial airports", fr: "Tous les aéroports commerciaux disponibles", de: "Alle verfügbaren Verkehrsflughäfen", it: "Tutti gli aeroporti commerciali disponibili" }[currentLang] || "Todos los aeropuertos comerciales disponibles"}</span></span>
          <span class="suggest-type">${{ es: "Destino", en: "Destination", fr: "Destination", de: "Ziel", it: "Destinazione" }[currentLang] || "Destino"}</span>
        </button>
      `]);
    }
    airportRows = uniqueBy([...groupAirports, ...airportRows], (airport) => airport.code);
  } else if (nearby.length > 1) {
    const primary = nearby[0];
    destinationRows = renderGroup({ es: "Destinos", en: "Destinations", fr: "Destinations", de: "Ziele", it: "Destinazioni" }[currentLang] || "Destinos", [`
      <button type="button" class="suggest-item destination-suggest" data-value="${label(primary)}">
        <span class="suggest-main"><strong>${primary.city} (Todos)</strong><span>${primary.country}</span></span>
        <span class="suggest-type">${{ es: "Destino", en: "Destination", fr: "Destination", de: "Ziel", it: "Destinazione" }[currentLang] || "Destino"}</span>
      </button>
    `]);
  }

  const exactCountry = q && airportRows.length > 1 && airportRows.every((airport) => normalize(airport.country).includes(q));
  const airportTitleText = {
    available: { es: "Aeropuertos disponibles", en: "Available airports", fr: "Aéroports disponibles", de: "Verfügbare Flughäfen", it: "Aeroporti disponibili" },
    near: { es: "Cerca de", en: "Near", fr: "Près de", de: "In der Nähe von", it: "Vicino a" },
    in: { es: "Aeropuertos en", en: "Airports in", fr: "Aéroports à", de: "Flughäfen in", it: "Aeroporti a" },
  };
  const title = destinationGroup
    ? `${airportTitleText.in[currentLang] || airportTitleText.in.es} ${destinationGroup.title}`
    : nearby.length > 1
      ? `${airportTitleText.near[currentLang] || airportTitleText.near.es} ${nearby[0].city}`
      : exactCountry
        ? `${airportTitleText.in[currentLang] || airportTitleText.in.es} ${airportRows[0].country}`
        : airportTitleText.available[currentLang] || airportTitleText.available.es;

  return `${destinationRows}${renderGroup(title, airportRows.slice(0, 40).map(renderAirportButton))}`;
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

function timeOptions(selected) {
  const values = [`<option value="" ${selected ? "" : "selected"} disabled>Elige hora</option>`];
  for (let hour = 0; hour < 24; hour += 1) {
    for (let minute = 0; minute < 60; minute += 30) {
      const value = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      values.push(`<option value="${value}" ${value === selected ? "selected" : ""}>${value}</option>`);
    }
  }
  return values.join("");
}

function getCriteria() {
  return {
    product,
    origin: els.origin?.value || "Barcelona (BCN)",
    destination: els.dest?.value || "París (CDG)",
    startDate: els.startDate?.value || "",
    endDate: els.endDate?.value || "",
    travelers: els.travelers?.value || "1 viajero",
    tripType,
    oneWay: tripType === "oneway",
    direct: Boolean(els.directFlights?.checked),
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
    direct: criteria.direct ? "1" : "0",
    adults: String(travelerState.adults),
    children: String(travelerState.children),
    cabin: travelerState.cabin,
    pets: String(travelerState.pets),
    rooms: String(travelerState.rooms),
    drivers: String(travelerState.drivers),
    babySeats: String(travelerState.babySeats),
    pickupTime: carState.pickupTime,
    returnTime: carState.returnTime,
    youngDriverAge: carState.youngDriverAge,
    age25to70: carState.age25to70 ? "1" : "0",
    differentOffice: carState.differentOffice ? "1" : "0",
  });
}

function applyCriteriaFromUrl() {
  const params = new URLSearchParams(location.search);
  const nextProduct = params.get("product") || product;
  product = productConfig[nextProduct] ? nextProduct : "flight";
  const config = activeConfig();
  if (els.origin) els.origin.value = params.get("origin") || config.originDefault || els.origin.value;
  if (els.dest) els.dest.value = params.get("destination") || config.destinationDefault || els.dest.value;
  if (els.startDate) els.startDate.value = params.get("startDate") || "";
  if (els.endDate) els.endDate.value = params.get("endDate") || "";
  if (els.startDate?.value) {
    const selectedStart = parseIso(els.startDate.value);
    calendarMonthDate = new Date(selectedStart.getFullYear(), selectedStart.getMonth(), 1);
  }
  if (params.get("adults")) travelerState.adults = Math.max(1, Number(params.get("adults")) || 1);
  if (params.get("children")) travelerState.children = Math.max(0, Number(params.get("children")) || 0);
  if (params.get("cabin")) travelerState.cabin = params.get("cabin");
  if (params.get("pets")) travelerState.pets = Math.max(0, Number(params.get("pets")) || 0);
  if (params.get("rooms")) travelerState.rooms = Math.max(1, Number(params.get("rooms")) || 1);
  if (params.get("drivers")) travelerState.drivers = Math.max(1, Number(params.get("drivers")) || 1);
  if (params.get("babySeats")) travelerState.babySeats = Math.max(0, Number(params.get("babySeats")) || 0);
  if (params.get("pickupTime")) carState.pickupTime = params.get("pickupTime");
  if (params.get("returnTime")) carState.returnTime = params.get("returnTime");
  if (params.get("youngDriverAge")) carState.youngDriverAge = params.get("youngDriverAge");
  if (params.has("age25to70")) carState.age25to70 = params.get("age25to70") === "1";
  if (params.has("differentOffice")) carState.differentOffice = params.get("differentOffice") === "1";
  if (els.directFlights) els.directFlights.checked = params.get("direct") === "1";
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

function updateOverlayState() {
  const panels = [els.calendarPanel, els.tripTypePanel, els.travelerPanel, els.originSuggest, els.destSuggest];
  const hasOpenPanel = panels.some((panel) => panel && !panel.hidden);
  document.body.classList.toggle("flyvero-overlay-open", hasOpenPanel);
}

function closeOpenPanels() {
  [els.calendarPanel, els.tripTypePanel, els.travelerPanel, els.originSuggest, els.destSuggest].forEach((panel) => {
    if (panel) panel.hidden = true;
  });
  updateOverlayState();
}

function isInsideOpenPanel(target) {
  return Boolean(target.closest(".calendar-panel, .trip-type-panel, .traveler-panel, .suggest-panel, .date-wrap, .trip-options, .travelers-wrap, .origin-wrap, .destination-wrap, .product-extra-options"));
}

function positionSuggestPanel(input, panel) {
  if (!input || !panel) return;
  const rect = input.closest(".input-group")?.getBoundingClientRect() || input.getBoundingClientRect();
  if (window.innerWidth <= 760) {
    panel.style.position = "fixed";
    panel.style.left = "10px";
    panel.style.right = "10px";
    panel.style.top = "auto";
    panel.style.bottom = "10px";
    panel.style.width = "auto";
    panel.style.maxHeight = "72vh";
    return;
  }
  const width = Math.min(650, window.innerWidth - 32);
  const left = Math.max(16, Math.min(rect.left, window.innerWidth - width - 16));
  const top = Math.min(rect.bottom + 10, window.innerHeight - 180);
  panel.style.position = "fixed";
  panel.style.left = `${left}px`;
  panel.style.right = "auto";
  panel.style.top = `${top}px`;
  panel.style.bottom = "auto";
  panel.style.width = `${width}px`;
  panel.style.maxHeight = `${Math.max(220, window.innerHeight - top - 20)}px`;
}

function renderSuggest(input, panel) {
  if (!input || !panel) return;
  if (product === "hotel" || (product === "package" && input === els.dest)) {
    const items = matchesPlaces(input.value, hotelPlaces);
    panel.innerHTML = `
      <div class="suggest-head"><strong>${t("hotelDestination")}</strong><span>Busca ciudad, zona o nombre de hotel</span></div>
      ${renderPlaceGroups(items, "hotel")}
    `;
    positionSuggestPanel(input, panel);
    panel.hidden = false;
    updateOverlayState();
    return;
  }
  if (product === "car") {
    const items = matchesPlaces(input.value, carPlaces);
    panel.innerHTML = `
      <div class="suggest-head"><strong>${input === els.dest ? t("returnOffice") : t("pickup")}</strong><span>Busca aeropuerto, estación, oficina o agencia</span></div>
      ${renderPlaceGroups(items, "car")}
    `;
    positionSuggestPanel(input, panel);
    panel.hidden = false;
    updateOverlayState();
    return;
  }
  const items = matches(input.value);
  const nearby = nearbyMatches(input.value);
  const airportsList = uniqueBy([...nearby, ...items], (airport) => airport.code);
  panel.innerHTML = `
    <div class="suggest-head compact"><strong>${t("airport")}</strong><span>Busca por ciudad, país, aeropuerto o código IATA</span></div>
    ${renderAirportGroups(input.value, airportsList, nearby)}
  `;
  positionSuggestPanel(input, panel);
  panel.hidden = false;
  updateOverlayState();
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
    updateOverlayState();
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
  if (product === "car" && els.startDate.value && els.endDate.value) {
    els.dateTitle.textContent = `${formatShortDate(parseIso(els.startDate.value))} - ${formatShortDate(parseIso(els.endDate.value))}`;
    els.dateSubtitle.textContent = "";
    return;
  }
  if (els.startDate.value && els.endDate.value) {
    els.dateTitle.textContent = `${formatShortDate(parseIso(els.startDate.value))} - ${formatShortDate(parseIso(els.endDate.value))}`;
    els.dateSubtitle.textContent = dateModeLabel();
  } else if (els.startDate.value && oneWay) {
    els.dateTitle.textContent = `${formatShortDate(parseIso(els.startDate.value))}`;
    els.dateSubtitle.textContent = dateModeLabel();
  } else if (els.startDate.value) {
    els.dateTitle.textContent = `${formatShortDate(parseIso(els.startDate.value))}`;
    els.dateSubtitle.textContent = t(product === "hotel" ? "chooseExit" : product === "car" ? "chooseCarReturn" : "chooseReturn");
  } else {
    els.dateTitle.textContent = t("selectDates");
    els.dateSubtitle.textContent = product === "flight" ? t("roundtrip") : product === "car" ? t("pickupReturn") : "";
  }
}

function updateTravelerText() {
  const adultText = `${travelerState.adults} ${currentLang === "es" ? `adulto${travelerState.adults === 1 ? "" : "s"}` : t("adults").toLowerCase()}`;
  const childText = `${travelerState.children} ${currentLang === "es" ? `niño${travelerState.children === 1 ? "" : "s"}` : t("children").toLowerCase()}`;
  const people = travelerState.adults + travelerState.children;
  let title = `${adultText}, ${childText}`;
  let subtitle = `${people} ${currentLang === "es" ? `pasajero${people === 1 ? "" : "s"}` : t("passengers").toLowerCase()}`;
  if (product === "hotel") {
    title = `${adultText}, ${childText}`;
    subtitle = `${travelerState.adults + travelerState.children} ${currentLang === "es" ? "persona" + (travelerState.adults + travelerState.children === 1 ? "" : "s") : t("travelers").toLowerCase()}, ${travelerState.rooms} ${currentLang === "es" ? "habitación" + (travelerState.rooms === 1 ? "" : "es") : t("rooms").toLowerCase()}`;
    if (travelerState.pets > 0) subtitle += `, ${travelerState.pets} ${t("pets").toLowerCase()}`;
  }
  if (product === "package") {
    const packagePeople = travelerState.adults + travelerState.children;
    title = `${adultText}, ${childText}`;
    subtitle = `${packagePeople} ${currentLang === "es" ? `viajero${packagePeople === 1 ? "" : "s"}` : t("travelers").toLowerCase()}, ${travelerState.rooms} ${currentLang === "es" ? "habitación" + (travelerState.rooms === 1 ? "" : "es") : t("rooms").toLowerCase()}`;
  }
  if (product === "flight") title = `${adultText}, ${childText}`;
  if (product === "car") {
    title = `${travelerState.drivers} ${currentLang === "es" ? `conductor${travelerState.drivers === 1 ? "" : "es"}` : t("drivers").toLowerCase()}`;
    subtitle = travelerState.babySeats > 0 ? `${travelerState.babySeats} ${t("babySeats").toLowerCase()}` : "";
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
        { key: "drivers", title: t("drivers"), sub: t("driversSub"), min: 1 },
        { key: "babySeats", title: t("babySeats"), sub: "", min: 0 },
      ]
      : product === "hotel"
        ? [
          { key: "adults", title: t("adults"), sub: t("adultsSub"), min: 1 },
          { key: "children", title: t("children"), sub: t("childrenSub"), min: 0 },
          { key: "rooms", title: t("rooms"), sub: t("roomsSub"), min: 1 },
          { key: "pets", title: t("pets"), sub: t("petsSub"), min: 0 },
        ]
        : product === "package"
          ? [
            { key: "adults", title: t("adults"), sub: t("adultsSub"), min: 1 },
            { key: "children", title: t("children"), sub: t("childrenSub"), min: 0 },
            { key: "rooms", title: t("rooms"), sub: t("roomsSub"), min: 1 },
          ]
        : [
          { key: "adults", title: t("adults"), sub: t("adultsSub"), min: 1 },
          { key: "children", title: t("children"), sub: t("childrenSub"), min: 0 },
          ];
  els.travelerPanel.innerHTML = `
    <div class="traveler-head">${product === "hotel" ? t("peopleRooms") : product === "car" ? t("driverExtras") : product === "package" ? t("travelersRooms") : t("passengers")}</div>
    ${rows.map((row) => `
      <div class="traveler-row">
        <div><strong>${row.title}</strong><span>${row.sub}</span></div>
        <div class="stepper">
          <button type="button" data-traveler="${row.key}" data-step="-1" data-min="${row.min}" ${travelerState[row.key] <= row.min ? "disabled" : ""}>-</button>
          <b>${travelerState[row.key]}</b>
          <button type="button" data-traveler="${row.key}" data-step="1" data-min="${row.min}">+</button>
        </div>
      </div>
    `).join("")}
    ${product === "flight" || product === "package" ? `
      <label class="traveler-select-row">
        <span>${t("cabin")}</span>
        <select data-traveler-cabin>
          <option value="economy" ${travelerState.cabin === "economy" ? "selected" : ""}>${t("economy")}</option>
          <option value="business" ${travelerState.cabin === "business" ? "selected" : ""}>${t("business")}</option>
          <option value="first" ${travelerState.cabin === "first" ? "selected" : ""}>${t("first")}</option>
        </select>
      </label>
    ` : ""}
  `;
}

function updateSmartFilterLabel() {
  if (!els.smartFilterLabel) return;
  const labels = {
    flight: t("directFlights"),
    hotel: t("bestPrice"),
    car: t("includedKm"),
    package: "Ahorro combinado",
  };
  els.smartFilterLabel.textContent = labels[product] || t("bestOption");
}

function renderCalendar() {
  if (!els.calendarGrid) return;
  if (els.calendarMonth) {
    els.calendarMonth.textContent = product === "hotel" ? t("entryExit") : product === "car" ? t("pickupReturn") : t("dates");
  }
  if (els.priceLegend) {
    if (product === "flight") {
      els.priceLegend.innerHTML = `
        <div class="calendar-trip-switch" role="group" aria-label="Opciones de vuelo">
          <button type="button" data-calendar-trip="oneway" class="${tripType === "oneway" ? "active" : ""}">${t("oneway")}</button>
          <button type="button" data-calendar-trip="roundtrip" class="${tripType !== "oneway" ? "active" : ""}">${t("roundtrip")}</button>
          <button type="button" data-calendar-direct="toggle" class="${els.directFlights?.checked ? "active" : ""}">${t("direct")}</button>
        </div>
        <button type="button" class="calendar-flex-btn" data-calendar-flex>${t("flexibleMonth")}</button>
      `;
    } else {
      els.priceLegend.innerHTML = `<button type="button" class="calendar-flex-btn" data-calendar-flex>${t("flexibleMonth")}</button>`;
    }
  }
  const renderMonth = (monthDate) => {
    const first = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
    const offset = (first.getDay() + 6) % 7;
    const days = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
    const monthTitle = formatMonthTitle(monthDate);
    const weekdays = formatWeekdays();
    let daysHtml = "";
    for (let i = 0; i < offset; i += 1) daysHtml += '<span class="day-empty"></span>';
    for (let day = 1; day <= days; day += 1) {
      const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
      const value = toIso(date);
      const price = priceFor(date);
      const start = els.startDate.value;
      const end = els.endDate.value;
      const inRange = start && end && parseIso(value) > parseIso(start) && parseIso(value) < parseIso(end);
      const selected = value === start || value === end;
      daysHtml += `<button type="button" class="day-btn ${level(price)} ${selected ? "selected" : ""} ${inRange ? "in-range" : ""}" data-date="${value}"><strong>${day}</strong><span>${formatEuro(price)}</span></button>`;
    }
    return `
      <section class="calendar-month-block">
        <h3><button type="button" class="month-inline-nav" data-month-shift="-1" aria-label="${t("prevMonth")}">&lt;</button><span>${monthTitle}</span><button type="button" class="month-inline-nav" data-month-shift="1" aria-label="${t("nextMonth")}">&gt;</button></h3>
        <div class="month-weekdays" aria-hidden="true">${weekdays.map((day) => `<span>${day}</span>`).join("")}</div>
        <div class="month-days">${daysHtml}</div>
      </section>
    `;
  };
  els.calendarGrid.classList.add("months-view");
  els.calendarGrid.innerHTML = renderMonth(calendarMonthDate) + renderMonth(new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth() + 1, 1));
  if (els.calendarStep) {
    const config = activeConfig();
    els.calendarStep.textContent = product === "flight" && tripType === "oneway" ? t("firstOutbound") : selecting === "start" ? t(product === "hotel" ? "chooseEntry" : product === "car" ? "choosePickup" : "firstOutbound") : t(product === "hotel" ? "chooseExit" : product === "car" ? "chooseCarReturn" : "chooseReturn");
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
        ? ["Económico", "SUV familiar", "Premium automático", "Compacto"]
        : product === "package"
          ? ["Pack ahorro", "Hotel céntrico", "Flexible recomendado", "Escapada completa"]
          : ["Directo recomendado", t("bestPrice"), t("goodTime"), "Tarifa clara"];

  return providers.map((name, index) => {
    const price = Math.round(basePrice() * (1 + index * 0.34) + (normalize(to.city).charCodeAt(0) % 20));
    const duration = product === "flight" ? 105 + index * 35 : product === "car" || product === "hotel" ? 4 + index : 190 + index * 25;
    const meta =
      product === "flight"
        ? [t("direct"), t("lowPrice"), t("goodTime"), t("clearPrice")][index]
        : product === "hotel"
          ? [t("bestPrice"), travelerState.pets > 0 ? t("pets") : t("center"), t("topRated"), t("breakfast")][index]
          : product === "car"
            ? [t("includedKm"), t("largeBoot"), t("bestPrice"), t("fastPickup")][index]
            : [t("package"), "Ahorro combinado", t("topRated"), t("flexibleMonth")][index];
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

function partnerUrl(offer) {
  const params = new URLSearchParams({
    aid: "flyvero_demo",
    label: "flyvero_mvp",
    product,
    destination: offer.to.city,
    price: String(offer.price),
    source: "flyvero",
  });
  if (product !== "hotel") params.set("origin", offer.from.city);
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

function trackAffiliateClick(offer) {
  const events = JSON.parse(localStorage.getItem("flyveroAffiliateClicks") || "[]");
  events.push({
    product,
    name: offer.name,
    destination: offer.to.city,
    price: offer.price,
    at: new Date().toISOString(),
  });
  localStorage.setItem("flyveroAffiliateClicks", JSON.stringify(events.slice(-50)));
}

window.trackAffiliateClick = trackAffiliateClick;

function renderOffers() {
  if (!els.resultsGrid || !els.resultsHeading) return;
  const from = product === "hotel" ? null : { city: locationTitle(els.origin?.value) };
  const to = { city: locationTitle(els.dest?.value) };
  const offers = filteredOffers();
  const translatedTitles = { flight: t("recommendedFlights"), hotel: t("recommendedHotels"), car: t("recommendedCars"), package: t("recommendedPackages") };
  els.resultsHeading.textContent = translatedTitles[product] || productTitles[product] || t("results");
  if (els.resultsCount) els.resultsCount.textContent = `${offers.length} ${t("results").toLowerCase()}`;
  els.resultsGrid.innerHTML = offers.length
    ? offers.map((offer, index) => `
      <article class="offer-card">
        <div class="offer-left">
          <span class="provider-logo">F</span>
          <div>
            <h3>${offer.name} - ${product === "hotel" ? offer.to.city : `${offer.from.city} a ${offer.to.city}`}</h3>
            <div class="offer-meta">
              <span>${offer.meta}</span>
              <span>${product === "flight" ? `${Math.floor(offer.duration / 60)}h ${offer.duration % 60}m` : `${offer.duration} días`}</span>
              <span>${product === "flight" && (els.directFlights?.checked || els.flexFilter?.checked) ? t("directFlights") : t("clearPrice")}</span>
            </div>
          </div>
        </div>
        <div class="offer-price">
          <strong>${formatEuro(offer.price)}</strong>
          <span>${t("estimatedPrice")}</span>
          <a class="deal-link" href="${partnerUrl(offer)}" target="_blank" rel="nofollow sponsored noopener" onclick="window.trackAffiliateClick && window.trackAffiliateClick(${JSON.stringify(offer).replace(/"/g, "&quot;")})">${t("viewDeal")}</a>
        </div>
      </article>
    `).join("")
    : `<article class="offer-card"><div><h3>${t("noResults")}</h3><p>${t("noResultsText")}</p></div></article>`;
}

function updateTripTypeText() {
  const labels = {
    oneway: { text: t("oneway"), icon: "->" },
    roundtrip: { text: t("roundtrip"), icon: "R" },
    multi: { text: t("multi"), icon: "M" },
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
      <strong>Múltiples destinos</strong>
      <span>Combina varios vuelos en una sola búsqueda</span>
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
          <input data-multi-field="date" data-index="${index}" value="${formatShortDate(parseIso(flight.date))}" placeholder="${t("dates")}" autocomplete="off" />
        </label>
      </section>
    `).join("")}
    <button type="button" class="add-flight-btn" id="addFlightBtn">+ Añadir otro vuelo</button>
  `;
}

function applyProductMode(resetValues = true) {
  const config = activeConfig();
  updateHeroVisual();
  els.tripForm?.classList.toggle("is-hotel", product === "hotel");
  els.tripForm?.classList.toggle("is-car", product === "car");
  els.tripForm?.classList.toggle("is-package", product === "package");
  els.tripForm?.classList.toggle("is-multi", product === "flight" && tripType === "multi");
  els.tripForm?.classList.toggle("is-different-office", product === "car" && carState.differentOffice);
  if (els.originLabel) els.originLabel.textContent = product === "car" ? t("pickup") : t("origin");
  if (els.destLabel) els.destLabel.textContent = product === "hotel" || product === "package" ? t("hotelDestination") : product === "car" ? t("returnOffice") : t("destination");
  if (els.dateLabel) els.dateLabel.textContent = product === "hotel" ? t("entryExit") : product === "car" ? t("pickupReturn") : t("dates");
  const travelersLabel = els.travelerTrigger?.closest(".travelers-wrap")?.querySelector("label");
  if (travelersLabel) travelersLabel.textContent = product === "car" ? t("drivers") : t("travelers");
  if (els.flightOptions) els.flightOptions.hidden = !config.showOneWay;
  if (els.directOption) els.directOption.hidden = product !== "flight";
  if (els.origin) {
    els.origin.closest(".origin-wrap")?.classList.toggle("field-hidden", !config.showOrigin);
    if (resetValues && config.originDefault) els.origin.value = config.originDefault;
  }
  els.swap?.classList.toggle("field-hidden", !config.showSwap);
  if (els.dest && resetValues) els.dest.value = config.destinationDefault;
  if (product === "car" && !carState.differentOffice && els.origin && els.dest) els.dest.value = els.origin.value;
  if (!config.showOneWay) tripType = "roundtrip";
  if (tripType === "oneway" && els.endDate) els.endDate.value = "";
  updateTripTypeText();
  renderMultiCityPanel();
  renderProductExtras();
  updateSmartFilterLabel();
  if (product === "car") {
    travelerState.drivers = Math.max(1, travelerState.drivers);
    travelerState.babySeats = Math.max(0, travelerState.babySeats);
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
  renderOffers();
  syncResultsUrl();
}

function goToResults() {
  location.href = `results.html?${criteriaToParams().toString()}`;
}

function setProduct(nextProduct) {
  product = productConfig[nextProduct] ? nextProduct : "flight";
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
  updateOverlayState();
});
els.closeCalendar?.addEventListener("click", () => {
  els.calendarPanel.hidden = true;
  updateOverlayState();
});
els.prevMonth?.addEventListener("click", (event) => {
  event.stopPropagation();
  calendarMonthDate = new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth() - 1, 1);
  renderCalendar();
});
els.nextMonth?.addEventListener("click", (event) => {
  event.stopPropagation();
  calendarMonthDate = new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth() + 1, 1);
  renderCalendar();
});
els.tripTypeTrigger?.addEventListener("click", () => {
  if (!els.tripTypePanel) return;
  els.tripTypePanel.hidden = !els.tripTypePanel.hidden;
  updateOverlayState();
});
els.closeTripType?.addEventListener("click", () => {
  if (els.tripTypePanel) els.tripTypePanel.hidden = true;
  updateOverlayState();
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
  updateOverlayState();
  updateResults();
});
els.priceLegend?.addEventListener("click", (event) => {
  event.stopPropagation();
  const button = event.target.closest("[data-calendar-trip]");
  const directButton = event.target.closest("[data-calendar-direct]");
  const flexButton = event.target.closest("[data-calendar-flex]");
  if (!button && !directButton && !flexButton) return;
  if (flexButton) {
    const candidates = Array.from({ length: 8 }, (_, index) => new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth() + index, 1));
    candidates.sort((a, b) => {
      const avg = (month) => Array.from({ length: 7 }, (_, index) => priceFor(new Date(month.getFullYear(), month.getMonth(), index + 8))).reduce((sum, price) => sum + price, 0) / 7;
      return avg(a) - avg(b);
    });
    calendarMonthDate = candidates[0];
    selecting = "start";
    renderCalendar();
    updateOverlayState();
    return;
  }
  if (directButton) {
    if (els.directFlights) els.directFlights.checked = !els.directFlights.checked;
    renderCalendar();
    updateResults();
    return;
  }
  tripType = button.dataset.calendarTrip;
  if (tripType === "oneway") {
    els.endDate.value = "";
    selecting = "start";
  }
  updateTripTypeText();
  renderCalendar();
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
els.productExtraOptions?.addEventListener("input", (event) => {
  const input = event.target.closest("[data-car-extra]");
  if (!input) return;
  const key = input.dataset.carExtra;
  carState[key] = input.type === "checkbox" ? input.checked : input.value;
  syncResultsUrl();
});
els.productExtraOptions?.addEventListener("change", (event) => {
  const input = event.target.closest("[data-car-extra]");
  if (!input) return;
  const key = input.dataset.carExtra;
  carState[key] = input.type === "checkbox" ? input.checked : input.value;
  if (product === "car" && !carState.differentOffice && els.origin && els.dest) els.dest.value = els.origin.value;
  updateResults();
});
els.productExtraOptions?.addEventListener("click", (event) => {
  event.stopPropagation();
  const seatButton = event.target.closest("[data-car-seat]");
  if (!seatButton) return;
  travelerState.babySeats = Math.max(0, travelerState.babySeats + Number(seatButton.dataset.carSeat));
  updateResults();
});
document.addEventListener("pointerdown", (event) => {
  if (!document.body.classList.contains("flyvero-overlay-open")) return;
  if (isInsideOpenPanel(event.target)) return;
  closeOpenPanels();
  event.preventDefault();
  event.stopPropagation();
}, true);
els.clearDates?.addEventListener("click", () => {
  els.startDate.value = "";
  els.endDate.value = "";
  selecting = "start";
  updateResults();
});
els.applyDates?.addEventListener("click", () => {
  if (els.startDate.value && (els.endDate.value || (product === "flight" && tripType !== "roundtrip"))) els.calendarPanel.hidden = true;
  updateOverlayState();
  updateResults();
});
els.calendarGrid?.addEventListener("click", (event) => {
  event.stopPropagation();
  const monthButton = event.target.closest("[data-month-shift]");
  if (monthButton) {
    calendarMonthDate = new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth() + Number(monthButton.dataset.monthShift), 1);
    renderCalendar();
    updateOverlayState();
    return;
  }
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
  if (els.calendarPanel) els.calendarPanel.hidden = false;
  updateResults();
  if (els.calendarPanel) els.calendarPanel.hidden = false;
  updateOverlayState();
});
els.travelerTrigger?.addEventListener("click", () => {
  if (!els.travelerPanel) return;
  els.travelerPanel.hidden = !els.travelerPanel.hidden;
  renderTravelerPanel();
  updateOverlayState();
});
els.travelerPanel?.addEventListener("click", (event) => {
  event.stopPropagation();
  const button = event.target.closest("[data-traveler]");
  if (!button) return;
  const key = button.dataset.traveler;
  const step = Number(button.dataset.step);
  const min = Number(button.dataset.min || (key === "adults" ? 1 : 0));
  travelerState[key] = Math.max(min, travelerState[key] + step);
  updateResults();
  if (els.travelerPanel) els.travelerPanel.hidden = false;
  updateOverlayState();
});
els.travelerPanel?.addEventListener("change", (event) => {
  event.stopPropagation();
  const cabin = event.target.closest("[data-traveler-cabin]");
  if (!cabin) return;
  travelerState.cabin = cabin.value;
  updateResults();
  if (els.travelerPanel) els.travelerPanel.hidden = false;
  updateOverlayState();
});
document.addEventListener("click", (event) => {
  const timeField = event.target.closest(".extra-time");
  if (timeField && !event.target.matches("select")) {
    const select = timeField.querySelector("select");
    select?.focus();
    select?.showPicker?.();
  }
  if (!event.target.closest(".origin-wrap") && els.originSuggest) els.originSuggest.hidden = true;
  if (!event.target.closest(".destination-wrap") && els.destSuggest) els.destSuggest.hidden = true;
  if (!event.target.closest(".travelers-wrap") && els.travelerPanel) els.travelerPanel.hidden = true;
  if (!event.target.closest(".trip-options") && els.tripTypePanel) els.tripTypePanel.hidden = true;
  if (!event.target.closest(".date-wrap") && els.calendarPanel && !els.calendarPanel.hidden && !event.target.closest(".calendar-panel")) els.calendarPanel.hidden = true;
  updateOverlayState();
});
[els.origin, els.dest, els.travelers, els.priceFilter, els.sortFilter, els.flexFilter, els.directFlights].forEach((control) => {
  control?.addEventListener("input", updateResults);
  control?.addEventListener("change", updateResults);
});
els.resetFilters?.addEventListener("click", () => {
  if (els.priceFilter) els.priceFilter.value = "900";
  if (els.sortFilter) els.sortFilter.value = "smart";
  if (els.flexFilter) els.flexFilter.checked = true;
  updateResults();
});
els.languageSelects?.forEach((select) => {
  select.addEventListener("change", () => {
    currentLang = select.value;
    localStorage.setItem("flyveroLang", currentLang);
    applyStaticTranslations();
    updateResults();
  });
});

const cookieBanner = document.querySelector("#cookieBanner");
const acceptCookies = document.querySelector("#acceptCookies");
if (cookieBanner && localStorage.getItem("flyveroCookieConsent") !== "accepted") {
  cookieBanner.hidden = false;
}
acceptCookies?.addEventListener("click", () => {
  localStorage.setItem("flyveroCookieConsent", "accepted");
  if (cookieBanner) cookieBanner.hidden = true;
});

function renderProductExtras() {
  if (!els.productExtraOptions) return;
  const showCar = product === "car";
  els.productExtraOptions.hidden = !showCar;
  if (!showCar) {
    els.productExtraOptions.innerHTML = "";
    return;
  }
  els.productExtraOptions.innerHTML = `
    <div class="car-time-title">${t("options")}</div>
    <label class="extra-check return-office-toggle">
      <input type="checkbox" data-car-extra="differentOffice" ${carState.differentOffice ? "checked" : ""} />
      ${t("differentOffice")}
    </label>
    <div class="car-time-row">
      <label class="extra-time pickup-time-field ${carState.pickupTime ? "has-time" : ""}">
        <span>${t("pickup")}</span>
        <strong class="car-time-value">${carState.pickupTime || ""}</strong>
        <select data-car-extra="pickupTime">${timeOptions(carState.pickupTime)}</select>
      </label>
      <label class="extra-time return-time-field ${carState.returnTime ? "has-time" : ""}">
        <span>${t("returnOffice")}</span>
        <strong class="car-time-value">${carState.returnTime || ""}</strong>
        <select data-car-extra="returnTime">${timeOptions(carState.returnTime)}</select>
      </label>
    </div>
  `;
}

wireSuggest(els.origin, els.originSuggest);
wireSuggest(els.dest, els.destSuggest);
applyStaticTranslations();
applyCriteriaFromUrl();
renderCalendar();
updateResults();





