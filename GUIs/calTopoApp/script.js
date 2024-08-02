////////////////////////////////////////////// Given Data /////////////////////////////////////////////////////////////

const geoData = [
	{ location: "Kolkata", sheetno: "8X1C1", latitude: 22.505, longitude: 88.09 },
	{ location: "NewYork", sheetno: "9F7G", latitude: 43.0, longitude: -75.0 },
	{ location: "Africa", sheetno: "A31P", latitude: 22.505, longitude: 87.09 },
	{ location: "AnyName", sheetno: "XP10", latitude: 10.98, longitude: 68.09 },
];

////////////////////////////////////////////// Map View ////////////////////////////////////////////////////////////////

// var OSM = L.tileLayer(
// 	"https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.{ext}",
// 	{
// 		minZoom: 0,
// 		maxZoom: 20,
// 		attribution:
// 			'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// 		ext: "png",
// 	}
// );

var OSM02 = L.tileLayer(
	"https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
	{
		attribution:
			"&copy; Esri &mdash; National Geographic, USGS, NASA, ESA, NOAA",
		maxZoom: 12,
	}
);

var greenIcon = L.icon({
	iconUrl: "redMarker.svg",
	iconSize: [38, 38], // size of the icon
	iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

// Add a submit button and if pressed it will send the inputs with id "lat" and "lon" to the marker in the javascript to plot it in the map
let map, marker;

function initMap() {
	console.log("JavaScript is initiated");
	map = L.map("map").setView([0, 0], 2);
	// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
	OSM02.addTo(map);
	marker = L.marker([0, 0]).addTo(map);
	marker.bindPopup("<small>Hi there &#128512;</small>").openPopup();
}

function updateMarker() {
	const lat = document.getElementById("lat").value;
	const lon = document.getElementById("lon").value;
	const outputBox = document.getElementById("output-box");

	if (/^-?\d*\.?\d*$/.test(lat) && /^-?\d*\.?\d*$/.test(lon)) {
		const latNum = parseFloat(lat);
		const lonNum = parseFloat(lon);

		if (!isNaN(latNum) && !isNaN(lonNum)) {
			marker.setLatLng([latNum, lonNum]);
			map.setView([latNum, lonNum], 5);

			// Compare with geoData
			const matchedLocation = geoData.find(
				(item) =>
					Math.abs(item.latitude - latNum) < 0.01 &&
					Math.abs(item.longitude - lonNum) < 0.01
			);

			if (matchedLocation) {
				marker.bindPopup(`<b>${matchedLocation.location}</b>`).openPopup();
				outputBox.value = matchedLocation.sheetno;
			} else {
				marker.bindPopup("No Data").openPopup();
				outputBox.value = "No Data";
			}
		} else {
			alert("Please enter valid numeric values for latitude and longitude.");
		}
	} else {
		alert(
			"Please enter only numbers, decimal points, or minus signs for latitude and longitude."
		);
	}
}

document.getElementById("submit-btn").addEventListener("click", updateMarker);

// Call initMap when the page loads
window.onload = initMap;
