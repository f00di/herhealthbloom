import { NextResponse } from "next/server";
import { checkContactRateLimit } from "@/lib/contact-rate-limit";
import { isContactFields, validateContactFields } from "@/lib/contact-validation";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 8_000;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character);
}

function getClientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || "unknown";
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return NextResponse.json({ message: "This form accepts JSON requests only." }, { status: 415 });
  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (declaredLength > MAX_BODY_BYTES) return NextResponse.json({ message: "The message is too large." }, { status: 413 });

  let payload: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) return NextResponse.json({ message: "The message is too large." }, { status: 413 });
    payload = JSON.parse(rawBody) as unknown;
  } catch { return NextResponse.json({ message: "The form data could not be read." }, { status: 400 }); }
  if (!isContactFields(payload)) return NextResponse.json({ message: "Check the form fields and try again." }, { status: 400 });
  if ((payload.website ?? "").trim()) return NextResponse.json({ message: "Message received." }, { status: 200 });
  if (typeof payload.startedAt !== "number" || Date.now() - payload.startedAt < 2_000 || Date.now() - payload.startedAt > 24 * 60 * 60 * 1000) return NextResponse.json({ message: "Please refresh the page and complete the form again." }, { status: 400 });
  const fields = { name: payload.name.trim(), email: payload.email.trim(), message: payload.message.trim() };
  const errors = validateContactFields(fields);
  if (Object.keys(errors).length) return NextResponse.json({ message: "Check the highlighted fields.", errors }, { status: 400 });

  const limit = checkContactRateLimit(getClientKey(request));
  if (!limit.allowed) return NextResponse.json({ message: "Too many messages were submitted. Please try again later." }, { status: 429, headers: { "Retry-After": String(limit.retryAfter) } });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return NextResponse.json({ message: "Message delivery is not configured yet. Please try again later." }, { status: 503 });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: fields.email,
      subject: `Website message from ${fields.name}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(fields.name)}</p><p><strong>Email:</strong> ${escapeHtml(fields.email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(fields.message).replace(/\n/g, "<br>")}</p>`,
      text: `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`,
    }),
    cache: "no-store",
  });
  if (!response.ok) return NextResponse.json({ message: "The message could not be delivered. Please try again later." }, { status: 502 });
  return NextResponse.json({ message: "Your message has been sent." }, { status: 200 });
}
