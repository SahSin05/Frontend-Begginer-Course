# Linking CSS and selectors

Keep styles in a separate `.css` file and link it from the HTML `head`. Select elements using element, class, and ID selectors.

Example:
```html
<link rel="stylesheet" href="styles.css">
<p class="highlight">Important information</p>
```
```css
p { color: #333; }
.highlight { color: rebeccapurple; }
#main-title { font-size: 2rem; }
```

## Problems to solve

1. Create `styles.css`, link it to your page, and style all paragraphs.

2. Add a reusable class to two elements and style them differently from the rest of the page.

## Progress check

- [ ] Problem 1 completed and tested
- [ ] Problem 2 completed and tested
- [ ] I can explain the solution in my own words
