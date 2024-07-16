document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.settings-container button');
    
    // Apply saved theme if exists
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.getElementById('theme-style').href = savedTheme;
    }

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.id.split('-')[1];
            let themeFile = '';

            switch (theme) {
                case 'light':
                    themeFile = 'theme-light.css';
                    break;
                case 'dark':
                    themeFile = 'theme-dark.css';
                    break;
                case 'green':
                    themeFile = 'theme-green.css';
                    break;
                case 'blue':
                    themeFile = 'theme-blue.css';
                    break;
                case 'red':
                    themeFile = 'theme-red.css';
                    break;
            }

            if (themeFile) {
                document.getElementById('theme-style').href = themeFile;
                localStorage.setItem('theme', themeFile);
            }
        });
    });
});
