import Loader from "../utils/load.js";

export default async function renderBeranda() {
    const loader = new Loader();

    const sectionContent = document.getElementById("content");
    if (!sectionContent) return;

    sectionContent.innerHTML = await loader.loadComponents("beranda.html");
}
