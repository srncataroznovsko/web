// Data z minulých let
const flights = [
  {
    title: "Hustiko-Solanec",
    lat: 49.42643,
    lng: 18.22067,
    date: "14. června 2026",
    fawnsFound: 19,
    areaHa: 68.7,
    note: "Spolupráce 2 dronů"
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const mapElement = document.getElementById("flight-map");
  if (!mapElement) return;

  // Souřadnice centra: Rožnov pod Radhoštěm
  const centerRoznov = [49.4585, 18.1430];
  const map = L.map("flight-map", {
    scrollWheelZoom: false // Zabránění nechtěnému zoomování při scrollování stránky
  }).setView(centerRoznov, 12);

  // Umožnit zoom kolečkem po kliknutí na mapu
  map.on("focus", () => map.scrollWheelZoom.enable());
  map.on("blur", () => map.scrollWheelZoom.disable());

  // Podkladová mapa OpenStreetMap (bez nutnosti API klíče)
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> přispěvatelé'
  }).addTo(map);

  // Vlastní zelená ikona špendlíku s motivem
  const fawnIcon = L.divIcon({
    className: "custom-leaflet-marker",
    html: `
      <div class="marker-pin shadow-sm">
        <i class="bi bi-geo-alt-fill"></i>
      </div>
    `,
    iconSize: [36, 42],
    iconAnchor: [18, 42],
    popupAnchor: [0, -38]
  });

  // Přidání bodů do mapy
  const markers = [];
  flights.forEach((flight) => {
    const popupContent = `
      <div class="flight-popup">
        <div class="flight-popup-header">
          <span class="badge bg-success-subtle text-success-emphasis mb-1">
            <i class="bi bi-calendar-event me-1"></i>${flight.date}
          </span>
          <h6 class="fw-bold mb-1 text-nature-primary">${flight.title}</h6>
        </div>
        <div class="flight-popup-body py-2">
          <div class="d-flex align-items-center mb-2 p-2 bg-light rounded-3">
            <div class="fawn-count-badge me-2">
              <span class="fs-4 fw-bold text-success">${flight.fawnsFound}</span>
            </div>
            <div>
              <div class="fw-semibold small text-dark">Nalezeno srnčat</div>
              <small class="text-muted">bezpečně vyneseno mimo seč</small>
            </div>
          </div>
          <div class="small text-muted mb-2">
            ${flight.areaHa?'<div><i class="bi bi-bounding-box me-1 text-success"></i> <strong>Prohledaná plocha:</strong>'+flight.areaHa+' ha</div>':""}
          </div>
          <p class="small text-secondary mb-0 border-top pt-2 fst-italic">
            "${flight.note}"
          </p>
        </div>
      </div>
    `;

    const marker = L.marker([flight.lat, flight.lng], { icon: fawnIcon })
      .addTo(map)
      .bindPopup(popupContent);

    markers.push(marker);
  });

  // Spočítáme a dynamicky aktualizujeme souhrnné statistiky na stránce, pokud existují elementy
  const totalFawnsEl = document.getElementById("stat-total-fawns");
  const totalFlightsEl = document.getElementById("stat-total-flights");
  const totalAreaEl = document.getElementById("stat-total-area");

  if (totalFawnsEl) {
    const totalFawns = flights.reduce((sum, f) => sum + f.fawnsFound, 0);
    totalFawnsEl.textContent = totalFawns;
  }
  if (totalFlightsEl) {
    totalFlightsEl.textContent = flights.length;
  }
  if (totalAreaEl) {
    const totalArea = flights.reduce((sum, f) => sum + f.areaHa, 0);
    totalAreaEl.textContent = `${totalArea.toFixed(1)} ha`;
  }
});
