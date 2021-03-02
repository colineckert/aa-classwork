// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

// function minPathSum(grid) {
//   let m = grid.length;
//   let n = grid[0].length;
//   let table = new Array(m).fill().map(() => new Array(n).fill(Infinity));
//   table[0][0] = grid[0][0];

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {

//       if (j < n - 1) {
//         table[i][j + 1] = Math.min(table[i][j] + grid[i][j + 1], table[i][j + 1]);
//       }

//       if (i < m - 1) {
//         table[i + 1][j] = Math.min(table[i][j] + grid[i + 1][j], table[i + 1][j]);
//       }
//     }
//   }

//   return table[m - 1][n - 1];
// }

// more optimized space complexity
function minPathSum(grid) {
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[0].length - 1; j >= 0; j--) {
      
      if (i === grid.length - 1 && j !== grid[0].length - 1) {
        grid[i][j] = grid[i][j] +  grid[i][j + 1];
      } else if (j === grid[0].length - 1 && i !== grid.length - 1) {
        grid[i][j] = grid[i][j] +  grid[i + 1][j];
      } else if (i !== grid.length - 1 && j !== grid[0].length - 1) {
        grid[i][j] = grid[i][j] + Math.min(grid[i + 1][j], grid[i][j + 1]);
      }
    }
  }

  return grid[0][0];
}