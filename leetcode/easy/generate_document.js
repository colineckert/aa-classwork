// O(n + m) time | O(c) space - where n is the number of characters, 
// m is the length of the documnet, and c is the number of unique characters in 
// the characters string

function generateDocument(characters, document) {
	counts = {};
  characters.split('').forEach(char => {
		if (!counts[char]) counts[char] = 0;
		counts[char] += 1;
	});
	
	document.split('').forEach(char => {
		if (!counts[char]) counts[char] = 0;
		counts[char] -= 1;
	});
  
	return Object.values(counts).every(count => count >= 0);
}