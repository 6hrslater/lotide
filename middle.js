const eqArrays = require('./eqArrays')
  

const assertArraysEqual = require('./assertArrayEqual')

const middle = function (array) {
    if (array.length <= 2) {
        return [];
    } else if (array.length % 2 === 0) {
        let i = array.length / 2 - 1;
        let j = array.length / 2;
        return [array[i], array[j]]
    } else {
        return [array[Math.floor(array.length / 2)]];
    }
};

module.exports = middle;




