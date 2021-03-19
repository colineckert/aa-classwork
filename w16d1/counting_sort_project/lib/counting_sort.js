function countingSort(arr, max) {
    const result = [];
    const counters = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]]++;
    }

    for (let k = 0; k < counters.length; k++) {
        while (counters[k] > 0) {
            result.push(k);
            counters[k]--;
        }
    }

    return result;
}


module.exports = {
    countingSort
};