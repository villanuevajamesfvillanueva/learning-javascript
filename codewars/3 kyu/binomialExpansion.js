// The purpose of this kata is to write a program that can do some algebra. Write a function expand that takes in an expression with a single, one character variable, and expands it. The expression is in the form (ax+b)^n where a and b are integers which may be positive or negative, x is any single character variable, and n is a natural number. If a = 1, no coefficient will be placed in front of the variable. If a = -1, a "-" will be placed in front of the variable.

// The expanded form should be returned as a string in the form ax^b+cx^d+ex^f... where a, c, and e are the coefficients of the term, x is the original one character variable that was passed in the original expression and b, d, and f, are the powers that x is being raised to in each term and are in decreasing order. If the coefficient of a term is zero, the term should not be included. If the coefficient of a term is one, the coefficient should not be included. If the coefficient of a term is -1, only the "-" should be included. If the power of the term is 0, only the coefficient should be included. If the power of the term is 1, the caret and power should be excluded.

// Examples:
// expand("(x+1)^2");      // returns "x^2+2x+1"
// expand("(p-1)^3");      // returns "p^3-3p^2+3p-1"
// expand("(2f+4)^6");     // returns "64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096"
// expand("(-2a-4)^0");    // returns "1"
// expand("(-12t+43)^2");  // returns "144t^2-1032t+1849"
// expand("(r+0)^203");    // returns "r^203"
// expand("(-x-1)^2");     // returns "x^2+2x+1"


const data = ['(x+1)^2', '(p-1)^3', '(2f+4)^6', '(-2a-4)^0', '(-12t+43)^2',
    '(r+0)^203', '(-x-1)^2', '(x+y)^6', '(a-x)^5'];

function expand(expr) {
    const patt = /(-?[a-zA-Z0-9]+)/g;
    var arr = expr.match(patt);
    console.log(arr);
    if (arr[0] === '0') return `${arr[1]}^${arr[2]}`;
    if (arr[1] === '0') return `${arr[0]}^${arr[2]}`;

    var terms = [];
    for (let i = 0; i <= arr[2]; i++) {
        var c = comb(arr[2], i);
        var a = exp(arr[0], arr[2]-i);
        var b = exp(arr[1], i);
        var aCoeff = 1; bCoeff = 1;
        if (a[0] === '-') {
            aCoeff = -1;
            a = a.substring(1);
        }

        if (b[0] === '1') {
            aCoeff = 1;
            a = a.substring(1);
        }

        if (b[0] === '-') {
            bCoeff = -1;
            b = b.substring(1);
        }

        if (b[0] === '1') {
            bCoeff = 1;
            b = b.substring(1);
        }
        c = c*aCoeff*bCoeff;
        if (c <= 1) c = '';
        var binExpTerms = [c, a, b];
        //negative coeffs not being properly accounted for
        //an exponent of 1 on a variable should not be displayed
        
        terms.push(binExpTerms.join(''))
    }
    console.log(terms);
    return terms.join('+');
    
}


function fact(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else return (num * fact(num - 1));
}
  
function comb(n, r) {
    var res = fact(n)/(fact(r)*fact(n-r));
    if (res === 1) return '';
    return res;
}

function exp(term, e) {
    var coeff = '', variables = '';
    const matches = term.match(/(-?[0-9]*)([a-zA-Z]*)/);
    var arr = [convertNumMatch(matches[1]), matches[2]];
    // var arr = extractCoeffs(term);

    
    if (e > 0) {
        variables = arr[1].split().join(`^${e}`);
        variables += `^${e}`;
        coeff = parseInt(arr[0])**e;
        if (coeff === 1) coeff = '';
    }
    return `${coeff}${variables}`;
}

function convertNumMatch(numMatch) {
    if (!numMatch) return '1';
    else if (numMatch === '-') return '-1';
    else return numMatch;
}

// function extractCoeffs(exp) {
//     const matches = exp.match(/(-?[0-9]*)([a-zA-Z]*)/);
//     var arr = [convertNumMatch(matches[1]), matches[2]];
//     return arr;
// }


data.forEach(i => {
    console.log(expand(i));
});