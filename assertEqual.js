//Using Template Literals aka Template Strings, improve Implement assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);







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



// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/







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



#2
// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


#3
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

*/









