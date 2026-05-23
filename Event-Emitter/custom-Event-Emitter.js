/* Creating Custom Event Emitter */

const EventEmitter = require("events");
class MyCustomEvent extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello";
  }

  greet(name) {
    this.emit("greeting", `${this.greeting}, ${name}`);
  }
}

const myCustomEvent = new MyCustomEvent();
myCustomEvent.on("greeting", (input) => {
  console.log("Greeting  ", input);
});
myCustomEvent.greet("John Deo");
