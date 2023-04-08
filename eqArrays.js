// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
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
    
eqArrays([1, 2, 3], [1, 2, 3]), true; // => should PASS



eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

