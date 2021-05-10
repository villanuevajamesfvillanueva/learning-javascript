const {performance } = require('perf_hooks');

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil


function nextBigger(n) {
    var digits = n.toString().split('').sort();
    var len = digits.length;
    for (let i = n + 1; i < Number.MAX_VALUE; i++) {
        var digitsLoop = i.toString().split('').sort();

        if (arrayEquals(digits, digitsLoop)) return i;
    }
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}


// console.log(nextBigger(12));
// console.log(nextBigger(513));
// console.log(nextBigger(2017));
// console.log(nextBigger(414));
// console.log(nextBigger(144));


var t0 = performance.now()
console.log(nextBigger(598848484598532342));
var t1 = performance.now()
console.log("execution took " + (t1 - t0) + " milliseconds.")