/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let currInterval = intervals[0];
  merged.push(currInterval);

  for (const nextInterval of intervals) {
    const [_, currEnd] = currInterval;
    const [nextStart, nextEnd] = nextInterval;

    if (currEnd >= nextStart) {
      currInterval[1] = Math.max(currEnd, nextEnd);
    } else {
      currInterval = nextInterval;
      merged.push(nextInterval);
    }
  }

  return merged;
};
// @lc code=end

