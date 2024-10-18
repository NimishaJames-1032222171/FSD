<?php
include 'db.php';

// Get data from POST request
$passengerName = $_POST['passenger_name'];
$fromLocation = $_POST['from'];
$toLocation = $_POST['to'];
$departureDate = $_POST['departure_date'];
$arrivalDate = $_POST['arrival_date'];
$phoneNumber = $_POST['phone'];
$email = $_POST['email'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO passengers (passenger_name, `from`, `to`, departure_date, arrival_date, phone, email) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $passengerName, $fromLocation, $toLocation, $departureDate, $arrivalDate, $phoneNumber, $email);

// Execute the query
if ($stmt->execute()) {
    $message = "New passenger inserted successfully!";
} else {
    $message = "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Passenger Result</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="container">
        <h2><?php echo $message; ?></h2>
        <p><a href='view.php'>View Passengers</a></p>
        <p><a href='insert.php'>Insert Another Passenger</a></p>
    </div>
</body>
</html>
