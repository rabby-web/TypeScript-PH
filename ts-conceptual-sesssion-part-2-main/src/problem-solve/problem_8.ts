// Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

{
  class Car {
    constructor(
      public brand: string,
      public model: string,
      public year: number
    ) {}

    public displayInfo(): string {
      return `Your car model is: ${this.year} ${this.brand} ${this.model}`;
    }
  }

  // Sample Input
  const myCar = new Car("Toyota", "Corolla Cross", 2020);
  console.log(myCar.displayInfo()); // Output: "Your car model is: 2020 Toyota Corolla"
}
