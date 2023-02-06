// When this is located at the top of a script, the whole script works the “modern” way.
"use strict";


const value = 0;

if (value) {
  console.log("Value is truthy");
} else {
  console.log("Value is falsy");
}

// Falsy || null, false, undefined,  0, "", NaN, -0, 

// Truthy || true, "0", "true", "false", 2, {}, [], infinity, 3.14, " "


// 0 == "0" = true however 0 === "0" = false because the types are not the same
// 0 == [] = true, However 0 === [] = false 