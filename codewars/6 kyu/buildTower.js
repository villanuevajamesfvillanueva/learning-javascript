// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]

// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]


function towerBuilder(nFloors) {
    var arr = [];
    var itemLength = nFloors*2 - 1;
    for (let i = 1; i <= nFloors; i++) {
        var asterisk = (i*2) - 1;
        item = '';
        item += ' '.repeat((itemLength - asterisk)/2);
        item += '*'.repeat(asterisk);
        item += ' '.repeat((itemLength - asterisk)/2);
        arr.push(item);
    }
    return arr;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(6));