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

const middle =  function(array) {
    let array1 = [];
    if (array.length < 2) {
        return array1;
    } else if ((array.length % 2) !== 0) {
        let i = Math.floor(array.length / 2);
        array1.push(array[i]);
        return array1     
    } else if ((array.lentgh % 2) === 0) {
        let k = array.length / 2;
        let p = k- 1;
        array1.push(array[p], array[j]);
        return array1;
    }
};

assertArraysEqual((middle([1,2,3,4,5])), [2,3])