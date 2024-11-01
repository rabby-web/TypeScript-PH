{
  // interface
  type User1 = {
    name: string;
    age: number;
  };
  interface User2 {
    name: string;
    age: number;
  }

  // type alias
  type UserWithRole = User1 & { role: string };
  // interface
  interface UserWithRole2 extends User2 {
    role: string;
  }
  const user: UserWithRole2 = {
    name: "Mr. X",
    age: 32,
    role: "student",
  };

  // array object function with interface and type
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber: Roll1 = [1, 2, 3];

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add1 = (num1, num2) => num1 + num2;

  //
}
