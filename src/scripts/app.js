console.info('Hello world');
'use strict'

/*animation landing-page*/

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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

/* changer le theme et le nom du bouton

let changeTheme = document.querySelector(".text__darklight");

const darkTheme = document.querySelector(".btnTheme");

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
*/
// date copyright
let answerDate = document.querySelector(".date");
let today = new Date();
let year = today.getFullYear();
answerDate.innerHTML = year;



// animation 

var mock1 = document.querySelector(".vram");
if (mock1){
    gsap.from(".vram", {
    x: -500,
    duration: 1,
    scrollTrigger: {
      trigger: ".vram",
      start:'top bottom',
      end:'bottom top',
      scrub: 1,
    },
  });
}
var verif = document.querySelector(".vram");

if (verif) {
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].from(".vram", {
    scale: 1.5,
    duration: 2,
    scrollTrigger: {
      trigger: ".vram",
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5
    }
  });
}
var mock1 = document.querySelector(".mockup1");
if (mock1){
    gsap.from(".mockup1", {
    x: -600,
    duration: 1,
    scrollTrigger: {
      trigger: ".mockup1",
      start:'top top',
      end:'bottom top',
      scrub: 0.5,
    },
  });
}
