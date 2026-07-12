import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "SIBS YOUTH is the SIBS International subsidiary preparing young people for future careers through leadership, a football academy, and the Cape Coast, Ghana commerce and entrepreneurship initiative.",
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
          SIBS YOUTH is a subsidiary of SIBS International, preparing young people for future
          careers through leadership, service, digital readiness, and hands-on programs like the
          football academy and the Cape Coast, Ghana commerce and entrepreneurship initiative.
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
            SIBS YOUTH is the youth-focused subsidiary of SIBS International, built to prepare the
            next generation for future careers and give them a dedicated home for leadership
            formation, service, and digital readiness. The movement also undertakes projects on
            behalf of SIBS International, including a youth football academy where players with
            talent train and get seen, and the drive to open up Cape Coast, Ghana to more
            opportunity in commerce and entrepreneurship.
          </p>
          <p>
            Every program, mentorship circle, and project ties back to the same mission: preparing
            young people to lead with character and build real opportunity in their own
            communities.
          </p>
          <Link className="button primary" href="/programs">
            See Our Programs
          </Link>
        </div>
        <img
          className="story-photo"
          src="/cape-coast.jpg"
          alt="Scenic view over Cape Coast, Ghana"
        />
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
