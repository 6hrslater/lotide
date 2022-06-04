const assertEqual = function (actual, expected) {

  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    if (actual === expected)
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  }

};

const findKey = function (obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

findKey({
"Blue Hill": { stars: 1 },
"Akaleri":   { stars: 3 },
"noma":      { stars: 2 },
"elBulli":   { stars: 3 },
"Ora":       { stars: 2 },
"Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

let object = {
"Blue Hill": { stars: 1 },
"Akaleri":   { stars: 3 },
"noma":      { stars: 2 },
"elBulli":   { stars: 3 },
"Ora":       { stars: 2 },
"Akelarre":  { stars: 3 }
};
let actual = findKey(object, x => x.stars === 3);
let expected = "Akaleri";
assertEqual(actual, expected);