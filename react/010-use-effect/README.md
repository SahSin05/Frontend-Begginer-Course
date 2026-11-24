# useEffect and component side effects

`useEffect` synchronizes a component with something outside React, such as a document title or a subscription. Do not use it for values that can be calculated during rendering.

Example:
```tsx
import { useEffect } from "react";

useEffect(() => {
  document.title = "Student Dashboard";
}, []);
```

## Problems to solve

1. Use an effect to update the browser tab title when a component is displayed.

2. Create a component that listens for a window resize event and removes the event listener during cleanup.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
