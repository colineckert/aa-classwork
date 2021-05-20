/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagrams = {};
  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (sortedStr in anagrams) {
      anagrams[sortedStr].push(str);
    } else {
      anagrams[sortedStr] = [str];
    }
  }
  return Object.values(anagrams);
};
// @lc code=end

