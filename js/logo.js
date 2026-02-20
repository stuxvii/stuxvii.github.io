function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.imageSmoothingEnabled = false
    text = "welcome"
    const time = performance.now() * 0.005;
    for (let i = 0; i < text.length; i++) {
        const sine = Math.sin(time + i) * 4;
        const x = i * 29;
        let y = sine + c.height / 2;
        y += 12
        const angle = Math.sin(time + i) * (2 * Math.PI / 180);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillText(text[i], 0, 0);
        ctx.restore();
    }
    
    requestAnimationFrame(draw);
}

function init() {
    c = document.createElement("canvas");
    ctx = c.getContext("2d");
    c.textContent = "Your browser is a prehistoric piece of garbage";
    c.height = 64;
    c.width = 256;
    document.getElementById("content").prepend(c);
    const myFont = new FontFace('dh', 'url(fnt/dh.woff2)');
    ctx.fillStyle = "#fff"
    myFont.load().then((font) => {
        document.fonts.add(font);
        ctx.font = "64px dh";
        requestAnimationFrame(draw);
    });
}