const offset = -3;
const clock = document.getElementById("clock");

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
