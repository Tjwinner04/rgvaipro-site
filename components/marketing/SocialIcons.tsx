import { SITE_NAME, SOCIAL_URLS } from "@/lib/config";

const iconClass = "h-5 w-5";

function TikTokIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25v-.71a.5.5 0 0 0-.5-.5h-3.13v13.65a2.9 2.9 0 0 1-2.88 2.91 2.9 2.9 0 0 1-2.52-4.33 2.89 2.89 0 0 1 2.52-1.48c.27 0 .53.04.78.11v-3.2a6.27 6.27 0 0 0-.78-.05 6.36 6.36 0 1 0 6.36 6.36V8.83a8.05 8.05 0 0 0 4.77 1.55v-3.5a4.89 4.89 0 0 1-1.63-.19z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const items = [
  { key: "tiktok" as const, label: "TikTok", href: SOCIAL_URLS.tiktok, Icon: TikTokIcon },
  { key: "instagram" as const, label: "Instagram", href: SOCIAL_URLS.instagram, Icon: InstagramIcon },
  { key: "facebook" as const, label: "Facebook", href: SOCIAL_URLS.facebook, Icon: FacebookIcon },
  { key: "youtube" as const, label: "YouTube", href: SOCIAL_URLS.youtube, Icon: YouTubeIcon },
];

type SocialIconsProps = {
  className?: string;
};

export function SocialIcons({ className = "" }: SocialIconsProps) {
  const visible = items.filter((i) => i.href.length > 0);
  if (visible.length === 0) return null;

  return (
    <div className={`flex items-center gap-1 ${className}`.trim()}>
      {visible.map(({ key, label, href, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${SITE_NAME} — ${label}`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-200/80 hover:text-slate-900"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
