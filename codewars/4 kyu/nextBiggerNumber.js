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
    var digits = n.toString().split('').map(x => +x);
    var len = digits.length;

    for (var i = len - 1; i >= 0; i--) {
        if (digits[i] > digits[i - 1]) break;
    }
     
    if (i == 1 && digits[i] <= digits[i - 1]) return -1;
    
    let x = digits[i - 1], smallest = i;
     
    for (let j = i + 1; j < len; j++) {
        if (digits[j] > x && digits[j] < digits[smallest]) smallest = j;
    }
     
    let temp = digits[smallest];
    digits[smallest] = digits[i - 1];
    digits[i - 1] = temp;
     
    x = 0;
    for(let j = 0; j < i; j++) {
        x = x * 10 + digits[j];
    }
        
    digits = digits.slice(i, digits.length + 1);
    digits.sort();

    for (let j = 0; j < len - i; j++) {
        x = x * 10 + digits[j];
    }
    if (Number.isNaN(x)) return -1;
    return x;
}

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(414));
console.log(nextBigger(144));
console.log(nextBigger(111));
console.log(nextBigger(391234579));
console.log(nextBigger(71223048));
console.log(nextBigger(391234579));


// var t0 = performance.now()
// console.log(nextBigger(59884848459853));
// var t1 = performance.now()
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

var t0 = performance.now()
console.log(nextBigger(534976));
var t1 = performance.now()
console.log("execution took " + (t1 - t0) + " milliseconds.")