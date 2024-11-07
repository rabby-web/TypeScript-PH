// Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.
{
  function repeatString(str: string, num: number): string {
    return str.repeat(num);
  }

  // Sample Input
  console.log(repeatString("Hello!", 3)); // Output: "Hello!Hello!Hello!"
}
