import { closeSearchView } from "../sections/search.js";

export default class Loader {
    async loadComponents(path) {
        const isGithub = window.location.hostname.includes("github.io");

        const BASE = isGithub
            ? `${window.location.origin}/uas-teori-dw`
            : window.location.origin;

        const res = await fetch(`${BASE}/components/${path}`);
        return await res.text();
    }

    async loadPage(page, content, routes) {
        closeSearchView();

        content.style.opacity = 0;

        setTimeout(async () => {
            if (routes[page]) {
                await routes[page]();
            } else {
                await this.loadNotFound(content);
            }

            if (typeof initFlowbite === "function") {
                initFlowbite();
            }

            content.style.opacity = 1;
        }, 200);
    }

    async loadCards(container, data, callback) {
        if (!container) return;
        container.innerHTML = data.map(item => callback(item)).join("");
    }


    async loadNotFound(content) {
        const html = await this.loadComponents("notFound.html");
        content.innerHTML = html;
    }
}