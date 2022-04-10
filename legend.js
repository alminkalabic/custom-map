 /*Legend specific*/
 var legend = L.control({ position: "bottomleft" });
 legend.onAdd = function(map) {
     var div = L.DomUtil.create("div", "legend");

     div.innerHTML += '<div class="l-item"><img src="./marker/marker-1.png" width="22px" class="l-img"/><span class="l-title">Marker name</span></div>';

     return div;
 };

 legend.addTo(map);