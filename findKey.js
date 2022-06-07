const assertEqual = require('./assertEqual');

const findKey = function (obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;

// findKey({
// "Blue Hill": { stars: 1 },
// "Akaleri":   { stars: 3 },
// "noma":      { stars: 2 },
// "elBulli":   { stars: 3 },
// "Ora":       { stars: 2 },
// "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// let object = {
// "Blue Hill": { stars: 1 },
// "Akaleri":   { stars: 3 },
// "noma":      { stars: 2 },
// "elBulli":   { stars: 3 },
// "Ora":       { stars: 2 },
// "Akelarre":  { stars: 3 }
// };
// let actual = findKey(object, x => x.stars === 3);
// let expected = "Akaleri";
// assertEqual(actual, expected);