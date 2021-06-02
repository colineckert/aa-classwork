/*
 * @lc app=leetcode id=1094 lang=javascript
 *
 * [1094] Car Pooling
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  const timestamp = new Uint16Array(1000).fill(0);

  for (const trip of trips) {
    const [passengers, start, end] = trip;

    for (let i = start; i < end; i++) {
      timestamp[i] += passengers;
      if (timestamp[i] > capacity) return false;
    }
  }

  return true;
};
// @lc code=end

