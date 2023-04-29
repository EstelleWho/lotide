// A PROPOS: console.assert() is a method that will print ASSERTION FAILED is the assertion is FALSE. If it's TRUE, nothing will happen. 

//Using Template Literals aka Template Strings, improve Implement assertEqual
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


/* IMPLEMENT assertEqual
//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('🟢🟢🟢 Assertion Passed: 1 === 1');
  } else {
    console.log('🔴🔴🔴 Assertion Failed: Lighthouse Labs !== Bootcamp');
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/






/*// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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



