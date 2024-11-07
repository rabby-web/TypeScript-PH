class Smartphone {
  private batteryLevel: number;

  constructor(initialBattery: number) {
    this.batteryLevel = initialBattery;
  }

  // Method to charge the phone
  charge(amount: number) {
    this.batteryLevel = Math.min(100, this.batteryLevel + amount);
    console.log(`Charging... Battery at ${this.batteryLevel}%`);
  }

  // Method to use the phone, which decreases battery level
  use(hours: number) {
    const batteryDrain = hours * 10;
    if (batteryDrain <= this.batteryLevel) {
      this.batteryLevel -= batteryDrain;
      console.log(`Using phone... Battery at ${this.batteryLevel}%`);
    } else {
      console.log("Battery too low, please charge!");
    }
  }

  // Method to check the battery level
  getBatteryLevel() {
    return this.batteryLevel;
  }
}

// Using the Smartphone class
const myPhone = new Smartphone(50);
myPhone.charge(30); // Charging... Battery at 80%
myPhone.use(2); // Using phone... Battery at 60%
// console.log(myPhone.batteryLevel); // Error: Property 'batteryLevel' is private and only accessible within class 'Smartphone'.
