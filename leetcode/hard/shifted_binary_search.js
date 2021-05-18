// RECURSIVE - O(log(n)) time | O(log(n)) space
function shiftedBinarySearch(array, target) {
  return bsHelper(array, target, 0, array.length - 1);
}

function bsHelper(array, target, left, right) {
	if (left > right) return -1;
	
	let leftNum = array[left];
	let rightNum = array[right];
	let mid = Math.floor((left + right) / 2);
	let potentialMatch = array[mid];
	
	if (target === potentialMatch) {
		return mid;
	} else if (leftNum <= potentialMatch) {
		if (target < potentialMatch && target >= leftNum) {
			return bsHelper(array, target, left, mid - 1);
		} else {
			return bsHelper(array, target, mid + 1, right);
		}
	} else {
		if (target > potentialMatch && target <= rightNum) {
			return bsHelper(array, target, mid + 1, right);
		} else {
			return bsHelper(array, target, left, mid - 1);
		}
	}
}

// ITERATIVE - O(log(n)) time |O(1) space
function shiftedBinarySearch(array, target) {
  return bsHelper(array, target, 0, array.length - 1);
}

function bsHelper(array, target, left, right) {
	while (left <= right) {
		
		let leftNum = array[left];
		let rightNum = array[right];
		let mid = Math.floor((left + right) / 2);
		let potentialMatch = array[mid];
		
		if (target === potentialMatch) {
			return mid;
		} else if (leftNum <= potentialMatch) {
			if (target >= leftNum && target < potentialMatch) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else {
			if (target > potentialMatch && target <= rightNum) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}
	
	return -1;
}