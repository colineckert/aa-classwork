// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

function treeHeight(root) {
    if (!root) return -1;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}

function isBalanced(root) {
    if (!root) return true;
    let heightDiff = Math.abs(treeHeight(root.left) - treeHeight(root.right)) <= 1;
    return heightDiff && isBalanced(root.left) && isBalanced(root.right);
}