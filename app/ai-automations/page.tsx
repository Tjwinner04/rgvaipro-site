import { InlineCta } from "@/components/marketing/InlineCta";
import { PageHeader } from "@/components/marketing/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automations",
  description:
    "AI-powered automations for local businesses: lead capture, CRM workflows, follow-up sequences, automated responses, and process improvement.",
};

export default function AiAutomationsPage() {
  return (
    <>
      <PageHeader
        title="AI automations that keep work moving"
        description="Connect lead capture, follow-up, and handoffs so your team spends time with customers—not copying data between tools."
      />
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 lg:px-8">
        <div className="space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            Automation should feel invisible: leads arrive, the right person gets notified, reminders
            go out, and nothing falls through the cracks. We design workflows around how your business
            already operates, then layer in AI where it saves real time.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-slate-900">Common starting points</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold text-slate-800">Lead capture</span> from your website or
              ads into a structured record your team can act on immediately.
            </li>
            <li>
              <span className="font-semibold text-slate-800">Follow-up sequences</span> that
              acknowledge new inquiries instantly and nudge when responses stall.
            </li>
            <li>
              <span className="font-semibold text-slate-800">CRM workflows</span> to route jobs by
              service area, urgency, or staff availability—without manual triage.
            </li>
            <li>
              <span className="font-semibold text-slate-800">Automated responses</span> that answer
              frequent questions and set expectations for next steps.
            </li>
            <li>
              <span className="font-semibold text-slate-800">Process improvement</span>—fewer
              duplicate entries, cleaner handoffs between office and field teams, and clearer
              accountability.
            </li>
          </ul>
          <p>
            If you are not sure where to start, book a consultation. We’ll map your current flow and
            recommend a small, high-impact automation you can launch first.
          </p>
        </div>
        <InlineCta />
      </article>
    </>
  );
}
