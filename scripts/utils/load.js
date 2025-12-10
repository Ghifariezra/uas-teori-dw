export async function loadComponents(path){
    const rest = await fetch(`components/${path}`);
    const html = await rest.text();
    return html;
}