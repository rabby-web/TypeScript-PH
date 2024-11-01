{
  // type assertion
  let anything: any;
  anything = "next level web development";
  anything as string;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return convertedValue;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  //   const result1 = kgToGm(1520) as number;
  const result1 = kgToGm("1570") as string;
  console.log(result1);

  type CustomError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
  //
}
