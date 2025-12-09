export default async function renderKategori() {
    const content = document.getElementById("content");

    content.innerHTML = `
        <h1 class="text-3xl font-bold mb-5">Kategori</h1>
        <p>Daftar kategori akan ditampilkan di sini.</p>
    `;
}
