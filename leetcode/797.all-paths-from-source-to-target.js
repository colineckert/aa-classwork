/*
 * @lc app=leetcode id=797 lang=javascript
 *
 * [797] All Paths From Source to Target
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const N = graph.length, result = [];
    
    function callDFS(node, arr) {
        if (node === N - 1) {
            result.push([...arr, node])
            return;
        }
        
        for (let next of graph[node]) {
            callDFS(next, [...arr, node]);
        }
    }
    
    callDFS(0, []);
    return result;
};
// @lc code=end

