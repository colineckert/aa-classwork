/*
 * @lc app=leetcode id=1396 lang=javascript
 *
 * [1396] Design Underground System
 */

// @lc code=start

class UndergroundSystem {
  constructor() {
    this.customers = new Map();
    this.averages = new Map();
  }

  checkIn(id, stationName, t) {
    this.customers.set(id, { stationName, t });
  };

  checkOut(id, stationName, t) {
    const checkIn = this.customers.get(id);
    
    if (!checkIn) throw new Error(`Customer ${id} did not check in`);
  
    const key = checkIn.stationName + ',' + stationName;
    const { total, count } = this.averages.get(key) ?? { total: 0, count: 0 };
    this.averages.set(key, { total: total + (t - checkIn.t), count: count + 1 });
    
    this.customers.delete(id);
  };
  
  getAverageTime(startStation, endStation) {
    const key = startStation + ',' + endStation;
    const { total, count } = this.averages.get(key) ?? { total: 0, count: 0 };
    return total / count;
  };
};



// @lc code=end
