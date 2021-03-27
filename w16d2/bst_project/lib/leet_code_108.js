// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
    if (!nums.length) return null;
    
    let midIdx = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[midIdx]);
    
    let leftTree = sortedArrayToBST(nums.slice(0, midIdx));
    let rightTree = sortedArrayToBST(nums.slice(midIdx + 1));
    
    root.left = leftTree;
    root.right = rightTree;
    
    return root;
}