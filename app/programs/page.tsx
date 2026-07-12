import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "The six program pillars SIBS YOUTH runs: leadership, digital skills, a football academy, the Cape Coast commerce and entrepreneurship initiative, service, and mentorship.",
};

const programs = [
  {
    title: "Leadership Labs",
    summary:
      "Practical sessions that help young people build confidence, communication, planning, and responsibility.",
    detail:
      "Cohort-based workshops where participants practice public speaking, run small projects, and take on real responsibility with feedback from peers and mentors along the way.",
    audience: "Teens and young adults ready to step into their first leadership role.",
    image: "/leadership-labs.jpg",
    imageAlt: "Young man speaking into a microphone at a leadership session",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="16" r="8" />
        <path d="M8 40c0-8.8 7.2-14 16-14s16 5.2 16 14" />
      </svg>
    ),
  },
  {
    title: "Digital Skills",
    summary:
      "Hands-on learning for technology, media, design, and the tools young leaders need in a changing world.",
    detail:
      "Guided practice with the software, media, and design tools young people need to create, communicate, and compete in a digital-first world.",
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
    title: "Football Academy",
    summary:
      "A youth football academy where players with talent train, compete, and get seen.",
    detail:
      "Structured training sessions and matches that give promising young players a real path to develop their game, build discipline, and get scouted for what comes next.",
    audience: "Young footballers ready to take their talent to the next level.",
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
    title: "Cape Coast Commerce & Entrepreneurship",
    summary:
      "Opening up Cape Coast, Ghana to more opportunity in commerce and entrepreneurship for young people.",
    detail:
      "A SIBS International initiative helping young people in Cape Coast start and grow businesses, connecting them to markets, mentors, and the skills commerce takes.",
    audience: "Young entrepreneurs and traders building opportunity in Cape Coast.",
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
    title: "Service Projects",
    summary:
      "Community action days where youth teams identify needs, organize volunteers, and deliver measurable help.",
    detail:
      "Teams identify a real need in their community, plan the response, organize volunteers, and deliver a project with a measurable outcome start to finish.",
    audience: "Groups who want to turn a good idea into action on the ground.",
    image: "/service-projects.jpg",
    imageAlt: "A volunteer leading a group of children in a community activity",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 40S8 30 8 18a8 8 0 0 1 16-2 8 8 0 0 1 16 2c0 12-16 22-16 22Z" />
      </svg>
    ),
  },
  {
    title: "Mentorship Circles",
    summary:
      "Guided conversations with trusted adults, alumni, and professionals who can open doors and steady the journey.",
    detail:
      "Small-group conversations pairing young people with trusted adults, alumni, and professionals for steady guidance, honest feedback, and real connections.",
    audience: "Anyone who wants a trusted adult in their corner.",
    image: "/mentorship-circles.jpg",
    imageAlt: "A group of professionals having a conversation",
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
        <h1>Built around the real ways young people grow.</h1>
        <p className="hero-lede">
          Six pillars, one mission: give young people practical skills, real responsibility, and a
          community that pushes them forward.
        </p>
      </section>

      <section className="program-detail-list">
        {programs.map((program, index) => (
          <article
            className={index % 2 === 1 ? "program-detail-row reverse" : "program-detail-row"}
            key={program.title}
          >
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
            <img className="program-detail-photo" src={program.image} alt={program.imageAlt} />
          </article>
        ))}
      </section>

      <section className="connect">
        <div>
          <p className="section-kicker">Join a Program</p>
          <h2>Ready to find your pillar?</h2>
          <p>Tell us which program fits and we&apos;ll help you find your place in it.</p>
        </div>
        <Link className="button primary" href="/contact">
          Get Involved
        </Link>
      </section>
    </main>
  );
}
