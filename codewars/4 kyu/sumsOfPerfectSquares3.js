//dynamic style
function sumOfSquares(n) {
    //Create a dynamic programming table
    //to store sq and getMinSquares table

    //for base case entries
    dp = [0, 1, 2, 3];

    //getMinSquares rest of the table
    //using recursive formula
    for (let i = 4; i < n + 1; i++) {

        //max value is i as i can always be represented as 1 * 1 + 1 * 1 + ...
        dp.push(i);
 
        //Going through all smaller numbers to recursively find min
        for (let x = 1; x < Math.ceil(Math.sqrt(i)) + 1; x++) {
            temp = x * x;
            if (temp > i) break;
            else dp[i] = Math.min(dp[i], 1 + dp[i-temp])
        }
            
    }
    return dp[n]
}

console.log(sumOfSquares(15));
console.log(sumOfSquares(16));
console.log(sumOfSquares(17));
console.log(sumOfSquares(18));
console.log(sumOfSquares(19));