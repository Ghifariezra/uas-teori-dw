import { translateText } from "./translateText.js";

let currentUtterance = null;
let activeButton = null;

const PLAY_ICON = `
<svg class="w-2 h-2 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
  <path d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"/>
</svg>
`;

const PAUSE_ICON = `
<svg class="w-2 h-2 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd"
    d="M8 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"
    clip-rule="evenodd"/>
</svg>
`;


export async function textToSpeech(e) {
    const btn = e.target.closest(".tts-btn");
    const iconEl = btn.querySelector(".tts-icon");

    if (!btn) return;

    e.stopPropagation();

    const label = btn.querySelector(".tts-label");

    if (speechSynthesis.speaking && activeButton === btn) {
        stopCurrent();
        return;
    }

    stopCurrent();

    let text = "";
    let icon = `
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M8 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z" clip-rule="evenodd"/>
        </svg>
    `;

    if (btn.dataset.type === "book") {
        text = `
          Judul buku: ${btn.dataset.title}.
          Penulis: ${btn.dataset.author}.
          Genre: ${btn.dataset.genre}.
          Total unduhan: ${Number(btn.dataset.download).toLocaleString()} kali.
          Format tersedia: ${btn.dataset.formats}.
        `;
    }

    if (btn.dataset.type === "summary") {
        text = await translateText(
            decodeURIComponent(btn.dataset.summary)
        );
    }

    label.textContent = "Stop";
    iconEl.innerHTML = PAUSE_ICON;

    currentUtterance = new SpeechSynthesisUtterance(text.trim());
    currentUtterance.lang = "id-ID";
    currentUtterance.rate = 1;
    currentUtterance.pitch = 1;

    activeButton = btn;
    speechSynthesis.speak(currentUtterance);

    currentUtterance.onend = stopCurrent;
}

function stopCurrent() {
    if (!activeButton) return;

    speechSynthesis.cancel();
    resetButton(activeButton);
    activeButton = null;
}

function resetButton(btn) {
    const label = btn.querySelector(".tts-label");
    const iconEl = btn.querySelector(".tts-icon");

    label.textContent =
        btn.dataset.type === "summary"
            ? "Cerita"
            : "Buku";

    iconEl.innerHTML = PLAY_ICON;
}

["beforeunload", "pagehide"].forEach(eventType => {
    window.addEventListener(eventType, () => {
        speechSynthesis.cancel();
        activeButton = null;
    });
});
