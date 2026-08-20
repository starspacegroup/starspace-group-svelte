# Unfinished: a palette and a type scale

Two blocks sat commented out at the bottom of `src/app.pcss` from
**2024-11-19** ("Comment for possible future colors and fonts") until
2026-08-20, when they moved here. Nothing was ever wired up — the site still
uses Tailwind's defaults plus flowbite's `primary` ramp from
`tailwind.config.cjs`.

They are kept because they are a decision in progress, not dead code. A
stylesheet is the wrong place for one: 37 of `app.pcss`'s 41 lines were
commentary, and a reader had to work out that none of it was live.

## The palette

Warm and sandy, as HSL channel triplets meant for `hsl(var(--text) / …)`:

```css
@layer base {
  :root {
    --text: 44 37% 8%;
    --background: 42 32% 77%;
    --primary: 45 45% 27%;
    --secondary: 42 50% 66%;
    --accent: 42 54% 44%;
  }
  .dark {
    --text: 44 37% 92%;
    --background: 42 32% 23%;
    --primary: 45 45% 73%;
    --secondary: 42 50% 34%;
    --accent: 42 54% 56%;
  }
}
```

Worth noting before adopting it: the site's own mark is bronze and the current
accent is coral `#FE795D`, so this palette is close to the brand already, but
`--background: 42 32% 77%` is a light sand, and the site currently ships
dark-first (`<html class="dark">`).

## The type scale

A √2 ratio, and two families that are not currently loaded:

```js
fontSize: {
  sm: '0.707rem',  base: '1rem',    xl: '1.414rem',
  '2xl': '1.999rem', '3xl': '2.827rem', '4xl': '3.997rem', '5xl': '5.652rem',
},
fontFamily: { heading: 'Open Sans', body: 'Roboto Serif' },
fontWeight: { normal: '400', bold: '700' },
```

These are `tailwind.config.cjs` `theme.extend` values, not CSS — which is part
of why they never worked where they were. Adopting them means adding the two
webfonts, and redefining `sm`/`base`/`xl` changes every existing size on the
site at once.
