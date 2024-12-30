const form = document.getElementById('loginForm');
const error = document.getElementById('error');

// Set your username and password
const validUsername = "AAB_Owner@Barahona.com"; // Replace with your desired username
const validPassword = "HTC7998597BN$"; // Replace with your desired password

form.addEventListener('submit', (event) => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered credentials match the valid ones
    if (username === validUsername && password === validPassword) {
        // Redirect to the portfolio page
        window.location.href = "home.html";
    } else {
        // Prevent form submission and show error message
        event.preventDefault();
        error.classList.remove('hidden');
        error.textContent = "Invalid credentials. Please try again.";
    }
});
