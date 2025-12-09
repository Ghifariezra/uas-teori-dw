<<<<<<< HEAD
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
=======
export function initSearchToggle() {
    const searchIconDesktop = document.getElementById("search-icon-desktop");
    const searchIconMobile = document.getElementById("search-icon-mobile");
    const content = document.getElementById("content");
    const searchView = document.getElementById("search-view");
    const footer = document.getElementById("footer");

    if (!content || !searchView || !footer) {
        console.error("Search layout missing");
        return;
    }

    const toggleView = () => {
        const isActive = !searchView.classList.contains("hidden");

        if (isActive) {
            searchView.classList.add("hidden");
            content.classList.remove("hidden");
            footer.classList.remove("hidden");
        } else {
            searchView.classList.remove("hidden");
            content.classList.add("hidden");
            footer.classList.add("hidden");

            const input = document.getElementById("search-input");
            if (input) input.focus();
        }
    };

    if (searchIconDesktop) searchIconDesktop.addEventListener("click", toggleView);
    if (searchIconMobile) searchIconMobile.addEventListener("click", toggleView);
}

export function initSearchInput() {
    const input = document.getElementById("search-input");
    const results = document.getElementById("search-results");

    if (!input || !results) return;

    const data = [
        { title: "Buku AI untuk Pemula", desc: "Panduan belajar AI dari nol.", img: "https://i.pinimg.com/1200x/a0/81/4b/a0814b7e021a0d3c46de19dc2993efee.jpg" },
        { title: "Komputasi Cerdas", desc: "Belajar AI dan machine learning.", img: "https://images.unsplash.com/photo-1620712943543-bcc465ee421d?w=300&auto=format&fit=crop" },
        { title: "Algoritma Pintar", desc: "Belajar algoritma dengan AI.", img: "https://images.unsplash.com/photo-1620712943543-bcc465ee421d?w=300&auto=format&fit=crop" }
    ];

    input.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        results.innerHTML = "";

        if (!query) {
            results.innerHTML = `<div class="p-4 rounded-lg shadow bg-white border"><p class="text-gray-700 text-sm">Belum ada pencarian.</p></div>`;
            return;
        }

        const filtered = data.filter(item => item.title.toLowerCase().includes(query));

        if (filtered.length === 0) {
            results.innerHTML = `<div class="p-4 rounded-lg shadow bg-white border"><p class="text-gray-700 text-sm">Tidak ada hasil untuk "<b>${query}</b>".</p></div>`;
            return;
        }

        filtered.forEach(item => {
            const card = document.createElement("div");
            card.className = "flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100";

            card.innerHTML = `
                <div class="sm:w-1/3 flex-shrink-0">
                    <img src="${item.img}" alt="${item.title}" class="w-full h-48 sm:h-full object-cover">
                </div>
                <div class="p-4 sm:w-2/3">
                    <h3 class="text-md font-bold text-gray-800 mb-1">${item.title}</h3>
                    <p class="text-gray-600 text-sm line-clamp-3">${item.desc}</p>
                </div>
            `;
            results.appendChild(card);
        });
    });
}
>>>>>>> 5e9c85f (add: fitur search)
