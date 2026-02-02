import { category } from "./data.js";
const intro = await (await fetch("/md/intro.md")).text();

const md = new MiniGFM ({unsafe:true});

let content = document.getElementById("content");
let categories = document.getElementById("categories");

function loadCategory(cat) {
    content.innerHTML = "";
    const box = document.createElement("div");
    box.className = "items-box";
    content.style.display = "flex";

    Object.entries(category[cat]).forEach(([name, { url, desc }]) => {
        const item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `<a class="main_label" href="${url}"><span>${name}</span></a>${desc ? `<span class="desc">${desc}</span>` : ""} `;
        box.append(item);
    });

    content.append(box);
}

function mainPage() {
    content.style.display = "";
    content.innerHTML = "";
    const html = md.parse(intro);
    content.innerHTML = html;
    const init_main = document.createElement("script");
    init_main.innerText = "init();";
    content.prepend(init_main);
}

mainPage();

document.getElementById("restore-btn").addEventListener("click", () => {mainPage();});

for (let key in category) {
    let el = document.createElement("span");
    el.textContent = key;
    el.addEventListener("click", () => loadCategory(key));
    categories.append(el);
}