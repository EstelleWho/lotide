const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;


// A PROPOS: console.assert() is a method that will print ASSERTION FAILED if the assertion is FALSE. If it's TRUE, nothing will happen. 

// A PROPOS: ES6 Template Literals/Template Strings: this is used to concatenate(ie add) strings together and make it look fancier, simpler, and faster! Instead of console.log('Hello, ' + name + '!'), you would write console.log(`'Hello, ${name}!`), you `${INTERPOLATE(ie inject)} the variable inside back-ticks`.

// FUNCTION IMPLEMENTATION
//template literals, template strings
//which allow you to insert variables / JS into strings by using back-ticks `` and the ${} symbol.
