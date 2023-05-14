# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @estellewho/lotide`

**Require it:**

`const _ = require('@estellewho/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: function that returns first element of array

* tail: fundtion that returns array without first element 

* middle: function that returns middle element(s) of array by exluding the first and last elements

* assertArraysEqual: function that compares if two ARRAYS are equal, returns T/F

* assertEqual: function that compares if two VALUES are equal, returns T/F

* assertObjectsEqual: function that compares if two OBJECTS are equal, returns T/F

* countLetters: function that counts occurrences of characters in string

* countOnly: function that counts occurrences of an elements in array

* eqArrays: function that compares two ARRAYS, returns T/F

* eqObjects: function that compares two OBJECTS, returns T/F

* findKey: function that takes in an object and a call back, scans the object and returns the first key for which the callback returns a truthy value. If no key is found, it returns undefined.

* findKeyByValue: function that searches for a key on an object where its value matches a given value. If no key found, it returns undefined

* flatten: function that flattens nested array(array of arrays) into a single-level array

* letterPositions: function that returns all the indices in the string where each character is found

* map: function that creates new array with the results of calling a provided function on every element in the calling array

* takeUntil: function that returns a slice of the array with elements taken from the beginning

* without: function that removes elements from an array
