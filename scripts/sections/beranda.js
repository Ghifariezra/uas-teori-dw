import Loader from "../utils/load.js";
import daftarCarousel from "../components/cards/daftarCaraousel.js";
import { carouselData } from "../data/carouselData.js";
import bukuData from "../data/bukuData.js";
import daftarPopuler from "../components/daftarPopuler.js";
import { getQuote } from "../data/quotesData.js";

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default async function renderBeranda() {
    const loader = new Loader();

    const sectionContent = document.getElementById("content");
    if (!sectionContent) return;

    sectionContent.innerHTML = await loader.loadComponents("beranda.html");

    const containerCarousel = document.getElementById("list-carousel");
    await loader.loadCards(
        containerCarousel,
        carouselData,
        daftarCarousel
    );

    const containerPopuler = document.getElementById("container-popular");
    const semuaBuku = await bukuData({
        sort: "popular",
        page: 1
    });

    if (semuaBuku) {
        await loader.loadCards(
            containerPopuler,
            semuaBuku.slice(0, 5),
            daftarPopuler
        );
    }

    const containerRekomendasi = document.getElementById("container-rekomendasi");
    const bukuRekomendasi = await bukuData({
        sort: "recommended",
        page: 1
    });

    if (bukuRekomendasi) {
        const buku = shuffle(bukuRekomendasi);
        await loader.loadCards(
            containerRekomendasi,
            buku.slice(5, 10),
            daftarPopuler
        );
    }

    const randomQuote = getQuote();
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    
    if (quoteText && quoteAuthor) {
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = randomQuote.author;
    }
}
