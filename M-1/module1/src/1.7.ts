{
  // spread and rest operator
  // destructuring

  // spread operator-------
  const friend1 = ["A", "B", "C"];
  const friend2 = ["D", "E", "F"];
  friend1.push(...friend2);

  const mentor1 = {
    typescript: "Mez",
    redux: "Mir",
    next: "Ton",
  };
  const mentor2 = {
    typescript: "Mez",
    redux: "Mir",
    next: "Ton",
  };
  const mentorList = {
    ...mentor1,
    ...mentor2,
  };
}
