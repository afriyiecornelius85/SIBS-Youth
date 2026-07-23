import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "SIBS YOUTH is the youth movement of SIBS International, equipping young people with practical skills, mentorship, and real opportunities in agriculture, enterprise, sport, technology, and leadership.",
};

const missionVision = [
  {
    name: "Mission",
    description:
      "To equip young people with practical skills, mentorship, and real opportunities in agriculture, enterprise, sport, technology, and leadership so they can create jobs, build businesses, and transform their communities.",
  },
  {
    name: "Vision",
    description:
      "A generation of skilled, self-reliant young people who lead their own initiatives and open doors for others.",
  },
];

const values = [
  {
    name: "Ownership",
    description: "Members lead. We build with young people, not just for them.",
  },
  {
    name: "Integrity",
    description: "Honesty, accountability, and good character in everything we do.",
  },
  {
    name: "Innovation",
    description: "Creative, practical solutions to real problems.",
  },
  {
    name: "Service",
    description: "Leadership begins with lifting others.",
  },
  {
    name: "Excellence",
    description: "We give our best and hold a high standard.",
  },
  {
    name: "Discipline",
    description: "Consistency and follow-through turn ideas into results.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero about-hero">
        <p className="section-kicker">About</p>
        <h1>Youth with purpose, skill, and a place to belong.</h1>
        <p className="hero-lede">
          SIBS YOUTH is the youth movement of SIBS International. We exist to move young people
          from potential to production &mdash; from ideas to income, from talent to leadership.
        </p>
      </section>

      <section className="values-section">
        <Reveal>
          <div className="section-heading">
            <p className="section-kicker">Mission &amp; Vision</p>
            <h2>Why we exist, and where we&apos;re headed.</h2>
          </div>
        </Reveal>
        <Reveal stagger>
          <div className="values-grid">
            {missionVision.map((item) => (
              <article className="value-card" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="difference">
          <div className="section-heading">
            <p className="section-kicker">Our Approach</p>
            <h2>How we get there.</h2>
          </div>
          <p>
            Skills that pay, projects members own, mentors who stay, and a pathway to lead.
            Everything we do runs through those four ideas.
          </p>
        </section>
      </Reveal>

      <section className="values-section">
        <Reveal>
          <div className="section-heading">
            <p className="section-kicker">Our Values</p>
            <h2>What SIBS YOUTH stands for.</h2>
          </div>
        </Reveal>
        <Reveal stagger>
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.name}>
                <h3>{value.name}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="story-section">
        <Reveal variant="left">
          <div className="story-copy">
            <p className="section-kicker">Our Story</p>
            <h2>Part of the SIBS International family.</h2>
            <p>
              SIBS YOUTH is the youth movement of SIBS International, founded in 2026 and based
              in Cape Coast, Central Region &mdash; currently launching its first cohort. We
              believe empowerment has to be more than motivation: young people need structure,
              skills, mentorship, and access to real opportunity, and they need a genuine say in
              what gets built. SIBS YOUTH is designed so members don&apos;t just receive
              programs; they help lead them.
            </p>
            <p>
              Every program, mentorship circle, and project ties back to the same mission:
              preparing young people to lead with character and build real opportunity in their
              own communities.
            </p>
            <Link className="button primary" href="/programs">
              See Our Programs
            </Link>
          </div>
        </Reveal>
        <Reveal variant="right">
          <img
            className="story-photo"
            src="/cape-coast.jpg"
            alt="Scenic view over Cape Coast, Ghana"
          />
        </Reveal>
      </section>

      <Reveal>
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
      </Reveal>
    </main>
  );
}
