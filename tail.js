const assertEqual = function(actual, unexpected) {

  if (actual !== unexpected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${unexpected}`);
  } else {
    if (actual === unexpected)
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${unexpected}`);
  
  }
  
};
  
const tail = function(array) {
    return array.slice(1)
  }

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);