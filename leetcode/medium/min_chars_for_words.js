// O(n * l) time | O(c) lower space bound, O(n * l) upper space bound -
// where n is the number of words, l is the length of the longest word, 
// and c is the number of unique characters across all words.
function minimumCharactersForWords(words) {
  const maxCharFrequencies = {};
	
	for (const word of words) {
		const charFrequencies = countCharacterFrequencies(word);
		updateMaxCharacterFrequencies(charFrequencies, maxCharFrequencies);
		console.log(maxCharFrequencies)
	}
	
	return makeArrayFromCharFrequencies(maxCharFrequencies);
}

function countCharacterFrequencies(word) {
	const charFrequencies = {};
	
	for (const char of word) {
		charFrequencies[char] ? charFrequencies[char]++ : charFrequencies[char] = 1;
	}
	
	return charFrequencies;
}

function updateMaxCharacterFrequencies(frequencies, maxFrequencies) {
	for (const char in frequencies) {
		const currFrequency = frequencies[char];
		
		if (char in maxFrequencies) {
			maxFrequencies[char] = Math.max(maxFrequencies[char], currFrequency);
		} else {
			maxFrequencies[char] = currFrequency;
		}
	}
}

function makeArrayFromCharFrequencies(charFrequencies) {
	const chars = [];
	
	for (const char in charFrequencies) {
		const freq = charFrequencies[char];
		
		for (let i = 0; i < freq; i++) {
			chars.push(char);
		}
	}
	
	return chars;
}
