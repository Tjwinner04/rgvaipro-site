import { InlineCta } from "@/components/marketing/InlineCta";
import { PageHeader } from "@/components/marketing/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "RGV AI Pro helps local businesses grow with professional websites, AI automations, and digital tools built for real-world operations.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About RGV AI Pro"
        description="We help local businesses grow through better websites, practical automation, and reporting you can actually use."
      />
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 lg:px-8">
        <div className="space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            RGV AI Pro exists because most small businesses do not need another complicated
            dashboard—they need a site that converts, systems that save time, and a clear picture of
            what to improve online.
          </p>
          <p>
            We work with owners and operators across the Rio Grande Valley and beyond: service
            businesses, growing teams, and partners who support multiple locations. Our approach pairs
            hands-on execution (design, hosting, maintenance) with automation and reports that keep you
            moving forward after launch.
          </p>
          <p>
            Whether you are fixing a weak first impression, catching more leads, or understanding
            how you compare to competitors, we focus on outcomes you can measure: more conversations,
            less admin work, and stronger visibility where your customers look first.
          </p>
        </div>
        <InlineCta />
      </article>
    </>
  );
}
