const jsonfile = new Request("items.json");
var animate = true;
var section = "greetmsg";

fetch(jsonfile) // manage the quirky little splash text
.then((response) => response.json())
.then((data) => {
for (const sel of data.quotes) {
  let rngsubtitle = pickRandomProperty(sel.nmpinla); // LET ME TELL YOU, I'M OUT HERE FROM A VERY FAR AWAY PLACE ALL FOR A CHANCE TO BE A STAR NOWHERE SEEMS TO BE TOO FAR 🗣️🗣️🗣️🔥🔥🔥🔥
  document.getElementById('subtitle').innerHTML = sel.nmpinla[rngsubtitle];
}})
 if (Math.floor(Math.random() * 10) == 9) {
    location.href = "https://www.youtube.com/watch?v=PDecYCBn5Kw";
 }
// add all the sectionss
results = document.getElementById("listingg"); // set our target
fetch(jsonfile) 
.then((response) => response.json())
.then((data) => {
for (const sel of data.options) { // go through every section namee
  const item = document.createElement("li");
  item.appendChild(document.createElement("span")).textContent = sel.name;
  item.setAttribute("onclick", `btndisplay('${(sel.section)}')`);
  item.setAttribute("id", `${(sel.section)}`);
  results.appendChild(item);
}})

greet = document.getElementById("contentlist"); // set our target
fetch(jsonfile) 
.then((response) => response.json())
.then((data) => {
for (const sel of data.greetmsg) { // go through every section namee
  const item = document.createElement("li");
  item.appendChild(document.createElement("span")).textContent = sel.name;
  greet.appendChild(item);
}})

// FUNCTION REALM // aka stolen code realm
function btndisplay(choice, force) {
    if (section !== choice || force == 1) { // highlight current thingg
    document.getElementById(section).setAttribute("class", "none"); // look for any previous activated section and make its theme deactivated
    section = choice; // set the current activated section
    document.getElementById(choice).setAttribute("class", "selecteditem"); // activate selected theme
    const results = document.getElementById("contentlist"); // establish where we're sending the data
    document.getElementById('contentlist').innerHTML = ""; //clear the whole thing because umm.... i need to put stuff inside yk
    let sel = choice; //alias for easier calling
    fetch(jsonfile) 
    .then((response) => response.json())
    .then((data) => {//tbh no clue what this is, copied it from mdn i HOPE i dont need to know
    for (const sel of data[choice]) { // do the below code for EVERY single element in the array stuff
      const item = document.createElement("li"); //create the element for us to put element in
        if (sel == 'greetmsg') {
            console.log(sel);
            item.appendChild(document.createElement("span")).textContent = sel.name;
            results.appendChild(item);
        }
      if (typeof sel.name !== 'undefined') {
        if (typeof sel.link) {
          if (typeof sel.dl !== 'undefined') {
            item.setAttribute("onclick", `alert('heads up! a file from \\n${(sel.link)}\\nwill be shortly downloaded. \\n${(sel.message)}'); downloadFile('${(sel.link)}', '${(sel.filename)}')`);
            results.appendChild(item);
          } else {
            item.setAttribute("onclick", `alert('heads up! redirecting you to ${(sel.link)}.'); location.href=\'${(sel.link)}\'`); // make it so when you click it it warns you and then it sends you to the target website
            results.appendChild(item);
          }
          if (typeof sel.icon !== 'undefined') {
            item.appendChild(document.createElement("img")).src = sel.icon;
            item.appendChild(document.createElement("span")).textContent = ' ' + sel.name + ' '; // make some margin for image
          } else {
          item.appendChild(document.createElement("span")).textContent = sel.name + ' '; //create the button for us to put in element
          }
          if (typeof sel.tag !== 'undefined') {
            if (typeof sel.kmoji !== 'undefined') 
              {
                let rngkaomoji = pickRandomProperty(sel.kaomojis);
                item.appendChild(document.createElement("strong")).textContent = sel.kaomojis[rngkaomoji];
              } 
            else
              {
                item.appendChild(document.createElement("strong")).textContent = sel.tag; // check if there's like a tag and such and if there is then create it
              }
        }}
      }}})
}}

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

function saveFile(url, filename) { // start of code made by https://muhimasri.com/blogs/how-to-save-files-in-javascript/
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || "file-name";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

async function downloadFile(url, filename) {
  try {
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
    saveFile(blobUrl, filename);
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