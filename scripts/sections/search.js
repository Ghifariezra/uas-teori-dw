import bukuData from "../data/bukuData.js";

let cacheBuku = [];
let isLoaded = false;

export function initSearchToggle() {
  const searchIconDesktop = document.getElementById("search-icon-desktop");
  const searchIconMobile = document.getElementById("search-icon-mobile");
  const content = document.getElementById("content");
  const searchView = document.getElementById("search-view");
  const footer = document.getElementById("footer");

  if (!content || !searchView || !footer) return;

  const toggleView = () => {
    const isOpen = !searchView.classList.contains("hidden");

    if (isOpen) {
      closeSearchView();
    } else {
      searchView.classList.remove("hidden");
      content.classList.add("hidden");
      footer.classList.add("hidden");
      document.getElementById("search-input")?.focus();
    }
  };

  searchIconDesktop?.addEventListener("click", toggleView);
  searchIconMobile?.addEventListener("click", toggleView);
}

export function initSearchInput() {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");

  if (!input || !results) return;

  if (!isLoaded) {
    bukuData({ sort: "popular", page: 1 })
      .then((data) => {
        cacheBuku = data;
        isLoaded = true;
      })
      .catch(() => {
        results.innerHTML = emptyState("Gagal memuat data buku.");
      });
  }

  input.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    results.innerHTML = "";

    if (!query) {
      results.innerHTML = emptyState("Belum ada pencarian dilakukan");
      return;
    }

    if (!isLoaded) {
      results.innerHTML = emptyState("Memuat data buku...");
      return;
    }

    const filtered = cacheBuku.filter((item) =>
      item.title.toLowerCase().startsWith(query)
    );

    if (filtered.length === 0) {
      results.innerHTML = emptyState(
        `Tidak ada hasil untuk "<b>${query}</b>"`
      );
      return;
    }

    renderTotal(results, filtered.length);
    filtered.forEach((item) =>
      results.appendChild(createSearchCard(item))
    );
  });
}

function createSearchCard(item) {
  const cover =
    item.formats?.["image/jpeg"] ||
    "https://via.placeholder.com/300x450?text=No+Cover";

  const author = item.authors?.[0]?.name || "Unknown Author";
  const genre = item.bookshelves?.[0] || "Unknown Genre";
  const bacaUrl = item.formats?.["text/html"] || "#";
  const downloadCount = item.download_count || 0;

  const card = document.createElement("div");
  card.className =
    "bg-white rounded-xl shadow-md hover:shadow-lg transition w-full " +
    "flex flex-row sm:flex-col overflow-hidden p-2 sm:p-4";

  card.innerHTML = `
    <!-- COVER -->
    <div class="w-28 sm:w-full flex-shrink-0 flex items-stretch sm:block">

      <!-- MOBILE -->
      <img
        src="${cover}"
        alt="${item.title}"
        class="block sm:hidden w-full h-full object-contain rounded-md">

      <!-- DESKTOP & TABLET -->
      <div class="hidden sm:block relative w-full h-56 rounded-lg overflow-hidden p-3 bg-white/30">
        <img
          src="${cover}"
          alt=""
          class="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-70">

        <img
          src="${cover}"
          alt="${item.title}"
          class="relative z-10 w-full h-full object-contain rounded-md">
      </div>
    </div>

    <!-- CONTENT -->
    <div class="px-3 py-2 sm:p-0 sm:mt-3 flex flex-col justify-between gap-1 flex-1">
      <div>
        <h3 class="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
          ${item.title}
        </h3>

        <p class="text-xs text-gray-600 mt-1 truncate">
          ${author}
        </p>

        <span class="inline-block mt-2 bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full
                     text-[10px] sm:text-xs font-medium truncate">
          ${genre}
        </span>
      </div>

      <div class="mt-2 flex items-center justify-between">
        <span class="text-[10px] sm:text-xs text-gray-500">
          Total Download
        </span>

        <span class="inline-flex items-center gap-1 bg-green-50 text-green-600
                     px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold">
          ⬇ ${downloadCount.toLocaleString()}
        </span>
      </div>

      <a href="${bacaUrl}" target="_blank"
         class="mt-2 w-full py-2 bg-blue-500 text-white rounded-md
                text-[11px] sm:text-xs font-medium hover:bg-blue-600 transition text-center">
        Baca Selengkapnya
      </a>
    </div>
  `;

  return card;
}


function emptyState(text) {
  return `
    <p class="col-span-full text-center text-gray-400 text-sm">
      ${text}
    </p>
  `;
}

function renderTotal(container, total) {
  const div = document.createElement("div");
  div.className = "mb-3 font-semibold text-gray-800 col-span-full";
  div.textContent = `Total buku ditemukan: ${total}`;
  container.appendChild(div);
}

export function closeSearchView() {
  const searchView = document.getElementById("search-view");
  const content = document.getElementById("content");
  const footer = document.getElementById("footer");

  searchView?.classList.add("hidden");
  content?.classList.remove("hidden");
  footer?.classList.remove("hidden");
}
