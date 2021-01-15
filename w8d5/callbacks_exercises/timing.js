/* Copied from https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript/11187738#11187738
 */
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let date = new Date();
    this.seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours =   date.getHours();

    this.printTime();

    setInterval(this._tick.bind(this), 1000); 
    }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours.pad()}:${this.minutes.pad()}:${this.seconds.pad()}`);
  }
  
  _incrementSeconds() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60)  {
      this.minutes = 0;
      this._incrementHours;
    }
  }

  _incrementHours() {
    this.hours +=   1;
    this.hours %=  24;
  }

  _tick() {

    // 1. Increment the time by one second.
    // 2. Call printTime.

    // let seconds = seconds + 1
    // let minutes = minutes + Math.floor(seconds / 60)
    // seconds = seconds % 60
    // let hours = hours + Math.floor(minutes / 60)
    // minutes = minutes % 60
    this._incrementSeconds();
    this.printTime();
  }
}

const clock = new Clock();