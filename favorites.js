document.addEventListener('DOMContentLoaded', () => {
    const favoritesList = document.getElementById('favorites-list');

    const favorites = []; // This should be fetched from Firebase if users are logged in

    function renderFavorites() {
        favoritesList.innerHTML = '';
        favorites.forEach((url) => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = url;
            link.addEventListener('click', () => {
                const iframe = parent.document.getElementById('webpage');
                iframe.src = url;
            });
            li.appendChild(link);
            favoritesList.appendChild(li);
        });
    }

    renderFavorites();
});
