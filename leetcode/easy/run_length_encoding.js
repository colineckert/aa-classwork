// O(n) time | O(n) space - where n is the length of the input string
function runLengthEncoding(string) {
	let encoded = [];
	let count = 1;
	
	for (let i = 1; i < string.length; i++) {
		if (string[i] !== string[i - 1] || count === 9) {
			encoded.push(count, string[i - 1]);
			count = 0;
		}
		count++;
	}
	
	encoded.push(count, string[string.length - 1]);
	return encoded.join('');
}