<?php
include 'db.php';

// Server-side validation
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = mysqli_real_escape_string($conn, $_POST['id']);
    $passengerName = mysqli_real_escape_string($conn, $_POST['passenger_name']);
    $fromLocation = mysqli_real_escape_string($conn, $_POST['from']);
    $toLocation = mysqli_real_escape_string($conn, $_POST['to']);
    $phoneNumber = mysqli_real_escape_string($conn, $_POST['phone']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $departureDate = mysqli_real_escape_string($conn, $_POST['departure_date']);
    $arrivalDate = mysqli_real_escape_string($conn, $_POST['arrival_date']);

    // Update the record
    $sql = "UPDATE passengers SET passenger_name='$passengerName', `from`='$fromLocation', `to`='$toLocation', phone='$phoneNumber', email='$email', departure_date='$departureDate', arrival_date='$arrivalDate' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        $message = "Passenger record updated successfully.";
    } else {
        $message = "Error updating record: " . $conn->error;
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Update Passenger Result</title>
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
