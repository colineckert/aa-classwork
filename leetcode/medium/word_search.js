var exist = function(board, word) {
    const ROW_NUM = board.length, COL_NUM = board[0].length;
    
    const runDFS = (r, c, idx) => {
        if (word.length === idx) return true;
        if (r == ROW_NUM || r < 0 || c == COL_NUM || c < 0 || board[r][c] !== word[idx]) return false;
        
        board[r][c] = '#'; // temporarily mark as visited
        
        if (runDFS(r + 1, c, idx + 1) ||
            runDFS(r - 1, c, idx + 1) ||
            runDFS(r, c + 1, idx + 1) ||
            runDFS(r, c - 1, idx + 1)) return true;
        
        board[r][c] = word[idx]; // reset the board
    }
    
    
    for (let r = 0; r < ROW_NUM; r++) {
        for (let c = 0; c < COL_NUM; c++) {
            if (board[r][c] === word[0] && runDFS(r, c, 0)) return true;
        }
    }
    
    return false;
};