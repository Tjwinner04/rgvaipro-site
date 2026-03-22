/**
 * Marketing copy and lists — easy to edit without touching layout code.
 */

/** Homepage hero — edit headline and subheadline here */
export const homeHero = {
  headline: "Websites, AI Automations, and Growth Tools for Local Businesses",
  subheadline:
    "We help businesses build better websites, automate follow-up, and improve their online presence with smart tools and reports.",
  supporting:
    "Whether you need a site that converts, hosting you do not have to worry about, or reports that show what to fix next—we make the web work harder for you.",
} as const;

export const trustStripItems = [
  "Local business focused",
  "Fast setup",
  "Custom websites",
  "Hosting & maintenance",
  "Automation workflows",
  "Growth-focused reports",
] as const;

export const coreSolutions = [
  {
    title: "Website Design",
    description:
      "Modern, mobile-friendly sites that reflect your brand and convert visitors into leads.",
    href: "/website-design",
    icon: "layout" as const,
  },
  {
    title: "Hosting & Maintenance",
    description:
      "Reliable hosting, updates, and care so your site stays fast, secure, and current.",
    href: "/services#hosting",
    icon: "server" as const,
  },
  {
    title: "AI Automations",
    description:
      "Smart workflows for follow-up, lead routing, and repetitive tasks—without extra staff.",
    href: "/ai-automations",
    icon: "spark" as const,
  },
  {
    title: "Lead Generation",
    description:
      "Tools and pages designed to capture interest and keep prospects moving forward.",
    href: "/services#leads",
    icon: "users" as const,
  },
  {
    title: "Social Media Audit",
    description:
      "A clear read on what’s working, what’s missing, and where to improve on social.",
    href: "/business-audit-reports",
    icon: "chart" as const,
  },
  {
    title: "Competitor Snapshot",
    description:
      "See how you stack up online—and spot opportunities competitors are already using.",
    href: "/business-audit-reports",
    icon: "target" as const,
  },
] as const;

export const benefitOutcomes = [
  {
    title: "Look more professional online",
    body: "First impressions matter. A polished site and presence builds trust before you say a word.",
  },
  {
    title: "Capture more leads",
    body: "Stronger pages, forms, and follow-up mean fewer missed opportunities.",
  },
  {
    title: "Save time with automation",
    body: "Let systems handle repeat tasks so your team can focus on customers.",
  },
  {
    title: "Improve follow-up",
    body: "Consistent, timely responses help you win more jobs and repeat business.",
  },
  {
    title: "Understand where you’re falling behind",
    body: "Reports turn guesswork into a simple plan you can act on.",
  },
  {
    title: "See competitor opportunities",
    body: "Know what others are doing well—and where you can differentiate.",
  },
] as const;

export const howItWorksSteps = [
  {
    title: "Discover",
    body: "We learn your business, goals, and how customers find you today.",
  },
  {
    title: "Build",
    body: "We design your site, automations, and reporting around what actually moves the needle.",
  },
  {
    title: "Launch",
    body: "Go live with hosting, tracking, and the pieces your team needs to succeed.",
  },
  {
    title: "Improve",
    body: "We refine based on results—so your online presence keeps getting stronger.",
  },
] as const;

export const whoItsFor = [
  {
    title: "Local service businesses",
    body: "Plumbing, HVAC, legal, health, trades—anyone who wins on trust and local visibility.",
  },
  {
    title: "Small businesses",
    body: "Owners who want a clear online foundation without managing every detail themselves.",
  },
  {
    title: "Growing teams",
    body: "Companies adding staff or locations and needing scalable tools and reporting.",
  },
  {
    title: "Agencies & multi-location",
    body: "Partners who need repeatable websites, audits, and automation across brands.",
  },
] as const;

export const demoPreviews = [
  {
    title: "Website design demo",
    description: "See how we structure pages for clarity, speed, and conversions.",
    /** Replace with your embed URL or video file path later */
    mediaPlaceholderLabel: "Website walkthrough (add video)",
  },
  {
    title: "Automation workflow demo",
    description: "Follow-up and routing that runs in the background, 24/7.",
    mediaPlaceholderLabel: "Automation demo (add video)",
  },
  {
    title: "Social audit walkthrough",
    description: "What we review—and what you get in your report.",
    mediaPlaceholderLabel: "Audit preview (add video)",
  },
  {
    title: "Competitor snapshot example",
    description: "Side-by-side signals you can use to sharpen your strategy.",
    mediaPlaceholderLabel: "Sample report (add video or PDF)",
  },
] as const;

export { blogPreviewPosts } from "./blog-posts";

export const serviceInterestOptions = [
  { value: "", label: "Select a service" },
  { value: "website-design", label: "Website Design" },
  { value: "hosting-maintenance", label: "Hosting & Maintenance" },
  { value: "ai-automations", label: "AI Automations" },
  { value: "lead-generation", label: "Lead Generation" },
  { value: "social-audit", label: "Social Media Audit" },
  { value: "competitor-snapshot", label: "Competitor Snapshot" },
  { value: "general", label: "General inquiry" },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/website-design", label: "Website Design" },
  { href: "/ai-automations", label: "AI Automations" },
  { href: "/business-audit-reports", label: "Reports" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
