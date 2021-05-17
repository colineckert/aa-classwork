var flatten = function(head) {
    if (!head) return; 
    const stack = [ head ];
    let prev = null;
    
    while (stack.length) {
        let current = stack.pop();
        
        if (!prev) {
            prev = current;
        } else {
            prev.next = current;
            current.prev = prev;
            prev = current;
        }
        
        if (current.next) stack.push(current.next);
        if (current.child) {
            stack.push(current.child);
            current.child = null;
        }
    }
    
    return head;
};