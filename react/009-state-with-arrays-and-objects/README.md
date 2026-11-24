# Updating arrays and objects in state

Treat state arrays and objects as immutable. Create new arrays or objects with spread syntax rather than changing the existing value.

Example:
```tsx
setTasks(current => [...current, newTask]);
setUser(current => ({ ...current, name: "Neha" }));
```

## Problems to solve

1. Build a simple list where a user can add a new task.

2. Add a delete button to each task and remove the selected task without mutating the original array.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
