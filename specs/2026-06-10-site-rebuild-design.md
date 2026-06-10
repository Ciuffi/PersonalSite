# ciuffi.dev rebuild — design spec

**Date:** 2026-06-10
**Status:** Approved (decisions delegated by owner; direction confirmed via Q&A)

## Goal

Replace the 2019-era Nuxt 2 SPA with a modern static portfolio site. Keep all project
content, add two new flagship projects (Tackle for Brainrots, DnD Tracker), apply a full
"dark & refined" UI redesign, and keep the existing GitHub Pages deployment working
unchanged (serve from `docs/` on `master`, custom domain `www.ciuffi.dev`).

## Decisions confirmed with owner (2026-06-10)

- **Design direction:** dark & refined — near-black, one strong accent, sharp typography.
- **Bio:** present as an experienced software engineer + builder; copy written by Claude.
- **Experience:** remove the four 2019–2020 roles; single entry "Software Engineer @ Amazon,
  July 2021 – present."
- **Contact:** GitHub (github.com/ciuffi) + email (ciuffi9@mac.com). Twitter removed.
  Resume button removed (PDF file stays at `/giulio-rossi-resume.pdf` so old links don't 404,
  but the UI no longer points to it — it predates the Amazon role).

## Tech stack

- **Astro 5**, fully static output (`output: 'static'`), zero client-side framework.
- **Plain modern CSS** with design tokens via custom properties. No Tailwind/Bulma — full
  control, no framework look.
- **Self-hosted fonts** via `@fontsource` packages (no Google Fonts requests).
- **Content collections** for projects (markdown + typed frontmatter via zod schema).
- **`@astrojs/sitemap`** for sitemap.xml; hand-written meta/OG tags in the base layout.
- **Sharp-backed `astro:assets`** for image optimization (the Tackle banner is 2.5 MB and
  must ship much smaller).
- Tiny vanilla JS only where needed: scroll-reveal (IntersectionObserver) and mobile nav.

### Why Astro over alternatives

- Astro: content-collection DX built for exactly this; static-first; image pipeline included.
- Eleventy: equally static but more assembly required for image/typed-content pipeline.
- Next.js static export: drags a React runtime and complexity the site doesn't need.

## Deployment (unchanged mechanism)

- `astro.config` sets `outDir: './docs'`, `site: 'https://www.ciuffi.dev'`.
- `public/` carries `CNAME` (`www.ciuffi.dev`), `.nojekyll`, `favicon.ico` + new SVG favicon,
  `privacy_policy.html` (App Store link target for Plug — exact path preserved),
  `giulio-rossi-resume.pdf`, `robots.txt`.
- Workflow stays: `npm run build` → commit `docs/` → push `master`. No repo-settings change.

## Site structure

| Route | Purpose |
| --- | --- |
| `/` | Hero, Projects (2 featured + 7 grid), Experience strip, Contact, footer |
| `/projects/<slug>/` | 9 detail pages |
| `/404.html` | Custom 404 |
| `/privacy_policy.html` | Preserved verbatim |

**Slugs preserved exactly** (GitHub Pages is case-sensitive; old links must not break):
`acamedia`, `ciuffiDev`, `DarkSlackApp`, `intensif-eye`, `plug`, `starchaser`, `warpzone`.
New: `tackle-for-brainrots`, `dnd-tracker`. Old `/experiences/*` pages are intentionally
dropped along with the section.

## Content model

```ts
projects: defineCollection({ schema: ({ image }) => z.object({
  title: z.string(),
  description: z.string(),      // card blurb
  year: z.string(),             // e.g. "2026" or "2019"
  tags: z.array(z.string()),    // tech: Luau, Swift, …
  cover: image().optional(),    // card + detail hero image
  coverAlt: z.string().optional(),
  links: z.object({ github: ..., appstore: ..., live: ... }).partial().optional(),
  featured: z.boolean().default(false),
  order: z.number(),            // sort key
})})
```

## Content inventory (9 projects, sorted)

1. **Tackle for Brainrots** (2026, featured) — Roblox multiplayer PvP collection game.
   Luau + Rojo, ~20k lines, 96 modules, server-authoritative architecture, DataStore
   session locking, 12-tier glove progression, raidable bases, procedural animation.
   Cover: `tackle-brainrots-banner.png` from the project repo. Link: GitHub repo.
2. **DnD Tracker** (2026, featured) — self-hostable D&D campaign manager. Fastify +
   TypeScript + DynamoDB backend, React 18 frontend, WebSocket real-time sync, JWT auth,
   Claude AI DM-assistant via MCP tools, 3D dice, stat-formula DSL, AWS CDK + Docker
   deployments. Cover: custom SVG art (no screenshots exist). Link: GitHub repo.
3. **Ciuffi.dev** (2019 → 2026) — this site; rewrite copy to describe Nuxt→Astro story.
4. **Plug Adblocker** (2019) — iOS content-blocker, App Store link, keep copy (typo-fixed).
5. **StarChaser** (2019) — Apple Watch game, copy kept (typo-fixed).
6. **Intensif-Eye** (2019) — DubHacks 2019 ML accessibility app; merge the stronger detail
   text with the award info from the card blurb (2nd place ×3 tracks).
7. **Warpzone** (2018) — Unity endless runner; fix the wrong "Dark Slack App" heading.
8. **Dark Slack App** (2018) — macOS Slack theming app, GitHub releases link.
9. **AcaMedIa** (2018) — XDHacks Vue webapp. Dead appspot link removed; describe stack.

All legacy copy keeps its substance but gets a grammar/typo pass ("Bult with", "Its still",
etc.). Verbatim-preserved facts: names, dates, stacks, links, story details.

**Experience:** one entry — Software Engineer, Amazon, July 2021 – Present.
**Bio (hero):** confident 2-sentence intro: software engineer at Amazon; builds multiplayer
games, iOS apps, and AI-powered tools. Friendly, no buzzwords.
**Contact:** GitHub button, email button (plain `mailto:`), repeated in footer.

## Design system (dark & refined)

- **Palette:** near-black base (`#0a0b0d`-family), elevated surfaces (`#121418`-family),
  soft off-white text, muted gray secondary text, ONE accent (electric chartreuse/lime
  family, exact value tuned during implementation) used for links, highlights, focus rings.
  Per-project subtle tint allowed on cards via tag color only — no rainbow.
- **Type:** Space Grotesk (display/headings), Inter (body), IBM Plex Mono (labels, tags,
  meta). Big type scale on hero (clamp-based fluid sizing).
- **Texture:** subtle grain/grid background motif, hairline borders (`1px` at ~10% white),
  generous spacing, large border radii NOT used (sharp, refined corners ~8px max).
- **Motion:** scroll-reveal fade/translate (respects `prefers-reduced-motion`), hover lift
  on cards ≤4px with border-glow, no parallax.
- **Layout:** max-width ~1100px container; featured projects = 2 large horizontal cards;
  remaining 7 = responsive grid (3/2/1 columns). Experience = single timeline strip.
- **A11y:** WCAG AA contrast, visible focus states, semantic landmarks, skip link,
  alt text on all images.

## Components

- `BaseLayout.astro` — html shell, meta/OG, fonts, global CSS, header/footer slots
- `Header.astro` — minimal sticky nav (Projects / Experience / Contact anchors + GitHub)
- `Hero.astro`, `ProjectCard.astro` (featured + standard variants), `ExperienceStrip.astro`,
  `Contact.astro`, `Footer.astro`, `SectionHeading.astro`
- `pages/index.astro`, `pages/projects/[slug].astro`, `pages/404.astro`

## Error handling / edge cases

- Custom 404 page (GitHub Pages serves `404.html` automatically).
- Projects without covers (dnd-tracker) get designed SVG covers — never broken images.
- Build fails loudly on schema violations (zod) — content errors can't ship silently.
- `.nojekyll` prevents Jekyll mangling; CNAME must survive every build (lives in `public/`).

## Testing / verification

1. `npm run build` succeeds; `docs/` contains: `index.html`, all 9 project pages at exact
   slugs, `404.html`, `CNAME`, `.nojekyll`, `privacy_policy.html`, resume PDF, sitemap.
2. Playwright pass against the preview server: screenshot desktop (1440px) + mobile (390px)
   for index and representative project pages; assert no console errors; click-through all
   internal links; verify external links' hrefs.
3. Lighthouse-style sanity: page weight reasonable (hero + covers optimized), fonts load
   locally.

## Out of scope

- Blog (no posts exist worth porting; structure allows adding a collection later).
- Old `/experiences/*` redirects.
- Changing GitHub Pages settings, DNS, or adding CI.
