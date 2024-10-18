<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Employee</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
    <script>
        function validateForm() {
            var employeeName = document.forms["employeeForm"]["employee_name"].value;
            var employeeID = document.forms["employeeForm"]["employee_id"].value;
            var departmentName = document.forms["employeeForm"]["department_name"].value;
            var phoneNumber = document.forms["employeeForm"]["phone_number"].value;
            var joiningDate = document.forms["employeeForm"]["joining_date"].value;

            if (employeeName == "" || employeeID == "" || departmentName == "" || phoneNumber == "" || joiningDate == "") {
                alert("All fields must be filled out!");
                return false;
            }
            return true;
        }
    </script>
</head>
<body>
    <div class="container">
        <h2>Insert Employee Details</h2>
        <form name="employeeForm" action="insert_process.php" onsubmit="return validateForm()" method="POST">
            <label>Employee Name:</label>
            <input type="text" name="employee_name" required><br>

            <label>Employee ID:</label>
            <input type="text" name="employee_id" required><br>

            <label>Department Name:</label>
            <input type="text" name="department_name" required><br>

            <label>Phone Number:</label>
            <input type="text" name="phone_number" required><br>

            <label>Joining Date:</label>
            <input type="date" name="joining_date" required><br> <!-- Updated to have the same style -->

            <input type="submit" value="Insert Employee">
        </form>
        <br>
        <a href="view.php">View Employees</a>
    </div>
</body>
</html>
