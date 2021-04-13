class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(d) space
function validateBst(tree) {
	return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
	if (!tree) return true;
	if (tree.value < minValue || tree.value >= maxValue) return false;
	
	const validateLeft = validateBstHelper(tree.left, minValue, tree.value);
	const validateRight = validateBstHelper(tree.right, tree.value, maxValue);
	
	return validateLeft && validateRight;
} 