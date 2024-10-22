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
    name: "Mr. Z",
  });

  // tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple("Bangladesh", 222);
  const resGeneric10 = createArrayWithTuple<string, string>("USA", "UK");

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({ name: "Mr X", email: "x@gmail.com" });

  //
}
