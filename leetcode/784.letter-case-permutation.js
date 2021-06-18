/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  let output = [''];

  for (const char of s) {
    if (isNaN(char)) {
      let newPerms = [];
      output.forEach(str => {
        newPerms.push(str + char.toUpperCase());
        newPerms.push(str + char.toLowerCase());
      })
      output = newPerms;
    } else {
      output = output.map(str => str + char);
    }
  }

  return output;
};
// @lc code=end

