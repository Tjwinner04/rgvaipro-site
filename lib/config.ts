/**
 * Site-wide settings — edit here first.
 * Replace EXTERNAL_SAAS_APP_URL when your separate SaaS app is live.
 */
export const SITE_NAME = "RGV AI Pro";

/** Public marketing site URL (used for metadata). Update when you have a domain. */
export const SITE_URL = "https://www.rgvaipro.com";

/**
 * Separate SaaS product — this repo is only the marketing site.
 * Swap the URL below for your real app; no other search should be needed.
 */
export const EXTERNAL_SAAS_APP_URL = "https://app.example.com";

export const CONTACT_EMAIL = "hello@rgvaipro.com";

/**
 * n8n: contact form posts to `/api/contact`, which forwards JSON to your Webhook URL (server-side).
 *
 * In `.env.local` set one of:
 *   N8N_CONTACT_WEBHOOK_URL=https://...        (preferred — not exposed to the browser)
 *   NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL=https://...   (still works; used if secret not set)
 *
 * Restart `npm run dev` after changes.
 */
export const N8N_CONTACT_WEBHOOK_URL =
  typeof process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL === "string"
    ? process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL.trim()
    : "";
