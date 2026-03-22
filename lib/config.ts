/**
 * Site-wide settings — edit here first.
 * Replace EXTERNAL_SAAS_APP_URL when your separate SaaS app is live.
 */
export const SITE_NAME = "RGV AI Pro";

/** Public marketing site URL (used for metadata). Update when you have a domain. */
export const SITE_URL = "https://www.rgvaipro.com";

/**
 * Separate SaaS product — this repo is only the marketing site.
 * Set `SAAS_APP_COMING_SOON` to false and put your real app URL in `EXTERNAL_SAAS_APP_URL` when live.
 */
export const EXTERNAL_SAAS_APP_URL = "https://app.example.com";

/** When true, SaaS links show “Coming soon” and do not navigate (avoids broken placeholder URLs). */
export const SAAS_APP_COMING_SOON = true;

export const CONTACT_EMAIL = "rafael@rgvaipro.com";

/**
 * Shown in the header, footer, and contact page. Override with `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local`.
 */
export const CONTACT_EMAIL_PUBLIC =
  (typeof process.env.NEXT_PUBLIC_CONTACT_EMAIL === "string" &&
    process.env.NEXT_PUBLIC_CONTACT_EMAIL.trim()) ||
  CONTACT_EMAIL;

/**
 * Display string. Override with `NEXT_PUBLIC_CONTACT_PHONE` in `.env.local` if needed.
 */
export const CONTACT_PHONE =
  (typeof process.env.NEXT_PUBLIC_CONTACT_PHONE === "string" && process.env.NEXT_PUBLIC_CONTACT_PHONE.trim()) ||
  "956-502-0132";

/** Full profile URLs. Set matching `NEXT_PUBLIC_SOCIAL_*` vars in `.env.local`; empty = icon hidden. */
export const SOCIAL_URLS = {
  tiktok:
    (typeof process.env.NEXT_PUBLIC_SOCIAL_TIKTOK === "string" && process.env.NEXT_PUBLIC_SOCIAL_TIKTOK.trim()) ||
    "",
  instagram:
    (typeof process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM === "string" &&
      process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM.trim()) ||
    "",
  facebook:
    (typeof process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK === "string" &&
      process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK.trim()) ||
    "",
  youtube:
    (typeof process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE === "string" &&
      process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE.trim()) ||
    "",
} as const;

/** Build `tel:` href from a display phone string (US-friendly: 10 digits → +1). */
export function phoneToTelHref(displayPhone: string): string {
  const digits = displayPhone.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `tel:+${digits}`;
  if (digits.length > 0) return `tel:+${digits}`;
  return "#";
}

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
