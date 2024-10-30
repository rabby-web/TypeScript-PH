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

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };
  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
