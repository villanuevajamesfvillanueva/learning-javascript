// The task is simply stated. Given an integer n (3 < n < 109), find the length of the smallest list of perfect squares which add up to n. Come up with the best algorithm you can; you'll need it!

// Examples:

// sum_of_squares(17) = 2
// 17 = 16 + 1 (4 and 1 are perfect squares).
// sum_of_squares(15) = 4
// 15 = 9 + 4 + 1 + 1. There is no way to represent 15 as the sum of three perfect squares.
// sum_of_squares(16) = 1
// 16 itself is a perfect square.
// Time constraints:

// 5 easy (sample) test cases: n < 20

// 5 harder test cases: 1000 < n < 15000

// 5 maximally hard test cases: 5 * 1e8 < n < 1e9

// 100 random maximally hard test cases: 1e8 < n < 1e9

function sumOfSquares(n) {
    //guard clause for if n is square
    if (Math.sqrt(n) % 1 === 0) return 1;
    if (n % 2 === 0 && Math.sqrt(n/2) % 1 === 0) return 2;

    //if n is prime
    if (isPrime(n) && n % 4 === 1) return 2;
    if (isPrime(n) && n % 4 !== 3) return 2;

    //else if at least 1 prime factor has form 4k+3 and is an even power
    if (!isPrime(n)) {
        let primeFactors = distinctPrimes(n);
        for (let i = 0; i < primeFactors.length; i++) {
            if (primeFactors[i] % 4 === 3 && Math.log2(primeFactors[i]) % 1 === 0) return 2;
        }
    }
    
    if ((Math.log2(n))/2 !== 0 && n % 8 !== 7 && ((2*n)/Math.log2(n) % 8 !== 7 )) return 3;


    //Lagrange's four-square theorem
    return 4;
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
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


function distinctFactors(n) {
    let factors = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) factors.push([i, n/i]);
    }
    return factors;
}

console.log(sumOfSquares(15));
console.log(sumOfSquares(16));
console.log(sumOfSquares(17));
console.log(sumOfSquares(18));
console.log(sumOfSquares(19));



//expressing numbers as sum of squares: https://www.youtube.com/watch?v=4104g6NmJr8