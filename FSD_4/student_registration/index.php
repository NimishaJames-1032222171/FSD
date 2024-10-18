<!-- index.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Registration</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
    <script>
        function validateForm() {
            var password = document.forms["studentForm"]["password"].value;
            var confirmPassword = document.forms["studentForm"]["confirm_password"].value;
            var contact = document.forms["studentForm"]["contact_number"].value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return false;
            }
            if (isNaN(contact) || contact.length != 10) {
                alert("Enter a valid 10-digit contact number!");
                return false;
            }
            return true;
        }
    </script>
</head>
<body>
    <div class="container">
        <h2>Student Registration Form</h2>
        <form name="studentForm" action="insert.php" onsubmit="return validateForm()" method="POST">
            First Name: <input type="text" name="first_name" required><br><br>
            Last Name: <input type="text" name="last_name" required><br><br>
            Roll No/ID: <input type="text" name="roll_no" required><br><br>
            Password: <input type="password" name="password" required><br><br>
            Confirm Password: <input type="password" name="confirm_password" required><br><br>
            Contact Number: <input type="text" name="contact_number" required><br><br>
            <input type="submit" value="Register">
        </form>
        <br>
        <a href="view.php">View Registered Students</a>
    </div>
</body>
</html>
