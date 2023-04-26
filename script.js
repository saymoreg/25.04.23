const trafficLight = {
  red: document.getElementById("red"),
  yellow: document.getElementById("yellow"),
  green: document.getElementById("green"),
  intervalId: null,
  currentColor: null,

  switchToRed() {
    this.red.classList.add("red");
    this.yellow.classList.remove("yellow");
    this.green.classList.remove("green");
    this.currentColor = "red";
  },

  switchToYellow() {
    this.red.classList.remove("red");
    this.yellow.classList.add("yellow");
    this.green.classList.remove("green");
    this.currentColor = "yellow";
  },

  switchToGreen() {
    this.red.classList.remove("red");
    this.yellow.classList.remove("yellow");
    this.green.classList.add("green");
    this.currentColor = "green";
  },

  start() {
    this.intervalId = setInterval(() => {
      switch (this.currentColor) {
        case "red":
          this.switchToYellow();
          break;
        case "yellow":
          this.switchToGreen();
          break;
        case "green":
          this.switchToRed();
          break;
        default:
          this.switchToRed();
      }
    }, 3000);
  },
};

trafficLight.start();
