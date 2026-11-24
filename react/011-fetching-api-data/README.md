# Fetching API data

Fetch data inside an effect when a component loads. Track loading, error, and success states so the user knows what is happening. Check `response.ok` before using the data.

Example:
```tsx
useEffect(() => {
  async function load() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Request failed");
    const users = await response.json();
    console.log(users);
  }
  load().catch(console.error);
}, []);
```

## Problems to solve

1. Fetch a list of users from JSONPlaceholder and display a loading message while the request is in progress.

2. Add error handling and show a useful error message if the request fails.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
