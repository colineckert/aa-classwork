/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class RandomizedSet {
  constructor() {
    // store val => idx in array
    this.map = new Map();
    // store vals 
    this.arr = [];
  }
  
  insert(val) {
    if (this.map.has(val)) {
      return false;
    } else {
      this.map.set(val, this.arr.length);
      this.arr.push(val);
      return true;
    }
  };

  remove(val) {
    if (!this.map.has(val)) return false;

    const valIdx = this.map.get(val);
    const lastIdx = this.arr.length - 1;
    const lastNum = this.arr[lastIdx];

    // swap val to remove with last val
    [this.arr[valIdx], this.arr[lastIdx]] = [this.arr[lastIdx], this.arr[valIdx]];
    // pop val to remove from array
    this.arr.pop();
    // update the last val in map with removed val's previous idx
    this.map.set(lastNum, valIdx);
    // delete val to remove from map
    this.map.delete(val);
    return true;
  };

  getRandom() {
    const randIdx = Math.floor(Math.random() * this.arr.length);
    return this.arr[randIdx];
  };
};

// @lc code=end

