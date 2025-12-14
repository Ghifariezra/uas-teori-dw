import Loader from "../utils/load.js";
import daftarKategori from "../components/cards/daftarKategori.js";
import { kategoriData } from "../data/kategoriData.js";
import bukuData from "../data/bukuData.js";
import daftarPopuler from "../components/daftarPopuler.js";

export default async function renderKategori() {
    const loader = new Loader();
    const sectionContent = document.getElementById("content");
    if (!sectionContent) return;

    sectionContent.innerHTML = await loader.loadComponents("kategori.html");

    const cardsCategory = document.getElementById("cards-category");

    await loader.loadCards(
        cardsCategory,
        kategoriData,
        daftarKategori
    );

    const booksCategory = document.getElementById("books-percategory");
    const bukuPopuler = await bukuData({
        sort: "popular",
        page: 1
    });
    await loader.loadCards(
        booksCategory,
        bukuPopuler,
        daftarPopuler
    );

    cardsCategory.addEventListener("click", async (e) => {
        const card = e.target.closest(".card-category");
        if (!card) return;

        const subject = card.dataset.subject;

        if (subject === "popular") {
            await loader.loadCards(
                booksCategory,
                bukuPopuler,
                daftarPopuler
            );
            return;
        };

        const dataBukuPerKategori = await bukuData({
            topic: subject,
            sort: "ascending"
        });

        // console.log("Buku kategori:", dataBukuPerKategori);

        const titleCategory = document.getElementById("title-category");
        const descCategory = document.getElementById("desc-category");

        titleCategory.textContent = subject;
        descCategory.textContent = `Kumpulan buku terbaru dari kategori ${subject.toLowerCase()}.`;

        await loader.loadCards(
            booksCategory,
            dataBukuPerKategori,
            daftarPopuler
        );
    });
}
