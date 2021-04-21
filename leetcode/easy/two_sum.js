// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
	const nums = {};
	for (let i = 0; i < array.length; i++) {
		let num = array[i];
		let otherNum = targetSum - num;
		if (otherNum in nums) {
			return [num, otherNum];
		} else {
			nums[num] = true;
		}
	}
	return [];
}

// O(nlog(n)) time | O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
	let left = 0;
	let right = array.length - 1;
	
	while (left < right) {
		let currSum = array[left] + array[right];
		if (currSum === targetSum) {
			return [array[left], array[right]];
		} else if (currSum < targetSum) {
			left++;
		} else {
			right--;  
		}
	}
	return [];
}
