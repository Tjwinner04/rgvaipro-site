import Link from "next/link";
import type { ReactNode } from "react";

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
