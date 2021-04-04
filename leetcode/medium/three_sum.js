// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
	
	const triSums = [];
	
	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1;
		let right = array.length - 1;
		
		while (left < right) {
			let currentSum = array[i] + array[left] + array[right];
			if (currentSum === targetSum) {
				triSums.push([array[i], array[left], array[right]]);
				left++;
				right--;
			} else if (currentSum < targetSum) {
				left++;
			} else if (currentSum > targetSum) {
				right--;
			}
		}
	}
	
	return triSums;
}