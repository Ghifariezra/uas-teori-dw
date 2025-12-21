export default function daftarCarousel(title) {
  if (title.type === "video") {
    return `
      <div class="duration-700 ease-out" data-carousel-item="active">
        <video
          src="${title.src}"
          class="absolute block w-full h-full object-cover"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
      </div>
    `;
  }

  return `
    <div class="duration-700 ease-out" data-carousel-item="active">
      <img 
        src="${title.src}"
        alt="${title.alt ?? ""}"
        class="absolute block w-full h-full object-cover" 
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
    </div>
  `;
}
