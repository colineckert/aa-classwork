/*
 * @lc app=leetcode id=807 lang=javascript
 *
 * [807] Max Increase to Keep City Skyline
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
	const rowMaxes = {};
	const colMaxes = {};
	let delta = 0;

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[r].length; c++) {
			if (!(rowMaxes[r])) {
				rowMaxes[r] = grid[r][c];
			} else {
				rowMaxes[r] = Math.max(grid[r][c], rowMaxes[r]);
			}

			if (!(colMaxes[c])) {
				colMaxes[c] = grid[r][c];
			} else {
				colMaxes[c] = Math.max(grid[r][c], colMaxes[c]);
			}
		}
	}


	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[r].length; c++) {
			let value = grid[r][c];
			const rowMax = rowMaxes[r];
			const colMax = colMaxes[c];
			const posMax = Math.min(rowMax, colMax);
			delta += (posMax - value);
		}
	}

	return delta;
};
// @lc code=end

