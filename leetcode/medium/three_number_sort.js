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

// 1 pass solution, same time/space
function threeNumberSort(array, order) {
  let first = 0, second = 0, third = array.length - 1;
	
	while (second <= third) {
		let value = array[second];
		
		if (value === order[0]) {
			swap(first, second, array);
			first++;
			second++;
		} else if (value === order[1]) {
			second++;
		} else {
			swap(second, third, array);
			third--;
		}
	}
	return array;
}

function swap(i, j, array) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}