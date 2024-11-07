// Base type for a To-Do item
type ToDo = {
  task: string;
  completed: boolean;
  dueDate: string;
};

// Mapped type that makes each property optional
type OptionalToDo = {
  [P in keyof ToDo]?: ToDo[P];
};

const optionalTask: OptionalToDo = {
  task: "Learn TypeScript", // completed and dueDate are optional
};

// Mapped type that makes each property readonly
type ReadOnlyToDo = {
  readonly [P in keyof ToDo]: ToDo[P];
};

const readOnlyTask: ReadOnlyToDo = {
  task: "Complete homework",
  completed: false,
  dueDate: "2024-12-01",
};

// readOnlyTask.task = "New task"; // Error: Cannot assign to 'task' because it is a read-only property.
