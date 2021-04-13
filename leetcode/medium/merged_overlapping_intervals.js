// O(nlogn) time | O(n) space
function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
	
	const mergedIntervals = [];
	let currInterval = array[0];
	mergedIntervals.push(currInterval);
	
	for (const nextInterval of array) {
		const [_, currIntervalEnd] = currInterval;
		const [nextIntervalStart, nextIntervalEnd] = nextInterval;
		
		if (currIntervalEnd >= nextIntervalStart) {
			currInterval[1] = Math.max(currIntervalEnd, nextIntervalEnd);
		} else {
			currInterval = nextInterval;
			mergedIntervals.push(currInterval);
		}
	}
	
	return mergedIntervals;
}