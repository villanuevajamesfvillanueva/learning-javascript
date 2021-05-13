// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a,b) {
    var lenA = a.length, lenB = b.length;
    var digitsA = a.split('').reverse();
    var digitsB = b.split('').reverse();
    var maxLen = Math.max(lenA, lenB) + 1;
     
    for (let i = 0; i < maxLen; i++) {
        if (!digitsA[i]) digitsA[i] = '0';
        if (!digitsB[i]) digitsB[i] = '0';
    }

    var carryOver = 0, colSum = 0, sum = '';
    for (let i = 0; i < maxLen; i++) {
        colSum = parseInt(digitsA[i]) + parseInt(digitsB[i]) + carryOver;
        colSum = colSum.toString();
        
        if (colSum.length > 1) {
            sum += colSum[1];
            carryOver = parseInt(colSum[0]);
        }

        else {
            sum += colSum[0];
            carryOver = 0;
        } 
    }

    sum = sum.split('').reverse();
    if (sum[0] === '0') {
        let i = 0;
        while (sum[i] === '0') i++;
        sum.splice(0, i);
    }

    return sum.join('')
}

console.log(sumStrings('8797', '45'));
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
console.log(sumStrings('00103', '08567'));
