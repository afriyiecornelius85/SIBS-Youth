import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "../components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "The mission, values, and story behind SIBS YOUTH, the youth movement under SIBS International.",
};

const values = [
  {
    name: "Character",
    description:
      "Building integrity, honesty, and self-discipline into the daily habits of young leaders.",
  },
  {
    name: "Opportunity",
    description:
      "Opening doors to mentorship, resources, and platforms young people wouldn't otherwise reach.",
  },
  {
    name: "Service",
    description:
      "Turning empathy into action through hands-on community projects that solve real problems.",
  },
  {
    name: "Innovation",
    description:
      "Equipping young people with digital, creative, and entrepreneurial tools for a changing world.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero about-hero">
        <p className="section-kicker">About</p>
        <h1>Youth with purpose, skill, and a place to belong.</h1>
        <p className="hero-lede">
          SIBS YOUTH exists to give young people a strong platform for personal growth, leadership
          formation, service, creativity, and digital readiness while staying connected to the
          wider SIBS International family.
        </p>
      </section>

      <section className="values-section">
        <div className="section-heading">
          <p className="section-kicker">Our Values</p>
          <h2>What SIBS YOUTH stands for.</h2>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.name}>
              <h3>{value.name}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="story-copy">
          <p className="section-kicker">Our Story</p>
          <h2>Part of the SIBS International family.</h2>
          <p>
            SIBS YOUTH is the youth movement under SIBS International, built to give the next
            generation a dedicated home for leadership formation, service, creativity, and digital
            readiness. Every program, mentorship circle, and event ties back to the same mission:
            preparing young people to lead with character and create positive change in their own
            communities.
          </p>
          <p>
            This platform is the starting point for that work &mdash; a clear identity for
            recruiting members, introducing chapters, welcoming mentors, and promoting events as
            the movement grows.
          </p>
          <Link className="button primary" href="/programs">
            See Our Programs
          </Link>
        </div>
        <ImagePlaceholder label="SIBS YOUTH team photo" aspect="square" />
      </section>

      <section className="connect">
        <div>
          <p className="section-kicker">Connect</p>
          <h2>Want to be part of the story?</h2>
          <p>
            Reach out to learn about chapters, mentorship, partnerships, or how to get your
            community involved.
          </p>
        </div>
        <Link className="button primary" href="/contact">
          Get Involved
        </Link>
      </section>
    </main>
  );
}
