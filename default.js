





$(document).ready(function(){

  $(".login-toggle").click(function(){
    $(".content-login-v2").toggle(400);
  });

  $(".ham").click(function(){
    $("ul.nav.navbar-nav").toggle(400);
    $(".navbar-header span p").toggle(50);
  });

 var cont1 = $( "p.infocord" );
        var arry = [];

        for ( var i = 1; i < cont1.length + 1; i++ ) {
            arry.push({
               lat: parseFloat($("p.infocord:nth-of-type(" + i + ")").text()),
               lng: parseFloat($("span.cord2:nth-of-type(" + i + ")").text())
            });
          }

        console.log(arry)

//Get user location 

navigator.geolocation.watchPosition(logPosition);
function logPosition(position) {
  // console.log(position);
  // log(aaa);

  var uluru = {lat: position.coords.latitude, lng: position.coords.longitude};

  map = new google.maps.Map(document.getElementById('map'), {
  center: uluru,
  zoom: 14
  });

  var marker = new google.maps.Marker({
    position: uluru,
     map: map
   });

   // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = arry;





});



