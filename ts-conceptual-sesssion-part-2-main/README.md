## Summary of Access Modifiers

| Modifier  | Accessible Within Class | Accessible in Subclasses | Accessible Outside Class |
| --------- | ----------------------- | ------------------------ | ------------------------ |
| public    | Yes                     | Yes                      | Yes                      |
| private   | Yes                     | No                       | No                       |
| protected | Yes                     | Yes                      | No                       |

### Key Takeaways

- Use **public** for members that need to be accessible by all parts of the application.
- Use **private** for members that should only be used internally within the class.
- Use **protected** for members that should be accessible in the class and its subclasses but not from outside.

Access modifiers help encapsulate class data and methods, ensuring that your code is more modular, maintainable, and less prone to errors.

<!-- ts second concept session -->
