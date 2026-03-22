import { InlineCta } from "@/components/marketing/InlineCta";
import { PageHeader } from "@/components/marketing/PageHeader";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { coreSolutions } from "@/content/marketing";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, hosting, maintenance, AI automations, lead generation, social media audits, and competitor snapshot reports for local businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services that strengthen your online presence"
        description="Everything we offer is designed for local businesses: clear websites, dependable hosting, smart automation, and reports that tell you what to do next."
      />

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 md:px-6 lg:px-8">
        <section id="overview">
          <SectionHeading
            align="left"
            eyebrow="Overview"
            title="One partner for your website, tools, and insights"
            description="Pick what you need today—we’ll help you phase the rest so you’re never stuck with a pile of disconnected vendors."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreSolutions.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </section>

        <section id="web-presence" className="scroll-mt-28">
          <SectionHeading
            align="left"
            eyebrow="Web presence"
            title="Websites people trust—and hosting you don’t have to think about"
          />
          <div className="space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              Your website should load fast on phones, explain what you do in seconds, and make it
              easy to contact you. We design and build with that standard in mind, then keep things
              running with monitoring, updates, and fixes.
            </p>
          </div>
        </section>

        <section id="hosting" className="scroll-mt-28">
          <SectionHeading
            align="left"
            eyebrow="Hosting & maintenance"
            title="Stay fast, secure, and up to date"
            description="We handle the technical upkeep so broken plugins, slow pages, and surprise downtime don’t cost you leads."
          />
          <figure className="mt-10 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm ring-1 ring-slate-900/5">
            <Image
              src="/hosting-namecheap.png"
              alt="Example shared hosting plans interface: fast, secure hosting options for small business websites"
              width={1600}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
              We pair dependable hosting with ongoing maintenance so your site stays fast, backed up,
              and ready for customers—not just “online.”
            </figcaption>
          </figure>
          <ul className="mt-10 list-inside list-disc space-y-2 text-slate-600">
            <li>Managed hosting tuned for small business sites</li>
            <li>Security and backup hygiene</li>
            <li>Content tweaks, fixes, and improvements on a regular cadence</li>
          </ul>
        </section>

        <section id="growth" className="scroll-mt-28">
          <SectionHeading
            align="left"
            eyebrow="Growth & automation"
            title="Capture demand and respond without the busywork"
          />
          <div className="space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              Lead generation is more than a form—it is the full path from first click to booked
              appointment. We connect the right automations so inquiries get answered, routed, and
              tracked.
            </p>
          </div>
        </section>

        <section id="leads" className="scroll-mt-28">
          <SectionHeading
            align="left"
            eyebrow="Lead generation"
            title="Turn more visitors into conversations"
            description="Strong offers, clear calls-to-action, and follow-up workflows that match how your team actually works."
          />
        </section>

        <section id="insights" className="scroll-mt-28">
          <SectionHeading
            align="left"
            eyebrow="Insights & audits"
            title="See social performance and competitor moves at a glance"
            description="Our audit and snapshot deliverables are written for owners—not agencies—so you leave with priorities, not jargon."
          />
          <p className="mt-4 text-slate-600">
            Learn more on the{" "}
            <Link
              className="font-semibold text-slate-900 underline-offset-4 hover:underline"
              href="/business-audit-reports"
            >
              Business Audit Reports
            </Link>{" "}
            page.
          </p>
        </section>

        <InlineCta />
      </div>
    </>
  );
}
