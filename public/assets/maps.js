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
    streetViewControl: false,
    draggable: false,
    center: centerLocation,
    styles: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#4d4946"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}]
  };

  // MAP INSTANCE
  //
  var map = document.getElementById(mapId);
  var gMap = new google.maps.Map(map, mapOptions);

  var iconMarker = {
    // MAP INSTANCE
    //
    path: "M19.798,25.145c0.286,0.345,0.744,0.573,1.202,0.573s0.916-0.229,1.202-0.573,c0.801-1.029,8.067-10.242,8.067-14.875C30.27,5.176,26.092,1,21,1s-9.27,4.176-9.27,9.27C11.73,14.903,18.94,24.115,19.798,25.145z, M21,4.089c3.376,0,6.18,2.747,6.18,6.18c0,2.345-3.375,7.667-6.18,11.385c-2.747-3.719-6.179-9.042-6.179-11.385,C14.821,6.836,17.624,4.089,21,4.089z M23.861,10.955c0-1.602-1.26-2.86-2.861-2.86c-1.602,0-2.861,1.259-2.861,2.86,c0,1.603,1.259,2.862,2.861,2.862C22.602,13.817,23.861,12.5,23.861,10.955z M22.645,30.988l7.808-7.809,c0.454-0.455,0.454-1.189,0-1.644s-1.19-0.454-1.644,0L21,29.345l-7.808-7.808c-0.454-0.454-1.19-0.454-1.644,0,c-0.454,0.454-0.454,1.189,0,1.645l7.808,7.808l-7.808,7.807c-0.454,0.455-0.454,1.19,0,1.646c0.227,0.227,0.524,0.341,0.822,0.341,c0.297,0,0.595-0.114,0.821-0.341L21,32.632l7.809,7.808c0.227,0.228,0.523,0.342,0.82,0.342c0.298,0,0.596-0.114,0.822-0.342,c0.453-0.453,0.453-1.189,0-1.644L22.645,30.988z",
    fillColor: '#00FF80',
    fillOpacity: 1,
    anchor: new google.maps.Point(21,30),
    strokeWeight: 0,
    scale: 2
  }

  // MARKERS
  //
  var marker01 = new google.maps.Marker({
    position: location01,
    map: gMap,
    icon: iconMarker
  });

  var marker02 = new google.maps.Marker({
    position: location02,
    map: gMap,
    icon: iconMarker
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


$('.pathcard').on('shown.bs.collapse', function (e) {
  $('html, body').animate({
    scrollTop: $(this).offset().top-175
  }, 500);
})



$('.pathcard').on('hide.bs.collapse', function (e) {
  $(this).prev().find('i.icon-tem_arrow-down').toggleClass('hide');
  $(this).prev().find('i.icon-tem_arrow-up').toggleClass('hide');
  $(this).prev().find('h3').toggleClass('open');
})
