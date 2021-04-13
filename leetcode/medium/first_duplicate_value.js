// O(n^2) time | O(1) space
function firstDuplicateValue(array) {
  let smallestIdx = Infinity;
  for (let i = 0; i < array.length - 1; i++) {
		let currentVal = array[i];
		for (let j = i + 1; j < array.length; j++) {
			let potentialDup = array[j];
			if (currentVal === potentialDup) {
				smallestIdx = Math.min(j, smallestIdx);
			}
		}
	}
	return smallestIdx === Infinity ? -1 : array[smallestIdx];
}

// O(n) time | O(n) space
function firstDuplicateValue(array) {
  const seen = new Set();
	for (let i = 0; i < array.length; i++) {
		let currVal = array[i];
		if (seen.has(currVal)) return currVal;
		seen.add(currVal);
	}
  return -1;
}

// O(n) time | O(1) space
function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
		let currVal = array[i];
		let idx = Math.abs(currVal) - 1;
		if (array[idx] < 0) return Math.abs(currVal);
		array[idx] = array[idx] * -1;
	}
	return -1;
}