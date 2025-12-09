/**
 * scripts/search-handler.js
 * Modul ini menangani logika untuk menampilkan dan menyembunyikan 
 * tampilan pencarian (#search-view).
 */
export function initSearchToggle() {
    // 1. Ambil elemen-elemen penting menggunakan ID eksplisit
    const searchIconDesktop = document.getElementById('search-icon-desktop');
    const searchIconMobile = document.getElementById('search-icon-mobile'); 
    
    const contentView = document.getElementById('content');
    const searchView = document.getElementById('search-view');
    const footer = document.getElementById('footer');

    if (!searchView || !contentView || !footer) {
        console.error("Elemen #search-view, #content, atau #footer tidak ditemukan. Pastikan sudah ada di HTML.");
        return;
    }

    /**
     * Fungsi untuk mengubah tampilan antara konten utama dan halaman pencarian.
     */
    const toggleSearchDisplay = (event) => {
        // Mencegah navigasi atau aksi default lainnya
        event.preventDefault(); 
        
        // Cek apakah tampilan pencarian sedang aktif (menggunakan class 'flex')
        const isSearchViewActive = searchView.classList.contains('flex');

        if (isSearchViewActive) {
            // Sembunyikan Search, Tampilkan Content & Footer
            searchView.classList.replace('flex', 'hidden');
            contentView.classList.remove('hidden');
            footer.classList.remove('hidden'); 
        } else {
            // Tampilkan Search, Sembunyikan Content & Footer
            // Menggunakan 'flex' karena #search-view awalnya memiliki 'display: none'/'hidden'
            searchView.classList.replace('hidden', 'flex'); 
            contentView.classList.add('hidden');
            footer.classList.add('hidden'); 
            
            // Fokus pada input pencarian
            const searchInput = document.getElementById('search-input');
            if(searchInput) searchInput.focus();
        }
        
        // Opsional: Scroll ke atas untuk tampilan pencarian penuh
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 2. Tambahkan event listener ke ikon desktop
    if (searchIconDesktop) {
        searchIconDesktop.addEventListener('click', toggleSearchDisplay);
        console.log("Listener Pencarian Desktop AKTIF.");
    } else {
        console.warn("Ikon pencarian desktop (ID: search-icon-desktop) tidak ditemukan.");
    }
    
    // 3. Tambahkan event listener ke ikon mobile
    if (searchIconMobile) {
        searchIconMobile.addEventListener('click', toggleSearchDisplay);
        console.log("Listener Pencarian Mobile AKTIF.");
    } else {
        console.warn("Ikon pencarian mobile (ID: search-icon-mobile) tidak ditemukan.");
    }
}