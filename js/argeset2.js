
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
  url: 'data:image/png;base64,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',
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

