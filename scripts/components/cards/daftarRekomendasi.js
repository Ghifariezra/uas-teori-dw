export default function daftarRekomendasi(icon, title, author, genre) {
    return `
        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer flex flex-col">
            
            <div class="aspect-square w-full flex items-center justify-center text-6xl bg-gray-50">
                ${icon}
            </div>

            <div class="p-4 flex flex-col flex-grow">
                <div class="text-base font-semibold text-gray-800 mb-1">
                    ${title}
                </div>

                <div class="text-xs text-gray-600 mb-2">${author}</div>

                <span class="w-fit bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full text-xs font-medium mb-4">
                    ${genre}
                </span>

                <button
                    class="mt-auto w-full py-2 bg-blue-500 text-white rounded-md text-xs font-medium hover:bg-blue-600 transition"
                >
                    Baca Selengkapnya...
                </button>
            </div>
        </div>
    `;
}
