# Project notes

## UI conventions
- Every button uses the same red as the nav bar: `var(--brand)` (`#d32323`) from `src/styles/theme.css`. Use the `btn-brand` / `btn-ghost` classes.
- Never use orange (or a faded salmon/pink) for buttons, including disabled states. Show disabled with `cursor: not-allowed` and a muted text/outline treatment, not a recolor.
- Orange is reserved for filled rating stars only.
