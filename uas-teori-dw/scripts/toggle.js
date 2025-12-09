// Cache DOM
const btn = document.getElementById("hamburger-btn");
const openIcon = document.getElementById("icon-open");
const closeIcon = document.getElementById("icon-close");
const mobileNav = document.getElementById("mobile-nav");
const content = document.getElementById("content");

// Toggle Menu Handler
function toggleMenu() {
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    mobileNav.classList.toggle("hidden");
    mobileNav.classList.toggle("scale-y-0");
}


btn.addEventListener("click", toggleMenu);