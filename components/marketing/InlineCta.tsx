import { CtaPrimary } from "./CtaButtons";

type InlineCtaProps = {
  href?: string;
  label?: string;
};

export function InlineCta({
  href = "/#contact-form",
  label = "Get a Free Consultation",
}: InlineCtaProps) {
  return (
    <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
      <p className="text-sm font-medium text-slate-600">
        Ready to talk through your goals? We’ll recommend a practical starting point.
      </p>
      <div className="mt-4 flex justify-center">
        <CtaPrimary href={href}>{label}</CtaPrimary>
      </div>
    </div>
  );
}
