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

assertArraysEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
assertArraysEqual(eqArrays([1234], [4321]), false); 