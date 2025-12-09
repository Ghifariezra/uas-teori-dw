import { initToggleMenu } from "../toggle.js";
import { initSearchToggle } from "../search-handler.js";

export default async function renderHeader() {
    const headerEl = document.getElementById("header");
    if (!headerEl) return;

    const res = await fetch("/components/header.html");
    const html = await res.text();

    headerEl.innerHTML = html;

    initToggleMenu();
    initSearchToggle();
}
