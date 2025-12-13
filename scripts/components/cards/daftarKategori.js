export default function daftarKategori(item) {
    return `
        <div class="cursor-pointer bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition min-h-[130px] flex flex-col items-center justify-center">
            <div class="text-4xl sm:text-5xl mb-3">${item.icon}</div>
            <div class="font-semibold text-gray-800 text-sm sm:text-base">${item.title}</div>
        </div>
    `;
}
