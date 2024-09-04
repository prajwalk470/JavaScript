function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "user" && password === "user123") {
        localStorage.setItem('loggedIn', true);
        alert("Login Successful!");
        window.location.href = 'services.html';
        return false;
    } else {
        alert("Invalid username or password");
        return false;
    }
}
localStorage.removeItem('loggedIn');
setTimeout(function() {
    window.location.href = 'home.html';
}, 3000);