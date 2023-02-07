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
let passWord = "*";

// loaded function
window.addEventListener("loaded", start());

function start() {
  console.log("loaded");
  btnOutput.addEventListener("click", generateOutput);
}

function generateOutput() {
  //   console.log("hej");
  input = inputField.value;

  //   Number is added to this as we want it to read the field as a number NOT a string
  option = Number(choice.value);
  if (option === 1) {
    // If input is a first name: Make the first character in a name uppercase, and the rest lowercase

    outputField.value = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
    console.log("option 1");
  } else if (option === 2) {
    // If input is a full name: Find the first name

    outputField.value = input.substring(0, input.indexOf(" "));
    console.log("option 2");
  } else if (option === 3) {
    // If input is a full name: Find the length of the first name

    outputField.value = input.substring(0, input.indexOf(" ")).length;
    console.log("option 3");
  } else if (option === 4) {
    // If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string

    outputField.value = input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "));
    console.log("option 4");
  } else if (option === 5) {
    // If input is a filename: Check if a filename is .png or .jpg
    if ((result = input.endsWith(".jpg"))) {
      outputField.value = result = input.endsWith(".jpg");
    } else if ((result = input.endsWith(".png"))) {
      outputField.value = result = input.endsWith(".png");
    } else {
      outputField.value = "There is no such file";
    }
    console.log("option 5");
  } else if (option === 6) {
    // If input is a password: Hide a password with the correct number of *s
    // outputField.value = input.replace(input.substring(0), "*");
    outputField.value = `${passWord.repeat(input.length)} (This passwords length is ${input.length} stars :-))`;
    console.log("option 6");
  } else if (option === 7) {
    // With any input: Make the third character uppercase

    outputField.value = input.substring(0, 2) + input.charAt(2).toUpperCase() + input.substring(3);
    console.log("option 7");
  } else if (option === 8) {
    // With any input: Make a character uppercase, if it follows a space or a hyphen
    result = "";
    Array.from(input).forEach((letter, i) => {
      if (input[1 - 1] == " " || input[i - 1] === "-") {
        outputField.value = result += input[i].toUpperCase();
      } else {
        outputField.value = result += input[i];
      }
    });
    console.log(result);
  }
}
