<?php
include 'db.php';

// Fetch employee records from the database
$sql = "SELECT * FROM employees";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>View Employees</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="view-container">
        <h2>Employee Details</h2>

        <table>
            <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Department Name</th>
                <th>Phone Number</th>
                <th>Joining Date</th>
                <th>Actions</th>
            </tr>

            <?php if ($result->num_rows > 0): ?>
                <?php while($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?php echo $row['employee_id']; ?></td>
                        <td><?php echo $row['employee_name']; ?></td>
                        <td><?php echo $row['department_name']; ?></td>
                        <td><?php echo $row['phone_number']; ?></td>
                        <td><?php echo $row['joining_date']; ?></td>
                        <td>
                            <a href="update.php?employee_id=<?php echo $row['employee_id']; ?>">Update</a> |
                            <a href="delete.php?employee_id=<?php echo $row['employee_id']; ?>" onclick="return confirm('Are you sure you want to delete this employee?');">Delete</a>
                        </td>
                    </tr>
                <?php endwhile; ?>
            <?php else: ?>
                <tr>
                    <td colspan="6">No records found.</td>
                </tr>
            <?php endif; ?>

        </table>

        <br>
        <a href="insert.php">Insert New Employee</a>
    </div>
</body>
</html>

<?php
$conn->close(); // Close the database connection
?>
