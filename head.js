const assertEqual = function(actual, unexpected) {

    if (actual !== unexpected) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${unexpected}`);
    } else {
      if (actual === unexpected)
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${unexpected}`);
  
    }
  
  };

const head = function(array) {
    return array[0]
}
    console.log(head[0])


    assertEqual(head([5,6,7]), 5);
    assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");