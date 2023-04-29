// A PROPOS: console.assert() is a method that will print ASSERTION FAILED if the assertion is FALSE. If it's TRUE, nothing will happen. 

// A PROPOS: ES6 Template Literals/Template Strings: this is used to concatenate(ie add) strings together and make it look fancier, simpler, and faster! Instead of console.log('Hello, ' + name + '!'), you would write console.log(`'Hello, ${name}!`), you `${INTERPOLATE(ie inject)} the variable inside back-ticks`.

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //this will pring ASSERTION FAILED
assertEqual(1, 1); // this will print nothing


/*
****** En premier: *******
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return (actual === expected);
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    console.log("❌❌❌ Assertion Failed: " + actual + " !== " + expected));
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);

****** Now using ES6 Template Literals ${}: *****

#1
// FUNCTION IMPLEMENTATION
//template literals, template strings
//which allow you to insert variables / JS into strings by using back-ticks `` and the ${} symbol.

const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};
*/

/* REFAIT */

/* FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  }
  else {
  console.log(`Assertion Failed: ${actual} !=== ${expected}`)
  }
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

*/