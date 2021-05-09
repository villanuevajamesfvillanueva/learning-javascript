function positiveSum(arr) {
    sum = 0;
    arr.forEach(el => {
        if (el >= 0) sum += el;
    });
    return sum;
}

function positiveSum2(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([-1,2,3,4,-5]));