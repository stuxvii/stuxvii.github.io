// hihihihi
var section = "";
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
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
    for (const sel of data[selected]) { // im sorry. im literally so sorry. listen, EVERY line of code you read here is made by me (or stolen from w3schools/mdn), but see those square brackets?... yeah... i had to use ai to figure them out (IT WAS A LAST RESORT I SWEAR) DHGFJSHGKFSDHGLFKDSHJLGFDSJGLKFDJGLKDJGKLFDJG:LKFDJ:GLKJFD:LGKJFDL:KJ PLEASE FORGIVE ME ILL NEVER DO THIS AGAIN
      const item = document.createElement("li"); //create the element for us to put button in
      item.appendChild(document.createElement("span")).textContent = sel.name + ' '; //create the button for us to put in element
      item.appendChild(document.createElement("strong")).textContent = sel.tag;
      item.setAttribute("onclick", `alert("heads up! redirecting you to ${(sel.link)}"); location.href=\'${(sel.link)}\'`); // make it so when you click it it warns you
      results.appendChild(item); // add the thing!!!!!!!!!!!!!!!1 yippe we're done
      delay(1000);
    }})}}