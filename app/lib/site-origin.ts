import { headers } from "next/headers";

/** Resolves the deployed origin from request headers so metadata, the sitemap, and robots.txt all agree with whatever host the app is actually served from. */
export async function getSiteOrigin(): Promise<string> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost:3000";
  const protocol =
    headerList.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");

  return `${protocol}://${host}`;
}
