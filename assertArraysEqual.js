// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

// this imports the function from 'eqArrays.js'
const eqArrays = require('./eqArrays');



const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
