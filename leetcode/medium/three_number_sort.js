// O(n) time | O(1) space
function threeNumberSort(array, order) {
  let firstIdx = 0
	let num1 = order[0];
	for (let i = 0; i < array.length; i++) {
		if (array[i] == num1) {
			swap(i, firstIdx, array);
			firstIdx++;
		}
	}
	
	let lastIdx = array.length - 1;
	let num3 = order[2];
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] === num3) {
			swap(i, lastIdx, array);
			lastIdx--;
		}
	}
	
	return array;
}

function swap(i, j, array) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}