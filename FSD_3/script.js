document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirmPassword').value.trim();
    let errorMessages = document.getElementById('errorMessages');
    let errors = [];

    // Username validation
    if (username === '') {
        errors.push('Username cannot be empty.');
    }

    // Email validation (simple regex for this case)
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        errors.push('Invalid email format.');
    }

    // Phone number validation
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        errors.push('Phone number must be 10 digits.');
    }

    // Password validation
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$&]).{7,}$/;
    if (!passwordRegex.test(password)) {
        errors.push('Password must be at least 7 characters long, contain one capital letter, one number, and one special character from @#$&.');
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        errors.push('Passwords do not match.');
    }

    // Display error messages or success
    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
    } else {
        errorMessages.innerHTML = '';
        alert('Registration successful!');
        // You can add form submission logic here
    }
});
