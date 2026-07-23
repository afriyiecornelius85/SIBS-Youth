import Link from "next/link";
import { LOCATION_LINES, LOCATION_NAME, PHONE_GLOBAL, PHONE_LOCAL } from "../lib/contact-info";
import { CONTACT_EMAIL, mailtoUrl } from "../lib/email";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="SIBS YOUTH home">
            <img src="/sibs-youth-mark.png" alt="" aria-hidden="true" />
            <span>
              <strong>SIBS</strong>
              <small>
                <em>Youth</em>
              </small>
            </span>
          </Link>
          <p>
            The youth movement of SIBS International, equipping young people with practical
            skills, mentorship, and real opportunities in agriculture, enterprise, sport, digital
            skills, financial literacy, and leadership.
          </p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Explore</p>
          <nav aria-label="Footer site sections">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Get in touch</p>

          <p className="footer-subheading">Call Us</p>
          <p className="footer-detail">{PHONE_LOCAL}</p>
          <p className="footer-detail">{PHONE_GLOBAL}</p>

          <p className="footer-subheading">Our Location</p>
          <p className="footer-detail">{LOCATION_NAME}</p>
          {LOCATION_LINES.map((line) => (
            <p key={line} className="footer-detail">
              {line}
            </p>
          ))}

          <p className="footer-subheading">Email Us</p>
          <a className="footer-detail" href={mailtoUrl({ subject: "SIBS YOUTH Inquiry" })}>
            {CONTACT_EMAIL}
          </a>

          <p className="footer-note">A youth movement under SIBS International.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Copyright &copy; {year} SIBS Youth. All Rights Reserved</span>
      </div>
    </footer>
  );
}
