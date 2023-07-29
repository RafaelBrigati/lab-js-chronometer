class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilliseconds = 0; 
    this.millisecondsIntervalId = 0 
  }

  start(printTimeCallback, printMilliseconds) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (printTimeCallback) callback();
    }, 1000);

    
    this.millisecondsIntervalId = setInterval( () => {
      if (this.currentMilliseconds === 99) {
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds += 1;
      if (printMilliseconds) printMilliseconds();
    }, 10);
  }

  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    console.log(currentTimeMin)
    return currentTimeMin;
  }

  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;

  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds); 

    return `${minutes}:${seconds}:${milliseconds}`;
  }
}