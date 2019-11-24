console.log("im alive");

var latlngs = Array();
var mymap = L.map('mapid').setView([-28.759673, 114.473381], 13);
var popup = L.popup();

//These are map markers, and pop ups
var marker1 = L.marker([-28.759673, 114.473381]).addTo(mymap);
	marker1.bindPopup("<b>Chapter One:</b><br>July 20, 1866").openPopup();
var marker2 = L.marker([-20.497051, 108.646458]).addTo(mymap);
	marker2.bindPopup("<b>Chapter One:</b><br>July 23, 1866").openPopup();
var marker3 = L.marker([42.250000,-60.583333]).addTo(mymap);
	marker3.bindPopup("<b>Chapter One:</b><br>August 7, 1866").openPopup();
var marker4 = L.marker([27.500000,-72.250000]).addTo(mymap);
	marker4.bindPopup("<b>Chapter One:</b><br>March 5, 1867").openPopup();

//These are lines between markers
latlngs.push(marker1.getLatLng());
latlngs.push(marker2.getLatLng());
latlngs.push(marker3.getLatLng());
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);

// var circle = L.circle([-28.759673, 114.473381], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 1.127e+6
// }).addTo(mymap);


//km and miles scale!!!
L.control.scale().addTo(mymap);

//THIS LOADS THE MAP!!!!!!
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWJhbmFyZXMiLCJhIjoiY2szNnlhZWI1MDRsNjNjcGJycmZjaWZqNyJ9.7mp3GEsHEYKVHXbA6gMN7Q',
}).addTo(mymap);


//coordinate popup
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);

