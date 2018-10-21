


var locX, locY = 0;


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

  locX = position.coords.latitude;
  locY = position.coords.longitude;

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
            position: locations,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
  var locations = [
{lat: -9.881, lng: -36.23},
{lat: -9.442, lng: -35.849},
{lat: -30.166, lng: -55.003},
{lat: -30.167, lng: -55.02},
{lat: -23.625, lng: -49.041},
{lat: -20.087, lng: -54.659},
{lat: -20.088, lng: -54.671},
{lat: -12.36, lng: -49.799},
{lat: -12.344, lng: -49.808},
{lat: -11.056, lng: -56.306},
{lat: -11.058, lng: -56.316},
{lat: -11.045, lng: -56.296},
{lat: -11.047, lng: -56.307},
{lat: -11.048, lng: -56.318},
{lat: -5.506, lng: -47.614},
{lat: -5.502, lng: -47.62},
{lat: -4.692, lng: -45.496},
{lat: -4.688, lng: -45.504},
{lat: -4.885, lng: -47.734},
{lat: -4.414, lng: -46.294},
{lat: -4.398, lng: -46.297},
{lat: -4.179, lng: -48.582},
{lat: -4.18, lng: -48.566},
{lat: -4.023, lng: -50.238},
{lat: -4.011, lng: -50.239},
{lat: -4.012, lng: -50.474},
{lat: -3.826, lng: -50.068},
{lat: -3.649, lng: -50.271},
{lat: -3.637, lng: -50.273},
{lat: -3.64, lng: -50.288},
{lat: -3.7, lng: -51.08},
{lat: -3.496, lng: -50.104},
{lat: -3.482, lng: -50.172},
{lat: -3.488, lng: -50.177},
{lat: -3.435, lng: -50.528},
{lat: -3.889, lng: -53.663},
{lat: -3.382, lng: -50.249},
{lat: -3.282, lng: -50.064},
{lat: -3.286, lng: -50.053},
{lat: -3.288, lng: -50.069},
{lat: -3.259, lng: -49.954},
{lat: -3.227, lng: -50.146},
{lat: -3.229, lng: -50.162},
{lat: -3.316, lng: -50.809},
{lat: -3.221, lng: -50.153},
{lat: -3.315, lng: -50.801},
{lat: -3.718, lng: -53.75},
{lat: -3.766, lng: -54.082},
{lat: -2.916, lng: -48.621},
{lat: -2.802, lng: -48.718},
{lat: -3.335, lng: -52.436},
{lat: -3.325, lng: -52.438},
{lat: -3.48, lng: -53.949},
{lat: -3.481, lng: -53.958},
{lat: -3.314, lng: -53.063},
{lat: -2.563, lng: -48.104},
{lat: -2.566, lng: -48.129},
{lat: -3.42, lng: -53.86},
{lat: -2.559, lng: -48.112},
{lat: -2.563, lng: -48.136},
{lat: -3.331, lng: -53.948},
{lat: -2.898, lng: -51.475},
{lat: -3.152, lng: -55.839},
{lat: -2.082, lng: -52.036},
{lat: -2.084, lng: -52.049},
{lat: -1.814, lng: -53.807},
{lat: -1.854, lng: -55.258},
{lat: -1.63, lng: -54.007},
{lat: -1.631, lng: -54.017},
{lat: 1.855, lng: -50.504},
{lat: 1.852, lng: -50.522},
{lat: 1.855, lng: -50.51},
{lat: 1.832, lng: -55.865},
{lat: 1.831, lng: -55.874},
{lat: 4.52, lng: -55.391},
{lat: -34.108, lng: -70.461},
{lat: -33.77, lng: -70.926},
{lat: -52.878, lng: -68.86},
{lat: -9.874, lng: -36.216},
{lat: -25.442, lng: -42.746},
{lat: -2.01, lng: -78.336},
{lat: -2, lng: -78.338},
{lat: 1.872, lng: -55.813},
{lat: -0.802, lng: -47.195},
{lat: -0.805, lng: -47.174},
{lat: -1.951, lng: -50.731},
{lat: -2.563, lng: -48.12},
{lat: -2.566, lng: -48.101},
{lat: -1.813, lng: -53.808},
{lat: -2.079, lng: -52.041},
{lat: -2.088, lng: -52.042},
{lat: -2.915, lng: -48.609},
{lat: -3.255, lng: -48.938},
{lat: -3.248, lng: -48.942},
{lat: -3.25, lng: -48.926},
{lat: -3.329, lng: -52.437},
{lat: -3.636, lng: -50.276},
{lat: -3.638, lng: -50.262},
{lat: -3.649, lng: -50.264},
{lat: -3.921, lng: -49.147},
{lat: -3.923, lng: -49.131},
{lat: -3.696, lng: -51.075},
{lat: -4.396, lng: -46.284},
{lat: -4.411, lng: -46.285},
{lat: -4.408, lng: -46.292},
{lat: -4.411, lng: -46.264},
{lat: -3.416, lng: -53.859},
{lat: -3.802, lng: -51.265},
{lat: -3.478, lng: -53.947},
{lat: -4.691, lng: -45.494},
{lat: -3.889, lng: -51.872},
{lat: -17.662, lng: -60.909},
{lat: -17.664, lng: -60.897},
{lat: -17.666, lng: -60.885},
{lat: -18.033, lng: -61.823},
{lat: -18.035, lng: -61.809},
{lat: -21.177, lng: -55.59},
{lat: -23.049, lng: -53.019},
{lat: -30.577, lng: -59.464},
{lat: -30.579, lng: -59.453},
{lat: 11.623, lng: -70.208},
{lat: -2.001, lng: -78.331},
{lat: -8.207, lng: -38.657},
{lat: -7.333, lng: -44.897},
{lat: -7.336, lng: -44.878},
{lat: -7.334, lng: -44.883},
{lat: -9.054, lng: -35.696},
{lat: -8.013, lng: -43.056},
{lat: -8.016, lng: -43.048},
{lat: -9.215, lng: -35.636},
{lat: -9.217, lng: -35.624},
{lat: -10.076, lng: -42.212},
{lat: -10.076, lng: -42.206},
{lat: -10.661, lng: -40.788},
{lat: -10.86, lng: -40.08},
{lat: -10.912, lng: -40.103},
{lat: -10.89, lng: -41.043},
{lat: -11.4, lng: -42.386},
{lat: -11.995, lng: -38.438},
{lat: -11.495, lng: -42.429},
{lat: -11.595, lng: -42.77},
{lat: -11.597, lng: -42.758},
{lat: -11.812, lng: -42.436},
{lat: -11.949, lng: -42.155},
{lat: -11.95, lng: -42.144},
{lat: -12.131, lng: -41.052},
{lat: -12.234, lng: -40.916},
{lat: -12.357, lng: -40.167},
{lat: -12.359, lng: -40.158},
{lat: -12.065, lng: -42.19},
{lat: -12.078, lng: -42.237},
{lat: -12.302, lng: -40.78},
{lat: -12.622, lng: -40.854},
{lat: -12.623, lng: -40.845},
{lat: -12.538, lng: -42.243},
{lat: -12.575, lng: -42.335},
{lat: -12.092, lng: -45.496},
{lat: -12.096, lng: -45.478},
{lat: -12.817, lng: -41.26},
{lat: -12.875, lng: -42.313},
{lat: -12.322, lng: -45.846},
{lat: -12.322, lng: -45.853},
{lat: -13.596, lng: -39.825},
{lat: -13.939, lng: -39.996},
{lat: -14.292, lng: -41.442},
{lat: -13.933, lng: -45.823},
{lat: -14.052, lng: -45.667},
{lat: -24.201, lng: -49.176},
{lat: -25.606, lng: -42.824},
{lat: -2.399, lng: -44.913},
{lat: -2.402, lng: -44.919},
{lat: -3.543, lng: -39.774},
{lat: -3.545, lng: -39.764},
{lat: -3.105, lng: -43.247},
{lat: -3.108, lng: -43.255}
]

});



$(document).on('click','#reportbtn',function(e) {
  var data ="Cli_CoordX=" + locX + "&" + "Cli_CoordY=" + locY;
  console.log(data)
  $.ajax({
         data: data,
         type: "post",
         url: "insert.php",
         success: function(data){
              alert("Data Save: " + locX);
         }
});
 });
