export default function daftarPopuler(item) {
  const cover = item.formats["image/jpeg"] || "https://via.placeholder.com/150?text=No+Cover";
  const author = item.authors?.[0]?.name || "Unknown Author";
  const genre = item.bookshelves?.[0] || "Unknown Genre";
  const bacaUrl = item.formats["text/html"] || "#";
  const downloadCount = item.download_count;

  const formats = item.formats || {};

  const downloadLinks = {
    epub: formats["application/epub+zip"],
    mobi: formats["application/x-mobipocket-ebook"],
    txt: formats["text/plain; charset=us-ascii"],
    zip: formats["application/octet-stream"],
  };

  return `
    <div
      class="bg-white rounded-lg shadow-md hover:shadow-xl transition flex flex-row sm:flex-col w-full"
    >
      <!-- COVER -->
      <div class="w-28 sm:w-full flex-shrink-0 flex items-stretch sm:block">

        <!-- MOBILE -->
        <img
          src="${cover}"
          alt="Cover ${item.title}"
          class="block sm:hidden w-full h-full object-cover rounded-md"
        />

        <!-- TABLET & DESKTOP -->
        <div class="hidden sm:block relative w-full h-56 rounded-lg overflow-hidden bg-white/30">
          
          <!-- Background Blur -->
          <img
            src="${cover}"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-60"
          />

          <!-- Main Cover -->
          <div class="relative z-10 w-full h-full p-3">
            <img
              src="${cover}"
              alt="Cover ${item.title}"
              class="w-full h-full object-contain rounded-md"
            />
          </div>

        </div>
      </div>

      <!-- CONTENT -->
      <div class="p-3 sm:p-4 flex flex-col justify-between w-full h-full">
        <h3
          class="text-sm sm:text-base font-semibold text-gray-800 line-clamp-1"
          title="${item.title}"
        >
          ${item.title}
        </h3>

        <p
          class="text-xs text-gray-600 mt-1"
          title="${author}"
        >
          ${author}
        </p>

        <span
          class="mt-2 w-fit bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full
                 text-[10px] sm:text-xs font-medium"
          title="${genre}"
        >
          ${genre}
        </span>

        <!-- TOTAL DOWNLOAD -->
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

        <div class="mt-3 flex gap-2 flex-wrap">
          ${downloadLinks.epub ? `
            <a href="${downloadLinks.epub}" download
              class="text-[10px] px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
              EPUB
            </a>` : ""}

          ${downloadLinks.txt ? `
            <a href="${downloadLinks.txt}" download
              class="text-[10px] px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
              TXT
            </a>` : ""}

          ${downloadLinks.mobi ? `
            <a href="${downloadLinks.mobi}" download
              class="text-[10px] px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
              MOBI
            </a>` : ""}
        </div>

        <a
          href="${bacaUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-3 w-full py-1.5 sm:py-2
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
