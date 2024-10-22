{
  // utility types
  // pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type NameAge = Pick<Person, "name" | "age">;
  // omit
  type ContactInfo = Omit<Person, "name" | "age">;
  // Required
  type PersonRequired = Required<Person>;
  // Partial
  type PersonPartial = Partial<Person>;
  // Readonly
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "Mr. XY",
    age: 200,
    contactNo: "000",
  };
  // Record
  //   type MyOBj = {
  //     a: string;
  //     b: string;
  //   };
  type MyOBj = Record<string, string>;
  const obj1: MyOBj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };
}
