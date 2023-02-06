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

const fullName = "Peter Heronimous Lind";
let firstName;
let middleName;
let lastName;

firstName = fullName.substring(0, fullName.indexOf(" "));
middleName = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" "));
lastName = fullName.substring(fullName.lastIndexOf(" "));

console.log(firstName + middleName + lastName);


// ---------------- Name parts exercise ------------------