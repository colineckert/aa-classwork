function breadthFirstArray(root) {
    const queue = [root];
    const visited = [];

    while (queue.length) {
        let node = queue.pop();
        visited.push(node.val);
        if (node.left) queue.unshift(node.left);
        if (node.right) queue.unshift(node.right);
    }
    return arr;
}

module.exports = {
    breadthFirstArray
};