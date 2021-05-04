// O(n^3) time | O(n) space
function longestPalindromicSubstring(string) {
  let longest = '';
	for (let i = 0; i < string.length; i++) {
		for (let j = i; j < string.length; j++) {
			const substring = string.slice(i, j + 1);
			if (substring.length > longest.length && isPalindrome(substring)) {
				longest = substring;
			}
		}
	}
	return longest;
}

function isPalindrome(string) {
	let [left, right] = [0, string.length - 1];
	while (left < right) {
		if (string[left] !== string[right]) return false;
		left++;
		right--;
	}
	return true;
}

// O(n^2) time | O(n) space
function longestPalindromicSubstring(string) {
	let currLongest = [0, 1];
	for (let i = 0; i < string.length; i++) {
		const odd = getLongestPalindrome(string, i - 1, i + 1);
		const even = getLongestPalindrome(string, i - 1, i);
		const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
		currLongest = currLongest[1] - currLongest[0] > longest[1] - longest[0] ? currLongest : longest;
	}
	return string.slice(currLongest[0], currLongest[1]);
}

function getLongestPalindrome(string, leftIdx, rightIdx) {
	while (leftIdx >= 0 && rightIdx < string.length) {
		if (string[leftIdx] !== string[rightIdx]) break;
		leftIdx--;
		rightIdx++;
	}
	return [leftIdx + 1, rightIdx];
}