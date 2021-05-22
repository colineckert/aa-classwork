// O((r * c)^2) time | O(1) space - where r and c are the numbers of rows and columns
var candyCrush = function(board) {
    // ERROR CHECK
    if (!board) return board;
    
    let isDone = true;
    
    // STEP 1: CRUSH ROWS
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length - 2; c++) {
            let num1 = Math.abs(board[r][c]);
            let num2 = Math.abs(board[r][c + 1]);
            let num3 = Math.abs(board[r][c + 2]);
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                board[r][c] = -num1;
                board[r][c + 1] = -num2;
                board[r][c + 2] = -num3;
                isDone = false;
            }
        }
    }
    
    
    // STEP 2: CRUSH COLUMNS
    for (let c = 0; c < board[0].length; c++) {
        for (let r = 0; r < board.length - 2; r++) { 
            let num1 = Math.abs(board[r][c]);
            let num2 = Math.abs(board[r + 1][c]);
            let num3 = Math.abs(board[r + 2][c]);
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                board[r][c] = -num1;
                board[r + 1][c] = -num2;
                board[r + 2][c] = -num3;
                isDone = false;
            }
        }
    }
    
    
    // GRAVITY
    if (!isDone) {
        for (let c = 0; c < board[0].length; c++) {
            // Move all positive numbers down
            let idx = board.length - 1;
            for (let r = board.length - 1; r >= 0; r--) {
                if (board[r][c] > 0) {
                    board[idx][c] = board[r][c];
                    idx--;
                } 
            }
            
            // Place zeroes in for missing pieces
            for (let r = idx; r >= 0; r--) {
                board[r][c] = 0;
            }
        }
    }
    
    
    // RETURN IF DONE
    if (isDone) {
        return board;
    } else {
        return candyCrush(board);
    }
};