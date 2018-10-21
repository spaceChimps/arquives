<?php
if(isset($_REQUEST))
{
$servername = "localhost";
$username = "id7311462_ericmizuta";
$password = "eric1234";
$dbname = "id7311462_spacechimps";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
  error_reporting(E_ALL && ~E_NOTICE);

$Cli_CoordX=$_POST['Cli_CoordX'];
$Cli_CoordY=$_POST['Cli_CoordY'];

$sql = "INSERT INTO Cliente (Cli_CoordX, Cli_CoordY)
VALUES ('$Cli_CoordX', '$Cli_CoordY');";


if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
?>