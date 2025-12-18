import { translateText } from "./translateText.js";

let currentUtterance = null;
let activeButton = null;

export async function textToSpeech(e) {
    const btn = e.target.closest(".tts-btn");
    if (!btn) return;

    if (speechSynthesis.speaking && activeButton === btn) {
        speechSynthesis.cancel();
        resetButton(btn);
        activeButton = null;
        return;
    }

    speechSynthesis.cancel();
    if (activeButton) resetButton(activeButton);

    let text = "";

    if (btn.dataset.type === "book") {
        text = `
        Judul buku: ${btn.dataset.title}.
        Penulis: ${btn.dataset.author}.
        Genre: ${btn.dataset.genre}.
        Total unduhan: ${Number(btn.dataset.download).toLocaleString()} kali.
        Format unduhan: ${btn.dataset.formats}.
      `;
        btn.textContent = "⏹ Stop Ringkasan Buku";
    }

    if (btn.dataset.type === "summary") {
        text = await translateText(decodeURIComponent(btn.dataset.summary));
        btn.textContent = "⏹ Stop Ringkasan Cerita";
    }

    currentUtterance = new SpeechSynthesisUtterance(text.trim());
    currentUtterance.lang = "id-ID";
    currentUtterance.rate = 1;
    currentUtterance.pitch = 1;

    activeButton = btn;
    speechSynthesis.speak(currentUtterance);

    currentUtterance.onend = () => {
        resetButton(btn);
        activeButton = null;
    };
}

function resetButton(btn) {
    btn.textContent =
        btn.dataset.type === "summary"
            ? "🔊 Dengarkan Ringkasan Cerita"
            : "🔊 Dengarkan Ringkasan Buku";
}


window.addEventListener("beforeunload", () => {
    speechSynthesis.cancel();
});

window.addEventListener("pagehide", () => {
    speechSynthesis.cancel();
});
