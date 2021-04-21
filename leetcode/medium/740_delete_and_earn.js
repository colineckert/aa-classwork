var deleteAndEarn = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    const max = Math.max(...nums);
    const table = new Array(max + 1).fill(0);
    
    for (let i = 0; i < nums.length; i++) {
        if (table[nums[i]]) {
            table[nums[i]] += nums[i];
        } else {
            table[nums[i]] = nums[i];
        }
    }
    
    let twoPrev = table[0];
    let prev = table[1];
    for (let i = 2; i < table.length; i++) {
        const temp = prev;
        prev = Math.max(table[i] + twoPrev, prev);
        twoPrev = temp;
    }
    
    return prev;
};