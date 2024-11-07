// Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

{
  function findLargestNumber(numbers: number[]): number {
    return Math.max(...numbers);
  }

  // Sample Input
  console.log(findLargestNumber([10, 5, 8, 20, 3])); // Output: 20
}
