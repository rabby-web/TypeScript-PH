{
  // mapped types
  const arrOfNumbers: number[] = [1, 2, 3];
  const arrOfString: string[] = ["1", "2", "3"];
  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };
  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  // keyof AreaNumber => "height"| "width"
  //   type AreaString = {
  //     [key in keyof AreaNumber]: string;
  //   };
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };
  const area1: AreaString<{ height: string; width: number }> = {
    height: "2342",
    width: 234,
  };

  //
}
