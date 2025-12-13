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

    const filtered = cacheBuku.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.authors?.[0]?.name?.toLowerCase().includes(query)
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
    "https://via.placeholder.com/150?text=No+Cover";

  const author = item.authors?.[0]?.name || "Unknown Author";
  const genre = item.bookshelves?.[0] || "Unknown Genre";
  const bacaUrl = item.formats?.["text/html"] || "#";
  const downloadCount = item.download_count || 0;

  const card = document.createElement("div");
  card.className =
    "bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden flex flex-row sm:flex-col w-full";

  card.innerHTML = `
    <div class="w-28 h-40 sm:w-full sm:h-56 flex-shrink-0 overflow-hidden">
      <img src="${cover}" class="object-cover w-full h-full">
    </div>

    <div class="p-3 sm:p-4 flex flex-col flex-grow">
      <h3 class="text-sm sm:text-base font-semibold text-gray-800 line-clamp-1">
        ${item.title}
      </h3>

      <p class="text-xs text-gray-600 mt-1 truncate">
        ${author}
      </p>

      <span class="mt-2 w-fit bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full
                   text-[10px] sm:text-xs font-medium truncate">
        ${genre}
      </span>

      <div class="flex items-center justify-between mt-3">
        <span class="text-[10px] sm:text-xs text-gray-500">
          Total Download
        </span>

        <span class="inline-flex items-center gap-1 bg-green-50 text-green-600
                     px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold">
          ⬇ ${downloadCount.toLocaleString()}
        </span>
      </div>

      <a href="${bacaUrl}" target="_blank"
         class="mt-3 w-full py-1.5 sm:py-2 bg-blue-500 text-white rounded-md
                text-[11px] sm:text-xs font-medium hover:bg-blue-600 transition text-center">
        Baca Selengkapnya
      </a>
    </div>
  `;

  return card;
}

function emptyState(text) {
  return `
    <p class="col-span-2 text-center text-gray-400 text-sm">
      ${text}
    </p>
  `;
}

function renderTotal(container, total) {
  const div = document.createElement("div");
  div.className = "mb-3 font-semibold text-gray-800 col-span-2";
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
