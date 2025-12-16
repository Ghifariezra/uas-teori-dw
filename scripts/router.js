import renderBeranda from "./sections/beranda.js";
import renderKategori from "./sections/kategori.js";
import Loader from "./utils/load.js";
import bukuData from "./data/bukuData.js";
import { kategoriData } from "./data/kategoriData.js";
import { getBasePath } from "./utils/getBasePath.js";

window.goHome = function () {
    window.location.href = getBasePath();
};
export default function initRouter() {
    const content = document.getElementById("content");
    const loader = new Loader();

    const routes = {
        beranda: renderBeranda,
        kategori: renderKategori
    };

    const validPaths = ["/", "/uas-teori-dw/"];

    if (!validPaths.includes(location.pathname)) {
        loader.loadNotFound(content);
        return;
    }

    const initial = location.hash.replace("#", "") || "beranda";
    loader.loadPage(initial, content, routes);

    // ===============================
    // 🔥 PREFETCH SAAT HOVER NAV
    // ===============================
    document.addEventListener("mouseover", (e) => {
        const page = e.target.dataset.page;
        if (page === "kategori") {
            // preload populer
            bukuData({ sort: "popular", page: 1 });

            // preload beberapa kategori penting
            kategoriData.map(
                (item) =>
                    bukuData({
                        topic: item.subject,
                        sort: "ascending"
                    })
            );
        }
    });

    document.addEventListener("click", (e) => {
        const page = e.target.dataset.page;
        if (page) {
            loader.loadPage(page, content, routes);
            history.pushState({ page }, "", `#${page}`);
        }
    });
}
