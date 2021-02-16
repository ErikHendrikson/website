// DOM Elements

const parent = document.getElementById("parent");
const el = document.createElement ("img");
let btns = document.getElementsByClassName("navbutton");

// Navbar

document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("nav").style.left = "0%";
});

document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("nav").style.left = "100%";
});

// Navbar actions

for(i of btns){
    i.addEventListener("click", function () { 
    document.getElementById("nav").style.left = "100%";
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    parent.appendChild(el);
    el.setAttribute("src", `${this.id}.jpeg`)
    })};

