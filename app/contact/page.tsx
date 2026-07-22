import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import { LOCATION_LINES, LOCATION_NAME, PHONE_GLOBAL, PHONE_LOCAL } from "../lib/contact-info";
import { CONTACT_EMAIL, mailtoUrl } from "../lib/email";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SIBS YOUTH to join a program, volunteer, mentor, or partner with the movement.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-hero">
        <p className="section-kicker">Get Involved</p>
        <h1>Ready to launch the youth desk?</h1>
        <p className="hero-lede">
          Use this identity for the official SIBS YOUTH launch, chapter introductions, mentor
          outreach, event promotion, and partnership conversations.
        </p>
      </section>

      <section className="contact-form-section">
        <Reveal variant="left">
          <div className="contact-info-col">
            <h2>Contact Us</h2>

            <div className="contact-block">
              <h3>Call Us</h3>
              <p className="contact-label">Phone</p>
              <p className="contact-value">{PHONE_LOCAL}</p>
              <p className="contact-label">Global</p>
              <p className="contact-value">{PHONE_GLOBAL}</p>
            </div>

            <div className="contact-block">
              <h3>Our Location</h3>
              <p className="contact-value contact-value-strong">{LOCATION_NAME}</p>
              {LOCATION_LINES.map((line) => (
                <p key={line} className="contact-value">
                  {line}
                </p>
              ))}
            </div>

            <div className="contact-block">
              <h3>Email Us</h3>
              <p className="contact-label">Email</p>
              <a className="contact-value contact-email-link" href={mailtoUrl({ subject: "SIBS YOUTH Inquiry" })}>
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right">
          <div className="contact-form-col">
            <h2>Write Us</h2>
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
