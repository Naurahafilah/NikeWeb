document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DATA SEPATU "NEW ARRIVALS"
    // Ganti teks pada bagian 'img' dengan link atau path gambarmu nanti!
    const newProducts = [
        {
            tag: "Just In", 
            name: "Nike Air Max 95 OG", 
            type: "Men's Shoes", 
            colors: 3, 
            price: "2 199 kr", 
            img: "assets/airmax.jpeg" 
        },
        {
            tag: "Just In", 
            name: "Nike Dunk Low SE 'LNY'", 
            type: "Men's shoes", 
            colors: 1, 
            price: "1 399 kr", 
            img: "assets/NIKE+DUNK+LOW.avif" 
        },
        {
            tag: "Just In", 
            name: "Nike P-6000 SE 'LNY'", 
            type: "Men's shoes", 
            colors: 1, 
            price: "1 399 kr", 
            img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800" 
        },
        {
            tag: "Just In", 
            name: "Nike Mercurial Vapor 16 Elite", 
            type: "Firm-Ground Football Boot", 
            colors: 2, 
            price: "3 199 kr", 
            img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800" 
        },
        {
            tag: "Just In", 
            name: "Nike Air Max 90", 
            type: "Men's shoes", 
            colors: 1, 
            price: "1 749 kr", 
            img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800" 
        },
        {
            tag: "Just In", 
            name: "Nike Air Force 1 '07 SE 'LNY'", 
            type: "Men's shoes", 
            colors: 2, 
            price: "1 499 kr", 
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800" 
        }
    ];

    const grid = document.getElementById('newProductsGrid');

    // 2. MASUKKAN SEPATU KE DALAM GRID HTML
    newProducts.forEach(item => {
        // Bikin lingkaran warna (Bulat-bulat kecil di bawah gambar)
        let colorCircles = '';
        const colorsList = ['#111', '#888', '#8B4513']; // Hitam, Abu, Coklat
        for(let i = 0; i < item.colors; i++) {
            colorCircles += `<div class="color-circle" style="background-color: ${colorsList[i]}"></div>`;
        }

        // Template HTML untuk 1 buah sepatu
        const cardHTML = `
            <div class="product-card">
                <div class="img-bg">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="colors">${colorCircles}</div>
                <div class="product-info">
                    ${item.tag ? `<p class="just-in">${item.tag}</p>` : ''}
                    <h3>${item.name}</h3>
                    <p class="type">${item.type}</p>
                    <p class="color-count">${item.colors} Colour${item.colors > 1 ? 's' : ''}</p>
                    <p class="price">${item.price}</p>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });

    // 3. FITUR TOMBOL HIDE/SHOW FILTERS
    const toggleBtn = document.getElementById('toggleFilterBtn');
    const sidebar = document.getElementById('sidebar');
    const filterText = document.getElementById('filterText');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
            if (sidebar.classList.contains('hidden')) {
                filterText.innerText = 'Show Filters';
            } else {
                filterText.innerText = 'Hide Filters';
            }
        });
    }
});