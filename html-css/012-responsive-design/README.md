# Responsive design

Responsive design adapts layouts to different screen sizes. Start with a usable narrow layout, then add media queries for wider screens.

Example:
```css
.cards { display: grid; grid-template-columns: 1fr; }
@media (min-width: 700px) {
  .cards { grid-template-columns: repeat(3, 1fr); }
}
```

## Problems to solve

1. Make your existing page readable on a phone without horizontal scrolling.

2. Use a media query to change a navigation layout or card grid at a sensible breakpoint.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
