// O(n) time | O(n) space
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
	if (tree === null) {
		return new TreeInfo(0, 0);
	}
	
	const leftTreeData = getTreeInfo(tree.left);
	const rightTreeData = getTreeInfo(tree.right);
	
	const longestPathThroughRoot = leftTreeData.height + rightTreeData.height;
	const maxDiameterSoFar = Math.max(leftTreeData.diameter, rightTreeData.diameter);
	const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
	const currentHeight = 1 + Math.max(leftTreeData.height, rightTreeData.height);
	
	return new TreeInfo(currentDiameter, currentHeight);
}

class TreeInfo {
	constructor(diameter, height) {
		this.diameter = diameter;
		this.height = height;
	}
}