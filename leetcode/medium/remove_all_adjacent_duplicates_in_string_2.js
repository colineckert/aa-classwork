// O(n) time | O(n) space
var removeDuplicates = function(s, k) {
    const stack = [];
    
    for (const char of s) {
        if (stack.length && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1] += 1;
            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }
    
    let result = '';
    for (const [char, count] of stack) {
        result += char.repeat(count);
    }
    
    return result;
};