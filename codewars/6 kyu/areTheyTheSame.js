// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp may not return true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, Elixir, Haskell, PureScript, Pascal, R, Rust, Shell).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.


function comp(array1, array2){
    if (array1 === null || array2 === null) return false;
    array1.sort((a,b) => (a-b));
    array2.sort((a,b) => (a-b));  
    if (array1[0] > array2[0]) {
        var biggerArr = array1;
        var smallerArr = array2;
    }
    else {
        var biggerArr = array2;
        var smallerArr = array1;
    }
    for (let i = 0; i < array1.length; i++) {
        if (biggerArr[i] !== smallerArr[i]**2) return false;
    }
    return true;
}

function comp2(array1, array2){
    if (array1 === null || array2 === null) return false;
    array1.sort((a,b) => (a-b));
    array2.sort((a,b) => (a-b));  
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

arr1 = [121, 144, 19, 161, 19, 144, 19, 11];
arr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

arr3 = [3, 3, 9, 0, 9, 10, 2, 8, 10, 9];
arr4 = [100, 9, 64, 101, 9, 81, 0, 4, 81, 81];

arr5 = [9, 0, 3, 10, 0, 9, 10, 10, 6, 1, 9, 6, 2, 3, 7, 8, 8];
arr6 = [4, 1, 81, 9, 49, 81, 64, 100, 100, 64, 81, 1, 0, 9, 36, 36, 100];



console.log(comp(arr1, arr2));
console.log(comp(arr3, arr4));
console.log(comp(arr5, arr6));
