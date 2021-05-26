/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let prevMax = nums[0], prevMin = nums[0], runningMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    const currMax = Math.max(prevMax * num, prevMin * num, num);
    const currMin = Math.min(prevMax * num, prevMin * num, num);

    prevMax = currMax;
    prevMin = currMin;

    runningMax = Math.max(runningMax, currMax);
  }

  return runningMax;
};
// @lc code=end

