document.addEventListener('DOMContentLoaded', () => {
    const accessCodeInput = document.getElementById('access-code');
    const submitCodeButton = document.getElementById('submit-code');
    const codeMessage = document.getElementById('code-message');
    const themeSettings = document.getElementById('theme-settings');
    const themeLightButton = document.getElementById('theme-light');
    const themeDarkButton = document.getElementById('theme-dark');

    submitCodeButton.addEventListener('click', () => {
        const code = accessCodeInput.value;
        if (code === 'prem9024') {
            themeSettings.classList.remove('hidden');
            codeMessage.classList.add('hidden');
        } else {
            codeMessage.textContent = 'Invalid code.';
            codeMessage.style.color = 'red';
            codeMessage.classList.remove('hidden');
        }
    });

    themeLightButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 'lightgreen';
        document.querySelector('header').style.backgroundColor = 'green';
        localStorage.setItem('theme', 'light');
    });

    themeDarkButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 'darkgreen';
        document.querySelector('header').style.backgroundColor = 'black';
        localStorage.setItem('theme', 'dark');
    });

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'light') {
            document.body.style.backgroundColor = 'lightgreen';
            document.querySelector('header').style.backgroundColor = 'green';
        } else if (savedTheme === 'dark') {
            document.body.style.backgroundColor = 'darkgreen';
            document.querySelector('header').style.backgroundColor = 'black';
        }
    }
});
