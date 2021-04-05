// O(n) time | O(n) space
function sortedSquaredArray(array) {
	const squares = new Array(array.length).fill(0);
	let left = 0;
	let right = array.length - 1;
	
	for (let i = array.length - 1; i >= 0; i--) {
		if (Math.abs(array[left]) > Math.abs(array[right])) {
			squares[i] = (Math.pow(array[left], 2));
			left++;
		} else {
			squares[i] = (Math.pow(array[right], 2));
			right--;
		}
	}
	
  return squares;
}