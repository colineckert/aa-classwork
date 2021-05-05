// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(max(n, m)) time | O(max(n, m)) space - where n is the length of the 
// furst Linked List and m is the length of the second Linked List
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const newLinkedListHeadPointer = new LinkedList(0);
	let currNode = newLinkedListHeadPointer;
	let carry = 0;
	
	let nodeOne = linkedListOne;
	let nodeTwo = linkedListTwo;
	
	while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
		const valueOne = nodeOne !== null ? nodeOne.value : 0;
		const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
		const valueSum = valueOne + valueTwo + carry;
		
		const newValue = valueSum % 10;
		const newNode = new LinkedList(newValue);
		currNode.next = newNode;
		currNode = newNode;
		
		carry = Math.floor(valueSum / 10);
		nodeOne = nodeOne !== null ? nodeOne.next : null;
		nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
	}
	
	return newLinkedListHeadPointer.next;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
