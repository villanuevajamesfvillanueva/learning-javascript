// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


function snail(array) {
    let finalArr = [];
     
    while (array.length !== 0) {
      finalArr.push(...step1(array));
      console.log(array);
      finalArr.push(...step2(array));
      console.log(array);
      finalArr.push(...step3(array));
      console.log(array);
      finalArr.push(...step4(array));
      console.log(array);
    }
    return finalArr;
  }
   
function step1(arr) {
    let snail = arr[0];
    arr.shift();
    return snail;
}
   
function step2(arr) {
    let snail = [];
    arr.forEach(group => { snail.push(group.pop()) });
    return snail;
  }
   
function step3(arr) {
    let clonedArr = [...arr];
    arr.pop();

    let snail = clonedArr.length !== 0 ? clonedArr[clonedArr.length - 1].reverse() : [];
    return snail;
  }
   
function step4(arr) {
    let snail = [];
    if (arr.length > 1) {
      arr.forEach(group => { snail.push(group.shift()) });
      snail.reverse();
    }
    else if (arr.length === 1) {
      snail.push(...arr[0]);
      arr.shift();
    }
    return snail;
}



// console.log(snail([[]]));
// console.log(snail([[1]]));
// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));
