import { initToggleMenu } from "../toggle.js";
import { loadComponents } from "../utils/load.js";

export default async function renderHeader() {
    const headerEl = document.getElementById("header");
    if (!headerEl) return;

    headerEl.innerHTML = await loadComponents("header.html");

    initToggleMenu();
}
