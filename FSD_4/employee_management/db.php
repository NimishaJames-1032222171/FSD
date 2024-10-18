<?php
// db.php
$servername = "localhost"; // Usually 'localhost'
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "employee_management"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
