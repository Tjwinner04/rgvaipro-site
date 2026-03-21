import Link from "next/link";

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

export function BlogCard({ slug, title, excerpt, date, category }: BlogCardProps) {
  return (
    <article
      id={`post-${slug}`}
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{category}</p>
      <p className="mt-2 text-xs text-slate-500">{date}</p>
      <h3 className="mt-3 text-lg font-semibold text-slate-900">
        <Link href={`/blog#post-${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>
      <Link
        href={`/blog#post-${slug}`}
        className="mt-4 text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
      >
        Read more
      </Link>
    </article>
  );
}
