// O(n^2) time | O(1) space
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
		let j = i;
		while (j > 0 && array[j] < array[j - 1]) {
			[array[j - 1], array[j]] = [array[j], array[j - 1]];
			j--;
		}
	}
	return array;
}
