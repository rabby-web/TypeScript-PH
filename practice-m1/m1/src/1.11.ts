{
  // ternary operator || optional chaining || nullish coalescing operator
  const age: number = 15;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator
  const isAuthenticate = null; // undefined
  const result1 = isAuthenticate ?? "guest";
  const result2 = isAuthenticate ? isAuthenticate : "guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      pAddress: string;
      prAddress?: string;
    };
  };
  const user: User = {
    name: "Persian",
    address: {
      city: "Mr. X",
      road: "string",
      pAddress: "string",
    },
  };
  const permanentAddress = user?.address?.prAddress ?? "Not found address";
  console.log({ permanentAddress });

  //
}
