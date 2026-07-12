import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements and updates from SIBS YOUTH as chapters launch and programs grow.",
};

export default function NewsPage() {
  return (
    <main>
      <section className="page-hero news-hero">
        <p className="section-kicker">News</p>
        <h1>Announcements as the movement grows.</h1>
        <p className="hero-lede">
          Chapter launches, program updates, and media mentions will be posted here as they happen.
        </p>
      </section>

      <section className="events-empty-state">
        <h2>No news posted yet.</h2>
        <p>
          This is where SIBS YOUTH will share chapter launches, program milestones, and press
          mentions. Reach out if you have a media inquiry or want to be notified when updates go
          live.
        </p>
        <Link className="button primary" href="/contact">
          Contact Us
        </Link>
      </section>
    </main>
  );
}
