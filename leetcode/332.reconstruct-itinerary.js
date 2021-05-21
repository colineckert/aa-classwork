/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const trips = {};
  const ans = [];

  for (const pair of tickets) {
    const [depart, arrive] = pair;
    trips[depart] ? trips[depart].push(arrive) : trips[depart] = [arrive];
  }

  for (let loc in trips) {
    trips[loc].sort();
  }

  const dfs = (node) => {
    let des = trips[node];
    while (des && des.length) {
      dfs(des.shift());
    }
    ans.push(node);
  }

  dfs('JFK');
  return ans.reverse();
};
// @lc code=end

