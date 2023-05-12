const assertEqual = require('./assertEqual');

const head = function(array) {
  return array[0];
};

module.exports = head;

// A PROPOS: .head([ ]) is a method that returns the first element of an array.

// eg: meow.head([1,2,3]); 
// output: 1

//Create a function 'head' which returns the first item in the array
//The head function should not return the first element as an array. It should simply return the element itself.
// "head" here is a function called to return the 1st element of the array ie [0]