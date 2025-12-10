import { loadComponents } from "../utils/load.js";

export default async function renderKategori(){
    const sectionContent = document.getElementById("content");
    if (!sectionContent) return;

    sectionContent.innerHTML = await loadComponents("kategori.html");
}