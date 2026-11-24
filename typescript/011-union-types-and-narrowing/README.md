# Union types and narrowing

A union allows a value to be one of several types. Check which type or value you have before using it in a type-specific way.

Example:
```ts
function printId(id: number | string): void {
  if (typeof id === "number") {
    console.log(id.toFixed(0));
  } else {
    console.log(id.toUpperCase());
  }
}
```

## Problems to solve

1. Create a function that accepts a `string | number` and returns its string representation.

2. Create a `Status` type with `pending`, `approved`, and `rejected`; write a function that returns a message for each status.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
