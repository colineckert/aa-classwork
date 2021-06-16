/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const count = {};
  
  for (const num of nums) {
    if (!count[num]) count[num] = 0;
    count[num]++;
  }

  for (const num in count) {
    if (count[num] > nums.length / 2) return num;
  }
};
// @lc code=end

