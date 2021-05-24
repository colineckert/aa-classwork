// O(n^2) time | O(n) space - where n is the number of disks
function diskStacking(disks) {
  disks.sort((a, b) => a[2] - b[2]);
	const heights = disks.map(disk => disk[2]);
	const sequences = new Array(disks.length);
	let maxHeightIdx = 0;
	
	for (let i = 1; i < disks.length; i++) {
		let currentDisk = disks[i];
		for (let j = 0; j < i; j++) {
			const otherDisk = disks[j];
			if (checkIfStackable(currentDisk, otherDisk)) {
				if (heights[i] <= currentDisk[2] + heights[j]) {
					heights[i] = currentDisk[2] + heights[j];
					sequences[i] = j;
				}
			}
		}
		if (heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i;
	}
	
	return buildDiskStack(disks, sequences, maxHeightIdx);
}

function checkIfStackable(c, o) {
	if (o[0] < c[0] && o[1] < c[1] && o[2] < c[2]) {
		return true;
	} else {
		return false;
	}
}

function buildDiskStack(disks, sequences, currentIdx) {
	const diskStack = [];
	while (currentIdx !== undefined) {
		diskStack.unshift(disks[currentIdx]);
		currentIdx = sequences[currentIdx];
	}
	return diskStack;
}
