import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";
import Reveal from "./components/Reveal";

const programTeasers = [
  {
    title: "Agriculture",
    summary:
      "Modern agribusiness — crop and poultry farming, food processing, and agricultural marketing, not just farming.",
  },
  {
    title: "Entrepreneurship & Business",
    summary:
      "Hands-on help shaping, testing, and growing a real business idea, from pricing to your first pitch.",
  },
  {
    title: "Football & Sports Development",
    summary:
      "Structured training, matches, and talent identification, open to and supported for young women too.",
  },
];

const metrics = [
  ["6", "program pillars"],
  ["6", "core values"],
  ["100%", "youth focused"],
  ["1", "shared mission"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <HeroSlideshow />
      </section>

      <Reveal>
        <section className="mission-band">
          <div className="section-kicker">Welcome</div>
          <div className="mission-layout">
            <h2>Young people aren&apos;t the leaders of tomorrow. They&apos;re already leading today.</h2>
            <div>
              <p>
                SIBS YOUTH gives young people that place. We bring together students,
                school-leavers, young farmers, footballers, creators, and future business owners
                &mdash; and back them with training, mentorship, and real projects they own from
                day one. This isn&apos;t a club you join to be talked at. It&apos;s a movement you
                join to build something.
              </p>
              <Link className="button secondary" href="/about">
                Read Our Story
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="difference">
          <div className="section-heading">
            <p className="section-kicker">What Makes Us Different</p>
            <h2>A project and a pathway to lead it, not just a certificate.</h2>
          </div>
          <p>
            Most youth programs hand young people a certificate. SIBS YOUTH hands them a project,
            a team, and a pathway to lead it &mdash; inside a wider network of farms, businesses,
            and partners through SIBS International. That combination of hands-on projects, real
            economic sectors, and youth-led structure is what sets us apart.
          </p>
        </section>
      </Reveal>

      <section className="programs">
        <Reveal>
          <div className="section-heading">
            <p className="section-kicker">Programs</p>
            <h2>One flagship, six connected pathways.</h2>
          </div>
        </Reveal>
        <Reveal stagger>
          <div className="program-grid">
            {programTeasers.map((program) => (
              <article className="program-card" key={program.title}>
                <span aria-hidden="true" />
                <h3>{program.title}</h3>
                <p>{program.summary}</p>
              </article>
            ))}
          </div>
        </Reveal>
        <div className="section-cta">
          <Link className="button primary" href="/programs">
            See All 6 Programs
          </Link>
        </div>
      </section>

      <section className="impact">
        <Reveal variant="left">
          <div className="impact-copy">
            <p className="section-kicker">Impact Model</p>
            <h2>Learn. Build. Lead.</h2>
            <p>
              From the training pitch to the marketplace and the farm, SIBS YOUTH gives young
              people real responsibility &mdash; whether that&apos;s a spot on the football
              roster, a stake in a business or agribusiness project, or a leadership role in
              their own community.
            </p>
          </div>
        </Reveal>
        <Reveal stagger variant="right">
          <div className="metric-grid" aria-label="SIBS YOUTH impact highlights">
            {metrics.map(([number, label]) => (
              <div className="metric" key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="events-teaser">
          <div>
            <p className="section-kicker">Events</p>
            <h2>Camps, showcases, and community action days.</h2>
            <p>
              See the kinds of gatherings SIBS YOUTH runs throughout the year and how to hear
              about what&apos;s coming up next.
            </p>
          </div>
          <Link className="button secondary" href="/events">
            View Events
          </Link>
        </section>
      </Reveal>

      <Reveal>
        <section className="connect">
          <div>
            <p className="section-kicker">Join Us</p>
            <h2>Your ideas deserve a platform.</h2>
            <p>
              Your talent deserves backing. Join SIBS YOUTH and help build the next generation
              &mdash; starting with your own future.
            </p>
          </div>
          <Link className="button primary" href="/contact">
            Join SIBS Youth
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
