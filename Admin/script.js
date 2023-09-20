document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Client-side form validation
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match.');
            return;
        }

        // You can add JavaScript code here to send the registration data to a backend server
        // and handle the registration process.
        // This is just a basic front-end example.

        // After successful registration, you can redirect the user to a login page or dashboard.
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Replace this with your actual login logic.
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        await fetch("https://wastetrade.onrender.com/login", {
            method: "POST",
            body: JSON.stringify({
                name: username,
                password: password
            }),
            headers: {
                "Content-type" : "application/json"
            }
        })

    window.location.href = '/dashboard.html'

        // if (username === 'admin' && password === 'password') {
        //     alert('Login successful!');
        //     // You can redirect the admin to the dashboard or another page here.
        // } else {
        //     alert('Invalid username or password. Please try again.');
        // }
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Your dashboard JavaScript logic goes here
});
