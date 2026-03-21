type VideoDemoCardProps = {
  title: string;
  description: string;
  mediaPlaceholderLabel: string;
};

export function VideoDemoCard({ title, description, mediaPlaceholderLabel }: VideoDemoCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-6 text-center">
        <p className="text-sm font-medium text-slate-600">{mediaPlaceholderLabel}</p>
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </article>
  );
}
