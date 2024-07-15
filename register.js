// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Ensure Firebase functions are available
    const auth = firebase.auth();
    const db = firebase.firestore();

    const registerForm = document.getElementById('register');
    const registerMessage = document.getElementById('register-message');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Register the user with Firebase Authentication
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Registration successful
                const user = userCredential.user;
                console.log('User registered:', user);
                registerMessage.textContent = 'Registration successful!';
                registerMessage.style.color = 'green';

                // Save additional user data to Firestore
                return db.collection('users').doc(user.uid).set({
                    email: email,
                    firstName: '', // Placeholder, should be collected during registration
                    theme: 'theme-light.css' // Default theme
                });
            })
            .then(() => {
                console.log('User data saved to Firestore.');
                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirect to main page
                }, 2000);
            })
            .catch((error) => {
                console.error('Error during registration:', error);
                registerMessage.textContent = `Error: ${error.message}`;
                registerMessage.style.color = 'red';
            });
    });
});
