// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

const { array } = require("yargs");

// Note: a and b are not ordered

function getSum(a, b) {
    var a1 = Math.min(a, b);
    var a2 = Math.max(a, b);
    var count = a2 - a1 + 1;
    return (count/2)*(a1 + a2);
}


console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));