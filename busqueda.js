document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchValue = document.getElementById('search').value.trim().toLowerCase();
    if (searchValue) {
        window.location.href = `resultados.html?search=${encodeURIComponent(searchValue)}`;
    }
});









        