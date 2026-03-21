"use client";

import { type FormEvent, useEffect, useState } from "react";
import { serviceInterestOptions } from "@/content/marketing";

type ContactFormProps = {
  id?: string;
  /** e.g. "homepage-hero" | "contact-page" for n8n / analytics */
  context?: string;
  heading?: string;
  intro?: string;
  /** Tighter layout when the form sits in the homepage hero */
  variant?: "default" | "hero";
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactForm({
  id,
  context = "default",
  heading = "Request a consultation",
  intro = "Tell us about your business and what you’d like to improve. We’ll follow up with next steps.",
  variant = "default",
}: ContactFormProps) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  /** null = still checking /api/contact */
  const [serverWebhookConfigured, setServerWebhookConfigured] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/contact")
      .then((r) => r.json() as Promise<{ configured?: boolean }>)
      .then((d) => {
        if (!cancelled) setServerWebhookConfigured(!!d.configured);
      })
      .catch(() => {
        if (!cancelled) setServerWebhookConfigured(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const isHero = variant === "hero";
  const fieldPad = isHero ? "py-2 text-sm" : "py-2.5";
  const fieldBase =
    "rounded-lg border border-slate-200 px-3 text-slate-900 shadow-sm outline-none ring-slate-900/10 placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10";
  const fieldDisabled = "cursor-not-allowed opacity-60";

  const showConfigBanner = serverWebhookConfigured === false;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      business_name: String(fd.get("business_name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      service_interest: String(fd.get("service_interest") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: { error?: string } = {};
      try {
        data = (await res.json()) as { error?: string };
      } catch {
        /* non-JSON response */
      }

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          typeof data.error === "string" && data.error.length > 0
            ? data.error
            : "Something went wrong. Please try again or email us directly.",
        );
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your message. Check your connection and try again, or email us directly.",
      );
    }
  }

  function handleResetToIdle() {
    setStatus("idle");
    setErrorMessage(null);
  }

  return (
    <section id={id} className="scroll-mt-28">
      <div
        className={
          isHero
            ? "rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-200/50 md:p-6"
            : "rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
        }
      >
        <h2
          className={
            isHero
              ? "text-lg font-semibold tracking-tight text-slate-900"
              : "text-2xl font-semibold tracking-tight text-slate-900"
          }
        >
          {heading}
        </h2>
        <p className={`max-w-2xl text-slate-600 ${isHero ? "mt-1.5 text-sm leading-relaxed" : "mt-2"}`}>
          {intro}
        </p>

        {showConfigBanner ? (
          <p
            className={`rounded-lg border border-amber-200 bg-amber-50 text-amber-950 ${isHero ? "mt-4 p-3 text-xs" : "mt-6 p-4 text-sm"}`}
            role="status"
          >
            <span className="font-semibold">Webhook not configured.</span> Add{" "}
            <code className="rounded bg-amber-100/80 px-1 py-0.5 text-[0.8em]">
              N8N_CONTACT_WEBHOOK_URL
            </code>{" "}
            (or{" "}
            <code className="rounded bg-amber-100/80 px-1 py-0.5 text-[0.8em]">
              NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL
            </code>
            ) to <code className="rounded bg-amber-100/80 px-1 py-0.5 text-[0.8em]">.env.local</code>
            , then restart the dev server. The site sends submissions through{" "}
            <code className="rounded bg-amber-100/80 px-1 py-0.5 text-[0.8em]">/api/contact</code>.
          </p>
        ) : null}

        {status === "success" ? (
          <div
            className={`rounded-xl border border-emerald-200 bg-emerald-50 ${isHero ? "mt-5 p-4" : "mt-8 p-6"}`}
            role="status"
          >
            <p className={`font-semibold text-emerald-950 ${isHero ? "text-sm" : "text-base"}`}>
              Thanks—we received your message.
            </p>
            <p className={`mt-2 text-emerald-900/90 ${isHero ? "text-xs" : "text-sm"}`}>
              We’ll review what you sent and get back to you as soon as we can, usually within one
              business day.
            </p>
            <button
              type="button"
              onClick={handleResetToIdle}
              className={`mt-4 font-semibold text-emerald-900 underline-offset-4 hover:underline ${isHero ? "text-xs" : "text-sm"}`}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={isHero ? "mt-5 grid gap-4" : "mt-8 grid gap-6"}
            noValidate
            data-form-context={context}
          >
            {status === "error" && errorMessage ? (
              <p
                className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-900"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}

            <div className={`grid sm:grid-cols-2 ${isHero ? "gap-4" : "gap-6"}`}>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  required
                  disabled={status === "loading"}
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={`${fieldBase} ${fieldPad} ${status === "loading" ? fieldDisabled : ""}`}
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Business name
                <input
                  required
                  disabled={status === "loading"}
                  name="business_name"
                  type="text"
                  autoComplete="organization"
                  className={`${fieldBase} ${fieldPad} ${status === "loading" ? fieldDisabled : ""}`}
                  placeholder="Company or DBA"
                />
              </label>
            </div>

            <div className={`grid sm:grid-cols-2 ${isHero ? "gap-4" : "gap-6"}`}>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  required
                  disabled={status === "loading"}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`${fieldBase} ${fieldPad} ${status === "loading" ? fieldDisabled : ""}`}
                  placeholder="you@business.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Phone
                <input
                  disabled={status === "loading"}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={`${fieldBase} ${fieldPad} ${status === "loading" ? fieldDisabled : ""}`}
                  placeholder="(555) 000-0000"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Service interested in
              <select
                name="service_interest"
                defaultValue=""
                disabled={status === "loading"}
                className={`rounded-lg border border-slate-200 bg-white px-3 text-slate-900 shadow-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10 ${fieldPad} ${status === "loading" ? fieldDisabled : ""}`}
              >
                {serviceInterestOptions.map((opt) => (
                  <option key={opt.value || "empty"} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Message
              <textarea
                name="message"
                rows={isHero ? 3 : 4}
                disabled={status === "loading"}
                className={`resize-y ${fieldBase} ${fieldPad} ${status === "loading" ? fieldDisabled : ""}`}
                placeholder="What would you like help with?"
              />
            </label>

            <div
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between ${isHero ? "gap-2" : "gap-3"}`}
            >
              <button
                type="submit"
                disabled={serverWebhookConfigured === false || status === "loading"}
                aria-busy={status === "loading"}
                className={`inline-flex w-full items-center justify-center rounded-full bg-slate-900 font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto ${isHero ? "px-5 py-2.5 text-sm" : "px-6 py-3 text-sm"}`}
              >
                {status === "loading" ? "Sending…" : "Submit request"}
              </button>
              <p className={`text-slate-500 ${isHero ? "text-xs" : "text-sm"}`}>
                We’ll get back to you as soon as possible.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
