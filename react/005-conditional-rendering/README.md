# Conditional rendering

Show different UI based on a condition. Use `&&` for optional content and a ternary when choosing between two alternatives.

Example:
```tsx
const isLoggedIn = true;
return <div>{isLoggedIn ? <p>Welcome back</p> : <p>Please sign in</p>}</div>;
```

## Problems to solve

1. Show `No courses yet` when a courses array is empty, otherwise render the course list.

2. Display `Passed` or `Needs improvement` based on a student's score.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
