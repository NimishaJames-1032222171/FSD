<?php
include 'db.php';

// Server-side validation
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $employeeID = mysqli_real_escape_string($conn, $_POST['employee_id']);
    $employeeName = mysqli_real_escape_string($conn, $_POST['employee_name']);
    $departmentName = mysqli_real_escape_string($conn, $_POST['department_name']);
    $phoneNumber = mysqli_real_escape_string($conn, $_POST['phone_number']);
    $joiningDate = mysqli_real_escape_string($conn, $_POST['joining_date']);

    // Update the record
    $sql = "UPDATE employees SET employee_name='$employeeName', department_name='$departmentName', phone_number='$phoneNumber', joining_date='$joiningDate' WHERE employee_id='$employeeID'";

    if ($conn->query($sql) === TRUE) {
        $message = "Employee record updated successfully.";
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
    <title>Update Employee Result</title>
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
