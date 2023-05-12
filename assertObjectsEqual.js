/* REQUIREMENT:
[x] Functions takes 2 objects/parameters: actual and expected
[x] console.log a message: passed or failed
*/

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 

  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};




const eqObjects = function(object1, object2) {
  // assigning key1 & key2 by using Object.keys() to get the array of keys from each object
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  // if the length of object1 & 2 are diff return false
  if (key1.length !== key2.length) {
    return false;
  }
  // is there key1 in object2? if no -> false
  for (const key of key1) {
    if (!(key in object2)) {
      return false;
    }
    // are the keys in object1 and object2 the same? if no -> false
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};