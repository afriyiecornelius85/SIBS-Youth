import type { Metadata } from "next";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { getSiteOrigin } from "./lib/site-origin";
import "./globals.css";

const title = "SIBS YOUTH";
const description =
  "SIBS YOUTH is the SIBS International subsidiary preparing young people for future careers through leadership, digital skills, a football academy, and the Cape Coast, Ghana commerce & entrepreneurship initiative.";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getSiteOrigin();

  return {
    metadataBase: new URL(origin),
    title: { default: title, template: "%s · SIBS YOUTH" },
    description,
    icons: {
      icon: "/sibs-youth-mark.png",
      shortcut: "/sibs-youth-mark.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      title,
      description,
      siteName: title,
      url: origin,
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "SIBS YOUTH brand card",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const origin = await getSiteOrigin();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: title,
    url: origin,
    logo: `${origin}/sibs-youth-mark.png`,
    description,
    parentOrganization: {
      "@type": "Organization",
      name: "SIBS International",
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Yellowtail&display=swap"
        />
        <noscript>
          <style>{`.reveal, .reveal-stagger > * { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
