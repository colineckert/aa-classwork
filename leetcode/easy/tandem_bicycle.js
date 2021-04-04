// O(nlogn) time | O(1) space
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
	if (fastest) {
  	blueShirtSpeeds.sort((a, b) => b - a);
	} else {
  	blueShirtSpeeds.sort((a, b) => a - b);
	}
	
	let totalSpeed = 0;
	for (let i = 0; i < redShirtSpeeds.length; i++) {
		totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
	}
	
	return totalSpeed;
}