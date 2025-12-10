export default async function renderFooter() {
    const footerEl = document.getElementById("footer");
    if (!footerEl) return;

    const res = await fetch("uas-teori-dw/components/footer.html");
    const html = await res.text();

    footerEl.innerHTML = html;
}
