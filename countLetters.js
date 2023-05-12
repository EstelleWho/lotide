const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

// Use for...of loops with strings

const countLetters = function(strings) {
  let counter = {};

  for (let value of strings) {
    if (value === ' ') {
      continue;
    } else {
      counter[value] = (counter[value] || 0) + 1;
    }
  }
  return counter;
};
