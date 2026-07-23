import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Events",
  description:
    "The kinds of gatherings SIBS YOUTH runs throughout the year, and how to find out what's coming up next.",
};

const eventTypes = [
  {
    title: "Community Action Days",
    description:
      "Youth teams identify a local need, organize volunteers, and deliver a service project in a single focused day.",
  },
  {
    title: "Youth Camps & Showcases",
    description:
      "Multi-day gatherings built around leadership training, creative showcases, and connection across chapters.",
  },
  {
    title: "Mentorship Meetups",
    description:
      "Regular small-group sessions where members sit down with mentors, alumni, and professionals for guidance.",
  },
];

export default function EventsPage() {
  return (
    <main>
      <section className="page-hero events-hero">
        <p className="section-kicker">Events</p>
        <h1>Camps, showcases, and community action days.</h1>
        <p className="hero-lede">
          SIBS YOUTH events bring the six program pillars to life. Here&apos;s what to expect from
          the calendar as chapters launch and grow.
        </p>
      </section>

      <section className="event-types-section">
        <Reveal>
          <div className="section-heading">
            <p className="section-kicker">What We Run</p>
            <h2>Recurring event types.</h2>
          </div>
        </Reveal>
        <Reveal stagger>
          <div className="event-types-grid">
            {eventTypes.map((event) => (
              <article className="event-type-card" key={event.title}>
                <span aria-hidden="true" />
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="events-empty-state">
          <h2>No events are scheduled yet.</h2>
          <p>
            As chapters launch, dates will be posted here first. In the meantime, reach out and
            we&apos;ll let you know what&apos;s being planned and how to get on the list.
          </p>
          <Link className="button primary" href="/contact">
            Ask About Upcoming Events
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
