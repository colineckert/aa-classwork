// O(n * k) time | O(n) space - where n is the height of the staircase and
// k is the number of allowed steps
function staircaseTraversal(height, maxSteps, memo = {0: 1, 1: 1}) {
	if (height in memo) return memo[height];
	
	let numberOfWays = 0;
	for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
		numberOfWays += staircaseTraversal(height - step, maxSteps, memo);
	}
	
	memo[height] = numberOfWays;
	return numberOfWays;
}

// O(n * k) time | O(n) space - where n is the height of the staircase and
// k is the number of allowed steps
function staircaseTraversal(height, maxSteps) {
  const waysToTop = new Array(height + 1).fill(0);
	waysToTop[0] = 1;
	waysToTop[1] = 1;
	
	for (let currentHeight = 2; currentHeight <= height; currentHeight++) {
		let step = 1;
		while (step <= maxSteps && step <= currentHeight) {
			waysToTop[currentHeight] = waysToTop[currentHeight] + waysToTop[currentHeight - step];
			step++;
		}
	}
	
	return waysToTop[height];
}

// O(n) time | O(n) space - where n is the height of the staircase
function staircaseTraversal(height, maxSteps) {
  let currentNumberOfWays = 0;
	const waysToTop = [1];
	
	for (let currentHeight = 1; currentHeight <= height; currentHeight++) {
		const startOfWindow = currentHeight - maxSteps - 1;
		const endOfWindow = currentHeight - 1;
		
		if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow];
		
		currentNumberOfWays += waysToTop[endOfWindow];
		waysToTop.push(currentNumberOfWays);
	}
	
	return waysToTop[height];
}