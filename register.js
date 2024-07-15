document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const registerMessage = document.getElementById('register-message');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return db.collection('users').doc(user.uid).set({
                    firstName: firstName,
                    email: email
                });
            })
            .then(() => {
                registerMessage.textContent = 'Registration successful!';
                registerMessage.classList.remove('hidden');
            })
            .catch((error) => {
                registerMessage.textContent = `Error: ${error.message}`;
                registerMessage.classList.remove('hidden');
            });
    });
});
