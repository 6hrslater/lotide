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


let without = function (source, remover) {
    let array = []
    for (let i = 0; i < source.length; i++) {
        if (!remover.includes(source[i])) {
            array.push(source[i])
        }
    }
    return array
}
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]))

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);