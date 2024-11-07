// Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

{
  function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }

  // Sample Input 1
  console.log(reverseArray(["apple", "banana", "cherry"])); // Output: ["cherry", "banana", "apple"]

  // Sample Input 2
  console.log(reverseArray([10, 20, 30])); // Output: [30, 20, 10]
}
