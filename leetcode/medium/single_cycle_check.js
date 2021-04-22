// O(n) time | O(1) space
function hasSingleCycle(array) {
	let numVisited = 0;
	let currIdx = 0;
	while (numVisited < array.length) {
		if (numVisited > 0 && currIdx === 0) return false;
		numVisited++;
		currIdx = getNextIdx(currIdx, array);
	}
	return currIdx === 0;
}

function getNextIdx(idx, array) {
	const jump = array[idx];
	const nextIdx = (idx + jump) % array.length;
	return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}