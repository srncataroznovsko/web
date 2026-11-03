// Inicializace Leaflet mapy pro přehled minulých letů
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

  // Podkladová mapa OpenStreetMap
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> přispěvatelé'
  }).addTo(map);

  // Testovací data minulých letů
  const flights = [
    {
      id: 1,
      title: "Rožnov p. R. – Horní Paseky",
      lat: 49.4725,
      lng: 18.1630,
      date: "28. května 2026",
      fawnsFound: 3,
      areaHa: 14.5,
      pilot: "Martin & tým",
      status: "Úspěšná záchrana",
      note: "Ranní monitoring za úsvitu (04:45) před první senosečí. Detekována a vynesena 3 srnčata."
    },
    {
      id: 2,
      title: "Valašská Bystřice – louky u lesa",
      lat: 49.4185,
      lng: 18.1180,
      date: "2. června 2026",
      fawnsFound: 2,
      areaHa: 9.8,
      pilot: "Tým Rožnovsko",
      status: "Úspěšná záchrana",
      note: "Spolupráce s místním hospodářem. Termovize zachytila dvojčata ukrytá ve vysokém porostu."
    },
    {
      id: 3,
      title: "Dolní Bečva – pod Radhoštěm",
      lat: 49.4570,
      lng: 18.2015,
      date: "10. června 2026",
      fawnsFound: 1,
      areaHa: 7.2,
      pilot: "Martin & dobrovolníci",
      status: "Úspěšná záchrana",
      note: "Rychlý zásah na vyžádání zemědělce před příjezdem sekačky. Jedno mladé srnče včas přeneseno do bezpečí."
    }
  ];

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
            <div><i class="bi bi-bounding-box me-1 text-success"></i> <strong>Prohledaná plocha:</strong> ${flight.areaHa} ha</div>
            <div><i class="bi bi-check-circle me-1 text-success"></i> <strong>Výsledek:</strong> ${flight.status}</div>
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
