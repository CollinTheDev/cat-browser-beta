document.addEventListener('DOMContentLoaded', () => {
    const submitCodeButton = document.getElementById('submit-code');
    const accessCodeInput = document.getElementById('access-code');
    const codeMessage = document.getElementById('code-message');
    const themeSelection = document.getElementById('theme-selection');
    const themeButtons = document.querySelectorAll('.theme-button');
    let userId = 'defaultUser';

    // Check if user is logged in
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            userId = user.uid;
            db.collection('users').doc(userId).get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    if (data.accessLevel) {
                        showThemeSelection();
                    }
                }
            });
        }
    });

    submitCodeButton.addEventListener('click', () => {
        const accessCode = accessCodeInput.value.trim();
        if (accessCode === 'staff6924' || accessCode === 'prem9024') {
            db.collection('users').doc(userId).update({
                accessLevel: accessCode === 'prem9024' ? 'premium' : 'staff'
            }).then(() => {
                codeMessage.textContent = 'Access granted!';
                codeMessage.classList.remove('hidden');
                showThemeSelection();
            });
        } else {
            codeMessage.textContent = 'Invalid code!';
            codeMessage.classList.remove('hidden');
        }
    });

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const themeUrl = button.getAttribute('data-theme');
            if (userId !== 'defaultUser') {
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
