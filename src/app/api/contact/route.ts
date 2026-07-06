import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ── Rate limiting (in-memory; upgrade to Vercel KV for stricter limits) ──────
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

function getIP(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

// ── Validation schema ─────────────────────────────────────────────────────────
const ContactSchema = z.object({
  firstName: z.string().min(1, "First name required").max(50).trim(),
  lastName: z.string().max(50).trim().optional().default(""),
  email: z
    .string()
    .min(1, "Email required")
    .max(254)
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
  phone: z
    .string()
    .min(6, "Phone required")
    .max(20)
    .regex(/^[\d\s+\-()\/.]+$/, "Invalid phone number"),
  budget: z.string().max(50).optional().default(""),
  investmentType: z.string().max(100).optional().default(""),
  state: z.string().max(50).optional().default(""),
  message: z.string().max(2000).optional().default(""),
  // Honeypot – must be empty; bots fill it, humans don't see it
  _hp: z.string().max(0).optional(),
  // Timing check – timestamp of when form was first rendered
  _t: z.number().optional(),
  formType: z.enum(["contact", "lead"]).default("contact"),
});

function sanitize(str: string): string {
  // Strip HTML tags and limit length to prevent injection
  return str.replace(/<[^>]*>/g, "").replace(/[<>]/g, "").trim();
}

function buildConfirmationHtml(data: z.infer<typeof ContactSchema>): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:5px 0;color:#888888;width:130px;font-size:13px">${label}</td>
          <td style="padding:5px 0;color:#1a1a1a;font-weight:600;font-size:13px">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#1a1a1a;max-width:600px;margin:0 auto;background:#f4f4f4;padding:24px">
  <div style="background:#0A0A0A;padding:24px;border-radius:8px 8px 0 0;text-align:center">
    <p style="color:#DC2626;font-size:12px;font-weight:700;letter-spacing:2px;margin:0 0 8px;text-transform:uppercase">Buy Builder Direct</p>
    <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700">Thanks for reaching out, ${data.firstName}!</h1>
  </div>
  <div style="background:#ffffff;border:1px solid #e5e5e5;border-top:none;padding:28px 24px;border-radius:0 0 8px 8px">
    <p style="font-size:15px;line-height:1.6;color:#333333;margin:0 0 20px">
      We've received your enquiry and one of our team members will be in touch with you shortly &mdash; usually within <strong>1 business day</strong>.
    </p>
    ${data.investmentType || data.budget || data.state ? `
    <div style="background:#f9f9f9;border:1px solid #e5e5e5;border-radius:6px;padding:18px 20px;margin-bottom:24px">
      <p style="font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#DC2626;margin:0 0 12px">Your Enquiry Summary</p>
      <table style="width:100%;border-collapse:collapse">
        ${data.investmentType ? row("Investment Type", data.investmentType) : ""}
        ${data.budget ? row("Budget", data.budget) : ""}
        ${data.state ? row("State", data.state) : ""}
      </table>
    </div>` : ""}
    <div style="text-align:center;margin-bottom:24px">
      <p style="font-size:14px;color:#555555;margin:0 0 14px">In the meantime, explore our investment options:</p>
      <a href="https://buybuilderdirect.com.au/investments" style="display:inline-block;background:#DC2626;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:6px;font-weight:700;font-size:14px">
        View Investment Options &rarr;
      </a>
    </div>
    <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0">
    <p style="font-size:13px;color:#888888;margin:0 0 6px;text-align:center">Prefer to talk now?</p>
    <p style="font-size:15px;font-weight:700;text-align:center;margin:0">
      <a href="tel:+61489995725" style="color:#DC2626;text-decoration:none">+61 489 995 725</a>
    </p>
  </div>
  <div style="text-align:center;padding:16px 0 0">
    <p style="font-size:11px;color:#aaaaaa;margin:0">
      &copy; ${new Date().getFullYear()} Buy Builder Direct &middot; buybuilderdirect.com.au<br>
      This is an automated confirmation. Please do not reply to this email.
    </p>
  </div>
</body>
</html>`;
}

function buildEmailHtml(data: z.infer<typeof ContactSchema>): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:10px 14px;font-weight:600;background:#f5f5f5;width:140px;font-size:13px">${label}</td>
          <td style="padding:10px 14px;font-size:13px">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;color:#1a1a1a;max-width:600px;margin:0 auto">
  <div style="background:#0A0A0A;padding:20px 24px;border-radius:8px 8px 0 0">
    <p style="color:#DC2626;font-size:13px;font-weight:700;letter-spacing:2px;margin:0;text-transform:uppercase">Buy Builder Direct</p>
    <h1 style="color:#ffffff;margin:6px 0 0;font-size:20px">
      New ${data.formType === "lead" ? "Lead" : "Contact"} Form Submission
    </h1>
  </div>
  <div style="border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px;overflow:hidden">
    <table style="width:100%;border-collapse:collapse">
      ${row("Name", `${data.firstName} ${data.lastName}`.trim())}
      ${row("Email", `<a href="mailto:${data.email}" style="color:#DC2626">${data.email}</a>`)}
      ${row("Phone", data.phone)}
      ${data.budget ? row("Budget", data.budget) : ""}
      ${data.investmentType ? row("Investment Type", data.investmentType) : ""}
      ${data.state ? row("State", data.state) : ""}
      ${data.message ? row("Message", data.message.replace(/\n/g, "<br>")) : ""}
    </table>
    <div style="padding:14px;background:#fafafa;border-top:1px solid #e5e5e5">
      <p style="margin:0;font-size:11px;color:#888">
        Submitted at ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" })} AEST
        · buybuilderdirect.com.au
      </p>
    </div>
  </div>
</body>
</html>`;
}

// ── POST handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limit
  const ip = getIP(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Validate
  const result = ContactSchema.safeParse(body);

  if (!result.success) {
    // Silently succeed if honeypot was filled (fool the bot)
    const isHoneypot = result.error.issues.some((e) =>
      e.path.includes("_hp")
    );
    if (isHoneypot) return NextResponse.json({ success: true });

    const firstError = result.error.issues[0];
    return NextResponse.json(
      { error: firstError?.message ?? "Invalid form data." },
      { status: 400 }
    );
  }

  const data = result.data;

  // Honeypot check (extra safety)
  if (data._hp && data._hp.length > 0) {
    return NextResponse.json({ success: true }); // fool the bot
  }

  // Timing check – if form was submitted in < 3 seconds, likely a bot
  if (data._t && Date.now() - data._t < 3000) {
    return NextResponse.json({ success: true }); // fool the bot
  }

  // Sanitize text fields
  const firstName = sanitize(data.firstName);
  const lastName = sanitize(data.lastName);
  const message = sanitize(data.message ?? "");
  const phone = sanitize(data.phone);
  const cleanData = { ...data, firstName, lastName, message, phone };

  // Send email via Resend
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? "info@buybuilderdirect.com.au";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    // Dev fallback: log to console if no API key set
    console.log("📬 [DEV] Contact form submission (no RESEND_API_KEY set):");
    console.log(cleanData);
    return NextResponse.json({ success: true });
  }

  const resendHeaders = {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  try {
    // Send both emails in parallel
    const [notifyRes, confirmRes] = await Promise.all([
      // Notification to Patrik
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: resendHeaders,
        body: JSON.stringify({
          from: `Buy Builder Direct <${fromEmail}>`,
          to: [toEmail],
          reply_to: data.email,
          subject: `New ${data.formType === "lead" ? "Lead" : "Enquiry"} \u2014 ${firstName} ${lastName}`,
          html: buildEmailHtml(cleanData),
        }),
      }),
      // Confirmation to customer
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: resendHeaders,
        body: JSON.stringify({
          from: `Buy Builder Direct <${fromEmail}>`,
          to: [data.email],
          subject: `We've received your enquiry \u2014 Buy Builder Direct`,
          html: buildConfirmationHtml(cleanData),
        }),
      }),
    ]);

    if (!notifyRes.ok) throw new Error(`Resend notify error: ${notifyRes.status}`);
    // Log confirmation failure but don't block success response
    if (!confirmRes.ok) console.error(`Resend confirmation error: ${confirmRes.status}`);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      {
        error:
          "Failed to send your message. Please try again or call us on +61 489 995 725.",
      },
      { status: 500 }
    );
  }
}
