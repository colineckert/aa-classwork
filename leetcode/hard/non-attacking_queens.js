// Lower bound: O(n!) time | O(n) space - where n is the input number
function nonAttackingQueens(n) {
	// Each index of `columnPlacements` represents a row on the chessboard,
	// and the value at each index is the column (on the relevant row) where
	// a queen is currently placed.
  const columnPlacements = new Array(n).fill(0);
	return getNumberOfNonAttackingQueenPlacements(0, columnPlacements, n);
}

function getNumberOfNonAttackingQueenPlacements(row, columnPlacements, boardSize) {
	if (row === boardSize) return 1;
	
	let validPlacements = 0;
	for (let col = 0; col < boardSize; col++) {
		if (isNonAttackingPlacement(row, col, columnPlacements)) {
			columnPlacements[row] = col;
			validPlacements += 
				getNumberOfNonAttackingQueenPlacements(row + 1, columnPlacements, boardSize)
		}
	}
	return validPlacements;
}

function isNonAttackingPlacement(row, col, columnPlacements) {
	for (let prevRow = 0; prevRow < row; prevRow++) {
		const columnToCheck = columnPlacements[prevRow];
		const sameColumn = columnToCheck === col;
		const onDiagonal = Math.abs(columnToCheck - col) === row - prevRow;
		if (sameColumn || onDiagonal) return false;
	}
	return true;
}
