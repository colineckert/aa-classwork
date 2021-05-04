// O(n) time | O(n) space
function balancedBrackets(string) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
	
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		if (pairs[char]) {
			stack.push(char);
		} else if (char === ')' || char === ']' || char === '}') {
			if (pairs[stack.pop()] !== char) {
				return false;
			}
		}
	}
	
	return stack.length === 0;
}