# Modules: import and export

Modules let you split code into files. Export reusable values from one file and import them where needed.

Example:
```ts
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// app.ts
import { add } from "./math";
console.log(add(2, 3));
```

## Problems to solve

1. Move a `formatName` function into `format.ts` and import it into `main.ts`.

2. Create a `constants.ts` file exporting a course name and import it into another file to print it.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
