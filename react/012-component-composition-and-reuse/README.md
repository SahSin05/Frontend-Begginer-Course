# Component composition and reuse

Build larger interfaces by combining small components. Pass data through props and use `children` when a component should wrap other UI.

Example:
```tsx
type PanelProps = { title: string; children: React.ReactNode };
function Panel({ title, children }: PanelProps) {
  return <section><h2>{title}</h2>{children}</section>;
}
```

## Problems to solve

1. Create a reusable `Panel` component that accepts a title and children.

2. Use the same `Panel` component to display a profile section and a course section.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
