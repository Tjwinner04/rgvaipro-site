/**
 * Blog articles — edit titles, excerpts, and section copy here.
 * Add a new entry + matching slug under app/blog/[slug] via generateStaticParams (automatic from this list).
 */

export type BlogSection = {
  title?: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  /** ISO date for metadata */
  dateIso: string;
  category: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-every-business-needs-a-better-website",
    title: "Why every business needs a better website",
    excerpt:
      "Your site is your 24/7 salesperson. Here’s what “good enough” often leaves on the table.",
    date: "Mar 12, 2025",
    dateIso: "2025-03-12",
    category: "Websites",
    sections: [
      {
        body: [
          "Most local customers will look you up online before they call. Your website is often the first impression—and it works around the clock, even when your office is closed. If it feels dated, slow, or unclear, you may be losing jobs you never knew were on the table.",
          "“Good enough” usually means the site exists, but it doesn’t answer the questions people actually have: what you do, where you serve, how to get a quote, and why they should trust you over the next result in search.",
        ],
      },
      {
        title: "What a stronger site changes",
        body: [
          "Clarity: Visitors understand your services in seconds, on a phone or desktop.",
          "Trust: Professional layout, real photos, and clear contact paths reduce friction.",
          "Leads: Obvious calls-to-action and simple forms turn interest into conversations.",
          "Credibility: Consistent branding and up-to-date content signal that you’re active and reliable.",
        ],
      },
      {
        title: "Where businesses usually fall short",
        body: [
          "Thin or generic copy, buried phone numbers, slow load times, and layouts that break on mobile are still surprisingly common. Fixing those basics often moves the needle more than chasing trends.",
          "You don’t need a hundred pages—you need a focused site that supports how your customers decide to hire you.",
        ],
      },
      {
        title: "Bottom line",
        body: [
          "Investing in a better website isn’t about vanity—it’s about making it easy for the right people to choose you. If you’re unsure where to start, a short review of your current site against your top competitors’ pages is often enough to build a simple priority list.",
        ],
      },
    ],
  },
  {
    slug: "how-ai-automations-save-time",
    title: "How AI automations save time (without replacing your team)",
    excerpt:
      "Practical ways to speed up follow-up, scheduling, and handoffs—starting small.",
    date: "Mar 5, 2025",
    dateIso: "2025-03-05",
    category: "Automation",
    sections: [
      {
        body: [
          "Automation sounds enterprise-heavy, but for local businesses it usually means fewer repetitive clicks and fewer leads slipping through the cracks. AI can help draft responses, route inquiries, and remind staff—while your team stays in control of the final word.",
          "The goal isn’t to remove people from the process; it’s to remove busywork so they can focus on customers and jobs.",
        ],
      },
      {
        title: "High-impact starting points",
        body: [
          "Instant acknowledgment when someone fills out a form—so they know you received their message.",
          "Routing leads by service type or ZIP code so the right person gets notified first.",
          "Simple follow-up reminders when a quote hasn’t gone out in a set number of hours.",
          "FAQ-style replies for common questions, edited before send if you prefer.",
        ],
      },
      {
        title: "Why start small",
        body: [
          "Large, all-at-once automation projects stall. Pick one pain point—usually lead response or scheduling—and prove value in a week or two. Then add the next workflow when your team is comfortable.",
          "Good automation should feel boring in the best way: reliable, predictable, and easy to adjust when your process changes.",
        ],
      },
      {
        title: "Takeaway",
        body: [
          "Used well, AI and automation buy back hours each week and improve consistency. Start with one workflow tied to revenue or reputation, measure the outcome, and expand from there.",
        ],
      },
    ],
  },
  {
    slug: "what-a-social-audit-reveals",
    title: "What a social audit reveals about your brand",
    excerpt:
      "The gaps, wins, and quick fixes we look for when reviewing your social presence.",
    date: "Feb 26, 2025",
    dateIso: "2025-02-26",
    category: "Audits",
    sections: [
      {
        body: [
          "A social audit isn’t about chasing viral posts—it’s a structured look at how your business shows up where people already spend time. We review profiles, messaging, posting patterns, and whether it’s easy to go from social to a real conversation with you.",
          "The output should be actionable: a short list of what to fix first, what’s working, and what to ignore so you don’t waste effort.",
        ],
      },
      {
        title: "What we typically review",
        body: [
          "Profile completeness: bios, links, contact options, and brand consistency across platforms.",
          "Content mix: too much sell vs. enough proof, education, and local relevance.",
          "Engagement signals: response time, tone, and whether questions in comments get answered.",
          "Alignment with your website: same offers, same phone, same story—confusion costs leads.",
        ],
      },
      {
        title: "What you get out of it",
        body: [
          "Clear priorities instead of a vague “post more.” You’ll see where small edits (link in bio, pinned post, hours, service area) matter more than another generic graphic.",
          "Many teams leave with a 30-day focus: three concrete changes and a simple rhythm they can sustain.",
        ],
      },
      {
        title: "Summary",
        body: [
          "Social is a trust layer for local businesses. An audit turns noise into a plan—so you know what to improve without guessing.",
        ],
      },
    ],
  },
  {
    slug: "how-competitor-snapshots-help-businesses-grow",
    title: "How competitor snapshots help businesses grow",
    excerpt:
      "Turn noisy market data into a short list of moves you can make this quarter.",
    date: "Feb 18, 2025",
    dateIso: "2025-02-18",
    category: "Strategy",
    sections: [
      {
        body: [
          "You don’t need to copy competitors—you need to see the playing field clearly. A competitor snapshot pulls together how similar businesses present offers, reviews, and positioning online so you can spot gaps and opportunities.",
          "It’s especially useful when you feel “stuck” or when leads slow down and you’re not sure what changed in the market.",
        ],
      },
      {
        title: "What a snapshot usually includes",
        body: [
          "How peers describe services and guarantees on their sites and ads.",
          "Visible review themes: what customers praise or complain about in your category.",
          "Content and social signals: what they emphasize repeatedly (speed, price, quality, local roots).",
          "Simple positioning notes: premium vs. budget, niche vs. generalist, and where you could differentiate.",
        ],
      },
      {
        title: "How to use it",
        body: [
          "Pick one or two moves for the next 90 days: tighten your headline, adjust a service bundle, add proof you’re missing, or claim a niche others aren’t speaking to clearly.",
          "Revisit quarterly—markets shift, and a lightweight snapshot beats guessing from memory.",
        ],
      },
      {
        title: "Closing thought",
        body: [
          "Growth is often a sequence of clear bets. Competitor snapshots help you choose those bets with context—not anxiety.",
        ],
      },
    ],
  },
];

/** Card/list shape (homepage + blog index) */
export const blogPreviewPosts = blogPosts.map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  date: p.date,
  category: p.category,
}));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
