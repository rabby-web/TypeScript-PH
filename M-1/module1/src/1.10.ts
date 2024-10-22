{
  // Union and Intersection Types

  // Union
  type FDev = "fakeDev" | "jrDev";
  const newDev: FDev = "jrDev";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };
  const user1: User = {
    name: "persian",
    gender: "male",
    bloodGroup: "O+",
  };

  //   intersection
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };
  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FrontendDeveloper & BackendDeveloper = {
    skills: ["HTML"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
