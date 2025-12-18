import renderBeranda from "./sections/beranda.js";
import renderKategori from "./sections/kategori.js";
import Loader from "./utils/load.js";
import { getBasePath } from "./utils/getBasePath.js";
import { textToSpeech } from "./utils/textToSpeech.js";
import { toggleDropdown } from "./utils/toggleDropdown.js";
import { preload } from "./utils/preload.js";
import { replaceHash } from "./utils/replaceHash.js";

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

    document.addEventListener("click", async (e) => {
        toggleDropdown(e);
        await textToSpeech(e);
        replaceHash(e, loader, content, routes);
    });

    document.addEventListener("mouseover", (e) => preload(e, loader, content, routes));
}
