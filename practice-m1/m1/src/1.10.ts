{
  // union types
  type FrontendDev = "jrDev" | "srDev";
  type FullStackDev = "jrDev" | "srDev";

  type Developer = FrontendDev | FrontendDev;
  const newDev: FrontendDev = "jrDev";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };
  const user1: User = {
    name: "X",
    gender: "male",
    bloodGroup: "O+",
  };
  //   intersection type
}
