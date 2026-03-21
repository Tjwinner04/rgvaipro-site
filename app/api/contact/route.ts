import { NextResponse } from "next/server";
import { getN8nContactWebhookUrl } from "@/lib/n8n-server";

export const runtime = "nodejs";

/** Lets the contact form UI know the server has a webhook URL (including server-only env). */
export async function GET() {
  const configured = getN8nContactWebhookUrl().length > 0;
  return NextResponse.json({ configured });
}

type Body = {
  name?: unknown;
  business_name?: unknown;
  email?: unknown;
  phone?: unknown;
  service_interest?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  const webhookUrl = getN8nContactWebhookUrl();
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Webhook not configured. Set N8N_CONTACT_WEBHOOK_URL or NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL in .env.local." },
      { status: 503 },
    );
  }

  let json: Body;
  try {
    json = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = typeof json.name === "string" ? json.name.trim() : "";
  const business_name = typeof json.business_name === "string" ? json.business_name.trim() : "";
  const email = typeof json.email === "string" ? json.email.trim() : "";

  if (!name || !business_name || !email) {
    return NextResponse.json({ error: "Name, business name, and email are required." }, { status: 400 });
  }

  const payload = {
    name,
    business_name,
    email,
    phone: typeof json.phone === "string" ? json.phone.trim() : "",
    service_interest: typeof json.service_interest === "string" ? json.service_interest.trim() : "",
    message: typeof json.message === "string" ? json.message.trim() : "",
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(45_000),
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          error: `n8n returned ${res.status}. Check the workflow is active and ends with a “Respond to Webhook” node.`,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Could not reach n8n. Check the webhook URL, network, and that your workflow is turned on.",
      },
      { status: 502 },
    );
  }
}
