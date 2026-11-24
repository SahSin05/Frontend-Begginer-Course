# Rendering lists and keys

Use `map` to render arrays. Give each sibling a stable, unique `key`, usually an ID from the data.

Example:
```tsx
const subjects = ["HTML", "CSS", "React"];
<ul>{subjects.map(subject => <li key={subject}>{subject}</li>)}</ul>
```

## Problems to solve

1. Render a list of five skills from an array.

2. Render a list of courses from objects containing `id`, `title`, and `duration`; use each course ID as its key.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
