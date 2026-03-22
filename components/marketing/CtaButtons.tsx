import Link from "next/link";
import type { ReactNode } from "react";
import { EXTERNAL_SAAS_APP_URL, SAAS_APP_COMING_SOON } from "@/lib/config";

type PrimaryProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function CtaPrimary({ href, children, className = "" }: PrimaryProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${className}`}
    >
      {children}
    </Link>
  );
}

type SecondaryProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function CtaSecondary({ href, children, external, className = "" }: SecondaryProps) {
  const base =
    "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
    </Link>
  );
}

type SaasToolButtonProps = {
  /** `light` = hero / white areas; `dark` = slate-900 band */
  variant?: "light" | "dark";
  className?: string;
};

/** SaaS product CTA: real link when live, disabled “Coming soon” pill when `SAAS_APP_COMING_SOON`. */
export function SaasToolButton({ variant = "light", className = "" }: SaasToolButtonProps) {
  if (SAAS_APP_COMING_SOON) {
    const soonBase =
      variant === "dark"
        ? "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-300"
        : "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-500 shadow-sm";
    return (
      <span
        className={`${soonBase} cursor-default ${className}`}
        role="status"
        aria-label="SaaS tool — coming soon"
      >
        Open the SaaS Tool
        <span className="text-xs font-medium opacity-80">Coming soon</span>
      </span>
    );
  }

  const darkClasses =
    variant === "dark"
      ? "!border-white/40 !bg-transparent !text-white hover:!bg-white/10"
      : "";

  return (
    <CtaSecondary
      href={EXTERNAL_SAAS_APP_URL}
      external
      className={`${darkClasses} ${className}`.trim()}
    >
      Open the SaaS Tool
    </CtaSecondary>
  );
}
