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

## Environment Variables

- `RESEND_API_KEY` &mdash; lets the contact form ([app/api/contact/route.ts](app/api/contact/route.ts))
  send email via [Resend](https://resend.com).
  1. Create a free Resend account and copy an API key from the dashboard.
  2. **Locally**: add `RESEND_API_KEY=re_your_key` to a `.env.local` file (already gitignored,
     auto-loaded by vinext).
  3. **On Render**: set it on the service's **Environment** tab &mdash; `render.yaml` declares
     the key with `sync: false` so Render prompts for it instead of expecting a value in the
     blueprint.
  4. Without it, the API route returns a clear error and the form still offers a `mailto:`
     fallback link, so it degrades gracefully instead of breaking.

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

`npm run build && npm run start` is a plain Node.js server, so it runs the
same way locally as it will on Render — useful for a final check before
deploying.

## Included Shape

- edit site code under `app/`
- `app/robots.ts` / `app/sitemap.ts` generate `robots.txt` and `sitemap.xml` from the current deploy origin
- `app/not-found.tsx` is the branded 404 page

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: produce the vinext build output
- `npm run lint`: run ESLint
- `npm run typecheck`: run `tsc --noEmit`
- `npm test`: build the site and verify the rendered HTML for each route

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
