/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let steps = 0;
  while (steps <= n) {
    n -= steps;
    steps++;
  }
  return steps - 1;
};
// @lc code=end

