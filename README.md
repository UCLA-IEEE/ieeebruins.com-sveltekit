# ieeebruins.com in SvelteKit

ieeebruins.com is the website for IEEE at UCLA. This repository is a rewrite in
SvelteKit. The [original repo](https://github.com/UCLA-IEEE/ieeebruins.com) is
written in PHP.

## Getting Started

1. `git clone` this repository.

2. Run `npm install` to download all the dependencies.

## Developing

Start a development server:
Start a development server:

````sh
```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
````

When the terminal is open, you can press "o" to open the app in a new browser
tab.

Any changes saved in a file will automatically trigger a website refresh. (Hot
module replacement is really cool!)

## Architecture

ieeebruins.com is written in [SvelteKit](https://kit.svelte.dev/), with
[Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for
styling.

[Lucide](https://github.com/lucide-icons/lucide/tree/main/packages/lucide-svelte#how-to-use)
is used for icons. For brand icons like the Discord logo, we have a custom
component named `SimpleIcon.svelte` under `$lib/components` that [uses a
CDN](https://github.com/simple-icons/simple-icons#cdn-usage).

Theme colors are defined in `tailwind.config.js`. Primary and secondary should
not be changed:
Theme colors are defined in `tailwind.config.js`. Primary and secondary should
not be changed:

````js
"primary": "#00629B", // IEEE blue
"secondary": "#E4C63F" // Yellow used in our social media graphics
```js
"primary": "#00629B", // IEEE blue
"secondary": "#E4C63F" // Yellow used in our social media graphics
````

## Resources

## Resources

- Svelte: <https://learn.svelte.dev/tutorial/welcome-to-svelte>
  - Just the "Introduction" section is enough for our website
- SvelteKit: <https://learn.svelte.dev/tutorial/introducing-sveltekit>
  - Just the "Introduction" and "Routing" sections are enough
- Tailwind CSS: <https://tailwindcss.com/docs/utility-first>
  - Just the "Utility-First Fundamentals" article is enough, although it's
    helpful to read everything under "Core Concepts"
- DaisyUI: <https://daisyui.com/docs/use/>
  - Just the "Use" article is enough
- Svelte: <https://learn.svelte.dev/tutorial/welcome-to-svelte>
  - Just the "Introduction" section is enough for our website
- SvelteKit: <https://learn.svelte.dev/tutorial/introducing-sveltekit>
  - Just the "Introduction" and "Routing" sections are enough
- Tailwind CSS: <https://tailwindcss.com/docs/utility-first>
  - Just the "Utility-First Fundamentals" article is enough, although it's
    helpful to read everything under "Core Concepts"
- DaisyUI: <https://daisyui.com/docs/use/>
  - Just the "Use" article is enough
