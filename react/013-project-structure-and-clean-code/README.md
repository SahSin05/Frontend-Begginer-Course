# Project structure and clean code

Keep components, types, and reusable utilities organized. Use clear names, small components, and consistent formatting. Avoid putting the entire application in one file.

Example structure:
```text
src/
  components/
    CourseCard.tsx
  App.tsx
  main.tsx
```

## Problems to solve

1. Move a reusable component out of `App.tsx` into its own file and import it.

2. Move a shared TypeScript type into a `types.ts` file and reuse it in two components.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
