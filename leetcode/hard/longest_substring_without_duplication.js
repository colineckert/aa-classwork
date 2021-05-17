// O(n) time | O(min(n, a)) space - where n is the length of the inputs 
// and a is the length of the character alphabet represented in the input string
function longestSubstringWithoutDuplication(string) {
  const lastSeen = {};
	let longest = [0, 1];
	let startIdx = 0;
	
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		
		if (char in lastSeen) {
			startIdx = Math.max(startIdx, lastSeen[char] + 1);
		}
		
		if (longest[1] - longest[0] < i + 1 - startIdx) {
			longest = [startIdx, i + 1];
		}
		
		lastSeen[char] = i;
	}

	return string.slice(longest[0], longest[1]);
}

// 3. Longest Substring Without Repeating Characters
// If returning int instead of substring
// O(n) time | O(min(n, a)) space
var lengthOfLongestSubstring = function(s) {
    const lastSeen = {};
    let longest = 0
    let startIdx = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in lastSeen) {
            startIdx = Math.max(startIdx, lastSeen[char] + 1);
        }
        longest = Math.max(i - startIdx + 1, longest);
        lastSeen[char] = i;
    }
    
    return longest;
};