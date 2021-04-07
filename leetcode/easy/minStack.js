class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }
    
    push(val) {
        if (!this.min.length) {
            this.min.push(val);
        } else {
            let minValue = Math.min(val, this.getMin());
            this.min.push(minValue);
        }
        this.stack.push(val);
    }
    
    pop() {
        this.min.pop();
        return this.stack.pop();
    }
    
    top() {
        return this.stack[this.stack.length - 1];
    }
    
    getMin() {
        return this.min[this.min.length - 1];
    }
}