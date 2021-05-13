// To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

// You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

// The professor will give you a simple math expression, of the form

// [number][op][number]=[number]
// He has converted all of the runes he knows into digits. The only operators he knows are addition (+),subtraction(-), and multiplication (*), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

// Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

// Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.




function solveExpression(exp) {
    const patt = /-?[\d?]+|[^=]/g;
  
    var splitUp = exp.match(patt);
    if (splitUp.length < 4) {
        splitUp.splice(1, 0, '-');
        splitUp[2] = splitUp[2].substring(1);
    }
    var digits = '';
    var operations = ['+', '-', '*'], operation;

    console.log(splitUp)

    for (let i = 0; i < 4; i++) {
        if (i === 1) {
            operation = operations.indexOf(splitUp[i])
            continue;
        }
        console.log(splitUp[i])
        digits += splitUp[i].replace(/\D/g, '');
    }
    var digitsArr = [...new Set(digits)].map(x => +x);

    var solns = [];
    for (let i = 0; i < 10; i++) {
        if (digitsArr.includes(i)) continue;
    
        if (i === 0 &&
            ((splitUp[0].length > 1 && splitUp[0][0] === '?') ||
            (splitUp[2].length > 1 && splitUp[2][0] === '?') ||
            (splitUp[3].length > 1 && splitUp[3][0] === '?'))) continue;

        if (i === 0 &&
            ((splitUp[0].length > 1 && splitUp[0][1] === '?' && splitUp[0][0] === '-') ||
            (splitUp[2].length > 1 && splitUp[2][1] === '?' && splitUp[2][0] === '-') ||
            (splitUp[3].length > 1 && splitUp[3][1] === '?' && splitUp[3][0] === '-'))) continue;

        var num1 = parseInt(splitUp[0].replace(/\?/g, i));
        var num2 = parseInt(splitUp[2].replace(/\?/g, i));
        var num3 = parseInt(splitUp[3].replace(/\?/g, i));
        console.log(num1, num2, num3, 'index: ', i);
        
        if (operation === 0 && num1 + num2 === num3) solns.push(i);
        if (operation === 1 && num1 - num2 === num3) solns.push(i);
        if (operation === 2 && num1 * num2 === num3) solns.push(i);
    }

    console.log(solns);
    if (solns.length > 0) return [...new Set(solns)][0];
    else return -1;
}





var data = [
    ['1+1=?', 2],
    ['123*45?=5?088', 6],
    ['-5?*-1=5?', 0],
    ['19--45=5?', -1],
    ['-19+45=5?'],
    ['-19--45=5?'],
    ['-19--45=-5?'],
    ['??*??=302?', 5],
    ['?*11=??', 2],
    ['??*1=??', 2],
    ['??+??=??', -1],
    ['?33438-103326=410112'],
    ['123?45+?=123?45']];

data.forEach(arr => {
    console.log(solveExpression(arr[0]));
});


