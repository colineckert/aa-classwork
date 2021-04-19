// permutations trick
// O(n + m) time | O(1) space - where n is the width and m is the height
function numberOfWaysToTraverseGraph(width, height) {
  const dx = width - 1;
	const dy = height - 1;
	
	// the number of permutations of right and down movements 
	// is the number of ways to reah the bottom right corner
	const numerator = factorial(dx + dy);
	const denominator = factorial(dx) * factorial(dy);
	return Math.floor(numerator / denominator);
}

function factorial(num) {
	let result = 1;
	for (let n = 2; n <= num; n++) {
		result *= n;
	}
	return result;
}

// O(m*n) time | O(m*n) space
function numberOfWaysToTraverseGraph(width, height) {
  const table = new Array(width + 1)
		.fill().map(() => new Array(height + 1).fill(0));
	
	table[1][1] = 1;
	for (let i = 0; i <= width; i++) {
		for (let j = 0; j <= height; j++) {
			const current = table[i][j];
			// add current cell value to right and down neighbors
			if (i + 1 <= width) table[i + 1][j] += current;
			if (j + 1 <= height) table[i][j + 1] += current;
		}
	}
	return table[width][height]
}

// O(n * m) time | O(n + m) space
function numberOfWaysToTraverseGraph(width, height, memo = {}) {
	const key = width + ',' + height;
	if (key in memo) return memo[key];
	
  if (width === 1 || height === 1) return 1;
	
	memo[key] = numberOfWaysToTraverseGraph(width - 1, height, memo) + numberOfWaysToTraverseGraph(width, height - 1, memo);
	return memo[key];
}