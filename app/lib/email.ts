export const CONTACT_EMAIL = "afriyiecornelius85@gmail.com";

/** Builds a mailto: link so "email us" opens the visitor's own mail app, prefilled. */
export function mailtoUrl(options: { subject?: string; body?: string } = {}): string {
  const params: string[] = [];
  if (options.subject) params.push(`subject=${encodeURIComponent(options.subject)}`);
  if (options.body) params.push(`body=${encodeURIComponent(options.body)}`);

  const query = params.length > 0 ? `?${params.join("&")}` : "";
  return `mailto:${CONTACT_EMAIL}${query}`;
}
