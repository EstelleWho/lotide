const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


/* REQUIREMENT:
[x] Function takes in 2 objects: object1 and object 2
[x] Return TRUE is both objects have identical keys with idential values
[x] Else return FALSE

- We have to compare 2 objects in this function called eqObjects.
- first, you check if the length of the keys are the same
- second, then you check in each object if their keys are the same
*/


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