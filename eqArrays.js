const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) 
    return false;
  for (let i = array1.length; i--;) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => fals

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => fals

module.exports = eqArrays;