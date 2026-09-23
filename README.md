# my-first-ecommerce

Week 3, Day 1 Angular assignment.

## Run it

```bash
npm install
npm start
```

Then open http://localhost:4200

## What is inside

| Task | Where |
| --- | --- |
| a) Project named `my-first-ecommerce` | `package.json`, `angular.json` |
| b) `LacesComponent`, `ShoesAndBagsComponent` | `src/app/laces`, `src/app/shoes-and-bags` |
| c) Reusable `SelectColorComponent` | `src/app/select-color` |
| d) Rendered in both sections | `laces.component.html`, `shoes-and-bags.component.html` |
| e) Both sections rendered in app HTML | `src/app/app.component.html` |
| f) External CSS + comments | `src/styles.css` (linked in `angular.json`), one `.css` per component, comments in each `.ts` |

## Why `SelectColorComponent` is reused

Both `/products/laces` and `/products/shoes-and-bags` on empiretextiles.com show
the same "select a colour" swatch list. Only the colours and the label differ,
so the picker is written once and receives `colors` and `label` as `@Input()`s.
