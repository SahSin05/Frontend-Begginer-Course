# Basic error handling

Use `try/catch` when an operation may fail. Give users a useful fallback rather than allowing an avoidable crash.

Example:
```ts
try {
  const parsed = JSON.parse('{"active": true}');
  console.log(parsed.active);
} catch {
  console.log("Could not read the data");
}
```

## Problems to solve

1. Parse a valid JSON string inside `try/catch` and print one property.

2. Attempt to parse an invalid JSON string and display a friendly error message.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
