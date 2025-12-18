export function toggleDropdown(e) {
    const toggleBtn = e.target.closest("[data-dropdown-trigger]");
    const dropdowns = document.querySelectorAll(".dropdown");

    // 1. Klik di LUAR dropdown & button → tutup semua
    if (!toggleBtn && !e.target.closest(".dropdown")) {
        dropdowns.forEach(d => d.classList.add("hidden"));
        document.querySelectorAll("[data-dropdown-trigger]")
            .forEach(b => b.classList.remove("open"));
        return;
    }

    // 2. Klik item di dalam dropdown → tutup
    if (e.target.closest(".dropdown")) {
        dropdowns.forEach(d => d.classList.add("hidden"));
        document.querySelectorAll("[data-dropdown-trigger]")
            .forEach(b => b.classList.remove("open"));
        return;
    }

    // 3. Klik tombol toggle
    const dropdown = toggleBtn.nextElementSibling;

    const isOpen = !dropdown.classList.contains("hidden");

    // Tutup semua dulu
    dropdowns.forEach(d => d.classList.add("hidden"));
    document.querySelectorAll("[data-dropdown-trigger]")
        .forEach(b => b.classList.remove("open"));

    // Toggle current
    if (!isOpen) {
        dropdown.classList.remove("hidden");
        toggleBtn.classList.add("open");
    }
}