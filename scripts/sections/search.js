import daftarPopuler from "../components/daftarPopuler.js";
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
    filtered.forEach((item) =>{
      const wrapper = document.createElement("div");
      wrapper.innerHTML = daftarPopuler(item).trim();
      results.appendChild(wrapper.firstElementChild);
    });
  });
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
