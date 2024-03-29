function breadthFirstArray(root) {
    const queue = [root];
    const visited = [];

    while (queue.length) {
        let node = queue.shift();
        visited.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return visited;
}

module.exports = {
    breadthFirstArray
};