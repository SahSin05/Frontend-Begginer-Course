# Conditions

Use `if`, `else if`, and `else` when the program must choose between paths. Prefer strict equality (`===`).

Example:
```ts
const score = 72;
if (score >= 80) {
  console.log("Very good");
} else if (score >= 40) {
  console.log("Pass");
} else {
  console.log("Try again");
}
```

## Problems to solve

1. Given an age, print whether a person is eligible to vote (18 or older).

2. Given a percentage, print `Distinction` (75+), `Pass` (40–74), or `Fail` (below 40).

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
