// Best: O(n^2) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space

function selectionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		let minIdx = i;
		
		for (let j = i + 1; j < array.length; j++) {
			if (array[minIdx] > array[j]) minIdx = j;
		}
		
		swap(i, minIdx, array);
	}
	return array;
}

function swap(i, j, array) {
	let temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}