// hihihihi if you plan on using this code for your own website please put this website's url in a credit section or smth..
// (c) 2025 stuxvii.com
var section = "";
var animate = false;

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



function btndisplay(selected) {
  if (section != selected) { // doing this so the section being loaded isnt needed to be reloaded all the time!!
    section = selected;
    document.getElementById('sectionname').innerHTML = selected; // display the name of like the section
    document.getElementById('contentlist').innerHTML = ""; //clear the whole thing because umm.... i need to put stuff inside yk
    const jsonfile = new Request("items.json"); //retrieve the list of contents
    const results = document.getElementById("contentlist"); // establish where we're sending the data
    let sel = selected; //alias for easier calling
    fetch(jsonfile) 
    .then((response) => response.json())
    .then((data) => {//tbh no clue what this is, copied it from mdn i HOPE i dont need to know
    for (const sel of data[selected]) { // do the below code for EVERY single element in the array stuff
      const item = document.createElement("li"); //create the element for us to put button in
      item.appendChild(document.createElement("span")).textContent = sel.name + ' '; //create the button for us to put in element
      if (typeof sel.tag !== 'undefined') {
        item.appendChild(document.createElement("strong")).textContent = sel.tag; // check if there's like a tag and such and if there is then create it
      }
      if (typeof sel.dl !== 'undefined') {
        item.setAttribute("onclick", `alert('heads up! a file from \\n${(sel.link)}\\nwill be shortly downloaded. \\n${(sel.message)}'); downloadFile('${(sel.link)}', '${(sel.filename)}')`);
      }
      else {
        item.setAttribute("onclick", `alert('heads up! redirecting you to ${(sel.link)}.'); location.href=\'${(sel.link)}\'`); // make it so when you click it it warns you and then it sends you to the target website
      }
      results.appendChild(item); // add the thing!!!!!!!!!!!!!!!1 yippe we're done
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