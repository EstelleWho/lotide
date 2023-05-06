const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    //compare the elements in each array
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (eqArrays(array1[i], array2[i]) === false) {
          return false;
        }
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

// Take an array and return the middle-most elements of the array.
// The array must have at least 3 elements. If less than 3 elements, return an empty array,
// Odd number of elements, return single middle element.
// Even number of elements, return two middle elements.


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
