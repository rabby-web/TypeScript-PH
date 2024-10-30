// function => 1. normal function 2. arrow function

function addNormalFunc(num1: number, num2: number): number {
  return num1 + num2;
}
addNormalFunc(2, 2);
const addArrowFunc = (num1: number, num2: number): number => num1 + num2;

// Object in function = method
const poorUser = {
  name: "Mr.X",
  balance: 0,
  addBalance(balance: number) {
    return this.balance + balance;
  },
};

const arr: number[] = [1, 2, 3, 4];

const newArr: number[] = arr.map((elem: number): number => elem * elem);
