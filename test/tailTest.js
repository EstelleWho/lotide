const tail = require("../tail");


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(tail(words));

//A PROPOS: ___.tail([ ]) is a method that returns all elements of an array except the first one [0].
// meow.tail([1, 2, 3, 4]); output: [2, 3, 4]

//Create a function 'tail' which returns the "tail" of an array: everything except for the first item (head) of the provided array.

//with .push() method
/*
const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  const tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};
*/
