export default function daftarPopuler(item) {
  const cover = item.formats["image/jpeg"] || "https://via.placeholder.com/150?text=No+Cover";
  const author = item.authors?.[0]?.name || "Unknown Author";
  const genre = item.bookshelves?.[0] || "Unknown Genre";
  const bacaUrl = item.formats["text/html"] || "#";
  const downloadCount = item.download_count;

  return `
    <div
      class="bg-white rounded-lg shadow-md hover:shadow-xl transition
             cursor-pointer overflow-hidden
             flex flex-row sm:flex-col w-full"
    >
      <!-- COVER -->
      <div
        class="w-28 h-40 sm:w-full sm:h-56 flex-shrink-0 overflow-hidden"
      >
        <img
          src="${cover}"
          alt="Cover ${item.title}"
          class="object-cover w-full h-full"
        />
      </div>

      <!-- CONTENT -->
      <div class="p-3 sm:p-4 flex flex-col flex-grow">
        <h3
          class="text-sm sm:text-base font-semibold text-gray-800 line-clamp-1"
          title="${item.title}"
        >
          ${item.title}
        </h3>

        <p
          class="text-xs text-gray-600 mt-1 truncate"
          title="${author}"
        >
          ${author}
        </p>

        <span
          class="mt-2 w-fit bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full
                 text-[10px] sm:text-xs font-medium truncate"
          title="${genre}"
        >
          ${genre}
        </span>

        <!-- DOWNLOAD -->
        <div class="flex items-center justify-between mt-3">
          <span class="text-[10px] sm:text-xs text-gray-500">
            Total Download
          </span>

          <span
            class="inline-flex items-center gap-1 bg-green-50 text-green-600
                   px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold"
          >
            ⬇ ${downloadCount.toLocaleString()}
          </span>
        </div>

        <a
          href="${bacaUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-3 sm:mt-auto w-full py-1.5 sm:py-2
                 bg-blue-500 text-white rounded-md
                 text-[11px] sm:text-xs font-medium
                 hover:bg-blue-600 transition text-center"
        >
          Baca Selengkapnya
        </a>
      </div>
    </div>
  `;
}
