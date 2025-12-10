import { loadComponents } from "../utils/load.js";

export default async function renderBeranda(){
    const sectionContent = document.getElementById("content");
    if (!sectionContent) return;

    sectionContent.innerHTML = await loadComponents("beranda.html")
}