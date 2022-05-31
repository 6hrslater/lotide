const assertEqual = function(actual, unexpected) {

  if (actual !== unexpected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + unexpected);
  } else {
    if (actual === unexpected)
      console.log("✅✅✅ Assertion Passed: " + actual + " === " + unexpected);

  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 5);
assertEqual("word", "word");