import Link from "next/link";
import { navLinks } from "@/content/marketing";
import {
  CONTACT_EMAIL_PUBLIC,
  CONTACT_PHONE,
  EXTERNAL_SAAS_APP_URL,
  phoneToTelHref,
  SAAS_APP_COMING_SOON,
  SITE_NAME,
} from "@/lib/config";
import { CtaPrimary } from "./CtaButtons";
import { SocialIcons } from "./SocialIcons";

export function Navbar() {
  const telHref = CONTACT_PHONE ? phoneToTelHref(CONTACT_PHONE) : "";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="border-b border-slate-200/70 bg-slate-50/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-end gap-x-4 gap-y-2 px-4 py-2 text-sm md:px-6 lg:px-8">
          {CONTACT_PHONE ? (
            telHref !== "#" ? (
              <a
                href={telHref}
                className="shrink-0 font-bold text-slate-900 hover:text-slate-700"
              >
                {CONTACT_PHONE}
              </a>
            ) : (
              <span className="shrink-0 font-bold text-slate-900">{CONTACT_PHONE}</span>
            )
          ) : null}
          <a
            href={`mailto:${CONTACT_EMAIL_PUBLIC}`}
            className="shrink-0 text-slate-600 underline-offset-2 hover:text-slate-900 hover:underline"
          >
            {CONTACT_EMAIL_PUBLIC}
          </a>
          <SocialIcons className="shrink-0" />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 px-4 py-3 md:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-x-6 lg:px-8 xl:gap-x-8">
        <Link
          href="/"
          className="col-start-1 row-start-1 shrink-0 justify-self-start pr-2 text-lg font-semibold tracking-tight text-slate-900"
        >
          {SITE_NAME}
        </Link>

        <nav
          className="relative z-10 col-span-2 hidden min-h-10 min-w-0 items-center justify-center justify-self-stretch overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:flex lg:pl-1 [&::-webkit-scrollbar]:hidden"
          aria-label="Main"
        >
          <div className="flex shrink-0 items-center gap-0.5 px-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 xl:px-3"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:col-start-3 lg:row-start-1 lg:flex xl:gap-3">
          {SAAS_APP_COMING_SOON ? (
            <span
              className="inline-flex h-10 items-center whitespace-nowrap text-sm font-medium text-slate-400"
              title="Coming soon"
            >
              Open app · Coming soon
            </span>
          ) : (
            <a
              href={EXTERNAL_SAAS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center whitespace-nowrap text-sm font-semibold text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline"
            >
              Open app
            </a>
          )}
          <CtaPrimary
            href="/#contact-form"
            className="!h-10 !min-h-0 shrink-0 !py-0 whitespace-nowrap !px-4 xl:!px-5"
          >
            Get a Free Consultation
          </CtaPrimary>
        </div>

        <div className="col-start-2 row-start-1 flex items-center justify-self-end gap-2 lg:hidden">
          <CtaPrimary href="/#contact-form" className="!px-4 !py-2 text-xs sm:text-sm">
            Consultation
          </CtaPrimary>
          <details className="relative">
            <summary className="list-none cursor-pointer rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
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
                {SAAS_APP_COMING_SOON ? (
                  <span className="rounded-lg px-3 py-2 text-sm font-medium text-slate-500">
                    Open the SaaS Tool · Coming soon
                  </span>
                ) : (
                  <a
                    href={EXTERNAL_SAAS_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Open the SaaS Tool
                  </a>
                )}
                <div className="mt-2 border-t border-slate-100 pt-2">
                  {CONTACT_PHONE ? (
                    telHref !== "#" ? (
                      <a
                        href={telHref}
                        className="block rounded-lg px-3 py-2 text-sm font-bold text-slate-900 hover:bg-slate-50"
                      >
                        {CONTACT_PHONE}
                      </a>
                    ) : (
                      <span className="block rounded-lg px-3 py-2 text-sm font-bold text-slate-900">
                        {CONTACT_PHONE}
                      </span>
                    )
                  ) : null}
                  <a
                    href={`mailto:${CONTACT_EMAIL_PUBLIC}`}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    {CONTACT_EMAIL_PUBLIC}
                  </a>
                  <div className="px-1 pt-1">
                    <SocialIcons />
                  </div>
                </div>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
