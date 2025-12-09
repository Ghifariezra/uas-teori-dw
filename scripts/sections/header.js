import { initToggleMenu } from "../toggle.js";
<<<<<<< HEAD
import { initSearchToggle } from "../search-handler.js";
=======
import { initSearchToggle, initSearchInput } from "../search-handler.js";
>>>>>>> 5e9c85f (add: fitur search)

export default async function renderHeader() {
    const headerEl = document.getElementById("header");
    if (!headerEl) return;

<<<<<<< HEAD
    const res = await fetch("/components/header.html");
=======
    // fetch header.html
    const res = await fetch("../../components/header.html");
>>>>>>> 5e9c85f (add: fitur search)
    const html = await res.text();
    headerEl.innerHTML = html;

    // inisialisasi menu toggle (mobile)
    initToggleMenu();
<<<<<<< HEAD
    initSearchToggle();
=======

    // inisialisasi search toggle dan input
    initSearchToggle();
    initSearchInput();
>>>>>>> 5e9c85f (add: fitur search)
}
