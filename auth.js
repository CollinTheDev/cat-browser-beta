document.addEventListener('DOMContentLoaded', () => {
    const authSection = document.getElementById('auth-section');
    const browserSection = document.getElementById('browser-section');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // User is signed in
            authSection.classList.add('hidden');
            browserSection.classList.remove('hidden');
        } else {
            // No user is signed in
            authSection.classList.remove('hidden');
            browserSection.classList.add('hidden');
        }
    });

    loginBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    registerBtn.addEventListener('click', () => {
        window.location.href = 'register.html';
    });
});
