// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

// For example,

// 11 => [2, 3, 5, 7, 11]



function prime(num) {
    var primes = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes
}



function isPrime(n) {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++)
        if(n % i === 0) return false; 
    return n > 1;
}






console.log(prime(23))