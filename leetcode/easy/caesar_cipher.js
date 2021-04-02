// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let newStr = [];
	
	for (let i = 0; i < string.length; i++) {
		const oldIdx = alpha.indexOf(string[i]);
		const newIdx = (oldIdx + key) % alpha.length;
		const newChar = alpha[newIdx];
		newStr.push(newChar);
	}
	
	return newStr.join('');
}