// 1. DATABASE MINI SEPATU (Data yang akan dimunculkan)
const database = [
    { id: 1, tag: "Just In", name: "Nike Air Max 95 OG", type: "Men's Shoes", colors: 3, price: "2 199 kr", img: "https://images.unsplash.com/photo-1605340536736-c8668383e25e?w=800", keyword: "air max" },
    { id: 2, tag: "", name: "Nike Dunk Low SE 'LNY'", type: "Men's shoes", colors: 1, price: "1 399 kr", img: "https://images.unsplash.com/photo-1551107696-a4b0a5f5d95c?w=800", keyword: "dunk" },
    { id: 3, tag: "", name: "Nike P-6000 SE 'LNY'", type: "Men's shoes", colors: 1, price: "1 399 kr", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800", keyword: "p-6000" },
    { id: 4, tag: "Just In", name: "Nike Mercurial Vapor 16 Elite", type: "Firm-Ground Football Boot", colors: 2, price: "3 199 kr", img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800", keyword: "football" },
    { id: 5, tag: "Just In", name: "Nike Air Max 90", type: "Men's shoes", colors: 1, price: "1 749 kr", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800", keyword: "air max" },
    { id: 6, tag: "", name: "Nike Air Force 1 '07", type: "Men's shoes", colors: 2, price: "1 499 kr", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800", keyword: "air force" }
];

// 2. TUNGGU HTML SELESAI DILOUD, BARU JALANKAN JS
document.addEventListener("DOMContentLoaded", () => {
    
    // Tangkap query pencarian dari URL (contoh: results.html?q=air)
    const urlParams = new URLSearchParams(window.location.search);
    let query = urlParams.get('q');
    
    const grid = document.getElementById('productGrid');
    const pageTitle = document.getElementById('pageTitle');

    // Pastikan ID productGrid ada di HTML
    if (!grid) {
        console.error("Waduh, elemen dengan id='productGrid' gak ketemu di HTML-mu!");
        return;
    }

    let results = database; // Default: Tampilkan semua sepatu

    // Jika ada kata kunci pencarian, filter datanya
    if (query && query.trim() !== "") {
        pageTitle.innerText = `Search Results for "${query}"`;
        const lowerQuery = query.toLowerCase();
        
        results = database.filter(item => 
            item.name.toLowerCase().includes(lowerQuery) || 
            item.keyword.toLowerCase().includes(lowerQuery)
        );
    } else {
        // Jika buka file langsung tanpa search
        pageTitle.innerText = "Men's Trainers & Shoes (699)";
    }

    // Kosongkan area grid sebelum diisi sepatu baru
    grid.innerHTML = ""; 

    // 3. MASUKKAN SEPATU KE DALAM HTML
    if (results.length > 0) {
        results.forEach(item => {
            // Logika untuk menampilkan lingkaran warna kecil-kecil
            let colorCircles = '';
            for(let i=0; i<item.colors; i++) {
                colorCircles += `<div class="color-circle" style="background-color: ${i===0?'#111': i===1?'#888':'#ccc'}; width:12px; height:12px; border-radius:50%; display:inline-block; margin-right:4px; border:1px solid #d4d4d4;"></div>`;
            }

            // HTML untuk masing-masing kotak sepatu (Style aku pasang inline biar pasti jalan)
            const card = `
                <div class="product-card" style="cursor: pointer; margin-bottom: 20px;">
                    <div class="img-bg" style="background-color: #f5f5f5; aspect-ratio: 4/5; display: flex; justify-content: center; align-items: center; overflow: hidden; margin-bottom: 12px;">
                        <img src="${item.img}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; mix-blend-mode: multiply;">
                    </div>
                    <div class="colors" style="margin-bottom: 8px;">${colorCircles}</div>
                    <div class="product-info">
                        ${item.tag ? `<p style="color: #9e3500; font-weight: 500; font-size: 15px; margin-bottom: 4px;">${item.tag}</p>` : ''}
                        <h3 style="font-size: 16px; font-weight: 500; color: #111; margin-bottom: 2px;">${item.name}</h3>
                        <p style="color: #757575; font-size: 15px; margin-bottom: 2px;">${item.type}</p>
                        <p style="color: #757575; font-size: 15px; margin-bottom: 8px;">${item.colors} Colour${item.colors > 1 ? 's' : ''}</p>
                        <p style="font-size: 16px; font-weight: 500; color: #111;">${item.price}</p>
                    </div>
                </div>
            `;
            grid.innerHTML += card;
        });
    } else {
        // Kalau sepatu yang dicari nggak ada di database
        grid.innerHTML = `<h3 style="grid-column: 1 / -1; margin-top: 40px; font-weight: 500; font-size: 20px;">We couldn't find anything for "${query}". Try "Air Max" or "Dunk".</h3>`;
    }

    // 4. FITUR TOMBOL HIDE/SHOW FILTERS (SIDEBAR KIRI)
    const toggleBtn = document.getElementById('toggleFilterBtn');
    const sidebar = document.getElementById('sidebar');
    const filterText = document.getElementById('filterText');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
            filterText.innerText = sidebar.classList.contains('hidden') ? 'Show Filters' : 'Hide Filters';
        });
    }
});