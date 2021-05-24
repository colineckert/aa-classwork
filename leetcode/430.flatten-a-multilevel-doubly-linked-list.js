/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) return;

  const stack = [head];
  let prev = null;

  while (stack.length) {
    let currNode = stack.pop();

    if (!prev) {
      prev = currNode;
    } else {
      prev.next = currNode;
      currNode.prev = prev;
      prev = currNode;
    }

    if (currNode.next) stack.push(currNode.next);
    if (currNode.child) {
      stack.push(currNode.child);
      currNode.child = null;
    }
  }

  return head;
};
// @lc code=end

