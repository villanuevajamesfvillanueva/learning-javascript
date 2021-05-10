// Common denominators

// You will have a list of rationals in the form

// { {numer_1, denom_1} , ... {numer_n, denom_n} } 
// or
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
// or
// [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
// where all numbers are positive ints. You have to produce a result in the form:

// (N_1, D) ... (N_n, D) 
// or
// [ [N_1, D] ... [N_n, D] ] 
// or
// [ (N_1', D) , ... (N_n, D) ] 
// or
// {{N_1, D} ... {N_n, D}} 
// or
// "(N_1, D) ... (N_n, D)"
// depending on the language (See Example tests) in which D is as small as possible and

// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.

function convertFrac(lst){
    if (lst.length === 0) return '';
    var nums = [], denoms = [], equiv = '';
    for (let i = 0; i < lst.length; i++) {
        nums.push(lst[i][0]);
        denoms.push(lst[i][1]);
    }
    var lcd = lcm(denoms);
    for (let i = 0; i < denoms.length; i++) {
        nums[i] = nums[i]*(lcd/denoms[i]);
        equiv += `(${nums[i]},${lcd})`
    }
    return equiv;
}


const lcm = (arr) => {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    const _lcm = (x, y) => (x * y) / gcd(x, y);
    return [...arr].reduce((a, b) => _lcm(a, b));
}


console.log(convertFrac([ [1, 2], [1, 3], [1, 4] ]));
