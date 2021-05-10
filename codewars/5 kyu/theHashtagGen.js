// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function generateHashtag (str) {
    if (str === '') return false;
    var words = str.split(' ');
    //removing empty string elements
    var result = words.reduce((accumulator, currentValue) => {
        const item = currentValue.trim()
        if (item !== '') accumulator.push(item);
        return accumulator;
    }, []);
    //checking for meaningful length
    if (result.join('').length > 139 || result.join('').length < 1) return false;
    for (let i = 0; i < result.length; i++) {
        result[i] = capitalize(result[i]);
    }

    return `#${result.join('')}`;
}


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


string1 = '';
string2 = ' '.repeat(200);
string3 = 'Do We have A Hashtag';
string4 = 'Codewars';
string5 = 'Codewars Is Nice';
string6 = 'Codewars is nice';
string7 = 'code' + ' '.repeat(140) + 'wars';
string8 = 'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat';
string9 = 'a'.repeat(139);
string10 = 'a'.repeat(140);

console.log(generateHashtag(string1));
console.log(generateHashtag(string2));
console.log(generateHashtag(string3));
console.log(generateHashtag(string4));
console.log(generateHashtag(string5));
console.log(generateHashtag(string6));
console.log(generateHashtag(string7));
console.log(generateHashtag(string8));
console.log(generateHashtag(string9));
console.log(generateHashtag(string10));