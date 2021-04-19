var smallestDivisor = function(nums, threshold) {
    let left = 0;
    let right = Math.max(...nums);
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        const sum = nums.reduce((acc, num) => acc + Math.ceil(num / mid), 0);
        
        if (threshold < sum) left = mid + 1;
        else right = mid;
    }
    
    return left;
};