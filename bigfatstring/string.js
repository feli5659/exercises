"use strict";

// variable for button
const btnOutput = document.querySelector("#genOutput");

// variables for reading a field
const inputField = document.querySelector("#input2");
const choice = document.querySelector("#options");
const outputField = document.querySelector("#output");
let result;
let input;
let option;
let output;

// loaded function
window.addEventListener("loaded", start());

function start() {
  console.log("loaded");
  btnOutput.addEventListener("click", generateOutput);
}

function generateOutput() {
  //   console.log("hej");
  input = inputField.value;
  output = outputField.value;

  //   Number is added to this as we want it to read the field as a number NOT a string
  option = Number(choice.value);
  if (option === 0) {
    // If input is a first name: Make the first character in a name uppercase, and the rest lowercase

    result = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();

    console.log(result);
  } else if (option === 1) {
    // If input is a full name: Find the first name

    result = input.substring(0, input.indexOf(" "));
    console.log(result);
  } else if (option === 2) {
    // If input is a full name: Find the length of the first name

    result = input.substring(0, input.indexOf(" ")).length;

    console.log(result);
  } else if (option === 3) {
    // If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string

    result = input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "));
    console.log(result);
  } else if (option === 4) {
    // If input is a filename: Check if a filename is .png or .jpg

    result = input.endsWith(".jpg");
    //  result = input.endsWith(".png");
    console.log(result);
  } else if (option === 5) {
    // If input is a password: Hide a password with the correct number of *s
    result = input.replace(input.substring(0), "*");
    console.log(result);
  } else if (option === 6) {
    // With any input: Make the third character uppercase

    result = input.substring(0, 2) + input.charAt(2).toUpperCase() + input.substring(3);
    console.log(result);
  } else if (option === 7) {
    // With any input: Make a character uppercase, if it follows a space or a hyphen

    console.log(result);
  }
}
