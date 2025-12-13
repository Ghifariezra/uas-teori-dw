import { getCache, setCache, hasCache } from "./cache.js";

export default async function bukuData(options = {}) {
    const key = JSON.stringify(options);

    if (hasCache(key)) {
        return getCache(key);
    }

    try {
        const params = new URLSearchParams(options);
        const response = await fetch(`https://gutendex.com/books?${params}`);

        if (!response.ok) throw new Error(response.status);

        const data = await response.json();
        setCache(key, data.results);
        return data.results;

    } catch (err) {
        console.error("Fetch buku gagal:", err);
        return [];
    }
}
