console.log("im alive");

//My variation + my access token
var latlngs = Array();
var mymap = L.map('mapid').setView([-28.759673, 114.473381], 3);
var marker1 = L.marker([-28.759673, 114.473381]).addTo(mymap);
var marker2 = L.marker([-20.497051, 108.646458]).addTo(mymap);

// var circle = L.circle([-28.759673, 114.473381], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 1.127e+6
// }).addTo(mymap);

latlngs.push(marker1.getLatLng());
latlngs.push(marker2.getLatLng());
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);

L.control.scale().addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWJhbmFyZXMiLCJhIjoiY2szNnlhZWI1MDRsNjNjcGJycmZjaWZqNyJ9.7mp3GEsHEYKVHXbA6gMN7Q',
}).addTo(mymap);


$.getJSON('https://github.com/johan/world.geo.json.git', function (geojson) { // load file
    L.geoJson(geojson, { // initialize layer with data
        style: function (feature) { // Style option
            return {
                'weight': 1,
                'color': 'black',
                'fillColor': 'yellow'
            }
        }
    }).addTo(mymap); // Add layer to map
});


