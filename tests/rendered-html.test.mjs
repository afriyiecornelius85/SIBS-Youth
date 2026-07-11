import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the SIBS YOUTH landing page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>SIBS YOUTH<\/title>/i);
  assert.match(html, /A SIBS International youth movement/);
  assert.match(html, /Explore Programs/);
  assert.match(html, /Leadership Labs/);
  assert.match(html, /Learn\. Lead\. Serve\. Build\./);
  assert.match(html, /og:image/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|SkeletonPreview/);
});

test("ships branded assets and removes the starter skeleton", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    access(new URL("../public/sibs-youth-mark.svg", import.meta.url)),
    access(new URL("../public/sibs-youth-logo.svg", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);

  assert.match(page, /SIBS YOUTH/);
  assert.match(page, /programs/);
  assert.match(layout, /generateMetadata/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /codex-preview|_sites-preview|themeColor|\bViewport\b/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});

const secondaryRoutes = [
  { path: "/about", title: "About" },
  { path: "/programs", title: "Programs" },
  { path: "/events", title: "Events" },
  { path: "/contact", title: "Contact" },
];

for (const route of secondaryRoutes) {
  test(`server-renders ${route.path} with the persistent nav`, async () => {
    const response = await render(route.path);
    assert.equal(response.status, 200);

    const html = await response.text();
    assert.match(html, new RegExp(`<title>${route.title} · SIBS YOUTH</title>`, "i"));
    assert.match(html, /SIBS YOUTH home/);
    assert.match(html, /href="\/about"/);
    assert.match(html, /href="\/programs"/);
    assert.match(html, /href="\/events"/);
    assert.match(html, /href="\/contact"/);
  });
}
