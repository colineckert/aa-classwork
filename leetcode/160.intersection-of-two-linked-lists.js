/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const list1Length = getListLength(headA);
  const list2Length = getListLength(headB);

  let diff = Math.abs(list1Length - list2Length);
  let long = list1Length >= list2Length ? headA : headB;
  let short = list1Length >= list2Length ? headB : headA;

  while (long && short) {
    if (diff > 0) {
      long = long.next;
      diff--;
      continue;
    }

    if (long === short) return long;

    long = long.next;
    short = short.next;
  }

  return null;
};

function getListLength(node) {
  if (!node.next) {
    return 1;
  } else {
    return getListLength(node.next) + 1;
  }
}
// @lc code=end

