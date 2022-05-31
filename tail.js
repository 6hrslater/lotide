const assertEqual = function(actual, unexpected) {

  if (actual !== unexpected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${unexpected}`);
  } else {
    if (actual === unexpected)
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${unexpected}`);
  
  }
  
};
  
const tail = function(array) {
  let result = tail(["Hello", "Lighthouse", "Labs"]);
  for (let i = 1; i < array.length; i ++) {
    result.slice(array[i]);
  }
  return result;
};
