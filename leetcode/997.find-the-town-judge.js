/*
 * @lc app=leetcode id=997 lang=javascript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  if (n <= 1) return 1;

  const trustors = new Set();
  const trusted = {};

  for (const pair of trust) {
    const [trustor, trustee] = pair;
    trustors.add(trustor);
    trusted[trustee] ? trusted[trustee]++ : trusted[trustee] = 1;
  }

  let i = 1;
  while (i <= n) {
    if (!trustors.has(i) && trusted[i] === n - 1) return i;
    i++;
  }

  return -1;
};
// @lc code=end

