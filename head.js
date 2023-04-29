// A PROPOS: ____.head([ ]) is a method that returns the first element of an array.

// eg: meow.head([1,2,3]); 
// output: 1

//Create a function 'head' which returns the first item in the array
//The head function should not return the first element as an array. It should simply return the element itself.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// "head" here is a function called to return the 1st element of the array ie [0]
const head = function(array) {
  return array[0];
};

//Test code
assertEqual(head([5,6,7]), 5); 
// in "actual" [5,6,7], the head function calls to return the 1st element in that array ie [0] which is 5. this 5 is also what's "expected" therefore this ASSERTION PASSED.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

/*
const head = function(array) {
  return array[0];
};
*/

/* REFAIT 

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head= function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

*/