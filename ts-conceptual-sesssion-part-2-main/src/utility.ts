{
  // Partial Partial<Type>
  type UserProfile = {
    name: string;
    age?: number;
    email?: string;
  };

  function updateUserProfile(user: Partial<UserProfile>) {
    console.log("Updating user profile with:", user);
  }

  // Usage
  updateUserProfile({ name: "Alice" }); // Only updating the name
  updateUserProfile({ age: 30, email: "alice@example.com" }); // Updating age and email

  //   Required
  function createUserProfile(user: Required<UserProfile>) {
    console.log("User profile created:", user);
  }

  // Usage
  createUserProfile({
    name: "Alice",
    age: 30,
    email: "alice@example.com",
  }); // Works
  // createUserProfile({ name: "Alice" }); // Error: age and email are missing

  function displayUserProfile(user: Readonly<UserProfile>) {
    console.log("User Profile:", user);
    // user.age = 31; // Error: Cannot assign to 'age' because it is a read-only property
  }

  // Usage
  const user: Readonly<UserProfile> = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
  };
  displayUserProfile(user);

  //   Record
  type StudentScores = Record<string, number>;

  const scores: StudentScores = {
    Alice: 90,
    Bob: 85,
    Charlie: 88,
  };

  console.log(scores);
}
