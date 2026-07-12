import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <p className="section-kicker">404</p>
        <h1>This page hasn&apos;t launched yet.</h1>
        <p className="hero-lede">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Head back home or
          explore the programs SIBS YOUTH is building.
        </p>
        <Link className="button primary" href="/">
          Back to Home
        </Link>
      </section>
    </main>
  );
}
