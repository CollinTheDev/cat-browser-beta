document.addEventListener('DOMContentLoaded', () => {
    const goButton = document.getElementById('go');
    const backButton = document.getElementById('back');
    const forwardButton = document.getElementById('forward');
    const addFavoriteButton = document.getElementById('add-favorite');
    const urlInput = document.getElementById('url');
    const iframe = document.getElementById('webpage');
    const errorMessage = document.getElementById('error-message');

    goButton.addEventListener('click', () => {
        const url = urlInput.value;
        if (url === 'https://cat-browser.cat') {
            iframe.src = 'welcome.html';
        } else if (url === 'https://favorites.cat-browser.cat') {
            iframe.src = 'favorites.html';
        } else {
            try {
                iframe.src = url;
                iframe.classList.remove('hidden');
                errorMessage.classList.add('hidden');
            } catch (error) {
                iframe.classList.add('hidden');
                errorMessage.classList.remove('hidden');
            }
        }
    });

    backButton.addEventListener('click', () => {
        iframe.contentWindow.history.back();
    });

    forwardButton.addEventListener('click', () => {
        iframe.contentWindow.history.forward();
    });

    addFavoriteButton.addEventListener('click', () => {
        const url = urlInput.value;
        if (url && url !== 'https://cat-browser.cat' && url !== 'https://favorites.cat-browser.cat') {
            favorites.push(url);
            renderFavorites();
        }
    });

    const favorites = []; // This should be fetched from Firebase if users are logged in

    function renderFavorites() {
        const favoritesList = document.getElementById('favorites-list');
        favoritesList.innerHTML = '';
        favorites.forEach((url) => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = url;
            link.addEventListener('click', () => {
                window.location.href = url;
            });
            li.appendChild(link);
            favoritesList.appendChild(li);
        });
    }

    renderFavorites();
});
