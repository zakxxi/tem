console.log("maps.js hello")







// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(43.5327, 3.86046),

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [	{	"stylers":[	{"visibility":"on"},	{"saturation":-100},	{"gamma":0.54}	]	},{	"featureType":"road",	"elementType":"labels.icon",	"stylers":[	{"visibility":"off"}	]	},{	"featureType":"water",	"stylers":[	{"color":"#4d4946"}	]	},{	"featureType":"poi",	"elementType":"labels.icon",	"stylers":[	{"visibility":"off"}	]	},{	"featureType":"poi",	"elementType":"labels.text",	"stylers":[	{"visibility":"simplified"}	]	},{	"featureType":"road",	"elementType":"geometry.fill",	"stylers":[	{"color":"#ffffff"}	]	},{	"featureType":"road.local",	"elementType":"labels.text",	"stylers":[	{"visibility":"simplified"}	]	},{	"featureType":"water",	"elementType":"labels.text.fill",	"stylers":[	{"color":"#ffffff"}	]	},{	"featureType":"transit.line",	"elementType":"geometry",	"stylers":[	{"gamma":0.48}	]	},{	"featureType":"transit.station",	"elementType":"labels.icon",	"stylers":[	{"visibility":"off"}	]	},{	"featureType":"road",	"elementType":"geometry.stroke",	"stylers":[	{"gamma":7.18}	]	}	]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var map = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map01 = new google.maps.Map(map, mapOptions);

    // Let's also add a marker while we're at it
    var marker01 = new google.maps.Marker({
        position: new google.maps.LatLng(43.5327, 3.86046),
        map: map01,
        title: 'Hello!'
    });
}

$('.pathcard').on('shown.bs.collapse', function (e) {
    init();
})
/*
$('#villeneuve-les-maguelone').on('show.bs.collapse', function (e) {
    $(this).prev().find("h3").addClass("open");
    $(this).prev().find("i.icon-tem_arrow-down").toggleClass("hide");
    $(this).prev().find("i.icon-tem_arrow-up").toggleClass("hide");
})
$('#villeneuve-les-maguelone').on('hide.bs.collapse', function (e) {
    $(this).prev().find("h3").removeClass("open");
    $(this).prev().find("i.icon-tem_arrow-down").toggleClass("hide");
    $(this).prev().find("i.icon-tem_arrow-up").toggleClass("hide");
})
*/
$('.pathtitle').on('click', function (e) {
    $(this).find("h3").toggleClass("open");
    $(this).find("i.icon-tem_arrow-down").toggleClass("hide");
    $(this).find("i.icon-tem_arrow-up").toggleClass("hide");
})
