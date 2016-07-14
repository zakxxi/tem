console.log("maps.js hello");

// MARKERS LOCATIONS
//
var location01 = new google.maps.LatLng(43.531437,3.864179);
var location02 = new google.maps.LatLng(43.632425,3.8636318);

// MAP INIT
//
function init(mapId, centerLocation) {
    var mapOptions = {
        zoom: 15,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        center: centerLocation,
        styles: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#4d4946"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}]
};

// MAP INSTANCE
//
    var map = document.getElementById(mapId);
    var gMap = new google.maps.Map(map, mapOptions);

// MARKERS
//
    var marker01 = new google.maps.Marker({
        position: location01,
        map: gMap,
    });

    var marker02 = new google.maps.Marker({
        position: location02,
        map: gMap,
    });
  }

// UI MAP DISPLAY & CENTER
//
$('#villeneuve-les-maguelone').on('shown.bs.collapse', function (e) {
  init('map_villeneuve-les-maguelone',location01);
})

$('#villeneuve-les-maguelone-bis').on('shown.bs.collapse', function (e) {
  init('map_villeneuve-les-maguelone-bis',location02);
})


// UI CONTROLS
//
$('.pathtitle').on('click', function (e) {
  $('.collapse.in').collapse('hide');
})

$('.pathcard').on('show.bs.collapse', function (e) {
  $(this).prev().find('i.icon-tem_arrow-down').toggleClass('hide');
  $(this).prev().find('i.icon-tem_arrow-up').toggleClass('hide');
  $(this).prev().find('h3').toggleClass('open');
})

$('.pathcard').on('hide.bs.collapse', function (e) {
  $(this).prev().find('i.icon-tem_arrow-down').toggleClass('hide');
  $(this).prev().find('i.icon-tem_arrow-up').toggleClass('hide');
  $(this).prev().find('h3').toggleClass('open');
})
