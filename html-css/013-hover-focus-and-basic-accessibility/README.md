# Hover, focus, and basic accessibility

Provide visible focus styles for keyboard users. Make interactive elements easy to identify, use buttons for actions, and ensure text has sufficient contrast.

Example:
```css
a:hover { text-decoration: underline; }
a:focus-visible, button:focus-visible {
  outline: 3px solid royalblue;
  outline-offset: 2px;
}
```

## Problems to solve

1. Add clear hover and keyboard-focus styles to links and buttons.

2. Review your form and images: ensure every input has a label and every meaningful image has useful alt text.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
