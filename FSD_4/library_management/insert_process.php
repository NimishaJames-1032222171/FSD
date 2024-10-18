<?php
include 'db.php';

// Get data from POST request
$bookName = $_POST['book_name'];
$isbnNo = $_POST['isbn_no'];
$bookTitle = $_POST['book_title'];
$authorName = $_POST['author_name'];
$publisherName = $_POST['publisher_name'];

// Check if ISBN already exists
$isbnCheckStmt = $conn->prepare("SELECT * FROM books WHERE isbn_no = ?");
$isbnCheckStmt->bind_param("s", $isbnNo);
$isbnCheckStmt->execute();
$isbnCheckResult = $isbnCheckStmt->get_result();

if ($isbnCheckResult->num_rows > 0) {
    // ISBN already exists
    $message = "Error: ISBN number '$isbnNo' already exists. Please enter a different ISBN.";
} else {
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO books (book_name, isbn_no, book_title, author_name, publisher_name) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $bookName, $isbnNo, $bookTitle, $authorName, $publisherName);
    
    // Execute the query
    if ($stmt->execute()) {
        $message = "New book inserted successfully!";
    } else {
        $message = "Error inserting book: " . $stmt->error;
    }
}

// Close connections
$stmt->close();
$isbnCheckStmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Book Result</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="container">
        <h2><?php echo $message; ?></h2>
        <p><a href='view.php'>View Books</a></p>
        <p><a href='insert.php'>Insert Another Book</a></p>
    </div>
</body>
</html>
