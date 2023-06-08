console.info('Hello world');
'use strict'

/*animation landing-page*/

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// navigation

let navButton = document.querySelector(".btn--burger")
var btnburger = document.querySelector(".btn--burger");
if (btnburger){
navButton.addEventListener("click", toggleNavigation)
 
function toggleNavigation() {
 if (!document.body.hasAttribute("data-menu")) {
 document.body.setAttribute("data-menu", true);
 
 } else {
 document.body.removeAttribute("data-menu");
 }
}
}
// date copyright
let answerDate = document.querySelector(".date");
let today = new Date();
let year = today.getFullYear();
answerDate.innerHTML = year;



// animation 

var svgvram = document.querySelector(".vram");
if (svgvram){
    gsap.from(".vram", {
    opacity: 0,
    x: 550,
    duration: 1,
    scrollTrigger: {
      trigger: ".vram",
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2,
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
      scrub: 0.5,
      toggleActions: 'play none none none',
    }
  });
}
var svgvramlegend = document.querySelector(".vram-legend");
if (svgvramlegend){
    gsap.from(".vram-legend", {
      scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".vram-legend",
      start:'top bottom',
      end:'bottom center',
      scrub: 0.5
    },
  });
}

var headset = document.querySelector(".headset");
if (headset){
gsap.from(".headset", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".headset",
    start: "center 90%",
    end: "center 50%",
    scrub: 0.5
  }
});
}
var iceberg = document.querySelector(".iceberg");
if (iceberg){
gsap.from(".iceberg", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".iceberg",
    start: "center 90%",
    end: "center 50%",
    scrub: 0.5
  }
});
}
var headelhead = document.querySelector(".headelhead");
if (headelhead){
gsap.fromTo(".headelhead",
  { y: 90 },
  {
    y: 0,
    transformOrigin: "50% 50%",
    repeat: 0,
    ease: "elastic.out(1, 0.3)",
    duration: 4
    
  });
}
var mstore = document.querySelector(".m",".store");
if (mstore){
  gsap.timeline({ repeat:-1, repeatDelay:0, yoyo:true})
    .to('.m', {duration:(i)=>[0.8,1.3][i], y:-10266, ease:'steps(29)', stagger:-0.3}, 0)
    .to('.store', {duration:2, scale:1.1, transformOrigin:'50% 50%', ease:'power2', onComplete:swapMask}, 0)

let currentMask = 1;
function swapMask(){
  if (currentMask==3) currentMask = 1;
  else currentMask++;
  gsap.set('.m', {attr:{'xlink:href':'https://assets.codepen.io/721952/liquidMask'+currentMask+'.svg'}})
}
gsap.to('.overlay', {y: '-100vh', delay:1.5});
gsap.to('.layer-1', {y: '-100vh', delay: .5});
gsap.to('.layer-2', {y: '-100vh', delay: .7});
gsap.to('.layer-3', {y: '-100vh', delay: .9});
}
var bubblegame = document.querySelector(".bubblegame");
if (bubblegame){
gsap.from(".bubblegame", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".bubblegame",
    start: "center 80%",
    end:'bottom center',
    scrub: 0.5

  }
});
}
// gallery
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

var gallery = document.querySelector(".gallery");
if (gallery){
  scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 250;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 250;
});
}
