import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About" },
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
              <small>YOUTH</small>
            </span>
          </Link>
          <p>
            Preparing young people to lead with character, serve with courage, build useful
            skills, and create positive change in their communities.
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
          <a href="mailto:afriyiecornelius85@gmail.com?subject=SIBS%20YOUTH%20Inquiry">
            afriyiecornelius85@gmail.com
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
