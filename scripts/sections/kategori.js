import Loader from "../utils/load.js";
import daftarKategori from "../components/cards/daftarKategori.js";
import daftarRekomendasi from "../components/cards/daftarRekomendasi.js";
import { kategoriData } from "../data/kategoriData.js";
import { rekomendasiData } from "../data/rekomendasiData.js";

export default async function renderKategori() {
    const loader = new Loader();
    const sectionContent = document.getElementById("content");
    if (!sectionContent) return;

    sectionContent.innerHTML = await loader.loadComponents("kategori.html");

    const cardsCategory = document.getElementById("cards-category");
    const cardsRecommendation = document.getElementById("cards-recommendation");

    if (cardsCategory) {
        cardsCategory.innerHTML = kategoriData
            .map(item => daftarKategori(item.icon, item.title))
            .join("");
    }

    if (cardsRecommendation) {
        cardsRecommendation.innerHTML = rekomendasiData
            .map(item => daftarRekomendasi(item.icon, item.title, item.author, item.category))
            .join("");
    }
}
