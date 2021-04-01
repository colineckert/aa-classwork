// O(nlog(n)) time | O(1) space
function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a, b) => b - a);
	blueShirtHeights.sort((a, b) => b - a);
	
	if (redShirtHeights[0] > blueShirtHeights[0]) {
		return redShirtHeights.every((height, idx) => redShirtHeights[idx] > blueShirtHeights[idx]);
	} else {
		return blueShirtHeights.every((height, idx) => blueShirtHeights[idx] > redShirtHeights[idx]);
	}
}