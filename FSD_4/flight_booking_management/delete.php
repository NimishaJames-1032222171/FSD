<?php
include 'db.php';

if (isset($_GET['id'])) {
    $passengerID = $_GET['id'];

    // Delete the record
    $sql = "DELETE FROM passengers WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $passengerID);
    
    if ($stmt->execute()) {
        $message = "Passenger record deleted successfully.";
    } else {
        $message = "Error deleting record: " . $stmt->error;
    }
    $stmt->close();
    $conn->close();
} else {
    header("Location: view.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Delete Passenger Result</title>
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
