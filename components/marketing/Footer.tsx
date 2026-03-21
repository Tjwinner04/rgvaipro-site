import Link from "next/link";
import { navLinks } from "@/content/marketing";
import { CONTACT_EMAIL, EXTERNAL_SAAS_APP_URL, SITE_NAME } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-base font-semibold text-slate-900">{SITE_NAME}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Websites, automations, and growth tools built for local businesses in the Rio Grande
              Valley and beyond.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-slate-900">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href={EXTERNAL_SAAS_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900"
                >
                  Open the SaaS Tool
                </a>
              </li>
              <li>
                <Link href="/#contact-form" className="hover:text-slate-900">
                  Get a Free Consultation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <p className="mt-3 text-sm text-slate-600">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-900">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-200 pt-8 text-center text-xs text-slate-500">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
