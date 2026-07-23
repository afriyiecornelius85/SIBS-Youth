import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "The six connected pathways SIBS YOUTH runs: agriculture, entrepreneurship and business, football and sports development, digital skills, financial literacy, and leadership and mentorship.",
};

const programs = [
  {
    title: "Agriculture",
    summary:
      "Modern agribusiness — crop and poultry farming, food processing, and agricultural marketing, not just farming.",
    detail:
      "We show young people that agriculture is a modern business, not just farming, but production, processing, packaging, marketing, and investment. Members train in a chosen area and work on a real farm or agribusiness project.",
    audience: "Young people who see opportunity in farming, food, and agribusiness.",
    image: "/cape-coast.jpg",
    imageAlt: "Scenic view over Cape Coast, Ghana",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 42V22" />
        <path d="M24 22C24 15 18 11 11 11c0 7 6 11 13 11Z" />
        <path d="M24 26c0-6 6-9 12-9 0 6-6 9-12 9Z" />
        <path d="M10 42h28" />
      </svg>
    ),
  },
  {
    title: "Entrepreneurship & Business",
    summary:
      "Hands-on help shaping, testing, and growing a real business idea, from pricing to your first pitch.",
    detail:
      "For young people with a business or a business idea, we help you shape it, test it, and grow it — covering business planning, pricing, branding, sales, digital marketing, record-keeping, and pitching.",
    audience: "Young entrepreneurs and traders building a real business.",
    image: "/commerce-entrepreneurship.jpg",
    imageAlt: "Street vendor displaying goods at a market",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M6 18l3-8h30l3 8" />
        <path d="M6 18v20h36V18" />
        <path d="M18 38V26h12v12" />
        <path d="M6 18h36" />
      </svg>
    ),
  },
  {
    title: "Football & Sports Development",
    summary:
      "Structured training, matches, and talent identification, open to and supported for young women too.",
    detail:
      "Football as a pathway to discipline, teamwork, and real opportunity: structured training, fitness sessions, tournaments, trials, and scouting links, with mentorship on and off the pitch. Girls' and young women's teams are welcome and supported.",
    audience: "Young footballers of any gender ready to take their talent further.",
    image: "/football-academy.jpg",
    imageAlt: "Youth football players training on a dirt pitch",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 15l6.5 4.7-2.5 7.6h-8l-2.5-7.6z" />
        <path d="M24 15V9M30.5 19.7l5-3.5M17.5 19.7l-5-3.5M20 27.3l-2 6M28 27.3l2 6" />
      </svg>
    ),
  },
  {
    title: "Digital Skills & Innovation",
    summary:
      "Practical digital skills for work, business, and communication — the ones that actually get you hired or earning online.",
    detail:
      "Guided practice with computer basics, graphic design basics, social media management, digital marketing, and online business tools — the practical digital skills that actually get young people hired or earning online.",
    audience: "Youth building the tech and media skills to match their ambition.",
    image: "/digital-skills.jpg",
    imageAlt: "Young professional working on a laptop in a training room",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="6" y="10" width="36" height="22" rx="2" />
        <path d="M18 40h12M24 32v8" />
      </svg>
    ),
  },
  {
    title: "Financial Literacy & Savings",
    summary:
      "Learn to budget, save, spend responsibly, and plan ahead — the skills that protect and grow what you earn.",
    detail:
      "Financial literacy comes first: budgeting, saving, responsible spending, and planning ahead. This is education, not a promise of funding — the skills that protect and grow whatever money a young person earns.",
    audience: "Anyone who wants to build good money habits early.",
    image: "/mentorship-circles.jpg",
    imageAlt: "A group of professionals having a conversation",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="18" cy="28" r="10" />
        <circle cx="30" cy="20" r="10" />
      </svg>
    ),
  },
  {
    title: "Leadership & Mentorship",
    summary:
      "Paired with experienced mentors, and built up through workshops, public speaking, and real leadership roles.",
    detail:
      "Every member is paired into the mentorship network, connected to experienced farmers, entrepreneurs, coaches, and professionals — with leadership workshops, public speaking, goal-setting, and community leadership roles along the way.",
    audience: "Anyone who wants a trusted mentor and a real leadership role.",
    image: "/leadership-labs.jpg",
    imageAlt: "Young man speaking into a microphone at a leadership session",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="17" cy="18" r="7" />
        <circle cx="31" cy="18" r="7" />
        <path d="M6 40c0-7 5-11 11-11s11 4 11 11M20 40c0-7 5-11 11-11s11 4 11 11" />
      </svg>
    ),
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <section className="page-hero programs-hero">
        <p className="section-kicker">Programs</p>
        <h1>One flagship, six connected pathways.</h1>
        <p className="hero-lede">
          Every pathway feeds the same goal: a young person who can earn, lead, and give back.
        </p>
      </section>

      <section className="program-detail-list">
        {programs.map((program, index) => {
          const reversed = index % 2 === 1;
          return (
            <article
              className={reversed ? "program-detail-row reverse" : "program-detail-row"}
              key={program.title}
            >
              <Reveal variant={reversed ? "right" : "left"}>
                <div className="program-detail-copy">
                  <span className="program-icon" aria-hidden="true">
                    {program.icon}
                  </span>
                  <h2>{program.title}</h2>
                  <p>{program.detail}</p>
                  <p className="program-audience">
                    <strong>Who it&apos;s for: </strong>
                    {program.audience}
                  </p>
                </div>
              </Reveal>
              <Reveal variant={reversed ? "left" : "right"}>
                <img className="program-detail-photo" src={program.image} alt={program.imageAlt} />
              </Reveal>
            </article>
          );
        })}
      </section>

      <Reveal>
        <section className="connect">
          <div>
            <p className="section-kicker">Join a Program</p>
            <h2>Ready to find your pathway?</h2>
            <p>Tell us which pathway fits and we&apos;ll help you find your place in it.</p>
          </div>
          <Link className="button primary" href="/contact">
            Get Involved
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
