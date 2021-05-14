// O(1) time for all | O(P + S^2) space - where S is the number of stations on the network, 
// and P is the number of passengers making a journey concurrently during peak time.
class UndergroundSystem {
    // class constructor
    constructor() {
        this.checkins = {};
        this.trips = {};
    }

    checkIn(id, stationName, t) {
        // log checkin into checkins
        this.checkins[id] = { time: t, stationName: stationName };
    };


    checkOut(id, stationName, t) {
        // create route string
        const route = this.checkins[id].stationName + "," + stationName;
        // check if this route is not in trips obj yet
        if (!(route in this.trips)) this.trips[route] = [];
        // push elapsed time to this route in trips
        this.trips[route].push(t - this.checkins[id].time);
    };


    getAverageTime(startStation, endStation) {
        // create route key and check for it in trips
        const route = startStation + "," + endStation;
        if (route in this.trips) {
            const durations = this.trips[route];
            const totalTime = durations.reduce((acc, num) => acc + num);
            // return avg trip time
            return totalTime / durations.length;
        }
    };
}