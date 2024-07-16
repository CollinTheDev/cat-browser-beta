document.addEventListener('DOMContentLoaded', () => {
    const themeLightButton = document.getElementById('theme-light');
    const themeDarkButton = document.getElementById('theme-dark');
    const themeGreenButton = document.getElementById('theme-green');
    const themeBlueButton = document.getElementById('theme-blue');
    const themeRedButton = document.getElementById('theme-red');

    themeLightButton.addEventListener('click', () => {
        document.getElementById('theme-style').href = 'theme-light.css';
    });

    themeDarkButton.addEventListener('click', () => {
        document.getElementById('theme-style').href = 'theme-dark.css';
    });

    themeGreenButton.addEventListener('click', () => {
        document.getElementById('theme-style').href = 'theme-green.css';
    });

    themeBlueButton.addEventListener('click', () => {
        document.getElementById('theme-style').href = 'theme-blue.css';
    });

    themeRedButton.addEventListener('click', () => {
        document.getElementById('theme-style').href = 'theme-red.css';
    });
});
