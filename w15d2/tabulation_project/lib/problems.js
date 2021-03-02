// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end

// // tabulation
// function stepper(nums) {
//     let table = new Array(nums.length).fill(false);

//     // set first to true since we start here and possible to reach this position
//     table[0] = true;

//     for (let i = 0; i < table.length; i++) {
//         if (table[i] === true) {
//            // range is the number of steps possible given by nums[i]
//             let range = nums[i];
//             for (let step = 1; step <= range; step++) {
//                 // set table values to true up to the max range
//                 table[i + step] = true;
//             }
//         }
//     }
//     // if all are possible to reach, last value should be true
//     return table[table.length - 1];
// }

// memoization
function stepper(nums, memo = {}) {
    if (nums.length in memo) return memo[nums.length];
    if (nums.length === 0) return true;
    
    let range = nums[0];
    for (let step = 1; step <= range; step++) {
        if (stepper(nums.slice(step), memo)) {
            memo[nums.length] = true;
            return true;
        }
    }
    memo[nums.length] = false;
    return false;
}

// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 

// // tabulation
// function maxNonAdjacentSum(nums) {
//     if (!nums.length) return 0;

//     let table = new Array(nums.length).fill(0);
//     table[0] = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         let skipLeft = (table[i - 2] === undefined ? 0 : table[i - 2]);
//         let includethisNum = skipLeft + nums[i];
//         let notIncludeLeft = table[i - 1];
//         table[i] = Math.max(notIncludeLeft, includethisNum);
//     }

//     return table[table.length - 1];
// }

// memoization
function maxNonAdjacentSum(nums, memo = {}) {
    if (nums.length in memo) return memo[nums.length];
    if (nums.length === 0) return 0;

    let firstEle = nums[0];
    memo[nums.length] = Math.max(
        firstEle + maxNonAdjacentSum(nums.slice(2), memo),
        maxNonAdjacentSum(nums.slice(1), memo)
    );

    return memo[nums.length];
}
 
// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should return the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100

function minChange(coins, amount) {
    // set table to cover all values up to amount to save min coins at each value
    let table = new Array(amount + 1).fill(Infinity);
    
    table[0] = 0;
    coins.forEach(coin => {
        for (let amt = 0; amt < table.length; amt++) {
            for (let qty = 0; qty * coin <= amt; qty++) {

                // calculate reminder given current amount of this coin
                let remainder = amt - (qty * coin);

                // look for amount of coins to make remainder in table, then add current qty
                let attempt = table[remainder] + qty;

                // check if this attempt of coins qty is better than current value in table
                if (attempt < table[amt]) table[amt] = attempt;
            }
        }
    });

    return table[table.length - 1];
}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};