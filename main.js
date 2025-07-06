async function initjson() {
  const jsonfile = new Request("items.json");
  data = await fetch(jsonfile).then((response) => response.json())
  start();
}

initjson();

const jsonfile = new Request("items.json");
const listing = document.getElementById("listingg");
const results = document.getElementById("contentlist");
const u = new Audio('uuu.ogg');
var animate = true;
var section = "greetmsg";


if (Math.floor(Math.random() * 12000) == 2763) {
  femty()
}

function femty() {
  const div = document.getElementById("ooh");
  const femty = document.createElement("img");
  femty.setAttribute("src", "femty.png");
  femty.setAttribute("class", "ooh");
  div.appendChild(femty);
  console.log("CONGRATULATIONS!!!!!!!! yOU JST HIT THE 1 IN 12k CHANCE TO BE [[[femty]]] JMPSACERD!!!!!!!!!!! feel free to like. screen shot this. and umm just pin it on your wall or something... or you probably just ran the 'femty()' command now that i think about it... hm... this is awkward... if you DID do that do NOT pin this in your wall, you shameless CHEATER!!!!!!!!");
}
async function start() {
  for (const sel of data.quotes) {
    let rngsubtitle = pickRandomProperty(sel.nmpinla); // LET ME TELL YOU, I'M OUT HERE FROM A VERY FAR AWAY PLACE ALL FOR A CHANCE TO BE A STAR NOWHERE SEEMS TO BE TOO FAR 🗣️🗣️🗣️🔥🔥🔥🔥

    document.getElementById('subtitle').innerHTML = sel.nmpinla[rngsubtitle];
  }

  for (const sel of data.options) { // go through every section namee
    const item = document.createElement("li");

    item.appendChild(document.createElement("span")).textContent = sel.name;
    if (typeof sel.exec !== 'undefined') {
      item.setAttribute("onmousedown", `${(sel.exec)}`);
    } else {
      item.setAttribute("onmousedown", `btndisplay('${(sel.section)}')`);
    }
    item.setAttribute("id", `${(sel.section)}`);
    listing.appendChild(item);
  }
  document.getElementById('greetmsg').setAttribute("class", "selecteditem");
  for (const sel of data[section]) { // go through every section namee
    const item = document.createElement("li");
    item.appendChild(document.createElement("span")).textContent = sel.name;
    results.appendChild(item);
    if (typeof sel.link !== 'undefined') {
      item.setAttribute("onmousedown", `location.href=\'${(sel.link)}\';`);
    }
  }
}

async function btndisplay(choice) {
  if (section !== choice) {
    document.getElementById(section).setAttribute("class", "none");
    section = choice;
    document.getElementById(choice).setAttribute("class", "selecteditem");
    document.getElementById('contentlist').innerHTML = "";
    for (const sel of data[choice]) { // do the below code for EVERY single element in the array stuff
      const item = document.createElement("li"); //create the element for us to put stuff in
      if (sel == 'greetmsg') {
        console.log(sel);
        item.appendChild(document.createElement("span")).textContent = sel.name;
        results.appendChild(item);
      }
      if (typeof sel.name !== 'undefined') {
        item.appendChild(document.createElement("span")).textContent = ' ' + sel.name + ' ';
        if (typeof sel.kmoji !== 'undefined') {
          let rngkaomoji = pickRandomProperty(sel.kaomojis);
          item.appendChild(document.createElement("strong")).textContent = sel.kaomojis[rngkaomoji];
        }
        if (typeof sel.tag !== 'undefined') {
          item.appendChild(document.createElement("strong")).textContent = sel.tag;
        }
        if (typeof sel.xoxo !== 'undefined') {
          item.setAttribute("style", "text-decoration: line-through")
        }
        if (typeof sel.link !== 'undefined') {
          item.setAttribute("onmousedown", `if (confirm('would you like to go to ${(sel.link)}?') == true) {
                location.href=\'${(sel.link)}\';
              }`
          );
        }
        if (typeof sel.dl !== 'undefined') {
          item.setAttribute("onmousedown", `if (confirm('would you like to download a file from \\n${(sel.link)}\\n') == true) {
                downloadFile('${(sel.link)}', '${(sel.filename)}');
              }`
          );
        }
        if (typeof sel.exec !== 'undefined') {
          item.setAttribute("onmousedown", `${(sel.exec)}`);
        }
        results.appendChild(item);
      }
    }
  }
}

function pickRandomProperty(obj) {
  var result;
  var count = 0;
  for (var prop in obj)
    if (Math.random() < 1 / ++count)
      result = prop;
  return result;
}

async function downloadFile(url, filename) { // https://muhimasri.com/blogs/how-to-save-files-in-javascript/
  try {
    const a = document.createElement("a");
    const response = await fetch(url, {
      headers: {
        Accept:
          "application/json, text/plain,application/zip, image/png, image/jpeg, image/*",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    a.href = blobUrl;
    a.download = filename || "file-name";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error("Error in fetching and downloading file:", err);
  }
}

async function skibidi() {
  for (const sel of data.quotes) {
    let rngsubtitle = pickRandomProperty(sel.nmpinla);
    document.getElementById('subtitle').innerHTML = sel.nmpinla[rngsubtitle];
  }
}