/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

// Time Complexity: O(m*n)
// Space Complexity: O(m*n), if the entire grid is one island, 
// it will take up m*n space in function call stack
var numIslands = function(grid) {
  if (grid.length <= 0) return 0;
  let count = 0, height = grid.length, width = grid[0].length;
  const DIRS = [[-1,0],[0,1],[1,0],[0,-1]];

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] === '1') { // no chance 0 is part of an island
        count++;
        dfsTraverse(row, col); // once finsihed, we've visited all lands of one island
      }
    }
  }

  function dfsTraverse(row, col) {
    if (row < 0 || row >= height || 
      col < 0 || col >= width || grid[row][col] === '0') {
      return;
    }

    grid[row][col] = '0'; // mark 0 for visited
    for (const dir of DIRS) {
      dfsTraverse(row + dir[0], col + dir[1]);
    }
  }

  return count;
};
// @lc code=end