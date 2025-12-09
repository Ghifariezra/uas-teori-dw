export function initToggleMenu() {
    const btn = document.getElementById("hamburger-btn");
    const openIcon = document.getElementById("icon-open");
    const closeIcon = document.getElementById("icon-close");
    const mobileNav = document.getElementById("mobile-nav");

    if (!btn || !openIcon || !closeIcon || !mobileNav) {
        console.warn("Toggle menu elements not found (header belum dirender?)");
        return;
    }

    btn.addEventListener("click", () => {
        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
        mobileNav.classList.toggle("hidden");
        mobileNav.classList.toggle("scale-y-0");
    });
}
