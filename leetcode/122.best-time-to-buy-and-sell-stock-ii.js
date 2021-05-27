/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// O(n) time | O(1) space
var maxProfit = function(prices) {
  let max = 0;
  
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1];
    max = Math.max(max, max + profit);
  }

  return max;
};
// @lc code=end

