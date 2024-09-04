function exploreNow() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
        window.location.href = 'services.html';
    } else {
        window.location.href = 'login.html';
    }
}