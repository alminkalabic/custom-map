//Coordinate Finder
// var marker = L.marker([0, 0], {
//   draggable: true,
// }).addTo(map);
//   marker.bindPopup('LatLng Marker').openPopup();
//   marker.on('dragend', function(e) {
//   marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
// });

//add html for modal in custom.js
//coordinates, pincolor, title, content
L.marker([65.512963, -46.757813], { icon: yellowIcon }).addTo(map).on('click', function(e) { onClick(bl_t, bl); });

function onClick(title, html) {
    $("#mapModalLabel").html(title);
    $("#content").html(html);
    $('#mapModal').modal();
}