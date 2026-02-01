let iosjailbreak = {
    "JailbreakMe 1.0 Source": {url: "https://github.com/OpenJailbreak/JailbreakMe-1.0", desc: "iOS 1.0.2 - 1.1.1 | please just update"},
    "JailbreakMe 2.0": {url: "https://www.jailbreakme.com/star", desc: "iOS 3.1.2 - 4.0.1 (except 3.2.2)"},
    "JailbreakMe 3.0": {url: "https://www.jailbreakme.com/", desc: "iOS 4.2.6 - 4.3.3"},
    "Carbon": {url: "https://carbon.sep.lol/", desc: "iOS 9.1 - 9.3.4"},
    "spyware.lol": {url: "https://totally.not.spyware.lol", desc: "iOS 10"},
    "MeridianFix": {url: "https://lukezgd.github.io/MeridianFix/", desc: "iOS 10 (iPhone 7/7 Plus)"},
    "tnssockport": {url: "https://lukezgd.github.io/tns-sockport/", desc: "iOS 10 (not iPhone 7/7 Plus)"}
}
let games = {
    "Flashpoint Archive": {url: "https://flashpointarchive.org/", desc: "MASSIVE Plugin-era collection of media, most notably Flash."},
    "SM4J": {url: "https://carlosxdjavgames.altervista.org/archivos/134", desc: "Hello Mario Engine game with multiplayer and nice community."},
    "Mindustry": {url: "https://mindustrygame.github.io/", desc: "Addictive grinding and engineering game."},
    "Haxball": {url: "https://haxball.com", desc: "Physics centric multiplayer soccer game"},
    "Prism Launcher": {url: "https://haxball.com", desc: "Minecraft launcher with instance managing"},
    "Acid Launcher": {url: "https://github.com/stuxvii/acid-launcher", desc: "Lightweight and simple Minecraft Launcher with built-in Fabric downloading"},
    "Sober": {url: "https://sober.vinegarhq.org", desc: "Android version of Roblox natively running on Linux"},
    "SuperTuxKart": {url: "https://supertuxkart.net", desc: "FOSS racing game"},
    "Sonolus": {url: "https://sonolus.com", desc: "Client for rhythm game servers and engines, recommended for SEKAI"},
    "n": {url: "https://thewayoftheninja.org", desc: "The world's best platformer game. Thousands of levels."},
    "Happy Wheels": {url: "https://totaljerkface.com/happy_wheels.tjf", desc: "Classic gory browser game"},
}
let credits = {
    "04b03": {url: "http://www.dsg4.com/04/", desc: "Site font"},
    "GitHub Pages": {url: "https://docs.github.com/en/pages", desc: "Static hosting"},
}
let linux = {
    "Linux Mint": {url: "https://linuxmint.com", desc: "Start here if you want to learn as you go."},
    "Zorin OS": {url: "https://zorin.com/os", desc: "Start here if you want to have something that just works."},
    "Pop_OS!": {url: "https://system76.com/pop/", desc: "Start here if you want both."},
    "Bazzite": {url: "https://bazzite.gg", desc: "Pre-installed drivers, lauchers and utilities for epic gaymerz"},
    "Alpine Linux": {url: "https://alpinelinux.org", desc: "Lightweight, and will run good on anything. Only recommended for web browsing."},
    "MX Linux": {url: "https://mxlinux.org/", desc: "Slightly heavier than Alpine, but actually usable."}
};
let tools = {
    "Talon": {url: "https://debloat.win", desc: "Debloat your Windows 11 install in 2 clicks"},
    "Ventoy": {url: "https://ventoy.net", desc: "Multi-ISO USB booting"},
    "Vesktop": {url: "https://vesktop.dev", desc: "Discord but good"},
    "mpv": {url: "https://mpv.io", desc: "Lightweight media player"},
    "ungoogled-chromium": {url: "https://github.com/ungoogled-software/ungoogled-chromium/", desc: "Chromium without the Google"},
    "Kate": {url: "https://apps.kde.org/kate/", desc: "Text editor"},
    "Krita": {url: "https://apps.kde.org/krita/", desc: "Digital Painting"},
    "Filelight": {url: "https://apps.kde.org/filelight/", desc: "Disk usage viewer"},
    "Simple Web Server": {url: "https://simplewebserver.org", desc: ""},
};
let category = {
    "tools": tools,
    "games": games,
    "iOS Jailbreak": iosjailbreak,
    "linux": linux,
    "credits": credits
};

let itemsBox = document.getElementById("items-box");
let categories = document.getElementById("categories");

function loadCategory(cat) {
    let items = category[cat]
    itemsBox.innerHTML = null;
    for (let key in items) {
        let mainContainer = document.createElement("div");

        let label = document.createElement("div");
        label.className = "main_label"

        let name = document.createElement("span");
        name.textContent = key;

        let goBtn = document.createElement("a");
        goBtn.textContent = "go";
        goBtn.href = category[cat][key].url;

        label.append(name);
        label.append(goBtn);

        let description = document.createElement("span");
        description.textContent = category[cat][key].desc;
        description.className = "desc"

        mainContainer.append(label);
        mainContainer.append(description);
        mainContainer.className = "item"

        itemsBox.append(mainContainer);
    }
}

for (let key in category) {
    let el = document.createElement("span");
    el.textContent = key;
    el.addEventListener("click", () => loadCategory(key));
    categories.append(el);
}