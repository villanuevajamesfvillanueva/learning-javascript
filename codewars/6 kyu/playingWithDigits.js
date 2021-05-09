function digPow(n, p) {
    digits = n.toString();
    sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i])**p;
        p++;
    }
    return sum % n === 0 ? sum/n : -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));