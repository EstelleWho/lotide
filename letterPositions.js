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



const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

