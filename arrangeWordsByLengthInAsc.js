// arranging words by their length in a sentence in Ascending Order

const str = 'react is a javascript library to build scalable applications';

// output : a is to react build librabry scalable javascript applications

//Approach
// split the str to arr
// sort the arr
// join the arr to str

function arrangeString(str) {
    return str.split(" ").sort((a, b) => a.length - b.length).join(" ");
}
//console.log(arrangeString(str));

/************************************************
 *************************************************
 */


// Coin Change
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/* var coinChange = function (coins, amount) {
    console.log(amount);
    let resultArr = Array(amount + 1).fill(amount + 1);
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    // Base case - to make amount 0, 0 coins are used:
    resultArr[0] = 0;
    //loop through the amount values 1 to 11, with an inner loop of coins length
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            // check each iterated amount value with how much coins required to make it
            // only amount should be greater than or equal to denominations of coins
            //i = ith Amount or current amount
            if (i >= coins[j]) {
                // the resultArr should be updated with the minimum coins required for each iterated amount
                //checking, current amount(i) minus the current coin plus one
                resultArr[i] = Math.min(resultArr[i], resultArr[i - coins[j]] + 1)
            }
        }
    }
    return resultArr[amount] > amount ? -1 : resultArr[amount]

}; */

//console.log(coinChange([1, 2, 5], 11));
/************************************************
 *************************************************
 */
/************************************************
 *************************************************
 */
function coinChange(coins, amount) {
    // Intialize a result Array with zeroes
    let resultArr = new Array(amount + 1).fill(0);
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    // value of zero can only be 1
    resultArr[0] = 1;
    // Iterate through each coin denomination
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            resultArr[i] = resultArr[i] + resultArr[i - coin];
        }
    }
    // resultArr's amount index has the total combinations 
    return resultArr[amount];
}


// Example usage:
const coins = [2];
const amount = 3;
console.log("Number of combinations:", coinChange(coins, amount)); // Output: 4

/************************************************
 *************************************************
 *//************************************************
*************************************************
*/
/* ----------------------------------------------------------
---------------------------------------------------------- */
// Unique paths
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // make an m X n grid
    const grid = Array.from({ length: m }, () => new Array(n));
    console.log(grid);
    // Assign [0,0];[1,0];[2,0] = 1
    for (let i = 0; i < grid.length; i++) grid[i][0] = 1;
    // Assign [0,0];[0,1];[0,2] = 1
    for (let i = 0; i < grid[0].length; i++) grid[0][i] = 1;
    // Calculate the remaining grid blocks [1,1] = [0,1] + [1,0]
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[i].length; j++) {
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
        }
    }
    return grid[m - 1][n - 1]; // final destination with paths value
};
//console.log(uniquePaths(3, 2));

function twoSum(nums, target) {
    let numObj = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // 6 - nums[2];4 = 2
        if (numObj[complement] !== undefined) { // numObj[2] = 1
            return [numObj[complement], i];
        }
        numObj[nums[i]] = i;   //numObj[{3:0},{2:1}]; 
        console.log(numObj);
    }
};
// Another simple usage of two dimensional array - solution
function sumTwo(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
};

console.log(sumTwo([3, 2, 4, 9], 13));