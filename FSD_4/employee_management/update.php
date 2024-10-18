<?php
include 'db.php';

if (isset($_GET['employee_id'])) {
    $employeeID = $_GET['employee_id'];
    
    // Fetch existing employee data
    $sql = "SELECT * FROM employees WHERE employee_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $employeeID);
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
    <title>Edit Employee</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="container">
        <h2>Edit Employee Details</h2>
        <form action="update_process.php" method="POST">
            <input type="hidden" name="employee_id" value="<?php echo $row['employee_id']; ?>">
            <label>Employee Name:</label>
            <input type="text" name="employee_name" value="<?php echo $row['employee_name']; ?>" required><br>

            <label>Department Name:</label>
            <input type="text" name="department_name" value="<?php echo $row['department_name']; ?>" required><br>

            <label>Phone Number:</label>
            <input type="text" name="phone_number" value="<?php echo $row['phone_number']; ?>" required><br>

            <label>Joining Date:</label>
            <input type="date" name="joining_date" value="<?php echo $row['joining_date']; ?>" required><br> <!-- Updated to have the same style -->

            <input type="submit" value="Update Employee">
        </form>
    </div>
</body>
</html>
