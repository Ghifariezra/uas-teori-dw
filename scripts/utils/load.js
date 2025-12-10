export async function loadComponents(path){
    const rest = await fetch(`components/${path}`);
    const html = rest.text();
    return html;
}