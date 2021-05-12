// O(n) time | O(n) space
function reverseWordsInString(string) {
  const words = [];
	let startOfWord = 0;
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		
		if (char === ' ') {
			words.push(string.slice(startOfWord, i));
			startOfWord = i;
		} else if (string[startOfWord] === ' ') {
			words.push(' ');
			startOfWord = i;
		}
	}
	
	words.push(string.slice(startOfWord));
	
	reverseList(words);
	return words.join('');
}

function reverseList(list) {
	let start = 0, end = list.length - 1;
	while (start < end) {
		const temp = list[start];
		list[start] = list[end];
		list[end] = temp;
		start++;
		end--;
	}
}
