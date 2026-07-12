# SIBS YOUTH

Marketing site for SIBS YOUTH, the youth movement under SIBS International.
Built on [vinext](https://github.com/cloudflare/vinext) (Next.js App Router
running on Vite) and deployed to Cloudflare Workers, with optional Cloudflare
D1 and Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

Deploys run through `wrangler.jsonc` — see
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for the CI/CD
pipeline that lints, typechecks, tests, and deploys on every push to `main`.

## Included Shape

- edit site code under `app/`
- `app/robots.ts` / `app/sitemap.ts` generate `robots.txt` and `sitemap.xml` from the current deploy origin
- `app/not-found.tsx` is the branded 404 page
- `db/schema.ts` starts intentionally empty; declare a `d1_databases` binding
  named `DB` in `wrangler.jsonc` to use it
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: produce the vinext build output
- `npm run lint`: run ESLint
- `npm run typecheck`: run `tsc --noEmit`
- `npm test`: build the site and verify the rendered HTML for each route
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
