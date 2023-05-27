console.info('Hello world');
'use strict'

// navigation

let navButton = document.querySelector(".btn--burger")
 
navButton.addEventListener("click", toggleNavigation)
 
function toggleNavigation() {
 if (!document.body.hasAttribute("data-menu")) {
 document.body.setAttribute("data-menu", true);
 
 } else {
 document.body.removeAttribute("data-menu");
 }
}

// changer le theme et le nom du bouton

let changeTheme = document.querySelector(".text__darklight");
const darkTheme = document.querySelector(".btn");

darkTheme.addEventListener("click", function(){
    if(document.body.dataset.theme === "dark"){
        light();
        localStorage.setItem("theme", "light");
    } else {
        dark();
        localStorage.setItem("theme", "dark");
    } 
});

const userDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

let theme = localStorage.getItem('theme');
if((!theme && userDark) || (theme === "dark")){
    dark();
} else if(theme === "light"){
    light();
}

function dark(){
    document.body.setAttribute("data-theme", "dark");
    changeTheme.innerHTML = "dark-mode";
}

function light(){
    document.body.setAttribute("data-theme", "light");
    changeTheme.innerHTML = "light-mode";
}

// date copyright
let answerDate = document.querySelector(".date");
let today = new Date();
let year = today.getFullYear();
answerDate.innerHTML = year;

let gridButton = document.querySelector(".btn--grid")

gridButton.addEventListener("click", function() {
    document.querySelector("#grid-overlay").style.display = "block";
});

let gridOverlay = document.querySelector("#grid-overlay")

gridOverlay.addEventListener("click", function() {
    document.querySelector("#grid-overlay").style.display = "none";
});