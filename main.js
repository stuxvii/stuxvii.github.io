const offset = -3;
const clock = document.getElementById("clock");
const player = document.getElementById("player");
let playing = false;
function padzero(number) {
    if (number < 10) {
        return "0" + String(number)
    } else {
        return String(number)
    }
};

setInterval(() => {
    const unix = new Date();
    let hours = unix.getUTCHours() + offset;
    if (hours < 0) {
        hours += 24;
    } else if (hours >= 24) {
        hours -= 24;
    }
    hours = padzero(hours);
    const minutes = padzero(unix.getUTCMinutes());
    const seconds = padzero(unix.getUTCSeconds());
    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
}, 100);

async function play() {
    if (playing) {
        return;
    }
    playing = true;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const response = await fetch("fantasia2009.opus");
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const source = audioContext.createBufferSource();
    const gainnode = audioContext.createGain();
    gainnode.gain.value = 0.3;
    gainnode.connect(audioContext.destination);
    source.connect(gainnode);
    source.buffer = audioBuffer;
    source.loop = true;
    source.start(0);
    const div = document.createElement("div");
    div.classList.add("border");
    const seconddiv = document.createElement("div");
    seconddiv.classList.add("col");
    seconddiv.classList.add("fc");
    const songname = document.createElement("a");
    const songtext = document.createTextNode("⋡fantasia2009");
    const artistname = document.createElement("a");
    const artisttext = document.createTextNode("lexycat");
    songname.href = "https://soundcloud.com/1lexycat/fantasia2009";
    artistname.href = "https://soundcloud.com/1lexycat/";
    artistname.classList.add("artistname");
    const img = document.createElement("img");
    img.classList.add("ff");
    img.src = "flowerfield.jpg";

    div.style.width = "min-content";
    songname.appendChild(songtext);
    artistname.appendChild(artisttext);
    seconddiv.append(img);
    seconddiv.append(songname);
    seconddiv.append(artistname);
    div.append(seconddiv);
    player.append(div);
}
