import Loader from "../utils/load.js";
import { initToggleMenu } from "../toggle.js";
import { initSearchToggle, initSearchInput } from "./search.js";

export default async function renderHeader() {
    const loader = new Loader();
    const headerEl = document.getElementById("header");
    if (!headerEl) return;

    headerEl.innerHTML = await loader.loadComponents("header.html");

    initToggleMenu();
    initSearchToggle();
    initSearchInput();
}