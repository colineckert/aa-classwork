// O(K + n^2) time | O(n) space
function removeKdigits(num, k) {
	if (k >= num.length) return '0';

    const stack = [];
    const arr = num.split('');
    
    while (k > 0 && arr.length) {
        const curr = stack[stack.length - 1];
        const nextVal = arr[0];
        
        if (!stack.length || curr <= nextVal) {
            stack.push(arr.shift());
        } else {
            stack.pop();
            k--;
        }
    }
    
    const result = stack.concat(arr);
    
    while (k > 0) {
        result.pop();
        k--;
    }
    
    while (result[0] === '0') {
        result.shift();
    }
    
    if (!result.length) return '0';
    
    return result.join('');
}
