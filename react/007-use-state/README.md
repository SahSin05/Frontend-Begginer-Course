# State with useState

State stores values that can change over time. Updating state causes React to render the component again. Do not mutate state directly.

Example:
```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

## Problems to solve

1. Build a counter with increment and decrement buttons.

2. Build a show/hide toggle that reveals or hides a short description.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
