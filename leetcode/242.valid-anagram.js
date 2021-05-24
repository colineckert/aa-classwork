/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const counts = {};

  for (const char of s) {
    counts[char] ? counts[char]++ : counts[char] = 1;
  }

  for (const char of t) {
    counts[char] ? counts[char]-- : counts[char] = 1;
  }

  return Object.values(counts).every(val => val == 0);
};
// @lc code=end

