// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function simplePigLatin(str) {
    var words = str.split(' ');
    var patt = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    for (let i = 0; i < words.length; i++) {
        if (patt.test(words[i])) continue;
        words[i] = `${words[i]}${words[i][0]}ay`
        words[i] = words[i].replace(words[i][0], '')
    }
    return words.join(' ');
}

console.log(simplePigLatin('Pig latin is cool'));
console.log(simplePigLatin('Hello world !'));