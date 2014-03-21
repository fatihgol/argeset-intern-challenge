
var destinationMapCenter = new google.maps.LatLng(41.026313, 29.053702);

var destinationMapZoom = 12;


var destinationMapZoomMax = 16;
var destinationMapZoomMin = 8;

var argesetMapOptions = { 
		  center: destinationMapCenter, 
          zoom: destinationMapZoom,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
		  maxZoom:destinationMapZoomMax,
		  minZoom:destinationMapZoomMin,
		  panControl: false,
		  mapTypeControl: false,
};

var argesetMap;

google.maps.event.addDomListener(window, 'load', loadargesetMap);

function loadargesetMap() {
	
argesetMap = new google.maps.Map(document.getElementById("argeset-demo"), argesetMapOptions);	


loadMapMarkers();

}

function loadMapMarkers (){

var markerPositionGlastonbury = new google.maps.LatLng(41.015820, 29.073671);


markerGlastonbury = new google.maps.Marker({
      
	  position: markerPositionGlastonbury,
      map: argesetMap,
      title: 'Argeset Address',
});


}
