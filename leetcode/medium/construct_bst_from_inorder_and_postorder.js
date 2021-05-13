var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null;
    
    if (postorder.length) {
        let val = postorder.pop();
        let root = new TreeNode(val);
        let idx = inorder.indexOf(val);
        root.right = buildTree(inorder.slice(idx + 1), postorder);
        root.left = buildTree(inorder.slice(0, idx), postorder);
        return root;
    }
    
    return null;
};

var buildTree = function(inorder, postorder) {    
    let hash = {};
    for (let i=0;i<inorder.length;i++) hash[inorder[i]] = i; 
    
    let recur = function(start, end) {
        if (start > end) return null;
        let val = postorder.pop();
        let root = new TreeNode(val);
        root.right = recur(hash[val] + 1, end);
        root.left = recur(start, hash[val] - 1);
        return root;
    }
    
    return recur(0, inorder.length - 1);  
};