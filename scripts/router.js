import renderBeranda from "./sections/beranda.js";
import renderKategori from "./sections/kategori.js";

export default function initRouter() {
    const content = document.getElementById("content");

    const routes = {
        beranda: renderBeranda,
        kategori: renderKategori
    };

    async function loadPage(page = "beranda") {
        content.style.opacity = 0;

        setTimeout(async () => {
            if (routes[page]) {
                await routes[page](); // Render halaman
            } else {
                content.innerHTML = "<h2>Halaman tidak ditemukan.</h2>";
            }

            content.style.opacity = 1;
        }, 200);
    }

    document.addEventListener("click", (e) => {
        const page = e.target.dataset.page;

        if (page) {
            loadPage(page);
            history.pushState({ page }, "", `#${page}`);
        }
    });

    // load awal
    const initial = location.hash.replace("#", "") || "beranda";
    loadPage(initial);
}
