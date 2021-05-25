/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const lastSeen = {};
  let longest = 0;
  let startIdx = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in lastSeen) {
      startIdx = Math.max(startIdx, lastSeen[char] + 1);
    }
    longest = Math.max(i - startIdx + 1, longest);
    lastSeen[char] = i;
  }

  return longest;
};
// @lc code=end

