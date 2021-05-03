// O(wh) time | O(wh) space - where w and h are the width and height of the input matrix
function removeIslands(matrix) {
	const onesConnectedToBorder = [];
	for (let row = 0; row < matrix.length; row++) {
		onesConnectedToBorder.push([]);
		for (let col = 0; col < matrix[0].length; col++) {
			onesConnectedToBorder[row].push(false);
		}
	}
	
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			const rowIsBorder = row === 0 || row === matrix.length - 1;
			const colIsBorder = col === 0 || col === matrix[row].length - 1;
			const isBorder = rowIsBorder || colIsBorder;
			
			if (!isBorder) continue;
			if (matrix[row][col] != 1) continue;
			
			findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder);
		}
	}
	
	for (let row = 1; row < matrix.length - 1; row++) {
		for (let col = 1; col < matrix[row].length - 1; col++) {
			if (onesConnectedToBorder[row][col]) continue;
			
			matrix[row][col] = 0;
		}
	}
	
	return matrix;
}

function findOnesConnectedToBorder(matrix, startRow, startCol, onesConnectedToBorder) {
	const stack = [[startRow, startCol]];
	
	while (stack.length > 0) {
		const currPos = stack.pop();
		const [currRow, currCol] = currPos;
		
		const alreadyVisited = onesConnectedToBorder[currRow][currCol];
		if (alreadyVisited) continue;
		
		onesConnectedToBorder[currRow][currCol] = true;
		
		const neighbors = getNeighbors(matrix, currRow, currCol);
		for (const neighbor of neighbors) {
			const [row, col] = neighbor;
			
			if (matrix[row][col] != 1) continue;
			
			stack.push(neighbor);
		}
	}
}

function getNeighbors(matrix, row, col) {
	const neighbors = [];
	
	const numRows = matrix.length;
	const numCols = matrix[row].length;
	
	if (row - 1 >= 0) neighbors.push([row - 1, col]); // UP
	if (row + 1 < numRows) neighbors.push([row + 1, col]); // DOWN
	if (col - 1 >= 0) neighbors.push([row, col - 1]); // LEFT
	if (col + 1 < numCols) neighbors.push([row, col + 1]); // RIGHT
	
	return neighbors;
}