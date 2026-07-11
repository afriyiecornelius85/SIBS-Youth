import type { Metadata } from "next";
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
        <a
          className="button primary"
          href="mailto:afriyiecornelius85@gmail.com?subject=SIBS%20YOUTH%20Inquiry"
        >
          Email Us Directly
        </a>
      </section>

      <section className="contact-form-section">
        <div className="section-heading">
          <p className="section-kicker">Or Send a Message</p>
          <h2>Tell us how you&apos;d like to be involved.</h2>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
