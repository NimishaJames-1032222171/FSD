<?php
include 'db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    
    // Fetch existing passenger data
    $sql = "SELECT * FROM passengers WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
    } else {
        echo "Record not found.";
        exit;
    }
} else {
    header("Location: view.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit Passenger</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="container">
        <h2>Edit Passenger Details</h2>
        <form action="update_process.php" method="POST">
            <input type="hidden" name="id" value="<?php echo $row['id']; ?>">

            <label>Passenger Name:</label>
            <input type="text" name="passenger_name" value="<?php echo $row['passenger_name']; ?>" required><br>

            <label>From:</label>
            <input type="text" name="from" value="<?php echo $row['from']; ?>" required><br>

            <label>To:</label>
            <input type="text" name="to" value="<?php echo $row['to']; ?>" required><br>

            <label>Phone Number:</label>
            <input type="text" name="phone" value="<?php echo $row['phone']; ?>" required><br>

            <label>Email:</label>
            <input type="text" name="email" value="<?php echo $row['email']; ?>" required><br> <!-- Styled the same way -->

            <label>Departure Date:</label>
            <input type="date" name="departure_date" value="<?php echo $row['departure_date']; ?>" required><br>

            <label>Arrival Date:</label>
            <input type="date" name="arrival_date" value="<?php echo $row['arrival_date']; ?>" required><br>

            <input type="submit" value="Update Passenger">
        </form>
    </div>
</body>
</html>
