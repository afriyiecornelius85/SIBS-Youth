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
      icon: "/sibs-youth-emblem.svg",
      shortcut: "/sibs-youth-emblem.svg",
    },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap"
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
