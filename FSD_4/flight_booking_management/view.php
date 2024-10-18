<?php
include 'db.php';

// Fetch passenger records from the database
$sql = "SELECT * FROM passengers";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>View Passengers</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="view-container">
        <h2>Passenger Details</h2>

        <table>
            <tr>
                <th>ID</th>
                <th>Passenger Name</th>
                <th>From</th>
                <th>To</th>
                <th>Departure Date</th>
                <th>Arrival Date</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>

            <?php if ($result->num_rows > 0): ?>
                <?php while($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?php echo $row['id']; ?></td>
                        <td><?php echo $row['passenger_name']; ?></td>
                        <td><?php echo $row['from']; ?></td>
                        <td><?php echo $row['to']; ?></td>
                        <td><?php echo $row['departure_date']; ?></td>
                        <td><?php echo $row['arrival_date']; ?></td>
                        <td><?php echo $row['phone']; ?></td>
                        <td><?php echo $row['email']; ?></td>
                        <td>
                            <a href="update.php?id=<?php echo $row['id']; ?>">Update</a> |
                            <a href="delete.php?id=<?php echo $row['id']; ?>" onclick="return confirm('Are you sure you want to delete this passenger?');">Delete</a>
                        </td>
                    </tr>
                <?php endwhile; ?>
            <?php else: ?>
                <tr>
                    <td colspan="9">No records found.</td>
                </tr>
            <?php endif; ?>

        </table>

        <br>
        <a href="insert.php">Insert New Passenger</a>
    </div>
</body>
</html>

<?php
$conn->close(); // Close the database connection
?>
