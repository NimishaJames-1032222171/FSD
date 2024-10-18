<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Book</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
    <script>
        function validateForm() {
            var bookName = document.forms["bookForm"]["book_name"].value;
            var isbnNo = document.forms["bookForm"]["isbn_no"].value;
            var bookTitle = document.forms["bookForm"]["book_title"].value;
            var authorName = document.forms["bookForm"]["author_name"].value;
            var publisherName = document.forms["bookForm"]["publisher_name"].value;

            if (bookName == "" || isbnNo == "" || bookTitle == "" || authorName == "" || publisherName == "") {
                alert("All fields must be filled out!");
                return false;
            }
            return true;
        }
    </script>
</head>
<body>
    <div class="container">
        <h2>Insert Book Details</h2>
        <form name="bookForm" action="insert_process.php" onsubmit="return validateForm()" method="POST">
            <label>Book Name:</label>
            <input type="text" name="book_name" required><br>

            <label>ISBN No:</label>
            <input type="text" name="isbn_no" required><br>

            <label>Book Title:</label>
            <input type="text" name="book_title" required><br>

            <label>Author Name:</label>
            <input type="text" name="author_name" required><br>

            <label>Publisher Name:</label>
            <input type="text" name="publisher_name" required><br>

            <input type="submit" value="Insert Book">
        </form>
        <br>
        <a href="view.php">View Books</a>
    </div>
</body>
</html>
