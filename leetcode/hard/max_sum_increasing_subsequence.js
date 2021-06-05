// O(n^2) time | O(n) space
function maxSumIncreasingSubsequence(array) {
	const sequences = new Array(array.length);
	const sums = array.map(val => val);
	let maxSumIdx = 0;
	
	for (let i = 0; i < array.length; i++) {
		const currentNum = array[i];
		
		for (let j = 0; j < i; j++) {
			const otherNum = array[j];
			
			if (currentNum > otherNum && sums[j] + currentNum >= sums[i]) {
				sums[i] = sums[j] + currentNum;
				sequences[i] = j;
			}	
		}
		
		if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
	}
	
	const maxSequence = buildSequence(array, sequences, maxSumIdx);
	return [sums[maxSumIdx], maxSequence];
}

function buildSequence(array, sequences, currIdx) {
	const seq = [];
	
	while (currIdx !== undefined) {
		seq.unshift(array[currIdx]);
		currIdx = sequences[currIdx];
	}
	
	return seq;
}