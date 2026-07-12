import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";

const values = ["Character", "Opportunity", "Service", "Innovation"];

const programTeasers = [
  {
    title: "Leadership Labs",
    summary:
      "Practical sessions that help young people build confidence, communication, planning, and responsibility.",
  },
  {
    title: "Digital Skills",
    summary:
      "Hands-on learning for technology, media, design, and the tools young leaders need in a changing world.",
  },
  {
    title: "Service Projects",
    summary:
      "Community action days where youth teams identify needs, organize volunteers, and deliver measurable help.",
  },
];

const metrics = [
  ["6", "program pillars"],
  ["4", "core values"],
  ["100%", "youth focused"],
  ["1", "shared mission"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <HeroSlideshow />
            <div className="hero-actions" aria-label="SIBS YOUTH quick links">
              <Link className="button primary" href="/programs">
                Explore Programs
              </Link>
              <Link className="button secondary" href="/contact">
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="brand-stage" aria-label="SIBS YOUTH brand mark">
            <img className="stage-logo" src="/sibs-youth-logo.png" alt="SIBS YOUTH logo" />
            <div className="orbit">
              {values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mission-band">
        <div className="section-kicker">Mission</div>
        <div className="mission-layout">
          <h2>Youth with purpose, skill, and a place to belong.</h2>
          <div>
            <p>
              SIBS YOUTH exists to give young people a strong platform for personal growth,
              leadership formation, service, creativity, and digital readiness while staying
              connected to the wider SIBS International family.
            </p>
            <Link className="button secondary" href="/about">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="programs">
        <div className="section-heading">
          <p className="section-kicker">Programs</p>
          <h2>Built around the real ways young people grow.</h2>
        </div>
        <div className="program-grid">
          {programTeasers.map((program) => (
            <article className="program-card" key={program.title}>
              <span aria-hidden="true" />
              <h3>{program.title}</h3>
              <p>{program.summary}</p>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link className="button primary" href="/programs">
            See All 6 Programs
          </Link>
        </div>
      </section>

      <section className="impact">
        <div className="impact-copy">
          <p className="section-kicker">Impact Model</p>
          <h2>Learn. Lead. Serve. Build.</h2>
          <p>
            The first version of the SIBS YOUTH platform gives the organization a clear identity
            for recruiting, partnerships, events, and digital storytelling.
          </p>
        </div>
        <div className="metric-grid" aria-label="SIBS YOUTH impact highlights">
          {metrics.map(([number, label]) => (
            <div className="metric" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="events-teaser">
        <div>
          <p className="section-kicker">Events</p>
          <h2>Camps, showcases, and community action days.</h2>
          <p>
            See the kinds of gatherings SIBS YOUTH runs throughout the year and how to hear about
            what&apos;s coming up next.
          </p>
        </div>
        <Link className="button secondary" href="/events">
          View Events
        </Link>
      </section>

      <section className="connect">
        <div>
          <p className="section-kicker">Connect</p>
          <h2>Ready to launch the youth desk?</h2>
          <p>
            Use this identity for the official SIBS YOUTH launch, chapter introductions, mentor
            outreach, event promotion, and partnership conversations.
          </p>
        </div>
        <Link className="button primary" href="/contact">
          Get Involved
        </Link>
      </section>
    </main>
  );
}
