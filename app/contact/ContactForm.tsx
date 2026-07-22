"use client";

import { useState, type FormEvent } from "react";
import { mailtoUrl } from "../lib/email";

const reasons = ["Join as a member", "Volunteer / Mentor", "Partner with us", "General question"];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState(reasons[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, reason, message }),
      });
      const data = await response.json().catch(() => ({ ok: false }));

      if (!response.ok || !data.ok) {
        setErrorMessage(data.error || "Couldn't send your message. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setReason(reasons[0]);
      setMessage("");
    } catch {
      setErrorMessage("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form-success">
        <h3>Message sent.</h3>
        <p>Thanks for reaching out &mdash; we&apos;ll get back to you soon.</p>
        <button type="button" className="button secondary" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={sending}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={sending}
        />
      </label>

      <label>
        Reason
        <select
          name="reason"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          disabled={sending}
        >
          {reasons.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        Message
        <textarea
          name="message"
          rows={5}
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          disabled={sending}
        />
      </label>

      <button type="submit" className="button primary" disabled={sending}>
        {sending ? "Sending…" : "Send Message"}
      </button>

      {status === "error" ? (
        <p className="form-note form-note-error">
          {errorMessage} You can also{" "}
          <a
            href={mailtoUrl({
              subject: `SIBS YOUTH — ${reason}`,
              body: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            })}
          >
            email us directly
          </a>
          .
        </p>
      ) : (
        <p className="form-note">We&apos;ll reply to the email address you provide.</p>
      )}
    </form>
  );
}
