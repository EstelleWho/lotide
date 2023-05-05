const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
// Use the Object.keys function to help you easily search through all the object keys.
// Use for...of to loop over the keys returned by Object.keys.


function findKeyByValue(obj, val) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
}
