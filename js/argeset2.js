
var style_argeset = [
  {
    "featureType": "administrative",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#303030" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "color": "#4f92c6" }
    ]
  }
];

var style_argeset_zoomed = [
  {
    "featureType": "administrative",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#f3f3f3" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "color": "#4f92c6" }
    ]
  },   {
    "featureType": "poi.park",
	"elementType": "geometry",
    "stylers": [
      { "color": "#FFFF00" }
    ]
  }
];


var styled_argeset = new google.maps.StyledMapType(style_argeset, {name: "Argeset style"});
var styled_argeset_zoomed = new google.maps.StyledMapType(style_argeset_zoomed, {name: "Argeset style zoomed"});

var argesetMapCenter = new google.maps.LatLng(41.026313, 29.053702);

var argesetMapZoom = 9;

var argesetMapZoomMax = 16;
var argesetMapZoomMin = 6;

var argesetMapOptions = { 
		  center: argesetMapCenter, 
          zoom: argesetMapZoom,
		  maxZoom:argesetMapZoomMax,
		  minZoom:argesetMapZoomMin,
		  panControl: false,
		  mapTypeControl: false,
		   mapTypeControlOptions: {
     		mapTypeIds: [ 'map_styles_argeset', 'map_styles_argeset_zoomed']
   		 }
};

var argesetMap;

google.maps.event.addDomListener(window, 'load', loadargesetMap);

function loadargesetMap() {
	
argesetMap = new google.maps.Map(document.getElementById("argeset-map"), argesetMapOptions);	

argesetMap.mapTypes.set('map_styles_argeset', styled_argeset);
argesetMap.mapTypes.set('map_styles_argeset_zoomed', styled_argeset_zoomed);
argesetMap.setMapTypeId('map_styles_argeset');


google.maps.event.addListener(argesetMap, "zoom_changed", function() {
	var newZoom = argesetMap.getZoom();
	if (newZoom > 6){
		argesetMap.setMapTypeId('map_styles_argeset_zoomed');
			}
	else {
		argesetMap.setMapTypeId('map_styles_argeset');
	}

});


loadMapMarkers();

}



function loadMapMarkers (){

var markerPositionArgesetAddress = new google.maps.LatLng(41.015820, 29.073671);

var markerIconArgesetAddress = {
  url: 'icons/argeset.png',
  size: new google.maps.Size(257, 125),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(189, 116)
};

var markerShapeArgesetAddress = {
      coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
      type: 'poly'
};

markerArgesetAddress = new google.maps.Marker({
      position: markerPositionArgesetAddress,
	  map: argesetMap,
      title: 'Argeset İnternet Sitesi',

	  icon: markerIconArgesetAddress,

	  shape: markerShapeArgesetAddress,
	  
	  zIndex:107
});


google.maps.event.addListener(markerArgesetAddress, "click", function (e) {

			window.location = "http://www.argeset.com";

			
});



}


function setZoomWhenMarkerClicked(){
var currentZoom = argesetMap.getZoom();
	if (currentZoom < 7){
			argesetMap.setZoom(7);
	}
}

function resetZindexes (){
	
	markerArgesetAddress.setZIndex(107);
	
}

