var minRemoveToMakeValid = function(s) {
    str = s.split('');
    const stack = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(i);
        } else if (str[i] === ')') {
            if (stack.length) {
                stack.pop();
            } else {
                str[i] = "";
            }
        }
    }
    
    for (const idx of stack) {
        str[idx] = "";
    }
    
    return str.join('');
};