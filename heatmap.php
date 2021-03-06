<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Space Hero</title>
    <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


  <!--Maps--->
      
      <script src="defaultheatmap.js"></script>

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-33848682-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-33848682-1');
    </script>

    <meta charset="utf-8">
    <meta name="description" content="Simplest possible examples of HTML, CSS and JavaScript.">
    <meta name="author" content="//samdutton.com">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta itemprop="name" content="simpl.info: simplest possible examples of HTML, CSS and JavaScript">
    <meta itemprop="image" content="/images/icons/icon192.png">
    <meta id="theme-color" name="theme-color" content="#fff">



  <link rel="stylesheet" type="text/css" href="home.css">

    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
   
    <?php
      $servername = "localhost";
      $username = "id7311462_ericmizuta";
      $password = "eric1234";
      $dbname   = "id7311462_spacechimps";

      // Create connection
      $conn = new mysqli($servername, $username, $password, $dbname);

      // Check connection
      if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
      } 


      $sql = "SELECT Cli_CoordX, Cli_CoordY FROM Cliente";

      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
          // output data of each row
          while($row = $result->fetch_assoc()) {

              echo "<p class='infocord'>".$row["Cli_CoordX"]."</p>";
              echo "<span class='cord2'>" .$row["Cli_CoordY"]."</span>";

          }

      } else {
          echo "0 results";
      }
      $conn->close();
    ?>


<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><img src="firepin.png" width="40px" height="40px"></a>
      <span><p>Space Hero</p></span>
      <div class="ham">
          <img src="hamburger.png" width="40px" height="40px">
      </div>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Space Hero</a></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Wildfire history <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#"> Wildfire in your location  </a></li>
          <li><a href="#"> Nacional records </a></li>
          <li><a href="#"> Environmental impact </a></li>
        </ul>
      </li>
      <li><a href="#">Ranking</a></li>
      <li><a href="#">About us</a></li>


    </ul>

    <ul class="nav navbar-nav navbar-right">
      <li class="login-toggle">
        <a href="#"><span class="glyphicon glyphicon-user"></span> Sign up</a>
      </li>

      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>

    <div class="content-login-v2" style="display: none;">
          <div class="center-content-login"> 
                  <div class="login-modal">
                      <h2 class="title-login">Create your new account</h2>
                      <h3 class="sub-title-login"></h3>
                      <div class="email-box"> 
                        <p>Enter your E-mail </p>
                        <input name="email" id="email" title="Email" value="" type="text">
                      </div>
                      <div class="password-box"> 
                          <p> Enter your Password </p>
                          <input name="email" id="email" title="Email" value="" type="text">
                          <button type="submit" title="Submit" class="button btn-loginv2 btn btn-default">Continue</button>
                      </div>
                      <p class="style-line"><span>Login with</span></p>
                  </div>
                  <div class="login-buttons">
                      <button type="button" title="facebook-login" class="button btn btn-default facebook-login"><span></span>Facebook</button>
                      <button type="button" title="gmail-login" class="button btn btn-default gmail-login"><span></span>Gmail</button>
                  </div>
                  <a href="#" class="help">Need help?</a>
            </div>
          </div>
  </div>
</nav>

  <h4> Be a hero, the word need you!</h4>
    <p class="space-hero"> Space Hero is a crowdsourcing web app, thats why, he needs you to exist. </p>

<p class="botoesemergencia">
 <button type="button" class="btn btn-danger" id="reportbtn">Report an emergency</button> 
    <button style="margin:8px;" type="button" class="btn btn-warning">Verify incident</button>
</p>
  
<div class="container">
    <div class="mapa">
      
      <div id="map" style="width:100%;height:400px;"></div>

        

    </div>
</div>

<div class="container fotos-funcionalidade">
  <h2 class="progress-title">Coming soon</h2>
      <div class="logos">
        <img class="col-xs-4" src="pinwind.png">
        <img class="col-xs-4" src="aquapin.jpg">
        <img class="col-xs-4" src="pinthiev.png">
      </div>
</div>
<div class="container">
  <h2>Progress Bar With Label</h2>
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">
      70%
    </div>
  </div>
</div>
<div class="container footer-container">
  <div class="col-xs-12 col-md-3 footer-imagem">
    <img class="foto-nasa" src="nasa.jpg" width="200" height="200">
  </div>
  <div class="col-xs-12 col-md-9 footer-developers">
    <div class="footer-time">
      <h4>Developed by:</h4>
      <p>Alex Barbosa</p>
      <p>Eric Mizuta</p>
      <p>Luiz Guilherme</p>
      <p>Marcos Ewbank</p>
      <p>Otavio Glycerio</p>
    </div>  
      <div class="footer-texto">
        <h4>SpaceChimps</h4>
        <p>#SpaceAppsSP</p>
        <p>#SpaceApps</p>
      </div>
  </div>
</div>


    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_SSFUwIdOxIZcxbXS3kFPQYTakqPP6Ek&callback=initMap">
    </script>
  </body>
</html>



