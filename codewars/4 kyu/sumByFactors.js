// Given an array of positive or negative integers

// I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:

// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.


function sumOfDivided(lst) {
    var factors = [], result = [];
    lst.forEach(n => { factors.push(...distinctPrimes(n)); });
    factors = [...new Set(factors)].sort((a,b) => (a-b));
    for (let i = 0; i < factors.length; i++) {
        var sum = 0;
        for (let j = 0; j < lst.length; j++) {
            if (lst[j] % factors[i] === 0) sum += lst[j];
        }
        result.push([factors[i], sum]);
    }
    return result;
}

function distinctPrimes(n) {
    if (n < 0) n *= -1;
    let factors = [], divisor = 2;
    while (n >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n /= divisor;
        }
        else divisor++;
    }
    return [...new Set(factors)]
}

console.log(sumOfDivided([12, 15]));
console.log(sumOfDivided([15,21,24,30,45]));