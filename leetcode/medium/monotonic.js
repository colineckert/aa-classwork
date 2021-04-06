// O(n) time | O(1) space
function isMonotonic(array) {
	let isInc = true;
	let isDec = true;
	for (let i = 1; i < array.length; i++) {
		if (array[i] > array[i - 1]) isDec = false;
		if (array[i] < array[i - 1]) isInc = false;
	}
	return isInc || isDec;
}