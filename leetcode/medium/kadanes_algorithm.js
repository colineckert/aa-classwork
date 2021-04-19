// O(n) time | O(1) space
function kadanesAlgorithm(array) {
	let maxEndingHere = array[0];
	let maxSum = array[0];
	for (let i = 1; i < array.length; i++) {
		const num = array[i];
		maxEndingHere = Math.max(maxEndingHere + num, num);
		maxSum = Math.max(maxSum, maxEndingHere);
	}
	return maxSum;
}