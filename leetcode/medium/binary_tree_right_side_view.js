// BFS 
var rightSideView = function(root) {
    let result = [], queue = [root];
    
    if (!root) return result;
    
    while (queue.length) {
        result.push(queue[queue.length - 1].val);
        const nodes = queue;
        queue = [];
        
        for (const node of nodes) {
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return result;
};

// DFS
function rightSideView(root) {
    if (!root) return [];
    let result = [];
    dfsHelper(root, 0, result);
    return result;
};

function dfsHelper(node, level, result) {
    if (!node) return;
    result[level] = node.val;
    dfsHelper(node.left, level + 1, result);
    dfsHelper(node.right, level + 1, result);
};