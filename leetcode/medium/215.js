/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Simple solution with JS built-in sort()
// sorting is O(nlog(n))
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

// Efficient solution using a max heap
class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;

        let parentIdx = this.getParent(idx);

        if (this.array[parentIdx] < this.array[idx]) {
            [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ]
            this.siftUp(parentIdx);
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        let arr = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = arr[leftIdx];
        let rightVal = arr[rightIdx];

        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;

        if (arr[idx] > leftVal && arr[idx] > rightVal) return;

        let swapIdx = leftVal > rightVal ? leftIdx : rightIdx;

        [ arr[idx], arr[swapIdx] ] = [ arr[swapIdx], arr[idx] ];

        this.siftDown(swapIdx);
    }
    
    deleteMax() {
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length === 1) return null;

        let max = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return max;
    }
}

// converting to a heap is O(n)
var findKthLargest = function(nums, k) {
    let heap = new MaxHeap();
    nums.forEach(num => heap.insert(num));
    for (let i = 1; i < k; i++) {
        heap.deleteMax();
    }
    return heap.deleteMax();
};