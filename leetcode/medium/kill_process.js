// O(n) time | O(n) space
var killProcess = function(pid, ppid, kill) {
    const parents = {};
    
    for (let i = 0; i < ppid.length; i++) {
        let parent = ppid[i];
        let child = pid[i];
        
        if (!parents[parent]) parents[parent] = [];
        parents[parent].push(child);
    }
    
    const killed = [];
    dfs(kill);
    
    function dfs(node) {
        killed.push(node);
        if (parents[node]) {
            for (const child of parents[node]) {
                dfs(child);
            }
        }
    }
    
    return killed;
};