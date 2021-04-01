// O(n) time | O(d) space - where n is the number of elements in array, including sub-elements
// and d is the greatest depth of the "special array"
function productSum(array, level=1) {
  let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			sum += productSum(array[i], level + 1);
		} else {
			sum += array[i];
		}
	}
	
	return sum * level;
}