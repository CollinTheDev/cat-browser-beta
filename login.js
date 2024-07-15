document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login');
    const loginMessage = document.getElementById('login-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Login successful
                console.log('User logged in:', userCredential.user);
                loginMessage.textContent = 'Login successful!';
                loginMessage.style.color = 'green';
                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirect to main page
                }, 2000);
            })
            .catch((error) => {
                console.error('Error during login:', error);
                loginMessage.textContent = `Error: ${error.message}`;
                loginMessage.style.color = 'red';
            });
    });
});
