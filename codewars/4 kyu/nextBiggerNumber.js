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
    var digits = n.toString().split('');
    var permArr = [],
    usedChars = [];
    function permute(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) permArr.push(parseInt(usedChars.slice().join('')));
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return [...new Set(permArr.sort((a,b) => (a - b)))];
    }

    var perm =  permute(digits);
    return perm[perm.indexOf(n)+1];
}

// console.log(nextBigger(12));
// console.log(nextBigger(513));
// console.log(nextBigger(2017));
// console.log(nextBigger(414));
// console.log(nextBigger(144));


// var t0 = performance.now()
// console.log(nextBigger(59884848459853));
// var t1 = performance.now()
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

var t0 = performance.now()
console.log(nextBigger(59884832));
var t1 = performance.now()
console.log("execution took " + (t1 - t0) + " milliseconds.")