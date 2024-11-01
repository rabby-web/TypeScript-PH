{
  // function with generic
  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. XYZ",
  });

  //   function with tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const res10 = createArrayWithTuple<string, number>("Bangladesh", 2343);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
    };
  };
  const student1 = addCourseToStudent({ name: "M. X", email: "a@gmail.com", devType:"Developer" });
  const student2 = addCourseToStudent({ name: "M. M", email: "m@gmail.com", devType:"Developer" });

  //
}
