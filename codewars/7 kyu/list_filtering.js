function filter_list(l) {
    return l.filter((el) => { return typeof(el) == 'number'})
}

console.log('list', filter_list([1,2,'a','b']));
console.log('list', filter_list([1,'a','b',0,15]));
console.log('list', filter_list([1,2,'aasf','1','123',123]));