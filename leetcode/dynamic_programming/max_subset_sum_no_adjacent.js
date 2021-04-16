// OPTIMAL
// O(n) time | O(1) space
function maxSubsetSumNoAdjacent(array) {
	if (!array.length) return 0;
	if (array.length === 1) return array[0];
	
  let nonAdjSum = array[0];
	let prevSum = Math.max(array[0], array[1]);
	
	for (let i = 2; i < array.length; i++) {
		let maxSum = Math.max(prevSum, nonAdjSum + array[i]);
		nonAdjSum = prevSum;
		prevSum = maxSum;
	}
		
	return prevSum;
}

// TABULATION
// O(n) time | O(n) space - where n is the length of the input array
function maxSubsetSumNoAdjacent(array) {
	if (!array.length) return 0;
	if (array.length === 1) return array[0];
	
  const maxSums = [ ...array ];
	maxSums[1] = Math.max(array[0], array[1]);
	
	for (let i = 2; i < array.length; i++) {
		maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
	}
		
	return maxSums[maxSums.length - 1];
}