import Loader from "../utils/load.js";

export default async function renderKategori(){
    const loader = new Loader();
    const sectionContent = document.getElementById("content");
    if (!sectionContent) return;

    sectionContent.innerHTML = await loader.loadComponents("kategori.html");
}