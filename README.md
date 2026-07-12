# SIBS YOUTH

Marketing site for SIBS YOUTH, the youth movement under SIBS International.
Built on [vinext](https://github.com/cloudflare/vinext) (Next.js App Router
running on Vite), deployed to [Render](https://render.com) as a standard
Node.js web service.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## Deploying to Render

`render.yaml` at the repo root is a Render
[Blueprint](https://render.com/docs/infrastructure-as-code) that defines the
service: Node runtime, `npm ci && npm run build` to build, `npm run start`
to run it.

1. In the Render dashboard, choose **New > Blueprint** and point it at this
   repo (or **New > Web Service** and fill in the same build/start commands
   manually if you'd rather not use the blueprint).
2. Render reads the Node version from `.node-version` (currently `22`) and
   sets `PORT` itself — `npm run start` runs `vinext start`, which already
   binds to `0.0.0.0:$PORT`, so no extra config is needed.
3. The health check path is `/`.

`npm run build && npm run start` is a plain Node.js server with no
Cloudflare-specific dependency, so it runs the same way locally as it will
on Render — useful for a final check before deploying.

The repo also still has `wrangler.jsonc` and `worker/index.ts` from an
earlier Cloudflare Workers deploy path; they're unused by the Render
deployment and only matter if you ever deploy there instead.

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
