<!-- update.php -->
<?php
include 'db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "SELECT * FROM students WHERE id = $id";
    $result = $conn->query($sql);

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
    <title>Edit Student</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="container">
        <h2>Edit Student Details</h2>
        <form action="update_process.php" method="POST">
            <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
            First Name: <input type="text" name="first_name" value="<?php echo $row['first_name']; ?>" required><br><br>
            Last Name: <input type="text" name="last_name" value="<?php echo $row['last_name']; ?>" required><br><br>
            Roll No/ID: <input type="text" name="roll_no" value="<?php echo $row['roll_no']; ?>" required><br><br>
            Contact Number: <input type="text" name="contact_number" value="<?php echo $row['contact_number']; ?>" required><br><br>
            <input type="submit" value="Update">
        </form>
        <br>
        <a href="view.php">View Students</a>
    </div>
</body>
</html>
