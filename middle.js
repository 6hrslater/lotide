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
  

  const assertArraysEqual = function (array1, array2) {
    let eqvArray = eqArrays(array1, array2)
      if (eqvArray === true) {
          console.log(`✅✅✅ Assertion Passed`);
      } else {
       console.log(`🛑🛑🛑 Assertion Failed`);
   }
  }

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




