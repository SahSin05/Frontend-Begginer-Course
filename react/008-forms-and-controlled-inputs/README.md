# Forms and controlled inputs

A controlled input gets its value from React state and updates that state in `onChange`. This keeps the UI and form data in sync.

Example:
```tsx
const [name, setName] = useState("");
<input value={name} onChange={event => setName(event.target.value)} />
```

## Problems to solve

1. Build a controlled input that displays a live preview of the typed name.

2. Create a small form with name and email fields; on submit, prevent the page reload and display the submitted values.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
