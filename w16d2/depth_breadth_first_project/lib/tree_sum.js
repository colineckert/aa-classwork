// function treeSum(root) {
//     let sum = 0;
//     if (!root) return 0;
//     const stack = [root];

//     while (stack.length) {
//         let node = stack.pop();
//         sum += node.val;
//         if (node.right) stack.push(node.right);
//         if (node.left) stack.push(node.left);
//     }
//     return sum;
// }

function treeSum(root) {
    if (!root) return 0;
    return treeSum(root.left) + root.val + treeSum(root.right);
}


module.exports = {
    treeSum
};