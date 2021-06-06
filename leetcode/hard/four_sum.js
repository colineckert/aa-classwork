// Avg: O(n^2) time | O(n^2) space
// Worst: O(n^3) time | O(n^2) space
function fourNumberSum(array, targetSum) {
  const allPairSums = {};
	const quads = [];
	
	for (let i = 1; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			const currSum = array[i] + array[j];
			const difference = targetSum - currSum;
			if (difference in allPairSums) {
				for (const pair of allPairSums[difference]) {
					quads.push(pair.concat([array[i], array[j]]));
				}
			}
		}
		
		for (let k = 0; k < i; k++) {
			const currSum = array[i] + array[k];
			if (!(currSum in allPairSums)) {
				allPairSums[currSum] = [[array[k], array[i]]];
			} else {
				allPairSums[currSum].push([array[k], array[i]]);
			}
		}
	}
	
	return quads;
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
