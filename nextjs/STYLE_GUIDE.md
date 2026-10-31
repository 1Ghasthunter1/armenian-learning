# Style Guide

Flat, square and high contrast, like ink on paper. Tokens live in `app/globals.css`.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#fbf8ef` | Page background: light, with a hint of yellow-beige |
| `paper-dark` | `#f3eedf` | Hover and subtle fills |
| `ink` | `#141414` | Text and borders |
| `white` | `#ffffff` | Inside of controls and panels |

Only logos and images bring in other colors.

## Type

Use Andika from Google Fonts for all text, loaded with `next/font` in `app/layout.tsx`.

## Shape

- Zero border radius everywhere. The radius utilities are removed from the Tailwind theme.
- Controls and panels have a 2px `ink` border with a white or light fill.
- No shadows or gradients.

## Interaction

- Hover changes the fill to `paper-dark`.
- Keyboard focus shows a 2px `ink` outline, offset by 2px.
