import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "../../lib/email";

const REASONS = ["Join as a member", "Volunteer / Mentor", "Partner with us", "General question"];

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  reason?: unknown;
  message?: unknown;
};

function isNonEmptyString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; cannot send contact form email.");
    return NextResponse.json(
      { ok: false, error: "Email isn't configured on the server yet. Please email us directly instead." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, email, reason, message } = body;

  if (
    !isNonEmptyString(name, 200) ||
    !isNonEmptyString(email, 200) ||
    !isNonEmptyString(message, 5000) ||
    !isNonEmptyString(reason, 100) ||
    !REASONS.includes(reason)
  ) {
    return NextResponse.json({ ok: false, error: "Please fill in every field." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ ok: false, error: "That email address doesn't look right." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "SIBS YOUTH Website <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `SIBS YOUTH — ${reason}`,
      text: `Name: ${name}\nEmail: ${email}\nReason: ${reason}\n\n${message}`,
    });

    if (error) {
      console.error("Resend rejected the contact form email:", error);
      return NextResponse.json(
        { ok: false, error: "Couldn't send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ ok: false, error: "Couldn't send your message. Please try again." }, { status: 500 });
  }
}
