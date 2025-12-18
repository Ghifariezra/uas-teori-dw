import bukuData from "../data/bukuData.js";
import { kategoriData } from "../data/kategoriData.js";

export function preload(e) {
    const page = e.target.dataset.page;
    if (page === "kategori") {
        // preload populer
        bukuData({ sort: "popular", page: 1 });

        // preload beberapa kategori penting
        kategoriData.map(
            (item) =>
                bukuData({
                    topic: item.subject,
                    sort: "ascending"
                })
        );
    }
}