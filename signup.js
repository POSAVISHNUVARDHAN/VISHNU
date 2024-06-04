document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value; // Get email value
    const password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('email', email); // Store email in local storage
    localStorage.setItem('password', password);
    alert('Registration successful! Please proceed to login.');
    // Redirect to login page
    window.location.href = "login.html";
});
