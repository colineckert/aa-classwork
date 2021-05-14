var minTaps = function(n, ranges) {
    let dp = Array(n + 1).fill(n + 2);
    dp[0] = 0;
    
    for (let i = 0; i <= n; i++) {  
        let start = Math.max(i - ranges[i], 0);
        let end = Math.min(i + ranges[i], n);
        let val = dp[Math.max(0, i - ranges[i])] + 1;
        
        for (let j = start; j <= end; j++){
            dp[j] = Math.min(dp[j], val);
        }
    }
    
    return dp[n] < n + 2 ? dp[n] : -1;
};