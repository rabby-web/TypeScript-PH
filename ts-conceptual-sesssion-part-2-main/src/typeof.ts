// Define a variable with a specific value
const favoriteMovie = "Inception";

// Use `typeof` to create a type from the variable
type MovieType = typeof favoriteMovie; // string

// Now we can reuse MovieType to declare other variables
// let anotherFavoriteMovie: MovieType = "Interstellar"; //it must be the exact match

// Using `typeof` for objects
const movie = {
  title: "The Matrix",
  director: "Wachowski Sisters",
};

// Creating a type from an existing object
type MovieDetails = typeof movie;
const otherMovie: MovieDetails = {
  title: "Inception",
  director: "Christopher Nolan",
};

type DetailedLog = {
  message: string;
  level: "info" | "warn" | "error";
};

function logMessage(input: string | number | DetailedLog) {
  if (typeof input === "string") {
    console.log("Simple log message:", input);
  } else if (typeof input === "number") {
    console.log("Error code:", input);
  } else if ("message" in input && "level" in input) {
    console.log(`[${input.level.toUpperCase()}]`, input.message);
  }
}

// Usage
logMessage("System initialized"); // Simple log message: System initialized
logMessage(404); // Error code: 404
logMessage({ message: "Disk space low", level: "warn" }); // [WARN] Disk space low
logMessage({ message: "Fatal error occurred", level: "error" }); // [ERROR] Fatal error occurred
