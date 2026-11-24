# Async code and promises

Network requests take time. A `Promise` represents a value that may become available later. Use `async`/`await` to write asynchronous code clearly.

Example:
```ts
async function loadMessage(): Promise<string> {
  return "Data loaded";
}
loadMessage().then(console.log);
```

## Problems to solve

1. Write an `async` function that waits for a promise returning the number 10, then prints the result.

2. Write an async function that uses `try/catch` around a promise and prints either the result or an error message.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
