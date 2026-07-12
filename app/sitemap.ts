import { getSiteOrigin } from "./lib/site-origin";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/programs", priority: 0.8 },
  { path: "/events", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
];

export default async function sitemap() {
  const origin = await getSiteOrigin();
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${origin}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
