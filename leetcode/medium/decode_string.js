var decodeString = function(s) {
    let repeatStack = [];
    let numStack = [];
    let num = '';
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            num += s[i];
        } else if (s[i] === "[") {
            numStack.push(num);
            num = '';
            repeatStack.push(result);
            result = '';
        } else if (s[i] === "]") {
            result = repeatStack.pop() + result.repeat(numStack.pop());
        } else {
            result += s[i];
        }
    }
    return result;
};