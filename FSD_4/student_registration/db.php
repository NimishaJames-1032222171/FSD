<!-- db.php -->
<?php
$servername = "localhost";
$username = "root";
$password = "";  // Change if you've set a root password
$dbname = "student";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
