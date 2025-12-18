export function replaceHash(e, loader, content, routes) {
    const page = e.target.dataset.page;
    if (page) {
        loader.loadPage(page, content, routes);
        history.pushState({ page }, "", `#${page}`);
    }
}