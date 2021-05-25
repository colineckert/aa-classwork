/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (!height.length) return 0;

  const length = height.length;
  const leftMax = {};
  const rightMax = {};
  let area = 0;

  leftMax[0] = height[0];
  for (let i = 1; i < length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  rightMax[length - 1] = height[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  for (let i = 0; i < length; i++) {
    area += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return area;
};
// @lc code=end

