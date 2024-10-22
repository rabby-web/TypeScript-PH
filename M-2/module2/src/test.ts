{
  // type assertion
  let anything: any;
  anything = "Next Level Wev Development";
  anything = 200;
  //   (anything as number)

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return convertedValue;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGm(1000) as number;
  console.log(result1);
  const result2 = kgToGm("1000") as string;
  console.log(result2);
}
