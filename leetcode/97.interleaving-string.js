/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
function isInterleave(s1, s2, s3) {
  if (s3.length !== s1.length + s2.length) {
    return false;
  }

  const cache = new Array(s1.length + 1).fill()
    .map(() => new Array(s2.length + 1).fill(null));

  return areInterleaved(s1, s2, s3, 0, 0, cache);
};

function areInterleaved(s1, s2, s3, i, j, cache) {
  if (cache[i][j] !== null) return cache[i][j];

  let k = i + j;
  if (k === s3.length) return true;

  if (i < s1.length && s1[i] === s3[k]) {
    cache[i][j] = areInterleaved(s1, s2, s3, i + 1, j, cache);
    if (cache[i][j]) return true;
  }

  if (j < s2.length && s2[j] === s3[k]) {
    cache[i][j] = areInterleaved(s1, s2, s3, i, j + 1, cache);
    if (cache[i][j]) return true;
  }

  cache[i][j] = false;
  return false;
};

// @lc code=end

