{
  // destructuring
  const user = {
    id: 23,
    name: {
      firstName: "Rabby",
      middleName: "Naeem",
      lastName: "Zulkar",
    },
    contactNo: "00000",
    address: "bogura",
  };

  const {
    contactNo,
    name: { middleName },
  } = user;

  //  array destructuring
  const myFriends = ["chandler", "joy", "ross", "a", "b", "c"];
  const [, , bestF,...rest] = myFriends;
}
