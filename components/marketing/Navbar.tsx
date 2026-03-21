import Link from "next/link";
import { navLinks } from "@/content/marketing";
import { EXTERNAL_SAAS_APP_URL, SITE_NAME } from "@/lib/config";
import { CtaPrimary } from "./CtaButtons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-lg font-semibold tracking-tight text-slate-900">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={EXTERNAL_SAAS_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline"
          >
            Open app
          </a>
          <CtaPrimary href="/#contact-form">Get a Free Consultation</CtaPrimary>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <CtaPrimary href="/#contact-form" className="!px-4 !py-2 text-xs sm:text-sm">
            Consultation
          </CtaPrimary>
          <details className="relative">
            <summary className="list-none cursor-pointer rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={EXTERNAL_SAAS_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Open the SaaS Tool
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
