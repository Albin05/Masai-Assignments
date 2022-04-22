import "./index.css"
import image from "./images.png"

const logo = document.getElementById("logo");

const logo_img = document.createElement("img");

logo_img.setAttribute("src", image)

logo.append(logo_img);

const button = document.getElementById("button");
button.addEventListener("click", appendNotes);

function appendNotes(){
    const notes = document.getElementById("notes");

    const text = document.getElementById("text").value;

    let h1 = document.createElement("h1");
    h1.innerText = text;

    notes.append(h1);
};

