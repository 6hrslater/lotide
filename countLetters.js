const assertEqual = require('./assertEqual');

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

module.exports = countLetters;
// console.log(countLetters("long words"))
