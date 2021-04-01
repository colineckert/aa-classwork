// O(n^2) time | O(1) space
function bubbleSort(array) {
  let sorted = false;
	let count = 0
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < array.length - 1 - count; i++) {
			if (array[i] > array[i + 1]) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
				sorted = false;
			}
		}
		count += 1;
	}
	return array;
}