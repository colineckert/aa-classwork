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

// O(n*n!) time | O(n*n!) space
function getPermutations(array) {
  const permutations = [];
	permutationsHelper(0, array, permutations);
	return permutations;
}

function permutationsHelper(i, array, permutations) {
	if (i === array.length - 1) {
		permutations.push([...array]);
	} else {
		for (let j = i; j < array.length; j++) {
			swap(i, j, array);
			permutationsHelper(i + 1, array, permutations);
			swap(i, j, array);
		}
	}
}

function swap(i, j, array) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}
// Do not edit the line below.
exports.getPermutations = getPermutations;
