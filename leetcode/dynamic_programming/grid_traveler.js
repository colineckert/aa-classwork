// O(n * m) time | O(n + m) space
function gridTraveler(n, m, memo = {}) {
	const key = n + ',' + m;
	
	if (key in memo) return memo[key];
	if (n === 1 && m === 1) return 1;
	if (n === 0 || m === 0) return 0;
	
	memo[key] = gridTravler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
	return memo[key];
}