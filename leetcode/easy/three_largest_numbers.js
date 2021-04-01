// O(n) time | O(1) space
function findThreeLargestNumbers(array) {
  const threeLargest = new Array(3).fill(null);
	for (const num of array) {
		updateLargest(threeLargest, num);
	}
	return threeLargest;
}

function updateLargest(threeLargest, num) {
	if (!threeLargest[2] || num > threeLargest[2]) {
		shiftAndUpdate(threeLargest, num, 2);
	} else if (!threeLargest[1] || num > threeLargest[1]) {
		shiftAndUpdate(threeLargest, num, 1);
	} else if (!threeLargest[0] || num > threeLargest[0]) {
		shiftAndUpdate(threeLargest, num, 0);
	}
}

function shiftAndUpdate(array, num, idx) {
	for (let i = 0; i <= idx; i++) {
		if (i === idx) {
			array[i] = num;
		} else {
			array[i] = array[i + 1];
		}
	}
}