type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{description}</p>
        ) : null}
      </div>
    </header>
  );
}
