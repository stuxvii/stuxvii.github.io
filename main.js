// hihihihi if you plan on using this code for your own website please put this website's url in a credit section or smth..
// (c) 2025 stuxvii.com
var section = "";
var animate = false; // enable animations by default
const jsonfile = new Request("items.json"); // select json file

document.getElementById("animated").style.animationName = 'null'; //we dont want the user to get motion sickness first thing they enter the website
document.getElementById("animated1").style.animationName = 'null';
document.getElementById("animated2").style.animationName = 'null';
document.body.style.animationPlayState = 'paused'

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

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

function btndisplay(selected) {
  if (section != selected) { // doing this so the section being loaded isnt needed to be reloaded all the time!!
    section = selected;
    document.getElementById('contentlist').innerHTML = ""; //clear the whole thing because umm.... i need to put stuff inside yk
    const results = document.getElementById("contentlist"); // establish where we're sending the data
    let sel = selected; //alias for easier calling
    fetch(jsonfile) 
    .then((response) => response.json())
    .then((data) => {//tbh no clue what this is, copied it from mdn i HOPE i dont need to know
    for (const sel of data[selected]) { // do the below code for EVERY single element in the array stuff
      const item = document.createElement("li"); //create the element for us to put button in
      
      document.getElementById('sectionname').innerHTML = sel.title;

      if (typeof sel.name !== 'undefined') {
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
          console.log(sel.tag);
          console.log(sel.kmoji);
          if (typeof sel.kmoji !== 'undefined') 
            {
              let rngkaomoji = pickRandomProperty(sel.kaomojis);
              item.appendChild(document.createElement("strong")).textContent = sel.kaomojis[rngkaomoji].kaomoji
            } 
          else if (typeof sel.kmoji == 'undefined')
            {
              item.appendChild(document.createElement("strong")).textContent = sel.tag; // check if there's like a tag and such and if there is then create it
            }
      }
      }


      if (typeof sel.link == 'undefined') {
        item.setAttribute("onclick", `alert('ermm.. umm.. for some reason theres not a link for this specific option... falling back on SOULJA BOY CRANK THAT..'); location.href=\'${(sel.link)}\'`);
        results.appendChild(item);
      }
       // add the thing!!!!!!!!!!!!!!!1 yippe we're done

    }})}}

function animationtoggle() {
  if (animate) {
    document.getElementById("animated").style.animationName = 'null'; //we dont want the user to get motion sickness first thing they enter the website
    document.getElementById("animated1").style.animationName = 'null';
    document.getElementById("animated2").style.animationName = 'null';
    document.body.style.animationPlayState = 'paused' 
    animate = false;
  }
  else {
    document.getElementById("animated").style.animationName = 'titleintro'; //we dont want the user to get motion sickness first thing they enter the website
    document.getElementById("animated1").style.animationName = 'pagecontent';
    document.getElementById("animated2").style.animationName = 'pagecontent';
    document.body.style.animationPlayState = 'running'
    animate = true;
  }
}

fetch('/items.json').then(function(response) { //Dynamically refresh JSON file, as it is cached by the browser and when adding new entries it ISNT GOOD!!!!
  return response.json();
});

if (window.screen.width <= 634) {
  document.getElementById("greetmsg").innerHTML = "Welcome to stuxvii.com! here you can find ummm cool stuff just click one of the options above";
}
const results = document.getElementById("listingg"); // establish where we're sending the data
fetch(jsonfile) 
.then((response) => response.json())
.then((data) => {//tbh no clue what this is, copied it from mdn i HOPE i dont need to know
for (const sel of data.options) {
  const item = document.createElement("li");
  item.appendChild(document.createElement("span")).textContent = sel.name;
  item.setAttribute("onclick", `btndisplay('${(sel.section)}')`);
  results.appendChild(item);
  console.log(sel.name);
  console.log(sel.section);
}})