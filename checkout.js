document.addEventListener("DOMContentLoaded", () => {
    
    // 1. TANGKAP DATA DARI URL
    const urlParams = new URLSearchParams(window.location.search);
    const shoeName = urlParams.get('name');
    const shoeImg = urlParams.get('img');
    const shoePriceStr = urlParams.get('price'); // Contoh: "1 399 kr"
    const shoeSize = urlParams.get('size');

    // Elemen HTML yang mau diisi
    const checkName = document.getElementById('checkName');
    const checkImg = document.getElementById('checkImg');
    const checkPrice = document.getElementById('checkPrice');
    const checkSize = document.getElementById('checkSize');
    
    const subtotalPrice = document.getElementById('subtotalPrice');
    const totalPrice = document.getElementById('totalPrice');
    const checkQty = document.getElementById('checkQty');

    let basePrice = 0;

    // 2. MASUKKAN DATA KE HALAMAN JIKA ADA
    if (shoeName && shoeImg && shoePriceStr) {
        checkName.innerText = shoeName;
        checkImg.src = shoeImg;
        checkPrice.innerText = shoePriceStr;
        subtotalPrice.innerText = shoePriceStr;
        totalPrice.innerText = shoePriceStr;
        
        // Kalau ukuran dikirim, tambahkan sebagai pilihan pertama di dropdown Size
        if (shoeSize) {
            checkSize.innerHTML = `<option>${shoeSize}</option>` + checkSize.innerHTML;
        }

        // Bersihkan string harga untuk dapet angkanya aja (buat dihitung)
        // Menghapus spasi dan tulisan 'kr'
        const cleanPriceString = shoePriceStr.replace(/\s/g, '').replace('kr', ''); 
        basePrice = parseInt(cleanPriceString);
    }

    // 3. FITUR UPDATE HARGA KALAU JUMLAH (QTY) BERUBAH
    checkQty.addEventListener('change', function() {
        const qty = parseInt(this.value);
        if(basePrice > 0) {
            const newTotal = basePrice * qty;
            // Format ulang angka jadi ada spasinya (contoh: 2 798 kr)
            const formattedTotal = newTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " kr";
            
            checkPrice.innerText = formattedTotal;
            subtotalPrice.innerText = formattedTotal;
            totalPrice.innerText = formattedTotal;
        }
    });

    // 4. FITUR HAPUS BARANG (REMOVE ICON TONG SAMPAH)
    const removeBtn = document.querySelector('.remove-btn');
    const cartItem = document.getElementById('cartItem');
    const emptyCartMsg = document.getElementById('emptyCartMsg');

    removeBtn.addEventListener('click', () => {
        cartItem.style.display = 'none'; // Sembunyikan barang
        emptyCartMsg.classList.remove('hidden'); // Munculkan teks kosong
        
        // Nol-kan harga
        subtotalPrice.innerText = "0 kr";
        totalPrice.innerText = "0 kr";
    });

    // 5. FITUR TOMBOL CHECKOUT (SIMULASI ALERTS)
    const checkoutBtns = document.querySelectorAll('.checkout-btn');
    checkoutBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (cartItem.style.display === 'none') {
                alert("Your bag is empty!");
            } else {
                alert(`Redirecting to Secure Payment Gateway...\nTotal Amount: ${totalPrice.innerText}`);
            }
        });
    });
});