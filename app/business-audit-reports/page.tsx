import { InlineCta } from "@/components/marketing/InlineCta";
import { PageHeader } from "@/components/marketing/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Audit Reports",
  description:
    "Social media audits, competitor snapshots, and online presence reports that turn data into clear priorities for local businesses.",
};

export default function BusinessAuditReportsPage() {
  return (
    <>
      <PageHeader
        title="Reports that make your next move obvious"
        description="Social audits, competitor snapshots, and online presence summaries—built for owners who want clarity, not a 40-slide deck."
      />
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 lg:px-8">
        <div className="space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            It is hard to improve what you cannot see. Our audit-style deliverables highlight gaps,
            quick wins, and longer-term opportunities—so you can decide what to fix first.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-slate-900">Social media audit</h2>
          <p>
            We review how your brand shows up across key channels: consistency, messaging, posting
            cadence, engagement patterns, and whether your profiles make it easy to contact you. You
            get a prioritized list—not a vague “post more often.”
          </p>
          <h2 className="pt-2 text-xl font-semibold text-slate-900">Competitor snapshot</h2>
          <p>
            Understand how similar businesses present themselves online: offers, reviews signals,
            content themes, and positioning. The goal is not to copy—it is to spot openings you can
            own in your market.
          </p>
          <h2 className="pt-2 text-xl font-semibold text-slate-900">Online presence reports</h2>
          <p>
            Pull together website, local listings, and discovery touchpoints into one narrative: what
            customers experience when they search for you, and what to tighten up for trust and
            conversions.
          </p>
          <p>
            These reports work best paired with execution—many teams use them to kick off a website
            refresh, automation project, or content plan.
          </p>
        </div>
        <InlineCta />
      </article>
    </>
  );
}
