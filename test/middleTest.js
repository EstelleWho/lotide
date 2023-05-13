const middle   = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {

  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});


// Take an array and return the middle-most elements of the array.
// The array must have at least 3 elements. If less than 3 elements, return an empty array,
// Odd number of elements, return single middle element.
// Even number of elements, return two middle elements.
