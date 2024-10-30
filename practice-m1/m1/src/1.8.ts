{
  // obj destructuring
  const user = {
    id: 123,
    name: {
      firstName: "Z",
      middleName: "N",
      lastName: "R",
    },
    contactNo: "01700000000",
    address: "BD",
  };

  const {
    contactNo,
    name: { middleName },
  } = user;

  // arr destructuring
  const myF = ["A", "B", "C", "D", "E", "F"];
  const [, , myBestF, ...rest] = myF;
}
