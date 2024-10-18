<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $isbnNo = $_POST['isbn_no'];
    $result = $conn->query("SELECT * FROM books WHERE isbn_no='$isbnNo'");
    
    if ($result->num_rows == 0) {
        echo "No record found with ISBN: $isbnNo";
        exit;
    }
    $row = $result->fetch_assoc();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Update Book</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="container">
        <h2>Update Book Details</h2>
        <form action="update_process.php" method="POST">
            <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
            <label>Book Name:</label>
            <input type="text" name="book_name" value="<?php echo $row['book_name']; ?>" required><br>

            <label>ISBN No:</label>
            <input type="text" name="isbn_no" value="<?php echo $row['isbn_no']; ?>" required readonly><br> <!-- Read-only for ISBN -->

            <label>Book Title:</label>
            <input type="text" name="book_title" value="<?php echo $row['book_title']; ?>" required><br>

            <label>Author Name:</label>
            <input type="text" name="author_name" value="<?php echo $row['author_name']; ?>" required><br>

            <label>Publisher Name:</label>
            <input type="text" name="publisher_name" value="<?php echo $row['publisher_name']; ?>" required><br>

            <input type="submit" value="Update Book">
        </form>
        <br>
        <a href="view.php">View Books</a>
    </div>
</body>
</html>
