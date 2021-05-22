// O(n*2^n) time | O(n*2^n) space
function powerset(array) {
  const subsets = [[]];

	for (const ele of array) {
		const length = subsets.length;
		for (let i = 0; i < length; i++) {
			const currentSubset = subsets[i];
			subsets.push(currentSubset.concat(ele));
		}
	}

	return subsets;
}

/*
Variation for string powersets
Eg. String "abc" should output
empty string
a
b
c
ab
bc
ac
abc
 */

function stringSubsets(str) {
  const subsets = [''];

  for (const char of str) {
    let length = subsets.length;
    for (let i = 0; i < length; i++) {
      let current = subsets[i];
      subsets.push(current += char);
    }
  }
	
  return subsets;
}

let str = "abc";
console.log(stringSubsets(str));