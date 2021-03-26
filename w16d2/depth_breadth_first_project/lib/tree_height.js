// function treeHeight(root) {
//     if (!root) return -1;

//     let maxDepth = 0;
//     const stack = [{node: root, depth: 0}];

//     while (stack.length) {
//         let { node, depth } = stack.pop();
        
//         if (depth >= maxDepth) maxDepth = depth;

//         if (node.right) stack.push({ node: node.right, depth: depth + 1 });
//         if (node.left) stack.push({ node: node.left, depth: depth + 1 });
//     }

//     return maxDepth;
// }

function treeHeight(root) {
    if (!root) return -1;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}


module.exports = {
    treeHeight
};