// Marker Locations
var marker,i,locations=[{name:"Kielder Water and Forest Park",lat:55.2341,lng:-62.5825},
                        {name:"Hardangervidda National Park",lat:60.1054,lng:7.6081},
                        {name:"Kaldoaivi Wilderness Area",lat:69.7309,lng:26.6327},
                        {name:"Naotak National Preserve",lat:67.9762,lng:-161.6432},
                        {name:"Northern Rocky Mountains Provincial Park",lat:58.0314,lng:-123.3241},
                        {name:"Yellowstone National Park",lat:43.9306,lng:-109.9298},
                        {name:"Parque Natural Montes Azules",lat:16.6800,lng:-91.7096},
                        {name:"Paramillio National Park",lat:7.5536,lng:-75.9658},
                        {name:"National Forest Iquiri",lat:-9.0513,lng:-66.3096},
                        {name:"Patagonia National Park",lat:-47.0624,lng:-72.4208}],

//Function to render Google Maps
map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: {
        lat: 47.859517,
        lng: -39.9507504
    }
}), infowindow = new google.maps.InfoWindow(), markers = new Array();

for (i = 0; i < locations.length; i++) marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
    map: map
}), google.maps.event.addListener(marker, "mouseover", function(a, b) {
    return function() {
        var c = '<div id="iw-container" ><div class="iw-title"><h6>' + locations[b].name + '</h6></div></div>';
        infowindow.setContent(c), infowindow.open(map, a);
    };
}(marker, i)), marker.addListener("mouseout", function() {
    infowindow.close();
}), markers.push(marker);

google.maps.event.addListener(map, "click", function(a) {
    infowindow && infowindow.close();
});

$(".rest").hover(function() {
    null != $(this).attr("data-lat") && null != $(this).attr("data-lng") ? (LatLng = {
        lat: parseInt($(this).attr("data-lat")),
        lng: parseInt($(this).attr("data-lng"))
    }, map.setCenter(LatLng), map.setZoom(15), google.maps.event.trigger(markers[$(this).attr("data-index")], "mouseover")) : infowindow && infowindow.close();
}, function() {});