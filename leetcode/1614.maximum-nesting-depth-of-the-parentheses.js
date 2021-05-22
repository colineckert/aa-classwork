/*
 * @lc app=leetcode id=1614 lang=javascript
 *
 * [1614] Maximum Nesting Depth of the Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// O(n) time | O(1) space
var maxDepth = function(s) {
    let depth = 0, res = 0;
    
    for (const char of s) {
        if (char === '(') {
            res = Math.max(res, ++depth);
        } else if (char === ')') {
            depth--;
        }
    }
    
    return res;
};
// @lc code=end

