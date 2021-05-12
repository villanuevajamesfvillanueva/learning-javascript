// To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

// You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

// The professor will give you a simple math expression, of the form

// [number][op][number]=[number]
// He has converted all of the runes he knows into digits. The only operators he knows are addition (+),subtraction(-), and multiplication (*), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

// Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

// Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.


function solveExpression(exp) {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operations = ['+', '-', '*'];

    
    const patt = /-?[\d?]+|[^=]/g;
    const patt2 = /(-?[0-9?]+)([-+*\/])(-?[0-9?]+)=(-?[0-9?]+)/gm;

    // var splitUp = exp.split(/([+*=-])/g);
    var splitUp = exp.match(patt);



    //---------------------------------------
    splitUp = splitUp.filter(e => e);
    var len = splitUp.length;
    var num1, op, num2, ans;
    var num1Neg, num2Neg, ansNeg;

    if (len === 8) {
        num1Neg, num2Neg, ansNeg = true;
    }

    if (splitUp.indexOf('=') === len - 3) ansNeg = true;
    else ansNeg = false;


    console.log(splitUp, splitUp.length);
    
    // console.log(num1, op, num2, '=', ans)
    // return splitUp.length;
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
    ['??+??=??', -1]];

data.forEach(arr => {
    console.log(solveExpression(arr[0]));
});

//APPROACH:  compare length and positions of components


//max length = 8
    //if indexOf('=') === .length - 3 ---> negative ans
        //ans = parseInt(splitUp[splitUp.length - 1]) * -1;
    //if indexOf('=') === .length - 2 ---> positive ans
        //ans = parseInt(splitUp[splitUp.length - 1]);

    //if indexOf('+')

    //if indexOf('*')

    //find all occurences of '-'
        //
        //if indexOf('+')