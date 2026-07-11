import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "../components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "The six program pillars SIBS YOUTH runs to build leadership, digital skills, service, mentorship, creativity, and community.",
};

const programs = [
  {
    title: "Leadership Labs",
    summary:
      "Practical sessions that help young people build confidence, communication, planning, and responsibility.",
    detail:
      "Cohort-based workshops where participants practice public speaking, run small projects, and take on real responsibility with feedback from peers and mentors along the way.",
    audience: "Teens and young adults ready to step into their first leadership role.",
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
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="6" y="10" width="36" height="22" rx="2" />
        <path d="M18 40h12M24 32v8" />
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
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="17" cy="18" r="7" />
        <circle cx="31" cy="18" r="7" />
        <path d="M6 40c0-7 5-11 11-11s11 4 11 11M20 40c0-7 5-11 11-11s11 4 11 11" />
      </svg>
    ),
  },
  {
    title: "Creative Fellowship",
    summary:
      "A home for music, writing, visual storytelling, events, and the creative gifts that bring young people together.",
    detail:
      "A gathering place for musicians, writers, designers, and storytellers to share work, collaborate, and showcase what they make.",
    audience: "Creatives looking for a community and a stage.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 6 30 18 43 20 33.5 29 36 42 24 35.5 12 42l2.5-13L5 20l13-2Z" />
      </svg>
    ),
  },
  {
    title: "Youth Events",
    summary:
      "Gatherings, talks, camps, and showcases designed to inspire commitment, friendship, and purpose.",
    detail:
      "Camps, talks, and showcases throughout the year built to inspire commitment, build friendships, and celebrate what the movement is accomplishing.",
    audience: "The whole SIBS YOUTH community, chapters, and families.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="7" y="10" width="34" height="30" rx="3" />
        <path d="M7 19h34M15 6v8M33 6v8" />
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
            <ImagePlaceholder label={`${program.title} photo`} aspect="wide" />
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
