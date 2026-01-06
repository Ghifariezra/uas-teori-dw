# TUGAS AKHIR DESIGN WEBISTE

Website ini merupakan website perpustakaan berbasis web yang dibuat sebagai media informasi dan layanan perpustakaan secara digital. Website bertujuan untuk memudahkan pengguna dalam mengakses informasi koleksi buku tanpa harus datang langsung ke perpustakaan.

Melalui website ini, pengguna dapat melihat daftar buku, mengelompokkan buku berdasarkan kategori tertentu, serta melakukan pencarian untuk menemukan buku yang diinginkan. Website dirancang dengan tampilan sederhana agar mudah digunakan dan dipahami oleh semua pengguna.

---
## Kelompok: 7

### Anggota:
- **Az-Zahra Putri - 4524210018**
- **Dheka Airlangga - 4524210027**
- **Maghfiroh Lisabiliana - 4524210040**
- **Ghifari Ezra Ramadhan - 4524210041**
- **Naila Putri Fahel - 4524210053**

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
**Fitur Download Buku**

Website Readorium ini menyediakan fitur download buku digital untuk memudahkan pengguna mengakses koleksi buku secara offline. Fitur ini memungkinkan pengguna mengunduh buku dalam beberapa format file yang disesuaikan dengan kebutuhan perangkat masing-masing.

**Format Download yang Tersedia**

Pengguna dapat memilih salah satu dari format berikut:

1. EPUB
Format e-book yang mendukung tampilan responsif dan nyaman dibaca di perangkat mobile maupun aplikasi e-reader.

2. TXT
Format teks sederhana tanpa styling, ringan, dan kompatibel di semua perangkat.

3. MOBI
Format e-book yang ditujukan untuk perangkat e-reader tertentu dengan struktur navigasi sederhana.

**Cara Kerja Fitur Download**

- Pengguna membuka halaman detail buku.

-  Sistem menampilkan tombol pilihan format download (EPUB, TXT, MOBI).

- Pengguna memilih format yang diinginkan.

- Sistem memproses data buku sesuai format yang dipilih.

File buku otomatis diunduh ke perangkat pengguna.

**Tujuan dan Manfaat Fitur**

- Memudahkan pengguna membaca buku secara offline.

- Memberikan fleksibilitas format sesuai perangkat pengguna.

- Meningkatkan kualitas layanan perpustakaan digital.

- Mengurangi ketergantungan pada akses fisik ke perpustakaan.

Dengan adanya fitur ini, website Readorium tidak hanya berfungsi sebagai media informasi, tetapi juga sebagai sarana layanan digital yang interaktif dan bermanfaat bagi pengguna.
```

**Bukti Tanda Responsive**