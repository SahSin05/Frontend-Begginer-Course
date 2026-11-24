# Props

Props pass data from a parent component to a child. Define their shape with a TypeScript type or interface. Props should be treated as read-only.

Example:
```tsx
type GreetingProps = { name: string };

function Greeting({ name }: GreetingProps) {
  return <p>Hello, {name}</p>;
}
```

## Problems to solve

1. Pass a student's name and department into a `StudentCard` component using props.

2. Create a `CourseCard` that accepts title, duration, and level as typed props; render two different cards.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
