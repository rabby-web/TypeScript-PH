{
  // type alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };
  const student1: Student = {
    name: "Y",
    age: 23,
    gender: "Male",
    contactNo: "01700000000",
    address: "ctg",
  };
  const student2: Student = {
    name: "V",
    age: 23,
    gender: "Male",
    address: "ctg",
  };

  type UserName = string;
  const userName: UserName = "ZNR";

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
