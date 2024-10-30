{
  // spread operator | rest operator and destructuring

  // spread operator
  const friend1: string[] = ["a", "b", "c", "d"];
  const friend2: string[] = ["e", "f", "g", "h"];
  friend1.push(...friend2);

  const mentors1 = {
    noSQL: "Mizba",
    frontend: "Mir",
  };
  const mentors2 = {
    cloud: "JM",
  };
  const mentorList = {
    ...mentors1,
    ...mentors2,
  };
  // rest operator
  //   const greetFriends = (f1: string, f2: string, f3: string) => {
  //     console.log(`Hi ${f1} ${f2} ${f3}`);
  //   };
  const greetFriends = (...f1: string[]) => {
    f1.forEach((f: string) => console.log(`Hi ${f}`));
  };
  greetFriends("a", "b", "c");

  //
}
