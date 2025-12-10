import renderBeranda from "./sections/beranda.js";
import renderKategori from "./sections/kategori.js";
import Loader from "./utils/load.js";

export default function initRouter() {
    const content = document.getElementById("content");
    const loader = new Loader();

    const routes = {
        beranda: renderBeranda,
        kategori: renderKategori
    };

    const validPaths = [
        "/",
        "/uas-teori-dw/",
    ];

    if (!validPaths.includes(location.pathname)) {
        loader.loadNotFound(content);
        return;
    }

    const initial = location.hash.replace("#", "") || "beranda";

    if (initial && routes[initial]) {
        loader.loadPage(initial, content, routes);
    } else {
        loader.loadNotFound(content);
    }

    document.addEventListener("click", (e) => {
        const page = e.target.dataset.page;

        if (page) {
            loader.loadPage(page, content, routes);
            history.pushState({ page }, "", `#${page}`);
        }
    });
}
