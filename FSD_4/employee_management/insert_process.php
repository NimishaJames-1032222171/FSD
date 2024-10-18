<?php
include 'db.php';

// Get data from POST request
$employeeName = $_POST['employee_name'];
$employeeID = $_POST['employee_id'];
$departmentName = $_POST['department_name'];
$phoneNumber = $_POST['phone_number'];
$joiningDate = $_POST['joining_date'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO employees (employee_name, employee_id, department_name, phone_number, joining_date) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $employeeName, $employeeID, $departmentName, $phoneNumber, $joiningDate);

// Execute the query
if ($stmt->execute()) {
    $message = "New employee inserted successfully!";
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
    <title>Insert Employee Result</title>
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
