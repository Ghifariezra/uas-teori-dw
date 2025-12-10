import { loadComponents } from "../utils/load.js";

export default async function renderFooter() {
    const footerEl = document.getElementById("footer");
    if (!footerEl) return;
    
    footerEl.innerHTML = await loadComponents("footer.html");
}