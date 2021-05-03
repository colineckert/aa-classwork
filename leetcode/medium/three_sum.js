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

// alt solution to avoid duplicate values
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let triplets = [];
    for (let i = 0; i < nums.length; i ++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        findPair(nums, -nums[i], i + 1, triplets);
    }
    
    return triplets;
};

const findPair = (arr, target, left, triplets) => {
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            triplets.push([-target, arr[left], arr[right]])
            left += 1;
            right -= 1;
            while (left < right && arr[left] === arr[left - 1]) left += 1;
            while (left < right && arr[right] === arr[right + 1]) right -= 1;
        } else if (sum < target) {
            left += 1;   
        } else {
            right -= 1;
        }
    }
}