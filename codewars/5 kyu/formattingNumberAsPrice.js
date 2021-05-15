// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:

// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number



var numberToPrice = function(number) {
    console.log('to test: ', number);
    number = number.toString();
    if (!number.match("^([.,]|-?[0-9?]+)+$")) return 'NaN';
    number = number.split('');
    var decIndex = number.indexOf('.');
    
    if (decIndex > -1) {
        const patt = /[^0-9]/g;
        for (let i = decIndex + 1; i < number.length; i++) {
            if (patt.test(number[i])) return 'NaN';
        }
        for (let i = decIndex + 1; i <= decIndex + 2; i++) {
            if (!number[i]) number[i] = '0';
        }
        number.splice(decIndex + 3);
    }

    else {
        number.push('.');
        number.push('0');
        number.push('0'); 
    }
    
    return applyCommas(number);
}

function applyCommas(arr) {
    for (let i = arr.indexOf('.') - 3; i > 0; i = i-3) {
        arr.splice(i, 0, ',');
    }
    if (arr[0] === '-' && arr[1] === ',') arr.splice(1, 1);
    return arr.join('')
}




console.log(numberToPrice(1500.129));
console.log(numberToPrice(-5));
// console.log(numberToPrice(1000000.5));
// console.log(numberToPrice('@'));
console.log(numberToPrice(1234567.89));
console.log(numberToPrice(-200000.1));
console.log(numberToPrice('1.1.1'));
