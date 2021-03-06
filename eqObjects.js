const assertEqual = function (actual, unexpected) {

    if (actual !== unexpected) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${unexpected}`);
    } else {
        if (actual === unexpected)
            console.log(`✅✅✅ Assertion Passed: ${actual} === ${unexpected}`);

    }

};

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

const eqObjects = function (object1, object2) {
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    } for (let key of keys1) {
        if (Array.isArray(object1[key], object2[key])) {
            return eqArrays(object1[key0, object2[key]])

        } else {
            if (object1[key] !== object2[key]) {
                return false
            }
        }
    } 
    return true
};

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false
