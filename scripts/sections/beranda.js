export default async function renderBeranda(){
    const sectionContent = document.getElementById("content");
    if (!sectionContent) return;

    const res = await fetch("uas-teori-dw/components/beranda.html");
    const html = await res.text();

    sectionContent.innerHTML = html;
}