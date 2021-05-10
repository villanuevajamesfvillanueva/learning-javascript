// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a,b) {
    // if (a.length <= 16 && b.length <= 16) {
    //     if (!a) a = 0;
    //     if (!b) b = 0;
    //     var sum = parseInt(a) + parseInt(b);
    //     return sum.toString();
    // }

    // else {
        var lenA = a.length;
        var lenB = b.length;
        var digitsA = a.split('').reverse();
        var digitsB = b.split('').reverse();
        
        
        if (lenA > lenB) {
            for (let i = lenB; i < lenA; i++) {
                digitsB[i] = 0
            }
        }
        if (lenA < lenB) {
            for (let i = lenA; i < lenB; i++) {
                digitsA[i] = 0
            }
        }

        var lenSum = Math.max(lenA, lenB);
        var sum = [];
        for (let i = 0; i < lenSum; i++) {
            digitsA[i] = parseInt(digitsA[i]);
            digitsB[i] = parseInt(digitsB[i]);
            sum[i] = (digitsA[i] + digitsB[i]) * 10**(i);
        }
        var result = sum.reduce((total, currentVal) => (total + currentVal), 0);

        console.log(digitsA, digitsB, sum, result)
    // }
    

}

console.log(sumStrings('123', '456'));
console.log(sumStrings('9999', '999'));
console.log(sumStrings('9999999', '999'));