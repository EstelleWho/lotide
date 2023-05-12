/* The goal of this exercise is to remove the values that are in the "actual" array

ie: without([1, 2, 3], [1])
the first array is SOURCE [1, 2, 3]
the second array is itemsToRemove [1]

aka: remove "1" from the first array
*/


const without = function(source, itemsToRemove) {
 // result will be an empty array that will store the elements that aren't in itemstoremove
  const result = [];
  // use for...of loop to go over each line of the source array and call the elements 
 for (let element of source) {
  //if it doesnt include the element is not there, you use .push to add it to the array
  if (!itemsToRemove.includes(element)) {
    result.push(element);
  }
 }
 return results;
};




/*
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/

//Test
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


/*
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/