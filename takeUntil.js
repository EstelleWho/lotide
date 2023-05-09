// It will take in 2 parameters:
  // 1. The array to work with
  // 2. The callback (which Lodash calls "predicate")

// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.


const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (callback(item) !== true) {
      results.push(item);
    } else {
      return results;
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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