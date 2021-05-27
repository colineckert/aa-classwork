/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount < 1) return 0;
  
  const numCoins = new Array(amount + 1).fill(Infinity);
  numCoins[0] = 0;
    
    for (const coin of coins) {
      for (let amt = 0; amt < numCoins.length; amt++) {
        if (coin <= amt) {
          numCoins[amt] = Math.min(numCoins[amt], numCoins[amt - coin] + 1);
        } 
      }
    }
    
  return numCoins[amount] === Infinity ? -1 : numCoins[amount];
};
// @lc code=end

