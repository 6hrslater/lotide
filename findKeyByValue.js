const assertEqual = require('./assertEqual');

const findKeyByValue = function (obj, obj2) {
  let key = Object.keys(obj)
  for (let i = 0; i < key.length; i++) {
    if (obj[key[i]] === obj2) {
      return key[i];
    }
  }
};

module.exports = findKeyByValue;
  


  // const bestTVShowsByGenre = { 
  //   sci_fi: "The Expanse",
  //   comedy: "Brooklyn Nine-Nine",
  //   drama:  "The Wire"
  // };
  
  // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);