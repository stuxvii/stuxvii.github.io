const jsonfile = new Request("items.json");
const listing = document.getElementById("listingg");
const results = document.getElementById("contentlist")
var animate = true;
var section = "greetmsg";


fetch(jsonfile) // main shit
  .then((response) => response.json())
  .then((data) => {
    for (const sel of data.quotes) {
      let rngsubtitle = pickRandomProperty(sel.nmpinla); // LET ME TELL YOU, I'M OUT HERE FROM A VERY FAR AWAY PLACE ALL FOR A CHANCE TO BE A STAR NOWHERE SEEMS TO BE TOO FAR 🗣️🗣️🗣️🔥🔥🔥🔥

      document.getElementById('subtitle').innerHTML = sel.nmpinla[rngsubtitle];
    }

    for (const sel of data.options) { // go through every section namee
      const item = document.createElement("li");

      item.appendChild(document.createElement("span")).textContent = sel.name;
      if (typeof sel.exec !== 'undefined') {
        item.setAttribute("onclick", `${(sel.exec)}`);
      } else {
        item.setAttribute("onclick", `btndisplay('${(sel.section)}')`);
      }
      item.setAttribute("id", `${(sel.section)}`);
      listing.appendChild(item);
    }
    document.getElementById('greetmsg').setAttribute("class", "selecteditem");
    for (const sel of data[section]) { // go through every section namee
      const item = document.createElement("li");
      item.appendChild(document.createElement("span")).textContent = sel.name;
      results.appendChild(item);
    }
  })

function btndisplay(choice) {
  if (section !== choice) {
    document.getElementById(section).setAttribute("class", "none");
    section = choice;
    document.getElementById(choice).setAttribute("class", "selecteditem");
    document.getElementById('contentlist').innerHTML = "";
    fetch(jsonfile)
      .then((response) => response.json())
      .then((data) => {
        for (const sel of data[choice]) { // do the below code for EVERY single element in the array stuff
          const item = document.createElement("li"); //create the element for us to put stuff in
          if (sel == 'greetmsg') {
            console.log(sel);
            item.appendChild(document.createElement("span")).textContent = sel.name;
            results.appendChild(item);
          }
          if (typeof sel.name !== 'undefined') {
            if (typeof sel.icon !== 'undefined') {
              item.appendChild(document.createElement("img")).src = sel.icon;
            }
            item.appendChild(document.createElement("span")).textContent = ' ' + sel.name + ' ';
            if (typeof sel.kmoji !== 'undefined') {
              let rngkaomoji = pickRandomProperty(sel.kaomojis);
              item.appendChild(document.createElement("strong")).textContent = sel.kaomojis[rngkaomoji];
            }
            if (typeof sel.tag !== 'undefined') {
              item.appendChild(document.createElement("strong")).textContent = sel.tag;
            }
            if (typeof sel.link !== 'undefined') {
              item.setAttribute("onclick", `if (confirm('would you like to go to ${(sel.link)}?') == true) {
                location.href=\'${(sel.link)}\';
              }`
            );
            } else {
              item.setAttribute("onclick", `YOUUU();`);
            }
            if (typeof sel.dl !== 'undefined') {
              item.setAttribute("onclick", `if (confirm('would you like to download a file from \\n${(sel.link)}\\n') == true) {
                downloadFile('${(sel.link)}', '${(sel.filename)}');
              }`
              );
            }
            if (typeof sel.exec !== 'undefined') {
              item.setAttribute("onclick", `${(sel.exec)}`);
            }
            results.appendChild(item);
          }
        }
      }
      )
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

function YOUUU() {
  const u = new Audio('uuu.ogg');
  u.play();
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
} // end of third party code

function animationtoggle() {
  switch (animate) {
    case true:
      document.getElementById("title").style.animationName = 'null'; //we dont want the user to get motion sickness first thing they enter the website
      document.getElementById("subtitle").style.animationName = 'null';
      document.body.style.animationPlayState = 'paused'
      animate = false;
      break;
    case false:
      document.getElementById("title").style.animationName = 'titleintro'; //we DO want the user to get motion sickness first thing they enter the website
      document.getElementById("subtitle").style.animationName = 'pagecontent';
      document.body.style.animationPlayState = 'running'
      animate = true;
      break;
  }
}