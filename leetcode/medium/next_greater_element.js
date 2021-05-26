// O(n) time | O(n) space - where n is the length of the array
function nextGreaterElement(array) {
  const result = new Array(array.length).fill(-1);
	const stack = [];
	
	for (let idx = 0; idx < 2 * array.length; idx++) {
		const circularIdx = idx % array.length
		
		while (stack.length && array[stack[stack.length - 1]] < array[circularIdx]) {
			const top = stack.pop();
			result[top] = array[circularIdx];
		}
		
		stack.push(circularIdx);
	}

	return result;
}