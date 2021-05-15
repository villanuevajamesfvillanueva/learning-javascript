var data = '(-24mn-13st)^20';

function exp(term) {
    const matches = term.match(/(-?[0-9]*)([a-zA-Z]*)/);
    return [convertNumMatch(matches[1]), matches[2]];
}

function convertNumMatch(numMatch) {
    if (!numMatch) return '0';
    else if (numMatch === '-') return '-1';
    else return numMatch;
}



console.log(exp('-24mn'))
console.log(exp('-100BC'))
console.log(exp('100BC'))
console.log(exp('100'))
console.log(exp('BC'))
console.log(exp('-bC'))
console.log(exp('-100'))
