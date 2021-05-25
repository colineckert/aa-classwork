/*
 * @lc app=leetcode id=1013 lang=javascript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// Time Complexity: O(n)
// Space Complexity: O(1)
var canThreePartsEqualSum = function(arr) {
  let avg = arr.reduce((acc, num) => acc + num) / 3;
  let sum = 0, count = 0;

  for (const num of arr) {
    sum += num;
    if (sum === avg) {
      count++;
      sum = 0;
    }
  }

  return count >= 3;
};
// @lc code=end

