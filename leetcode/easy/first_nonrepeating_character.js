// O(n) time | O(1) space - max space is length of alphabet, reducing to constant space

function firstNonRepeatingCharacter(string) {
	const repeats = {};
	
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		if (!repeats[char]) repeats[char] = 0;
		repeats[char] += 1;
	}
	
	for (let i = 0; i < string.length; i++) {
		if (repeats[string[i]] == 1) return i;
	};
	
	return -1;
}