# ciuffi.dev

> Personal portfolio site — [www.ciuffi.dev](https://www.ciuffi.dev)

Built with [Astro 5](https://astro.build). Fully static, no client-side framework.
Rebuilt from scratch in 2026 (previously a Nuxt 2 SPA from 2019).

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at localhost:4321
npm run build      # build static site into docs/
npm run preview    # serve the built docs/ locally
```

## Deploying

GitHub Pages serves the `docs/` folder on `master` (custom domain `www.ciuffi.dev`,
configured via `public/CNAME`). To deploy:

```bash
npm run build
git add docs && git commit -m "build"
git push
```

## Structure

- `src/content/projects/*.md` — one markdown file per project (typed frontmatter,
  schema in `src/content.config.ts`). File name = URL slug, so don't rename them —
  old links would break.
- `src/assets/projects/` — project images, optimized at build time.
- `src/pages/` — index, `projects/[slug]`, 404.
- `public/` — files copied verbatim into the build: CNAME, favicons, robots.txt,
  resume PDF, privacy policy (linked from the Plug App Store listing — keep its path).

## Adding a project

Drop a markdown file into `src/content/projects/`, give it `title`, `description`,
`year`, `tags`, `order`, and optionally `cover` (+ `coverAlt`), `links`
(github/appstore/live), and `featured: true` for the big card treatment. Build.
