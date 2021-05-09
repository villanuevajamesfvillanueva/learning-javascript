// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

function countSmileys(arr) {
    validEyes = [':', ';'];
    validNoses = ['-', '~'];
    validMouths = [')', 'D'];
    count = 0;
    arr.forEach(el => {
        if (el.length === 2 && validEyes.includes(el[0]) && validMouths.includes(el[1])) count += 1;
        if (el.length === 3 && validEyes.includes(el[0]) && validNoses.includes(el[1]) && validMouths.includes(el[2]) ) count += 1;
    });
    return count;
}

function countSmileys2(arr) {
    var smileys = arr.filter(x => /^[:;][-~]?[)D]$/.test(x));
    return smileys.length;
}

arr1 = [':D',':~)',';~D',':)'];
arr2 = [':)',':(',':D',':O',':;'];
arr3 = [';]', ':[', ';*', ':$', ';-D'];
arr4 = [';>', ':~D', ';)', ':)', ';)', ';)', ':~>'];

console.log(countSmileys(arr1));
console.log(countSmileys(arr2));
console.log(countSmileys(arr3));
console.log(countSmileys(arr4));