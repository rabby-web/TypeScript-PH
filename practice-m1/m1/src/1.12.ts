{
  // nullable type || unknown types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is no searching");
    }
  };
  searchName(null);

  // unknown
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed} ms^-1`);
    }
    if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed} ms^-1`);
    }
  };
  getSpeedInMeterPerSecond(55);
  getSpeedInMeterPerSecond("300 ms^-1");

  //
}
