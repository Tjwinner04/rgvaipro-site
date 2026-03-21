import { ContactForm } from "@/components/marketing/ContactForm";
import { PageHeader } from "@/components/marketing/PageHeader";
import { CONTACT_EMAIL } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact RGV AI Pro for a free consultation. Website design, hosting, AI automations, lead generation, and business audit reports.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        description={`Tell us what you are trying to improve—website, follow-up, leads, or reporting. We typically reply within one business day. You can also email ${CONTACT_EMAIL}.`}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 lg:px-8">
        <ContactForm
          id="contact-form"
          context="contact-page"
          heading="Send a message"
          intro="Share a bit about your business and the service you are interested in. There is no obligation—just a clear next step."
        />
      </div>
    </>
  );
}
