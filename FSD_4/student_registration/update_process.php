<!-- update_process.php -->
<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = mysqli_real_escape_string($conn, $_POST['id']);
    $first_name = mysqli_real_escape_string($conn, $_POST['first_name']);
    $last_name = mysqli_real_escape_string($conn, $_POST['last_name']);
    $roll_no = mysqli_real_escape_string($conn, $_POST['roll_no']);
    $contact_number = mysqli_real_escape_string($conn, $_POST['contact_number']);

    $sql = "UPDATE students SET first_name='$first_name', last_name='$last_name', roll_no='$roll_no', contact_number='$contact_number' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        header("Location: view.php");
    } else {
        echo "Error updating record: " . $conn->error;
    }

    $conn->close();
}
?>
