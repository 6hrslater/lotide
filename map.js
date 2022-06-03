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
}




const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callBack) {
    const results = [];
    for (let item of array) {
        results.push(callBack(item))
    }
    return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
