// normal function & arrow function

function multiply(num1: number, num2: number): number {
    const result: number = num1 * num2;
    return result;
}

// const multiplyResult = multiply(4, 3);
// console.log(multiplyResult)

const sumOfTwo = (a: number, b: number): number => {
    return a + b;
}

const result = sumOfTwo(4, 3);
console.log(result)