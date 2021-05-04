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

