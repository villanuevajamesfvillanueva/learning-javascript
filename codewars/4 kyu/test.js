


function solveExpression(str) {
    const patt = /(-?[0-9?]+)([-+*\/])(-?[0-9?]+)=(-?[0-9?]+)/gm;
    const patt2 = /-?[\d?]+|[^=]/g;
    
    return str.match(patt2);

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


function test() {
    const texts = [
        '1+1=?',
        '123*45?=5?088',
        '-5?*-1=5?',
        '19--45=5?',
        '-19+45=5?',
        '-19--45=5?',
        '-19--45=-5?',
        '??*??=302?',
        '?*11=??',
        '??*1=??',
        '??+??=??'
      ];
      
      const regex = /-?[\d?]+|[^=]/g;
      
      const groups = texts.map(text => text.match(regex));
      console.log(groups);
      return groups
}

// test();