import Loader from "../utils/load.js";

export default async function renderFooter() {
    const loader = new Loader();
    const footerEl = document.getElementById("footer");
    if (!footerEl) return;
    
    footerEl.innerHTML = await loader.loadComponents("footer.html");
}