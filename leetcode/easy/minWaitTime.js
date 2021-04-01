// greedy algorithm | O(nlog(n)) time | O(1) space
function minimumWaitingTime(queries) {
	queries.sort((a, b) => a - b);
	
	let waitTime = 0;
	for (let i = 0; i < queries.length - 1; i++) {
		waitTime += queries[i] * (queries.length - 1 - i);
	}
	return waitTime;
}