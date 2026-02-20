import { Person } from "./class.js";
let your = new Person();
let canInteract = true;
let effects = [];

let state = {
    your: your,
    canInteract: canInteract
};

export { state }