// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time | O(1) space - where n is the number of nodes in the Linked List
function reverseLinkedList(head) {
	let prevNode = null;
	let currNode = head;
	while (currNode !== null) {
		const nextNode = currNode.next;
		currNode.next = prevNode;
		prevNode = currNode;
		currNode = nextNode;
	}
	return prevNode;
}