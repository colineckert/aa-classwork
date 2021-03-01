// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins, memo = {}) {
    let key = amount + '-' + coins;
    if (key in memo) return memo[key];
    if (amount === 0) return 1;
    
    let count = 0;

    let currentCoin = coins[coins.length - 1];
    for (let qty = 0; qty * currentCoin <= amount; qty++) {
        count += change(amount - (qty * currentCoin), coins.slice(0, -1), memo);
    }

    memo[key] = count;
    return memo[key];
};