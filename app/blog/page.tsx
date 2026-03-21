import { BlogCard } from "@/components/marketing/BlogCard";
import { PageHeader } from "@/components/marketing/PageHeader";
import { blogPreviewPosts } from "@/content/marketing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on websites for local businesses, AI automations, social audits, competitor research, and online presence strategy.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Practical guidance for owners who want a stronger website, smarter follow-up, and clearer competitive context—without the hype."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {blogPreviewPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}
