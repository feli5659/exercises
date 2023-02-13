"use strict";

const artwork1 = document.querySelector("#artwork1");
const artwork2 = document.querySelector("#artwork2");
const artwork3 = document.querySelector("#artwork3");
const artwork4 = document.querySelector("#artwork4");
const artwork5 = document.querySelector("#artwork5");
const artwork6 = document.querySelector("#artwork6");
const artwork7 = document.querySelector("#artwork7");
const artwork8 = document.querySelector("#artwork8");
const artwork9 = document.querySelector("#artwork9");

window.addEventListener("loaded", start());
function start() {
  console.log("loaded");
  createArt();
}
function createArt() {
  // Artwork 1
  for (let counter = 100; counter <= 300; counter += 20) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${counter}px`;
    newDiv.style.height = `${counter}px`;
    newDiv.className = "box";
    artwork1.appendChild(newDiv);
  }

  // Artwork 2
  for (let counter = 0; counter < 90; counter += 10) {
    let newDiv = document.createElement("div");
    newDiv.style.rotate = `${counter}deg`;
    newDiv.className = "box";
    artwork2.appendChild(newDiv);
  }
  //   // Artwork 3
  for (let counter = 0; counter < 200; counter += 10) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${counter}px`;
    newDiv.style.height = `${counter}px`;
    newDiv.className = "circle";
    artwork3.appendChild(newDiv);
  }
  //   //   // Artwork 4
  //   for (let counter = -90; counter < 90; counter += 20) {
  //     let newDiv = document.createElement("div");
  //     newDiv.style.translateY = `${counter}px`;
  //     newDiv.className = "box";
  //     artwork4.appendChild(newDiv);
  //   }
  //   // Artwork 5
  for (let counter = 1; counter < 512; counter *= 2) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${counter}px`;
    newDiv.style.height = `${counter}px`;
    newDiv.className = "circle";
    artwork5.appendChild(newDiv);
  }
  //   // Artwork 6
  for (let counter = -20; counter < 45; counter += 5) {
    let newDiv = document.createElement("div");
    newDiv.style.transform = `translate(${counter}-50)`;
    // newDiv.style.transform = `rotate(${counter}*4)`;
    newDiv.style.rotate = `${counter}deg`;
    newDiv.className = "circle";
    artwork6.appendChild(newDiv);
  }
  //   // Artwork 7
  for (let counter = 0; counter < 200; counter += 10) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${counter}px`;
    newDiv.style.height = `${counter}px`;
    // newDiv.style.transformX = `translate(${counter}/2)`;
    // newDiv.style.transformY = `translate(${counter}/2)`;

    newDiv.className = "circle";
    artwork7.appendChild(newDiv);
  }
  //   // Artwork 8
  for (let counter = 50; counter < 200; counter += 10) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${counter}px`;
    newDiv.style.height = `${counter}px`;
    newDiv.className = "box";
    artwork8.appendChild(newDiv);
  }
  //   // Artwork 9
  for (let counter = 50; counter < 200; counter += 10) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${counter}px`;
    newDiv.style.height = `${counter}px`;
    newDiv.className = "box";
    artwork8.appendChild(newDiv);
  }
}
