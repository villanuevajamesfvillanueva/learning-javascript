// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    string = '';
    for (let i = 0; i < message.length; i++) {
        if (input.includes(message[i])) string += output[input.indexOf(message[i])];
        else string += message[i];
    }
    return string;
}


console.log('ow2z ', rot13('ow2z '));
console.log('test', rot13('test'));
console.log('Codewars', rot13('Codewars'));
console.log('10+2 is twelve.', rot13('10+2 is twelve.'));

console.log('o o '.length);