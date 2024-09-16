# Razorback Theme by YCWD

Razorback is a resturaunt-focused theme inspired by neo-brutalism and vaporwave, mashed together in a quasi-avante-garde experiment. When I made this, I set out to take what rules I know about web design, break them, then recontruct them into something new.

There is no documentation for the theme, you are free to use it but you are left to your own devices.

With that said, I built this with AstroJS, TypeScript, DecapCMS(ReactJS), and the free tier of Flowbite along with vanilla TailwindCSS. So if you know those, then it's pretty easy. Note that my main flow is Page > componenets, with a few caveats. My Contact Page has the form self-contained, and my Header is structured with subfolders for links, header, and drawer.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

## Notes from template gen

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name..

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Note that I use pnpm for this site, also I am leaving the genie emoji because it's cute af.
