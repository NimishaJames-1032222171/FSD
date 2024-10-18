<?php
include 'db.php';

// Server-side validation
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = mysqli_real_escape_string($conn, $_POST['id']);
    $book_name = mysqli_real_escape_string($conn, $_POST['book_name']);
    $isbn_no = mysqli_real_escape_string($conn, $_POST['isbn_no']);
    $book_title = mysqli_real_escape_string($conn, $_POST['book_title']);
    $author_name = mysqli_real_escape_string($conn, $_POST['author_name']);
    $publisher_name = mysqli_real_escape_string($conn, $_POST['publisher_name']);

    // Update the record
    $sql = "UPDATE books SET book_name='$book_name', isbn_no='$isbn_no', book_title='$book_title', author_name='$author_name', publisher_name='$publisher_name' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Book record updated successfully. <a href='view.php'>View Books</a>";
    } else {
        echo "Error updating record: " . $conn->error;
    }

    $conn->close();
}
?>
