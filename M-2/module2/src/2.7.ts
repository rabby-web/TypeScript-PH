{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "X",
    age: 22,
    address: "ctg",
  };
  const car = {
    model: "Toyota",
    year: 2020,
  };
  const result1 = getPropertyValue(user, "name");
}
