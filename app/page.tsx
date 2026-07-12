import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";

const programTeasers = [
  {
    title: "Football Academy",
    summary:
      "A youth football academy where promising players train, compete, and get scouted for what comes next.",
  },
  {
    title: "Cape Coast Commerce & Entrepreneurship",
    summary:
      "Opening up Cape Coast, Ghana to more opportunity in commerce and entrepreneurship for young people.",
  },
  {
    title: "Digital Skills",
    summary:
      "Hands-on learning for technology, media, design, and the tools young leaders need in a changing world.",
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
        <HeroSlideshow />
      </section>

      <section className="mission-band">
        <div className="section-kicker">Mission</div>
        <div className="mission-layout">
          <h2>Youth with purpose, skill, and a place to belong.</h2>
          <div>
            <p>
              SIBS YOUTH is a subsidiary of SIBS International, preparing young people for future
              careers through leadership, digital skills, a football academy, and community
              projects &mdash; including the drive to open up Cape Coast, Ghana to more
              opportunity in commerce and entrepreneurship.
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
            From the training pitch to the marketplace, SIBS YOUTH gives young people real
            responsibility &mdash; whether that&apos;s a spot on the football academy roster, a
            stake in Cape Coast&apos;s growing commerce scene, or a leadership role in their own
            community.
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
