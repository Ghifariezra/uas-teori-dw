export async function translateText(text) {
    if (!("Translator" in window)) {
        console.warn("Translator API tidak didukung");
        return text;
    }

    const translator = await Translator.create({
        sourceLanguage: "en",
        targetLanguage: "id",
    });

    const translated = await translator.translate(text);

    translator.destroy();
    return translated;
}
