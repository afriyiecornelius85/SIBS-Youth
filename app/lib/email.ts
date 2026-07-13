export const CONTACT_EMAIL = "afriyiecornelius85@gmail.com";

/** Builds a Gmail web compose link so "email us" opens Gmail directly instead of relying on the visitor's OS mail handler. */
export function gmailComposeUrl(options: { subject?: string; body?: string } = {}): string {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: CONTACT_EMAIL });
  if (options.subject) params.set("su", options.subject);
  if (options.body) params.set("body", options.body);

  return `https://mail.google.com/mail/?${params.toString()}`;
}
