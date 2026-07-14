import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The leadership roles behind SIBS YOUTH, and how to join as a mentor, coordinator, or volunteer.",
};

const roles = [
  {
    title: "Program Director",
    summary: "Sets the direction across all six program pillars and reports back to SIBS International.",
  },
  {
    title: "Mentorship Lead",
    summary: "Pairs members with mentors, alumni, and professionals and keeps Mentorship Circles running.",
  },
  {
    title: "Digital Skills Coordinator",
    summary: "Runs the Digital Skills track and keeps the tools and curriculum current.",
  },
  {
    title: "Events & Partnerships Lead",
    summary: "Plans camps and community action days and builds relationships with chapters and partners.",
  },
];

export default function TeamPage() {
  return (
    <main>
      <section className="page-hero team-hero">
        <p className="section-kicker">Team</p>
        <h1>Meet the people building SIBS YOUTH.</h1>
        <p className="hero-lede">
          The team is still being assembled. Here are the leadership roles we&apos;re filling with
          mentors, coordinators, and volunteers as chapters launch.
        </p>
      </section>

      <section className="values-section">
        <Reveal>
          <div className="section-heading">
            <p className="section-kicker">Leadership Roles</p>
            <h2>Who runs the movement.</h2>
          </div>
        </Reveal>
        <Reveal stagger>
          <div className="values-grid">
            {roles.map((role) => (
              <article className="value-card" key={role.title}>
                <h3>{role.title}</h3>
                <p>{role.summary}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="connect">
          <div>
            <p className="section-kicker">Join the Team</p>
            <h2>Want to lead, mentor, or coordinate?</h2>
            <p>
              Reach out and tell us which role fits &mdash; we&apos;re actively recruiting mentors
              and coordinators for the launch.
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
