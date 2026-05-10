// toon het huidige jaar in de footer
// haal eerste het huidige jaar op
const currentYear = new Date().getFullYear();
// toon huidige jaar nadien in het element met id "year" in footer
document.getElementById("year").textContent = currentYear;




// js voor leaflet map
let map = L.map('map').setView([51.2235, 4.46595], 14);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let mapIcon = L.icon({
    iconUrl: './assets/icons/marker.png',

    iconSize:    [70, 70],
    iconAnchor:  [32, 80],
    popupAnchor: [0, -80]
});

L.marker([51.22134, 4.46595], {icon: mapIcon}).addTo(map).bindPopup('Deurne, 2100').openPopup();