class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let date = new Date();
    this.seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours = date.getHours();

    this.printTime();

    
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.

    // let seconds = seconds + 1
    // let minutes = minutes + Math.floor(seconds / 60)
    // seconds = seconds % 60
    // let hours = hours + Math.floor(minutes / 60)
    // minutes = minutes % 60
  }
}

const clock = new Clock();