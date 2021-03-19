function binarySearch(array, target) {
    if (!array.length) return false;

    let midIdx = Math.floor(array.length / 2);
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
        return binarySearch(left, target);
    } else if (target > array[midIdx]) {
        return binarySearch(right, target) 
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {
    if (!array.length) return -1;

    let midIdx = Math.floor(array.length / 2);
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
        return binarySearchIndex(left, target);
    } else if (target > array[midIdx]) {
        let searchRight = binarySearchIndex(right, target);
        return searchRight === -1 ? -1 : searchRight + midIdx + 1;
    } else {
        return midIdx;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};