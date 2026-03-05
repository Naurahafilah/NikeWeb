document.addEventListener("DOMContentLoaded", () => {
    
    // 1. TANGKAP DATA DARI URL (Kalau diklik dari katalog/results.html)
    const urlParams = new URLSearchParams(window.location.search);
    const shoeName = urlParams.get('name');
    const shoeImg = urlParams.get('img');
    const shoePrice = urlParams.get('price');

    if (shoeName && shoeImg && shoePrice) {
        document.getElementById('prodName').innerText = shoeName;
        document.getElementById('modalName').innerText = shoeName;
        
        document.getElementById('mainImage').src = shoeImg;
        document.getElementById('modalImg').src = shoeImg;
        // Ganti gambar thumbnail pertama dengan gambar dari katalog
        document.querySelector('.thumb.active').src = shoeImg; 
        
        document.getElementById('prodPrice').innerText = shoePrice;
        document.getElementById('modalPrice').innerText = shoePrice;
    }

    // 2. FITUR KLIK THUMBNAIL (Ganti Gambar Utama)
    const thumbnails = document.querySelectorAll('.thumb');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Hapus class active dari semua thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            // Tambahkan class active ke thumbnail yang diklik
            this.classList.add('active');
            // Ganti gambar utama
            mainImage.src = this.src;
        });
    });

    // 3. FITUR PILIH SIZE
    const sizeButtons = document.querySelectorAll('.size-btn');
    const sizeError = document.getElementById('sizeError');
    let selectedSize = null;

    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedSize = button.innerText;
            sizeError.classList.add('hidden'); // Sembunyikan error merah
        });
    });

    // 4. FITUR ADD TO BAG & POP-UP
    const addBtn = document.getElementById('addBtn');
    const cartModal = document.getElementById('cartModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalSizeText = document.getElementById('modalSize');

    addBtn.addEventListener('click', () => {
        if (!selectedSize) {
            // Kalau belum pilih ukuran, muncul error merah
            sizeError.classList.remove('hidden');
        } else {
            // Update teks size di dalam Pop-up
            modalSizeText.innerText = selectedSize;
            
            // Munculkan Pop-up dan Backdrop gelap
            cartModal.classList.remove('hidden');
            modalBackdrop.classList.remove('hidden');
        }
    });

    // Fitur Tutup Pop-up
    function closeModal() {
        cartModal.classList.add('hidden');
        modalBackdrop.classList.add('hidden');
    }

    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
});

const checkoutModalBtn = document.querySelector('.checkout-btn');
    
if (checkoutModalBtn) {
    checkoutModalBtn.addEventListener('click', () => {
        const currentName = document.getElementById('modalName').innerText;
        const currentImg = document.getElementById('modalImg').src;
        const currentPrice = document.getElementById('modalPrice').innerText;
        const currentSize = document.getElementById('modalSize').innerText;

        // Pindah ke checkout.html membawa semua data
        window.location.href = `checkout.html?name=${encodeURIComponent(currentName)}&img=${encodeURIComponent(currentImg)}&price=${encodeURIComponent(currentPrice)}&size=${encodeURIComponent(currentSize)}`;
    });
}