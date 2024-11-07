class CoffeeMachine {
  private isPoweredOn: boolean = false;

  // Public method to turn on the machine
  powerOn() {
    this.isPoweredOn = true;
    console.log("Coffee machine is powered on.");
  }

  // Public method to make coffee
  makeCoffee() {
    if (this.isPoweredOn) {
      console.log("Brewing coffee... ☕");
    } else {
      console.log("Please power on the machine first.");
    }
  }

  // Public method to turn off the machine
  powerOff() {
    this.isPoweredOn = false;
    console.log("Coffee machine is powered off.");
  }
}

// Using the CoffeeMachine class
const myCoffeeMachine = new CoffeeMachine();
myCoffeeMachine.makeCoffee(); // Please power on the machine first.
myCoffeeMachine.powerOn(); // Coffee machine is powered on.
myCoffeeMachine.makeCoffee(); // Brewing coffee... ☕
