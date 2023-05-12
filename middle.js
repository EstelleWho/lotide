const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  if (array.length < 3) {
    return [];
  }; // this will return nothing is less than 2 elements. 
  const midArray = Math.floor(array.length /2); 
  if (array.length % 2 === 0) { // Even array
    return [array[midArray -1], array[midArray]];
    } else { // Odd array
      return [array[midArray]];
    };
  }

  module.exports = middle;