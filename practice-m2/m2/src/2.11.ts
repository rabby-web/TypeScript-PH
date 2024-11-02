{
  // utility types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  // Pick
  type NameAge = Pick<Person, "name" | "age">;

  // Omit
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
    contactNo: "0171234234",
  };
  // person1.name = "Mr. DC";

  //
}
