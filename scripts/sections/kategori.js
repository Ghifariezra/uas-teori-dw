export default async function renderKategori(){
    const sectionContent = document.getElementById("content");
    if (!sectionContent) return;

    const res = await fetch("../../components/kategori.html");
    const html = await res.text();

    sectionContent.innerHTML = html;
}