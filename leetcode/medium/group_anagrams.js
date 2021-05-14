// O(w * n * log(n)) time | O(wn) space - where w is the number of words
// and n is the length of the longest word
function groupAnagrams(words) {
	const anagrams = {};
	for (const word of words) {
		const sortedWord = word.split('').sort().join('');
		if (sortedWord in anagrams) {
			anagrams[sortedWord].push(word);
		} else {
			anagrams[sortedWord] = [word];
		}
	}
	return Object.values(anagrams);
}