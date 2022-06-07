const eqArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }

    }
    return true
};


const assertArraysEqual = function (array1, array2) {
    let eqvArray = eqArrays(array1, array2)
    if (eqvArray === true) {
        console.log(`✅✅✅ Assertion Passed`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed`);
    }
};

const letterPositions = function (sentence) {
    const results = {}
    for (let i = 0; i < sentence.length; i++) {
        let letters = sentence[i];
        if (letters !== ' '); {
            if (results[letters]) {
                results[letters].push(i);
            } else {
                results[letters] = [i];
            }

        }
    }
    return results
};

module.exports = letterPositions;

// console.log(letterPositions('Codinggggggg'))
// assertArraysEqual(letterPositions("hello").e, [1]);
