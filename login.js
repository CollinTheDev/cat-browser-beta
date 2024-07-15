document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                loginMessage.textContent = 'Login successful!';
                loginMessage.classList.remove('hidden');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            })
            .catch((error) => {
                loginMessage.textContent = `Error: ${error.message}`;
                loginMessage.classList.remove('hidden');
            });
    });
});
