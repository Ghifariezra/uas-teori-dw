export function initSearchToggle() {
  const searchIconDesktop = document.getElementById("search-icon-desktop");
  const searchIconMobile = document.getElementById("search-icon-mobile");
  const content = document.getElementById("content");
  const searchView = document.getElementById("search-view");
  const footer = document.getElementById("footer");

  if (!content || !searchView || !footer) {
    console.error("Search layout missing");
    return;
  }

  const toggleView = () => {
    const isActive = !searchView.classList.contains("hidden");

    if (isActive) {
      searchView.classList.add("hidden");
      content.classList.remove("hidden");
      footer.classList.remove("hidden");
    } else {
      searchView.classList.remove("hidden");
      content.classList.add("hidden");
      footer.classList.add("hidden");

      const input = document.getElementById("search-input");
      if (input) input.focus();
    }
  };

  if (searchIconDesktop)
    searchIconDesktop.addEventListener("click", toggleView);
  if (searchIconMobile) searchIconMobile.addEventListener("click", toggleView);
}

export function initSearchInput() {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");

  if (!input || !results) return;

  const data = [
    {
      title: "Buku AI untuk Pemula",
      desc: "Panduan lengkap belajar AI dari nol hingga mahir.",
      img: "https://images.unsplash.com/photo-1620712943543-bcc465ee421d?w=300&auto=format&fit=crop",
    },
    {
      title: "Komputasi Cerdas",
      desc: "Mengenal AI dan machine learning untuk pemula.",
      img: "https://images.unsplash.com/photo-1620712943543-bcc465ee421d?w=300&auto=format&fit=crop",
    },
    {
      title: "Algoritma Pintar",
      desc: "Belajar algoritma dengan AI dan aplikasi nyata.",
      img: "https://images.unsplash.com/photo-1620712943543-bcc465ee421d?w=300&auto=format&fit=crop",
    },
  ];

  input.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    results.innerHTML = "";

    if (!query) {
      results.innerHTML = `
                <div class="p-4 rounded-lg shadow bg-white border col-span-2">
                    <p class="text-gray-700 text-sm">Belum ada pencarian.</p>
                </div>
            `;
      return;
    }

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      results.innerHTML = `
                <div class="p-4 rounded-lg shadow bg-white border col-span-2">
                    <p class="text-gray-700 text-sm">Tidak ada hasil untuk "<b>${query}</b>".</p>
                </div>
            `;
      return;
    }

    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.className =
        "flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100";

      card.innerHTML = `
                <div class="sm:w-1/3 flex-shrink-0">
                    <img src="${item.img}" alt="${item.title}" class="w-full h-48 sm:h-full object-cover">
                </div>
                <div class="p-4 sm:w-2/3">
                    <h3 class="text-md font-bold text-gray-800 mb-1">${item.title}</h3>
                    <p class="text-gray-600 text-sm line-clamp-3">${item.desc}</p>
                </div>
            `;
      results.appendChild(card);
    });
  });
}

export function closeSearchView() {
  const searchView = document.getElementById("search-view");
  const content = document.getElementById("content");
  const footer = document.getElementById("footer");

  if (!searchView || !content || !footer) return;

  searchView.classList.add("hidden");
  content.classList.remove("hidden");
  footer.classList.remove("hidden");
}
