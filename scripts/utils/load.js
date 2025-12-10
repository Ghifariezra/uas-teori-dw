export async function loadComponents(path) {
    const isGithub = window.location.hostname.includes("github.io");

    const BASE = isGithub
        ? `${window.location.origin}/uas-teori-dw`
        : window.location.origin;

    const res = await fetch(`${BASE}/components/${path}`);
    return await res.text();
}
