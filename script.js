const form = document.getElementById('loginForm');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with real authentication logic
    if (username !== 'admin' || password !== 'password123') {
        event.preventDefault();
        error.classList.remove('hidden');
    }
});
