// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Built output is committed to docs/ and served by GitHub Pages (custom
// domain www.ciuffi.dev). Do not change outDir without updating the Pages
// settings in the GitHub repo.
export default defineConfig({
  site: 'https://www.ciuffi.dev',
  outDir: './docs',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
})
