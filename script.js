document.addEventListener('DOMContentLoaded', () => {
    const auth = firebase.auth();
    const db = firebase.firestore();
    const settingsIcon = document.getElementById('settings-icon');
    const settingsModal = document.getElementById('settings-modal');
    const closeButton = document.querySelector('.close-button');
    const accessCodeInput = document.getElementById('access-code');
    const submitCodeButton = document.getElementById('submit-code');
    const codeMessage = document.getElementById('code-message');
    const themeButtons = document.querySelectorAll('.theme-button');
    const themeSelection = document.getElementById('theme-selection');
    const urlInput = document.getElementById('url');
    const goButton = document.getElementById('go');
    const iframe = document.getElementById('webpage');
    const errorMessage = document.getElementById('error-message');
    let userId = null;

    auth.onAuthStateChanged(user => {
        if (user) {
            userId = user.uid;
            db.collection('users').doc(userId).get().then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    document.getElementById('theme-link').href = userData.theme;
                    // Load and display user data
                }
            });
        } else {
            // User is not signed in, redirect or show login
            window.location.href = 'login.html';
        }
    });

    goButton.addEventListener('click', () => {
        const url = urlInput.value;
        if (url) {
            iframe.src = url;
        }
    });

    iframe.addEventListener('load', () => {
        errorMessage.classList.add('hidden');
    });

    iframe.addEventListener('error', () => {
        errorMessage.classList.remove('hidden');
    });

    settingsIcon.addEventListener('click', () => {
        settingsModal.classList.remove('hidden');
    });

    closeButton.addEventListener('click', () => {
        settingsModal.classList.add('hidden');
    });

    submitCodeButton.addEventListener('click', () => {
        const accessCode = accessCodeInput.value.trim();
        if (accessCode === 'staff6924' || accessCode === 'prem9024') {
            if (userId) {
                db.collection('users').doc(userId).update({
                    accessLevel: accessCode === 'prem9024' ? 'premium' : 'staff'
                }).then(() => {
                    codeMessage.textContent = 'Access granted!';
                    codeMessage.classList.remove('hidden');
                    showThemeSelection();
                });
            }
        } else {
            codeMessage.textContent = 'Invalid code!';
            codeMessage.classList.remove('hidden');
        }
    });

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const themeUrl = button.getAttribute('data-theme');
            if (userId) {
                db.collection('users').doc(userId).update({
                    theme: themeUrl
                }).then(() => {
                    document.getElementById('theme-link').href = themeUrl;
                });
            }
        });
    });

    function showThemeSelection() {
        themeSelection.classList.remove('hidden');
    }
});
