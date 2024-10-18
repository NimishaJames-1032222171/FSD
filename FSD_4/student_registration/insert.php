<!-- insert.php -->
<?php
include 'db.php';

$message = ""; // Initialize message variable

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = mysqli_real_escape_string($conn, $_POST['first_name']);
    $last_name = mysqli_real_escape_string($conn, $_POST['last_name']);
    $roll_no = mysqli_real_escape_string($conn, $_POST['roll_no']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $confirm_password = mysqli_real_escape_string($conn, $_POST['confirm_password']);
    $contact_number = mysqli_real_escape_string($conn, $_POST['contact_number']);

    // Additional validation
    if ($password !== $confirm_password) {
        $message = "Passwords do not match!";
    } elseif (!is_numeric($contact_number) || strlen($contact_number) != 10) {
        $message = "Invalid contact number!";
    } else {
        // Hashing password for security
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Insert into database
        $sql = "INSERT INTO students (first_name, last_name, roll_no, password, contact_number)
                VALUES ('$first_name', '$last_name', '$roll_no', '$hashed_password', '$contact_number')";

        if ($conn->query($sql) === TRUE) {
            $message = "New record created successfully.";
        } else {
            $message = "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Student</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="container">
        <h2>Student Registration Form</h2>
        <p><?php echo $message; ?></p>
        <a href="index.php">Go Back</a> | <a href="view.php">View Students</a>
    </div>
</body>
</html>
