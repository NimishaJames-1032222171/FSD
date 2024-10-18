<?php
include 'db.php';

$sql = "SELECT * FROM books";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>View Books</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="view-container">
        <h2>Book Records</h2>
        <table>
            <tr>
                <th>Book Name</th>
                <th>ISBN No</th>
                <th>Book Title</th>
                <th>Author Name</th>
                <th>Publisher Name</th>
                <th>Actions</th>
            </tr>
            <?php
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr>
                            <td>{$row['book_name']}</td>
                            <td>{$row['isbn_no']}</td>
                            <td>{$row['book_title']}</td>
                            <td>{$row['author_name']}</td>
                            <td>{$row['publisher_name']}</td>
                            <td>
                                <form action='delete.php' method='POST' style='display:inline;'>
                                    <input type='hidden' name='isbn_no' value='{$row['isbn_no']}'>
                                    <input type='submit' value='Delete' onclick='return confirm(\"Are you sure you want to delete this book?\")'>
                                </form>
                                <form action='update.php' method='POST' style='display:inline;'>
                                    <input type='hidden' name='isbn_no' value='{$row['isbn_no']}'>
                                    <input type='submit' value='Update'>
                                </form>
                            </td>
                          </tr>";
                }
            } else {
                echo "<tr><td colspan='6'>No records found</td></tr>";
            }
            ?>
        </table>
        <br>
        <a href="insert.php">Insert New Book</a>
    </div>
</body>
</html>
