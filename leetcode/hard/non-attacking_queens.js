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

// Upper bound: O(n!) time | O(n) space - where n is the input number
function nonAttackingQueens(n) {
	const blockedColumns = new Set();
	const blockedUpDiagonals = new Set();
	const blockedDownDiagonals = new Set();
	return getNumberOfNonAttackingQueenPlacements(0, blockedColumns, blockedUpDiagonals, blockedDownDiagonals, n);
}

function getNumberOfNonAttackingQueenPlacements(
	row,
 	blockedColumns,
	blockedUpDiagonals,
 	blockedDownDiagonals,
	boardSize
) {
	if (row === boardSize) return 1;
	
	let validPlacements = 0;
	for (let col = 0; col < boardSize; col++) {
		if (isNonAttackingPlacement(row, col, blockedColumns, blockedUpDiagonals, blockedDownDiagonals)) {
			placeQueen(row, col, blockedColumns, blockedUpDiagonals, blockedDownDiagonals);
			validPlacements += getNumberOfNonAttackingQueenPlacements(
				row + 1, 
				blockedColumns, 
				blockedUpDiagonals, 
				blockedDownDiagonals, 
				boardSize
			);
			removeQueen(row, col, blockedColumns, blockedUpDiagonals, blockedDownDiagonals);
		}
	}
	return validPlacements;
}

// This is always an O(1)-time operation
function isNonAttackingPlacement(row, col, blockedColumns, blockedUpDiagonals, blockedDownDiagonals) {
	if (blockedColumns.has(col)) return false;
	if (blockedUpDiagonals.has(row + col)) return false;
	if (blockedDownDiagonals.has(row - col)) return false;
	
	return true;
}

function placeQueen(row, col, blockedColumns, blockedUpDiagonals, blockedDownDiagonals) {
	blockedColumns.add(col);
	blockedUpDiagonals.add(row + col);
	blockedDownDiagonals.add(row - col);
}

function removeQueen(row, col, blockedColumns, blockedUpDiagonals, blockedDownDiagonals) {
	blockedColumns.delete(col);
	blockedUpDiagonals.delete(row + col);
	blockedDownDiagonals.delete(row - col);
}