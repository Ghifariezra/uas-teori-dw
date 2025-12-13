export default function daftarCarousel(image) {
    return `
        <!-- Item 1 (aktif) -->
        <div class="duration-700 ease-out" data-carousel-item="active">
            <img 
                src=${image}
                class="absolute block w-full h-full object-cover" 
            />
            <div class="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
        </div>
    `;
}
