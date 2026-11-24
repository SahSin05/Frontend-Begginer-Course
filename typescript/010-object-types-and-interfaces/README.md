# Object types and interfaces

An interface describes the shape of an object. It helps keep data consistent across functions and components.

Example:
```ts
interface Student {
  id: number;
  name: string;
  email?: string;
}
const student: Student = { id: 1, name: "Mina" };
```

## Problems to solve

1. Create an `Employee` interface with `id`, `name`, and `department`, then create one valid employee.

2. Write a function that accepts a `Product` interface and returns a formatted product name and price.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
