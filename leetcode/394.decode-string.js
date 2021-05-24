/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const numStack = [];
  let num = '';
  const wordStack = [''];
  let res = '';

  for (const char of s) {
    if (!isNaN(char)) {
      num += char;
    } else if (char === '[') {
      numStack.push(num);
      num = '';
      wordStack.push(res);
      res = '';
    } else if (char === ']') {
      res = wordStack.pop() + res.repeat(numStack.pop());
    } else {
      res += char;
    }
  }

  return res;
};
// @lc code=end

