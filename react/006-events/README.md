# Handling events

React event handlers respond to user actions. Pass a function to an event prop such as `onClick`; do not call the function while rendering.

Example:
```tsx
function AlertButton() {
  function handleClick() {
    alert("Button clicked");
  }
  return <button onClick={handleClick}>Click me</button>;
}
```

## Problems to solve

1. Create a button that displays an alert when clicked.

2. Create a button that changes a visible message when the user clicks it.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
