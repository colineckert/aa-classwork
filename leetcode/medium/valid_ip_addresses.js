// O(1) time | O(1) space
function validIPAddresses(string) {
  const ipAddresses = [];
	
	for( let i = 0; i < Math.min(string.length, 4); i++) {
		const currentIPAdressParts = ['', '', '', ''];
		
		currentIPAdressParts[0] = string.slice(0, i);
		if (!isValidPart(currentIPAdressParts[0])) continue;
		
		for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
			currentIPAdressParts[1] = string.slice(i, j);
			if (!isValidPart(currentIPAdressParts[1])) continue;
			
			for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
				currentIPAdressParts[2] = string.slice(j, k);
				currentIPAdressParts[3] = string.slice(k);
				
				if (isValidPart(currentIPAdressParts[2]) && isValidPart(currentIPAdressParts[3])) {
					ipAddresses.push(currentIPAdressParts.join('.'));
				}
			}
		}
	}
	
	return ipAddresses;
}

function isValidPart(str) {
	const strAsInt = parseInt(str);
	if (strAsInt > 255) return false;
	
	return str.length === strAsInt.toString().length;
}