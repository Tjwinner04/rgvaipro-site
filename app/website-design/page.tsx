import { InlineCta } from "@/components/marketing/InlineCta";
import { PageHeader } from "@/components/marketing/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design",
  description:
    "Custom business websites and landing pages: mobile responsive layouts, modern design, contact forms, and conversion-focused structure for local businesses.",
};

export default function WebsiteDesignPage() {
  return (
    <>
      <PageHeader
        title="Website design that earns trust—and leads"
        description="Custom sites and landing pages built for local businesses. Mobile-first, fast, and easy for customers to take the next step."
      />
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 lg:px-8">
        <div className="space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            Your website is often the first impression new customers get. We design layouts that look
            professional on every device, communicate your services clearly, and guide visitors toward
            calling, booking, or submitting a form.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-slate-900">What we focus on</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold text-slate-800">Custom business websites</span> tailored
              to how you win work—not generic templates that look like everyone else.
            </li>
            <li>
              <span className="font-semibold text-slate-800">Landing pages</span> for offers,
              locations, or campaigns so paid and organic traffic lands on a focused message.
            </li>
            <li>
              <span className="font-semibold text-slate-800">Mobile responsive design</span> so
              thumb-friendly navigation and tap-to-call work the way people expect.
            </li>
            <li>
              <span className="font-semibold text-slate-800">Contact forms &amp; CTAs</span> placed
              where they make sense, with copy that reduces friction.
            </li>
            <li>
              <span className="font-semibold text-slate-800">Modern layout &amp; readability</span>
              —spacing, typography, and structure that feel calm and premium.
            </li>
          </ul>
          <p>
            Whether you are starting fresh or replacing an outdated site, we’ll align design
            decisions with the outcomes you care about: calls, bookings, and qualified inquiries.
          </p>
        </div>
        <InlineCta />
      </article>
    </>
  );
}
