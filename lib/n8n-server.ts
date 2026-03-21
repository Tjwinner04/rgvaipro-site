/**
 * Server-only: resolved at request time in Route Handlers.
 * Prefer `N8N_CONTACT_WEBHOOK_URL` so the URL is not shipped to the browser.
 */
export function getN8nContactWebhookUrl(): string {
  const secret = process.env.N8N_CONTACT_WEBHOOK_URL?.trim();
  const publicUrl = process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL?.trim();
  return secret || publicUrl || "";
}
