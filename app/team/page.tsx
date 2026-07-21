import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The leaders of the SIBS International Global Youth Network, and the SIBS YOUTH chapter roles we're filling with mentors, coordinators, and volunteers.",
};

const networkLeaders = [
  {
    name: "Highly Esteemed Amb. Clinton Arko Agyemang",
    title: "Commander-in-Chief",
    summary: "Sets the overall vision and direction for the SIBS International Global Youth Network.",
    photo: "/team/clinton-arko-agyemang.jpg",
  },
  {
    name: "Miss Stephanie Ankrah",
    title: "Second-in-Command",
    summary: "Deputizes for the Commander-in-Chief and helps coordinate the network's chapters and departments.",
    photo: "/team/stephanie-ankrah.jpg",
  },
  {
    name: "Ambassador Afriyie Cornelius",
    title: "Chief Projects Manager and IT Lead",
    summary: "Runs the network's key projects end to end and leads its technology and digital systems.",
    photo: "/team/afriyie-cornelius.jpg",
  },
  {
    name: "Pastor Priscilla Mensah",
    title: "General – Operations and Management",
    summary: "Oversees daily operations, keeping the network's teams, resources, and processes running smoothly.",
    photo: "/team/priscilla-mensah.jpg",
  },
  {
    name: "Amb. Prince Kofi Amanpeni",
    title: "General – Agriculture",
    summary: "Leads the network's agriculture initiatives, building skills and opportunity in farming and agribusiness.",
    photo: "/team/prince-kofi-amanpeni.jpg",
  },
  {
    name: "Abubakar Mustafa",
    title: "General – Research and Development",
    summary: "Heads research and development, testing new ideas before they scale across the network.",
    photo: "/team/abubakar-mustafa.jpg",
  },
];

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
          SIBS YOUTH is part of the SIBS International Global Youth Network. Below, meet the
          network&apos;s leadership, followed by the SIBS YOUTH chapter roles we&apos;re still
          filling with mentors, coordinators, and volunteers as we launch.
        </p>
      </section>

      <section className="values-section">
        <Reveal>
          <div className="section-heading">
            <p className="section-kicker">Network Leadership</p>
            <h2>The heads of the SIBS International Global Youth Network.</h2>
          </div>
        </Reveal>
        <Reveal stagger>
          <div className="leader-grid">
            {networkLeaders.map((leader) => (
              <article className="leader-card" key={leader.name}>
                <img className="leader-photo" src={leader.photo} alt={leader.name} />
                <h3>{leader.name}</h3>
                <p className="leader-title">{leader.title}</p>
                <p className="leader-summary">{leader.summary}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="roles-section">
        <Reveal>
          <div className="section-heading">
            <p className="section-kicker">SIBS Youth Chapter Roles</p>
            <h2>Who runs SIBS YOUTH day to day.</h2>
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
