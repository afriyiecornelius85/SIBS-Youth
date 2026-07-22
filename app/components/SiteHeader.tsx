"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={["site-header", isHome ? "home" : "", scrolled ? "scrolled" : ""]
        .filter(Boolean)
        .join(" ")}
      aria-label="Primary navigation"
    >
      <div className="site-header-bar">
        <Link className="brand" href="/" aria-label="SIBS YOUTH home">
          <img src="/sibs-youth-mark.png" alt="" aria-hidden="true" />
          <span>
            <strong>SIBS</strong>
            <small>
              <em>Youth</em>
            </small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Site sections">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "nav-link active" : "nav-link"}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className={menuOpen ? "menu-toggle open" : "menu-toggle"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"} id="mobile-menu">
        <nav aria-label="Mobile site sections">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
