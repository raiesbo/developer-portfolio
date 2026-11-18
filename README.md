# Developer Portfolio

My personal portfolio, where I share my background, skills and featured projects as a design-driven web developer and architect.

**Live site:** [raiesbo.com](https://raiesbo.com/)

## Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for development and builds
- Plain CSS (native nesting and custom properties) for styling, with a light and dark theme

## Getting started

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/raiesbo/developer-portfolio.git
cd developer-portfolio
npm install
npm run dev
```

Then open http://localhost:5173.

## Scripts

| Command           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the development server                      |
| `npm run build`   | Type-check and build for production into `dist/`  |
| `npm run preview` | Serve the production build locally                |
| `npm run lint`    | Lint the source with ESLint                       |

## Editing the content

I keep all the text in two JSON files, so I can update the site without touching any components:

- `src/assets/profile.archive.json`: intro, background and skills
- `src/assets/projects.archive.json`: featured projects (put their thumbnails in `public/img/`)

In the profile text, wrap words in double dashes to highlight them, for example `I am a --web developer--`.
