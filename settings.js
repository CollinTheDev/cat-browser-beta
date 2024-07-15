document.addEventListener('DOMContentLoaded', () => {
    const submitCodeButton = document.getElementById('submit-code');
    const accessCodeInput = document.getElementById('access-code');
    const codeMessage = document.getElementById('code-message');
    const themeSelection = document.getElementById('theme-selection');
    const themeButtons = document.querySelectorAll('.theme-button');

    // Show theme selection if access code is valid
    submitCodeButton.addEventListener('click', () => {
        const code = accessCodeInput.value.trim();
        if (code === 'staff6924' || code === 'prem9024') {
            codeMessage.textContent = 'Access granted!';
            codeMessage.classList.remove('hidden');
            themeSelection.classList.remove('hidden');
        } else {
            codeMessage.textContent = 'Invalid code.';
            codeMessage.classList.remove('hidden');
            themeSelection.classList.add('hidden');
        }
    });

    // Apply selected theme and save to local storage
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            document.getElementById('theme-link').href = theme;
            localStorage.setItem('theme', theme);
        });
    });

    // Load and apply saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.getElementById('theme-link').href = savedTheme;
    }
});
