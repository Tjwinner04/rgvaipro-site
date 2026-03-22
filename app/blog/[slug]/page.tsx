import { InlineCta } from "@/components/marketing/InlineCta";
import { getAllBlogSlugs, getBlogPost } from "@/content/blog-posts";
import { SITE_NAME } from "@/lib/config";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateIso,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {post.category}
          </p>
          <time className="mt-2 block text-sm text-slate-500" dateTime={post.dateIso}>
            {post.date}
          </time>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{post.excerpt}</p>
        </div>
      </article>

      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="space-y-10">
          {post.sections.map((section, i) => (
            <section key={i}>
              {section.title ? (
                <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
              ) : null}
              <div
                className={`space-y-4 text-base leading-relaxed text-slate-600 ${section.title ? "mt-4" : ""}`}
              >
                {section.body.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-10">
          <Link
            href="/blog"
            className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
          >
            ← Back to blog
          </Link>
          <span className="text-slate-300">|</span>
          <span className="text-sm text-slate-500">
            {SITE_NAME} — practical guides for local businesses
          </span>
        </div>

        <InlineCta />
      </div>
    </>
  );
}
