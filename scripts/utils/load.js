export async function loadComponents(path) {
    const res = await fetch(`/components/${path}`);
    return await res.text();
}
