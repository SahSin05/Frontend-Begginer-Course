# Useful array methods

Methods such as `map`, `filter`, and `find` are common in frontend work. `map` transforms items; `filter` keeps matching items; `find` returns the first match.

Example:
```ts
const prices = [100, 250, 80];
const withTax = prices.map(price => price * 1.18);
const expensive = prices.filter(price => price > 100);
```

## Problems to solve

1. Use `map` to convert an array of names to uppercase.

2. Given an array of products with `price`, use `filter` to create a new array containing products priced above 500.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
