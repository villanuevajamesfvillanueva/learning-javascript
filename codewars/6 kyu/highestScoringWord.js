// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var words = x.split(' ');
    var scores = {};
    for (let i = 0; i < words.length; i++) {
        var score = Array.from(words[i]).reduce((accum, currentVal) => (accum + (alphabet.indexOf(currentVal) + 1)), 0);
        scores[words[i]] = score;
    }
    var maxScore = Math.max(...Object.values(scores));
    return Object.keys(scores).find(key => scores[key] === maxScore);
}

string1 = 'man i need a taxi up to ubud';
string2 = 'what time are we climbing up the volcano';
string3 = 'take me to semynak';
string4 = 'aa b';
string5 = 'b aa';
string6 = 'bb d';
string7 = 'd bb';
string8 = 'aaa b';

console.log(high(string1));
console.log(high(string2)); 
console.log(high(string3)); 
console.log(high(string4));  
console.log(high(string5));
console.log(high(string6)); 
console.log(high(string7)); 
console.log(high(string8)); 