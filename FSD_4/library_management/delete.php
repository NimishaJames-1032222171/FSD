<?php
include 'db.php';

if (isset($_POST['isbn_no'])) {
    $isbnNo = mysqli_real_escape_string($conn, $_POST['isbn_no']);

    // Delete record
    $sql = "DELETE FROM books WHERE isbn_no='$isbnNo'";
    if ($conn->query($sql) === TRUE) {
        echo "Book record deleted successfully. <a href='view.php'>View Books</a>";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
} else {
    header("Location: view.php");
}

$conn->close();
?>
