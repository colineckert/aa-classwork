/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    if (n === 0) return 1;
    // x ^ -n = 1/x ^ n
    if (n < 0) return myPow(1/x, n * -1);
    // n is even, x ^ n = (x * x) ^ (n / 2)
    // e.g. 2 ^ 4 = 2 * 2 * 2 * 2 = 4 * 4 = 4 ^ 2
    if (n % 2 === 0) return myPow(x * x, n / 2);
    // n is odd, x ^ n = ((x * x) ^ ((n - 1) / 2)) * x
    // e.g. 2 ^ 5 = 2 * 2 * 2 * 2 * 2 = 4 * 4 * 2 = (4 ^ 2) * 2
    return myPow(x * x, (n - 1) / 2) * x;
};
// @lc code=end

