// A PROPOS: _____.flatten([ ]) is a function that "flattens" an array into a single-level array
// Used to deal with arrays inside another array

// Arguments: array(Array): the array to flatten
// Returns: (Array): returns the new flattened array

// eg: meow.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

// _____.flattenDeep([ ]) is a function that recursively flattns the WHOLE array

// eg: meow.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]

const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const element of array[i]) {
        flatArray.push(element);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
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