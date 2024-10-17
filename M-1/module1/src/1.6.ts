// Function
// 1. Normal Function 2. Arrow Function

// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(4, 5);

// arrow function
const addArrow = (num3: number, num4: number): number => num3 + num4;

// object + function => method
const poorUser = {
  name: "Rock",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance ${this.balance + balance}`;
  },
};
