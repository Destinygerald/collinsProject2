document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        
        const agencyName = document.getElementById('agency-name').value;
        const contactPerson = document.getElementById('contact-person').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        await fetch("https://wastetrade.onrender.com/register", {
        method: "POST",
        body: JSON.stringify({
            name: agencyName,
            email: email,
            password: password,
            userType: 'agent'
        }),
        headers: {
            "Content-type" : "application/json"
        }
    })

        window.location.href = '/login.html'


        // Send registration data to the server or perform any necessary validation.
        // You can make an AJAX request here to send data to your backend.

        // For demonstration purposes, we'll log the registration data to the console.
        console.log('Registration submitted:');
        console.log('Agency Name:', agencyName);
        console.log('Contact Person:', contactPerson);
        console.log('Email:', email);
        console.log('Password:', password);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Send login data to the server or perform any necessary validation.
        // You can make an AJAX request here to send data to your backend.

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

        // For demonstration purposes, we'll log the login data to the console.
        console.log('Login submitted:');
        console.log('Email:', email);
        console.log('Password:', password);

        // Redirect to the dashboard or another page upon successful login.
        // Replace the following line with your actual redirection logic.
        // window.location.href = '/dashboard.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout-button');

    logoutButton.addEventListener('click', function () {
        // Implement logout logic here (e.g., clearing session, redirecting to login page).
        // You can add your logout functionality or AJAX request to the server.

        // For demonstration purposes, we'll redirect to the login page.
        window.location.href = 'login.html';
    });
});
