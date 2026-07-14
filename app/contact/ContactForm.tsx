"use client";

import { useState, type FormEvent } from "react";
import { gmailComposeUrl } from "../lib/email";

const reasons = ["Join as a member", "Volunteer / Mentor", "Partner with us", "General question"];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState(reasons[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `SIBS YOUTH — ${reason}`;
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    window.open(gmailComposeUrl({ subject, body }), "_blank", "noopener,noreferrer");
  }

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
        />
      </label>

      <label>
        Reason
        <select
          name="reason"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
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
        />
      </label>

      <button type="submit" className="button primary">
        Send Message
      </button>
      <p className="form-note">
        This opens Gmail in a new tab with your message pre-filled &mdash; nothing is sent
        automatically.
      </p>
    </form>
  );
}
