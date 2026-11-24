# The box model and spacing

Every element is a box made of content, padding, border, and margin. `box-sizing: border-box` makes sizing easier to reason about.

Example:
```css
* { box-sizing: border-box; }
.card { padding: 16px; border: 1px solid #ddd; margin: 12px 0; }
```

## Problems to solve

1. Create a card with padding, border, and margin. Set its width and inspect it in browser developer tools.

2. Make two cards with equal widths and consistent spacing using `box-sizing: border-box`.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
