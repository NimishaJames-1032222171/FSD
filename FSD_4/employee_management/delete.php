<?php
include 'db.php';

if (isset($_GET['employee_id'])) {
    $employeeID = $_GET['employee_id'];

    // Delete the record
    $sql = "DELETE FROM employees WHERE employee_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $employeeID);
    
    if ($stmt->execute()) {
        $message = "Employee record deleted successfully.";
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
    <title>Delete Employee Result</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="container">
        <h2><?php echo $message; ?></h2>
        <p><a href='view.php'>View Employees</a></p>
        <p><a href='insert.php'>Insert Another Employee</a></p>
    </div>
</body>
</html>
