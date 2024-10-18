<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Passenger</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to CSS -->
    <script>
        function validateForm() {
            var passengerName = document.forms["passengerForm"]["passenger_name"].value;
            var fromLocation = document.forms["passengerForm"]["from"].value;
            var toLocation = document.forms["passengerForm"]["to"].value;
            var phoneNumber = document.forms["passengerForm"]["phone"].value;
            var email = document.forms["passengerForm"]["email"].value;
            var departureDate = document.forms["passengerForm"]["departure_date"].value;
            var arrivalDate = document.forms["passengerForm"]["arrival_date"].value;

            if (passengerName == "" || fromLocation == "" || toLocation == "" || phoneNumber == "" || email == "" || departureDate == "" || arrivalDate == "") {
                alert("All fields must be filled out!");
                return false;
            }
            return true;
        }
    </script>
</head>
<body>
    <div class="container">
        <h2>Insert Passenger Details</h2>
        <form name="passengerForm" action="insert_process.php" onsubmit="return validateForm()" method="POST">
            <label>Passenger Name:</label>
            <input type="text" name="passenger_name" required><br>

            <label>From:</label>
            <input type="text" name="from" required><br>

            <label>To:</label>
            <input type="text" name="to" required><br>

            <label>Phone Number:</label>
            <input type="text" name="phone" required><br>

            <label>Email:</label>
            <input type="text" name="email" required><br> <!-- Changed input type from 'email' to 'text' for consistency -->

            <label>Departure Date:</label>
            <input type="date" name="departure_date" required><br>

            <label>Arrival Date:</label>
            <input type="date" name="arrival_date" required><br>

            <input type="submit" value="Insert Passenger">
        </form>
        <br>
        <a href="view.php">View Passengers</a>
    </div>
</body>
</html>
