// Reference type --> Object
const user: {
  company: "PH"; //type --> literal type
  readonly firstName: string; //read-only property not to change property
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "PH",
  firstName: "Z",
  // middleName: "N",
  lastName: "Z",
  isMarried: false,
};

// user.firstName = "N"; --> read-only property not to change property
