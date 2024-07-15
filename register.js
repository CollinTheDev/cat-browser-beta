document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register');
    const registerMessage = document.getElementById('register-message');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Registration successful
                registerMessage.textContent = 'Registration successful!';
                registerMessage.style.color = 'green';
                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirect to main page
                }, 2000);
            })
            .catch((error) => {
                registerMessage.textContent = `Error: ${error.message}`;
                registerMessage.style.color = 'red';
            });
    });
});
