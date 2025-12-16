# TUGAS AKHIR DESIGN WEBISTE

Website ini merupakan website perpustakaan berbasis web yang dibuat sebagai media informasi dan layanan perpustakaan secara digital. Website bertujuan untuk memudahkan pengguna dalam mengakses informasi koleksi buku tanpa harus datang langsung ke perpustakaan.

Melalui website ini, pengguna dapat melihat daftar buku, mengelompokkan buku berdasarkan kategori tertentu, serta melakukan pencarian untuk menemukan buku yang diinginkan. Website dirancang dengan tampilan sederhana agar mudah digunakan dan dipahami oleh semua pengguna.
>>>>>>> Stashed changes

---

## Kelompok: 7

### Anggota:

- **Naila Putri Fahel - 4524210051**
- **Maghfiroh Lisabiliana - 4524210040**
- **Dheka Airlangga - 4524210027**
- **Az-Zahra Putri - 4524210018**
- **Ghifari Ezra Ramadhan - 4524210041**
>>>>>>> Stashed changes

---

## Framework

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScripts](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TailwindCss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## Fitur
### Beranda
1. Halaman utama website perpustakaan.
2. Menampilkan gambaran umum website dan menu navigasi utama.

### Kategori Buku
1. Menyediakan pengelompokan buku berdasarkan kategori tertentu.
2. Membantu pengguna menemukan buku sesuai dengan jenis atau topik yang diinginkan.

### Pencarian Buku
1. Digunakan untuk mencari buku berdasarkan kata kunci tertentu.

---

## Struktur Folder

```scss
.
│   index.html
│   README.md
│   
├───assets
│   ├───icons
│   │       logo.ico
│   │
│   └───images
│           logo.jpeg
│
├───components
│       beranda.html
│       footer.html
│       header.html
│       kategori.html
│       notFound.html
│
└───scripts
    │   router.js
    │   toggle.js
    │
    ├───components
    │   │   daftarPopuler.js
    │   │
    │   └───cards
    │           daftarCaraousel.js
    │           daftarKategori.js
    │
    ├───data
    │       bukuData.js
    │       cache.js
    │       carouselData.js
    │       kategoriData.js
    │       quotesData.js
    │
    ├───sections
    │       beranda.js
    │       detail.js
    │       footer.js
    │       header.js
    │       kategori.js
    │       search.js
    │
    └───utils
            load.js
```
