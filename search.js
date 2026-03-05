// Mengambil elemen kolom pencarian dan semua tombol pencarian populer
const searchInput = document.getElementById('searchInput');
const termButtons = document.querySelectorAll('.term-btn');

// Fungsi untuk pindah LANGSUNG ke halaman DETAIL PRODUK (product.html)
function goToProductPage(query) {
    const cleanQuery = query.trim().toLowerCase(); 
    
    if(cleanQuery !== '') {
        // Data default (Nike Air Force 1)
        let shoeName = "Nike Air Force 1 '07";
        let shoeImg = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800";
        let shoePrice = "1 399 kr";

        // Kalau kamu klik 'air max' atau 'jordan', gambarnya otomatis beda
        if (cleanQuery.includes('max')) {
            shoeName = "Nike Air Max 95";
            shoeImg = "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800";
            shoePrice = "1 749 kr";
        } else if (cleanQuery.includes('jordan')) {
            shoeName = "Air Jordan 1";
            shoeImg = "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800";
            shoePrice = "1 899 kr";
        }

        // Pindah ke product.html dengan membawa nama, gambar, dan harga
        window.location.href = `product.html?name=${encodeURIComponent(shoeName)}&img=${encodeURIComponent(shoeImg)}&price=${encodeURIComponent(shoePrice)}`;
    }
}

// Fitur 1: Kalau user ngetik di kolom pencarian lalu tekan "Enter"
if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            goToProductPage(searchInput.value);
        }
    });
}

// Fitur 2: Kalau user KLIK salah satu tombol abu-abu (misal: "air force 1")
if (termButtons) {
    termButtons.forEach(button => {
        button.addEventListener('click', function() {
            goToProductPage(this.innerText);
        });
    });
}