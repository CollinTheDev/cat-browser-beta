document.addEventListener('DOMContentLoaded', () => {
    const accessCodeInput = document.getElementById('access-code');
    const submitCodeButton = document.getElementById('submit-code');
    const codeMessage = document.getElementById('code-message');
    const premiumButtons = document.querySelectorAll('.premium');
    const themeLightButton = document.getElementById('theme-light');
    const themeDarkButton = document.getElementById('theme-dark');
    const themeBlueButton = document.getElementById('theme-blue');
    const themeRedButton = document.getElementById('theme-red');

    submitCodeButton.addEventListener('click', () => {
        const code = accessCodeInput.value;
        if (code === 'prem9024') {
            premiumButtons.forEach(button => button.classList.remove('hidden'));
            codeMessage.textContent = 'Premium themes unlocked!';
            codeMessage.classList.remove('hidden');
        } else {
            codeMessage.textContent = 'Invalid code.';
            codeMessage.classList.remove('hidden');
        }
    });

    themeLightButton.addEventListener('click', () => {
        document.body.className = 'light-theme';
    });

    themeDarkButton.addEventListener('click', () => {
        document.body.className = 'dark-theme';
    });

    themeBlueButton.addEventListener('click', () => {
        document.body.className = 'blue-theme';
    });

    themeRedButton.addEventListener('click', () => {
        document.body.className = 'red-theme';
    });
});
