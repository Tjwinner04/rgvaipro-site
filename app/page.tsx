import { BlogCard } from "@/components/marketing/BlogCard";
import { BenefitCard } from "@/components/marketing/BenefitCard";
import { ContactForm } from "@/components/marketing/ContactForm";
import { CtaPrimary, CtaSecondary } from "@/components/marketing/CtaButtons";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { VideoDemoCard } from "@/components/marketing/VideoDemoCard";
import {
  benefitOutcomes,
  blogPreviewPosts,
  coreSolutions,
  demoPreviews,
  homeHero,
  howItWorksSteps,
  trustStripItems,
  whoItsFor,
} from "@/content/marketing";
import { EXTERNAL_SAAS_APP_URL } from "@/lib/config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Websites, AI automations, and growth tools for local businesses. Free consultation, hosting, maintenance, audits, and competitor insights.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero: copy + CTAs left, consultation form right (stacked so form sits under buttons on mobile) */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 lg:px-8">
          <div className="space-y-5 lg:max-w-xl lg:col-start-1 lg:row-start-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              RGV AI Pro
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[2.75rem] lg:leading-tight">
              {homeHero.headline}
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">{homeHero.subheadline}</p>
            <p className="text-base leading-relaxed text-slate-600">{homeHero.supporting}</p>
          </div>

          <div className="flex flex-col gap-4 lg:col-start-1 lg:row-start-2 lg:max-w-xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <CtaPrimary href="/#contact-form">Get a Free Consultation</CtaPrimary>
              <CtaSecondary href={EXTERNAL_SAAS_APP_URL} external>
                Open the SaaS Tool
              </CtaSecondary>
            </div>
            <p className="text-sm text-slate-500">
              Prefer to browse first?{" "}
              <Link href="/services" className="font-semibold text-slate-800 underline-offset-4 hover:underline">
                View services
              </Link>
            </p>
          </div>

          <div className="w-full max-w-lg lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-self-end lg:self-start">
            <ContactForm
              id="contact-form"
              variant="hero"
              context="homepage-hero"
              heading="Get a free consultation"
              intro="Share a few details and we’ll follow up with next steps—usually within one business day."
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-center text-sm font-medium text-slate-600">
            {trustStripItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core solutions */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Everything you need to look sharp online—and keep improving"
            description="From first impression to follow-up and reporting, we pair hands-on service with tools that scale."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreSolutions.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Outcomes"
            title="Results your customers feel—and your team notices"
            description="We focus on practical wins: credibility, leads, time saved, and clearer next steps."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefitOutcomes.map((b) => (
              <BenefitCard key={b.title} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Discover, build, launch, and improve"
            description="A simple rhythm so you always know what happens next—without jargon or runaround."
          />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-slate-400">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who it’s for"
            title="Built for owners who want clarity—not another dashboard to babysit"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {whoItsFor.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h3 className="text-lg font-semibold text-slate-900">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demos */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="See it in action"
            title="Short demos and walkthroughs"
            description="Placeholder blocks below—swap in Loom, YouTube, or self-hosted video when you’re ready."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {demoPreviews.map((d) => (
              <VideoDemoCard key={d.title} {...d} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="From the blog"
              title="Practical ideas for local businesses"
              description="Short reads on websites, automation, audits, and growth—no fluff."
            />
            <Link
              href="/blog"
              className="shrink-0 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              View all posts
            </Link>
          </div>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogPreviewPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to improve your online presence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Book a free consultation or open our tool to explore what we’ve built for teams like yours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaPrimary
              href="/#contact-form"
              className="!bg-white !text-slate-900 hover:!bg-slate-100 focus-visible:!outline-white"
            >
              Get a Free Consultation
            </CtaPrimary>
            <CtaSecondary
              href={EXTERNAL_SAAS_APP_URL}
              external
              className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10"
            >
              Open the SaaS Tool
            </CtaSecondary>
          </div>
        </div>
      </section>
    </>
  );
}
