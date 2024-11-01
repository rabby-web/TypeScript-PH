{
  // generic type

  type GenericArray<T> = Array<T>;
  const rollNumbers: GenericArray<Number> = [3, 4, 5, 6, 7];

  // const rollNumber: number[] = [3, 4, 5, 6, 7];
  const rollNumber: GenericArray<Number> = [3, 4, 5, 6, 7];

  // const mentors: string[] = ["Mr. Z", "Mr. Y"];
  const mentors: GenericArray<string> = ["Mr. Z", "Mr. Y"];

  // const boolArray: boolean[] = [true];
  const boolArray: GenericArray<boolean> = [true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Mr. XX",
      age: 100,
    },
    {
      name: "Mr. YY",
      age: 203,
    },
  ];

  const add = (x: number, y: number) => x + y;

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const person: GenericTuple<string, string> = ["Mr. X", "Mr.U"];
  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "person", email: "a@gmail" },
  ];
  //
}
