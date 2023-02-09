"use strict";

// create an array
const arr = [];
let counter = 0;

initLoop();

function initLoop() {
  loop();
}

function loop() {
  if (counter <= 8) {
    // unshift(...items) adds items to the beginning
    arr.unshift(counter);
    // adds 1
    counter++;

    // calls loop with time delay of 1000 ms
    setTimeout(loop, 1000);
    console.log(arr);
  } else {
    // unshift(...items) adds items to the beginning
    arr.unshift(counter);
    counter++;

    // pop() removes items from end and returns  it
    arr.pop();
    // calls loop with time delay of 1000 ms

    setTimeout(loop, 1000);

    console.log(arr);
  }
}
