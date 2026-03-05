// === FITUR SEARCH REDIRECT ===
const searchInput = document.getElementById('search');

// Saat user mengetik dan menekan "Enter"
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            // Pindahkan halaman ke search.html beserta kata kunci
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    }
    // Di dalam file search.js, ubah bagian ini:
function goToProductPage(query) {
    if(query.trim() !== '') {
        // UBAH NAMA FILENYA MENJADI results.html
        window.location.href = `results.html?q=${encodeURIComponent(query)}`;
    }
}
});