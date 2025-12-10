import { loadComponents } from "../utils/load.js";

export default async function renderFooter() {
    const footerEl = document.getElementById("footer");
    if (!footerEl) return;
    
    footerEl.innerHTML = await loadComponents("footer.html");

    const res = await fetch("/components/footer.html");
    const html = await res.text();

    footerEl.innerHTML = html;
}
