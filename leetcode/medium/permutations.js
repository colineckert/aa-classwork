// Upper Bound: O(n^2*n!) time | O(n*n!) space
// Roughly: O(n*n!) time | O(n*n!) space
function getPermutations(array) {
  const permutations = [];
	permutationsHelper(array, [], permutations);
	return permutations;
}

function permutationsHelper(array, currPermutation, permutations) {
	if (!array.length && currPermutation.length) {
		permutations.push(currPermutation);
	} else {
		for (let i = 0; i < array.length; i++) {
			const newArr = array.slice(0, i).concat(array.slice(i + 1));
			const newPermutation = currPermutation.concat([array[i]]);
			permutationsHelper(newArr, newPermutation, permutations);
		}
	}
}

