const assertEqual = function (actual, unexpected) {

    if (actual !== unexpected) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${unexpected}`);
    } else {
        if (actual === unexpected)
            console.log(`✅✅✅ Assertion Passed: ${actual} === ${unexpected}`);

    }

};

const countLetters = (str) => {
    let results = {}
    const trimmedstr = str.split(" ").join("")
    for (let item of trimmedstr) {
        if (results[item]) {
            results[item] += 1;
        } else {
            results[item] = 1;
        }
    }
    return results
}

console.log(countLetters("long words"))
