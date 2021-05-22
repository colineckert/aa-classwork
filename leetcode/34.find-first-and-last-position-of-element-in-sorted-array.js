/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(log(n)) time | O(1) space
function searchRange(array, target) {
	const finalRange = [-1, -1];
	binarySearchHelper(array, target, 0, array.length - 1, finalRange, true);
	binarySearchHelper(array, target, 0, array.length - 1, finalRange, false);
	return finalRange;
}

function binarySearchHelper(array, target, left, right, finalRange, goLeft) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target < array[mid]) {
      right = mid - 1;
    } else if (target > array[mid]) {
      left = mid + 1;
    } else {
      if (goLeft) {
        if (mid === 0 || array[mid - 1] !== target) {
          finalRange[0] = mid;
          return;
        } else {
          right = mid - 1;
        }
      } else {
        if (mid === array.length - 1 || array[mid + 1] !== target) {
          finalRange[1] = mid;
          return;
        } else {
          left = mid + 1;
        }
      }
    }
  }
}

// @lc code=end



