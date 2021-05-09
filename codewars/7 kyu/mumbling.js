function accum(s) {
    var chars = s.split('')
    var chunks = chars.map((char, i) => (char.toUpperCase() + char.toLowerCase().repeat(i)));
    return chunks.join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));

