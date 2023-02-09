// When this is located at the top of a script, the whole script works the “modern” way.
"use strict";

// const value = 0;

// if (value) {
//   console.log("Value is truthy");
// } else {
//   console.log("Value is falsy");
// }

// Falsy || null, false, undefined,  0, "", NaN, -0,

// Truthy || true, "0", "true", "false", 2, {}, [], infinity, 3.14, " "

// 0 == "0" = true however 0 === "0" = false because the types are not the same
// 0 == [] = true, However 0 === [] = false

// --------------- Template literals -------------------------
//  ---------- Exercises with .length --------------

// const professorName = "Albus Percival Wulfric Brian Dumbledore";
// const len = professorName.length;

// console.log(`${professorName} is ${len} characters long including spaces`);

// -------------- Exercises with index[] -------------

// const professorName = "Albus Percival Wulfric Brian Dumbledore";
// const letter = professorName[38];

// console.log(`The first letter of ${professorName} is ${letter}`);

// Albus questions:
// 1. The answer is 39 characters
// 2. Index 2 is b
// 3. Index 6 is p
// 4. The index for the first D in Dumbledore is 29
// 5. The index for the last e in Dumbledore is 38

// --------------- Substring exercises ----------------
// The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// const fullName = "Albus Percival Wulfric Brian Dumbledore";
// const firstName = fullName.substring(0, 5);

// console.log(`_${firstName}_`);

// Albus substring questions:
// 1. The answer is (0,5)
// 2. The answer is (29)
// 3. The answer is (15, 22)
// 4. The answer is (14, 23)
// 5. The answer is (25, 28)
// 6. The answer is (2, 5)

// ---------------- Name parts exercise ------------------

// const fullName = "Peter Heronimous Lind";
// let firstName;
// let middleName;
// let lastName;

// firstName = fullName.substring(0, fullName.indexOf(" "));
// middleName = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" "));
// lastName = fullName.substring(fullName.lastIndexOf(" "));

// console.log(firstName + middleName + lastName);

// ---------------- first letter caps exercise ------------------

// let firstName = "felicia";

// firstName = firstName.charAt(0).toLowerCase() + firstName.substring(1).toUpperCase();

// console.log(firstName);

// ---------------- 3caPitalization parts exercise ------------------

// ------------------  init loop   ----------------------

// let iterator = 0;
// let maxNumberOfIterations;
// initLoop();
// function initLoop() {
//   console.log("initloop");
//   maxNumberOfIterations = 11;
//   loop();
// }

// function loop() {
//   console.log("loop");

//   // this adds 1
//   iterator++;
//   if (iterator < maxNumberOfIterations) {
//     // this calls its self again with a random delay
//     setTimeout(loop, Math.random() * 1000);
//   }
// }

// ------------------ Array's -------------------- //

// const people = ["Harry", "Ron", "Hermione"];
// let result;

// // push() adds to end of array
// result = people.push("Draco");
// // pop() removes from end of array and returns it
// result = people.pop();

// result = people.push("Neville");
// result = people.push("Luna");
// // slice() creates new array - in this case with first 3 items
// result = people.slice(0, 3);
// // splice() inserts new item in between the 2 items specified
// result = people.splice(1, 0, "Cho");
// // this inserts new item on the specified place
// people[1] = "Ginny";
// result = people.push("Fred", "George");
// // indexOf finds where in the array the item specified is
// result = people.indexOf("Fred");
// // shift() removes from the beginning and returns it
// result = people.shift();
// // unshift(...items) adds items to the beginning
// result = people.unshift();

// console.log(result);
// console.log(people);

// const str = "abcdefghijklmn";
// const arr1 = str.split();
// const arr2 = Array.from(str);

// // turns full string into array
// console.log(arr1);

// // seperates every character to 1 item in an array
// console.log(arr2);

// ----------------------- counting array ----------------- //
// const arr = [];
// let counter = 0;

// initLoop();

// function initLoop() {
//   loop();
// }

// function loop() {
//   if (counter <= 8) {
//     // adds 1
//     counter++;

//     // unshift(...items) adds items to the beginning
//     arr.unshift(counter);
//     // calls loop with time delay of 1000 ms
//     setTimeout(loop, 1000);
//     console.log(arr);
//   } else if (counter > 8) {
//     counter++;
//     arr.unshift(counter);
//     arr.pop();
//     setTimeout(loop, 1000);
//     console.log(arr);
//   }
// }

