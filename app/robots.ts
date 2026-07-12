import { getSiteOrigin } from "./lib/site-origin";

export default async function robots() {
  const origin = await getSiteOrigin();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
