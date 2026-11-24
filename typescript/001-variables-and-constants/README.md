# Variables and constants

Use `const` by default. Use `let` when a value must be reassigned. Avoid `var` in modern code.

Example:
```ts
const appName: string = "Study Tracker";
let completedLessons: number = 0;
completedLessons = completedLessons + 1;
console.log(appName, completedLessons);
```

## Problems to solve

1. Declare constants for a student's name and course name, then print them.

2. Create a `let` variable for a shopping cart count. Add two items and print the final count.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
