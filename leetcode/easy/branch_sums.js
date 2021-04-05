// O(n) time | O(n) space - where n is the number of nodes in the Binary Tree
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	const sums = [];
	calculateBranchSum(root, 0, sums);
	return sums;
}

function calculateBranchSum(node, runningSum, sums) {
	if (!node) return;
	
	const newRunningSum = runningSum + node.value;
	if (!node.left && !node.right) {
		sums.push(newRunningSum);
		return;
	}
	
	calculateBranchSum(node.left, newRunningSum, sums);
	calculateBranchSum(node.right, newRunningSum, sums);
}