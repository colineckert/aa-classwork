// optimal: O(n) time | O(n) space
function minHeightBst(array) {
	return constructMinHeightBst(array, 0, array.length - 1);
}

function constructMinHeightBst(array, startIdx, endIdx) {
	if (endIdx < startIdx) return null;
	
  let midIdx = Math.floor((startIdx + endIdx) / 2);
	let bst = new BST(array[midIdx]);
	
	bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
	bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
	
	return bst;
}


// O(n) time | O(n) space
// insartion is now constant time
function minHeightBst(array) {
	return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {
	if (endIdx < startIdx) return;
	
  let midIdx = Math.floor((startIdx + endIdx) / 2);
	let newBstNode = new BST(array[midIdx]);
	
	if (!bst) {
		bst = newBstNode;
	} else {
		if (array[midIdx] < bst.value) {
			bst.left = newBstNode;
			bst = bst.left;
		} else {
			bst.right = newBstNode;
			bst = bst.right;
		}
	}
	
	constructMinHeightBst(array, bst, startIdx, midIdx - 1);
	constructMinHeightBst(array, bst, midIdx + 1, endIdx);
	
	return bst;
}


// O(nlog(n)) time | O(n) space
function minHeightBst(array) {
	return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {
	if (endIdx < startIdx) return;
	
  let midIdx = Math.floor((startIdx + endIdx) / 2);
	if (!bst) {
		bst = new BST(array[midIdx]);
	} else {
		bst.insert(array[midIdx]);
	}
	
	constructMinHeightBst(array, bst, startIdx, midIdx - 1);
	constructMinHeightBst(array, bst, midIdx + 1, endIdx);
	
	return bst;
}

// #insert() provided in all three solutions; only used in one above
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
	
	// O(log(n)) time to insert
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}