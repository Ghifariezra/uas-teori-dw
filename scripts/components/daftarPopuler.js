export default function daftarPopuler(item) {
  const cover = item.formats["image/jpeg"] || "https://via.placeholder.com/150?text=No+Cover";
  const author = item.authors?.[0]?.name || "Unknown Author";
  const genre = item.bookshelves?.[0] || "Unknown Genre";
  const bacaUrl = item.formats["text/html"] || "#";
  const downloadCount = item.download_count;
  const summary = item.summaries?.[0] || "Tidak ada ringkasan tersedia.";

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

        <div class="mt-2 flex flex-col">
          <span class="text-[10px] sm:text-xs text-gray-500">Download Format:</span>

          <div class="mt-3 flex gap-2 flex-col w-full sm:flex-row">
            ${downloadLinks.epub ? `
              <a href="${downloadLinks.epub}" download
                  class="text-[10px] px-3 py-1.5
         rounded-full font-medium
         text-blue-700
         bg-blue-50
         border border-blue-100
         hover:bg-blue-100
         transition text-center w-full cursor-pointer">
                EPUB
              </a>` : ""}

            ${downloadLinks.txt ? `
              <a href="${downloadLinks.txt}" download
                  class="text-[10px] px-3 py-1.5
         rounded-full font-medium
         text-blue-700
         bg-blue-50
         border border-blue-100
         hover:bg-blue-100
         transition text-center w-full cursor-pointer">
                TXT
              </a>` : ""}

            ${downloadLinks.mobi ? `
              <a href="${downloadLinks.mobi}" download
                  class="text-[10px] px-3 py-1.5
         rounded-full font-medium
         text-blue-700
         bg-blue-50
         border border-blue-100
         hover:bg-blue-100
         transition text-center w-full cursor-pointer">
                MOBI
              </a>` : ""}
          </div>
        </div>

        <div class="relative mt-3">
          <!-- Trigger Button -->
          <button
              class="w-full px-3 py-2.5
                flex items-center justify-between
                bg-blue-50 text-blue-700
                rounded-lg text-xs font-semibold
                hover:bg-blue-100
                transition-all duration-200
                group cursor-pointer"
            data-dropdown-trigger
          >
            <span class="flex items-center sm:gap-2">
              <svg class="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z" clip-rule="evenodd"/>
              </svg>
              <span class="line-clamp-1">Dengar Ringkasan</span>
            </span>
            <svg
              class="w-4 h-4 text-blue-700
                    transition-transform duration-200
                    group-[.open]:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path fill-rule="evenodd"
                d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <!-- Dropdown -->
          <div
            class="dropdown hidden absolute z-40 mt-2 w-full
                  bg-white border border-gray-200
                  rounded-lg shadow-lg p-2 space-y-1"
            >
              <button
                class="tts-btn group w-full
                    flex items-center gap-3
                    px-3 py-2.5 text-xs
                    text-emerald-700
                    rounded-lg
                    hover:bg-emerald-50 transition cursor-pointer"
                data-type="book"
                data-title="${item.title}"
                data-author="${author}"
                data-genre="${genre}"
                data-download="${downloadCount}"
                data-formats="${Object.keys(downloadLinks)
      .filter(key => downloadLinks[key])
      .join(', ')}"
              >
                <span
                  class="flex items-center justify-center
                        w-4 h-4
                        rounded-md bg-gray-200
                        group-hover:bg-gray-300
                        transition tts-icon"
                >
                  <svg
                    class="w-2 h-2 text-blue-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path fill-rule="evenodd"
                      d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <span class="tts-label font-medium flex-1 text-left">
                  Buku
                </span>
              </button>

              <button
                class="tts-btn group w-full
                  flex items-center gap-3
                  px-3 py-2.5 text-xs
                  text-blue-700
                  rounded-lg
                  hover:bg-blue-50 transition cursor-pointer"
                data-type="summary"
                data-summary="${encodeURIComponent(summary)}"
              >
                <span
                  class="flex items-center justify-center
                        w-4 h-4
                        rounded-md bg-gray-200
                        group-hover:bg-gray-300
                        transition tts-icon"
                >
                  <svg
                    class="w-2 h-2 text-blue-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path fill-rule="evenodd"
                      d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span class="tts-label font-medium flex-1 text-left">
                  Cerita
                </span>
              </button>
            </div>
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
