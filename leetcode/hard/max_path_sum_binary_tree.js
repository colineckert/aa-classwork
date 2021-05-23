// O(n) time | O(log(n)) space
function maxPathSum(tree) {
	const [_, maxSum] = findMaxSum(tree);
	return maxSum;
}

function findMaxSum(tree) {
	if (!tree) return [0, -Infinity];
	
	const [leftMaxBranchSum, leftMaxPathSum] = findMaxSum(tree.left);
	const [rightMaxBranchSum, rightMaxPathSum] = findMaxSum(tree.right);
	
	const maxChildBranchSum = Math.max(leftMaxBranchSum, rightMaxBranchSum);
	const maxBranchSum = Math.max(maxChildBranchSum + tree.value, tree.value);
	const maxTriSum = Math.max(maxBranchSum, leftMaxBranchSum + tree.value + rightMaxBranchSum);
	const runningMaxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxTriSum);
	
	return [maxBranchSum, runningMaxPathSum];
}