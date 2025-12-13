import Loader from "../utils/load.js";
import daftarCarousel from "../components/cards/daftarCaraousel.js";
import { carouselData } from "../data/carouselData.js";
import bukuData from "../data/bukuData.js";
import daftarPopuler from "../components/daftarPopuler.js";

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
}
