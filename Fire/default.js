function myMap(maploc) {
  console.log('maploc');
  console.log(maploc);

  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(28.5146281,-80.6289157), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}



//Get user location 

navigator.geolocation.watchPosition(logPosition);
function logPosition(position) {
  // console.log(position);
  // log(aaa);

  var uluru = {lat: position.coords.latitude, lng: position.coords.longitude};

  map = new google.maps.Map(document.getElementById('map'), {
  center: uluru,
  zoom: 16
	});
  var marker = new google.maps.Marker({position: uluru, map: map});
}




function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}