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
            sum[i] = digitsA[i] + digitsB[i];
            sum[i] = sum[i].toString().split('').reverse();
            if (sum[i].length === 1) { 
                sum[i][0] = sum[i].toString();
                sum[i][1] = '0';
            }
        }

        var result = [];
        result[0] = sum[0][0] || sum[0][1];
        for (let i = 0; i < lenSum - 1; i++) {
            result.push((parseInt(sum[i][1]) + parseInt(sum[i+1][0])).toString());
        }


        var reduced = false;
        while(!reduced) {
            for (let i = 0; i < result.length; i++) {
                if (result[i].length > 1) {
                    reduced = false;
                    result[i] = result[i].split('').reverse().join('');
                    for (let j = i+1; j < result.length; j++) {
                        result[j] = `${result[j]}0`;
                    }
                    result[i] = (parseInt(result[i][1]) + parseInt(result[i+1][0])).toString()
                    break;
                }
                reduced = true;
            }
        }

        console.log(digitsA, digitsB, sum)
        console.log(result);
    // }
}

// function reduceDigits(arr, index) {
    
//     for (let i = index, len = arr.length; i < len; i++) {
//         if (arr[i].length === 1) arr[i] = [arr[i], 0];
//         arr[index] = arr[index].split('').reverse();
//     }
    
    
//     return arr
// }

// console.log(sumStrings('123', '456'));
// console.log(sumStrings('9999', '999'));
console.log(sumStrings('999999', '999'));