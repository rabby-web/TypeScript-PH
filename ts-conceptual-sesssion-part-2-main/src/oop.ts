// Base class for any vehicle
class Vehicle {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} is starting...`);
  }
}

// `Car` class that extends `Vehicle`
class Car extends Vehicle {
  constructor(brand: string) {
    super(brand);
  }

  start() {
    console.log(`${this.brand} car is starting with ignition...`);
  }
}

// `Bicycle` class that also extends `Vehicle`
class Bicycle extends Vehicle {
  start() {
    console.log(`${this.brand} bicycle is ready to pedal.`);
  }
}

// Create instances
const myCar = new Car("Toyota");
myCar.start(); // Toyota car is starting with ignition...

const myBike = new Bicycle("Sansy");
myBike.start(); // Sansy bicycle is ready to pedal.
