document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameOrEmail = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email'); // Retrieve email from local storage
    const storedPassword = localStorage.getItem('password');
    if ((usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) && password === storedPassword) {
        alert('Login successful!');
        // Show "Successfully Signed In" message
        document.getElementById('signin-message').style.display = 'block';
        // Redirect to home page or any other page
        window.location.href = "index.html";
    } else {
        alert('Invalid username or password');
    }
});
