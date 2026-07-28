import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";

function getIP(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FORM_MS = 3000;
const MAX_FORM_MS = 2 * 60 * 60 * 1000; // 2 hours

// ── Validation schema ─────────────────────────────────────────────────────────
const ContactSchema = z
  .object({
    firstName: z.string().min(1, "First name required").max(50).trim(),
    lastName: z.string().max(50).trim().optional().default(""),
    email: z.string().max(254).trim().optional().default(""),
    phone: z
      .string()
      .min(6, "Phone required")
      .max(20)
      .regex(/^[\d\s+\-()\/.]+$/, "Invalid phone number"),
    budget: z.string().max(50).optional().default(""),
    investmentType: z.string().max(100).optional().default(""),
    state: z.string().max(50).optional().default(""),
    fundingAssistance: z.string().max(50).optional().default(""),
    message: z.string().max(2000).optional().default(""),
    // Honeypot – must be empty; bots fill it, humans don't see it
    _hp: z.string().max(0).optional(),
    // Timing check – timestamp of when form was first rendered (required)
    _t: z.number({ error: "Invalid submission." }),
    formType: z.enum(["contact", "lead"]).default("contact"),
  })
  .superRefine((data, ctx) => {
    if (data.formType === "contact") {
      if (!data.email || !EMAIL_RE.test(data.email)) {
        ctx.addIssue({
          code: "custom",
          path: ["email"],
          message: data.email ? "Invalid email address" : "Email required",
        });
      }
    } else if (data.email && !EMAIL_RE.test(data.email)) {
      ctx.addIssue({
        code: "custom",
        path: ["email"],
        message: "Invalid email address",
      });
    }
  });
function sanitize(str: string): string {
  // Strip HTML tags and limit length to prevent injection
  return str.replace(/<[^>]*>/g, "").replace(/[<>]/g, "").trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildConfirmationHtml(data: z.infer<typeof ContactSchema>): string {
  const firstName = escapeHtml(data.firstName);
  const investmentType = escapeHtml(data.investmentType ?? "");
  const budget = escapeHtml(data.budget ?? "");
  const state = escapeHtml(data.state ?? "");
  const year = new Date().getFullYear();

  const summaryRows = [
    investmentType
      ? `<tr>
          <td style="padding:8px 0;color:#888888;width:140px;font-size:13px;font-family:Arial,sans-serif">Investment Type</td>
          <td style="padding:8px 0;color:#1a1a1a;font-weight:600;font-size:13px;font-family:Arial,sans-serif">${investmentType}</td>
        </tr>`
      : "",
    budget
      ? `<tr>
          <td style="padding:8px 0;color:#888888;width:140px;font-size:13px;font-family:Arial,sans-serif">Budget</td>
          <td style="padding:8px 0;color:#1a1a1a;font-weight:600;font-size:13px;font-family:Arial,sans-serif">${budget}</td>
        </tr>`
      : "",
    state
      ? `<tr>
          <td style="padding:8px 0;color:#888888;width:140px;font-size:13px;font-family:Arial,sans-serif">State</td>
          <td style="padding:8px 0;color:#1a1a1a;font-weight:600;font-size:13px;font-family:Arial,sans-serif">${state}</td>
        </tr>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Enquiry received — Buy Builder Direct</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:32px 12px">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e5e5">
          <!-- Header -->
          <tr>
            <td style="background:#0A0A0A;padding:28px 28px 24px;text-align:center">
              <p style="margin:0 0 10px;color:#DC2626;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase">Buy Builder Direct</p>
              <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:1.3;font-weight:700">Thanks for reaching out, ${firstName}!</h1>
              <p style="margin:10px 0 0;color:#A3A3A3;font-size:14px">We&rsquo;ve got your enquiry</p>
            </td>
          </tr>
          <!-- Red accent line -->
          <tr>
            <td style="height:4px;background:#DC2626;font-size:0;line-height:0">&nbsp;</td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:28px 28px 8px">
              <p style="margin:0 0 18px;font-size:15px;line-height:1.65;color:#333333">
                One of our team will be in touch shortly &mdash; usually within <strong>1 business day</strong>.
                We&rsquo;ll help you explore builder-direct options and how much <strong>\$\$\$</strong> you could keep in your deal.
              </p>
              ${
                summaryRows
                  ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border:1px solid #eeeeee;border-radius:8px;margin:0 0 22px">
                <tr>
                  <td style="padding:18px 20px">
                    <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#DC2626">Your enquiry summary</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${summaryRows}</table>
                  </td>
                </tr>
              </table>`
                  : ""
              }
              <p style="margin:0 0 16px;font-size:14px;color:#555555;text-align:center">While you wait, explore our investment pathways:</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:24px">
                    <a href="https://buybuilderdirect.com.au/investments" style="display:inline-block;background:#DC2626;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:6px;font-weight:700;font-size:14px">
                      View Investment Options &rarr;
                    </a>
                  </td>
                </tr>
              </table>
              <hr style="border:none;border-top:1px solid #eeeeee;margin:0 0 20px" />
              <p style="margin:0 0 6px;font-size:13px;color:#888888;text-align:center">Prefer to talk now?</p>
              <p style="margin:0 0 8px;font-size:16px;font-weight:700;text-align:center">
                <a href="tel:+61489995725" style="color:#DC2626;text-decoration:none">+61 489 995 725</a>
              </p>
              <p style="margin:0;font-size:13px;text-align:center">
                <a href="mailto:info@buybuilderdirect.com.au" style="color:#555555;text-decoration:none">info@buybuilderdirect.com.au</a>
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 28px 28px;text-align:center">
              <p style="margin:0;font-size:11px;line-height:1.6;color:#aaaaaa">
                &copy; ${year} Buy Builder Direct &middot; <a href="https://buybuilderdirect.com.au" style="color:#888888;text-decoration:none">buybuilderdirect.com.au</a><br />
                This is an automated confirmation. Please do not reply to this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildEmailHtml(data: z.infer<typeof ContactSchema>): string {
  const name = escapeHtml(`${data.firstName} ${data.lastName}`.trim());
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const budget = escapeHtml(data.budget ?? "");
  const investmentType = escapeHtml(data.investmentType ?? "");
  const state = escapeHtml(data.state ?? "");
  const fundingAssistance = escapeHtml(data.fundingAssistance ?? "");
  const message = escapeHtml(data.message ?? "").replace(/\n/g, "<br>");
  const submittedAt = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Melbourne",
  });

  const row = (label: string, value: string, isHtml = false) =>
    value
      ? `<tr>
          <td style="padding:12px 16px;font-weight:700;background:#f7f7f7;width:150px;font-size:13px;color:#333;border-bottom:1px solid #eeeeee;font-family:Arial,sans-serif">${label}</td>
          <td style="padding:12px 16px;font-size:13px;color:#1a1a1a;border-bottom:1px solid #eeeeee;font-family:Arial,sans-serif">${
            isHtml ? value : value
          }</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New enquiry — Buy Builder Direct</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:32px 12px">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e5e5">
          <tr>
            <td style="background:#0A0A0A;padding:24px 28px">
              <p style="margin:0 0 6px;color:#DC2626;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase">Buy Builder Direct</p>
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700">
                New ${data.formType === "lead" ? "Lead" : "Contact"} Form Submission
              </h1>
            </td>
          </tr>
          <tr>
            <td style="height:4px;background:#DC2626;font-size:0;line-height:0">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:0">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Name", name)}
                ${email ? row("Email", `<a href="mailto:${email}" style="color:#DC2626;text-decoration:none">${email}</a>`, true) : ""}
                ${row("Phone", `<a href="tel:${phone.replace(/\s/g, "")}" style="color:#1a1a1a;text-decoration:none">${phone}</a>`, true)}
                ${budget ? row("Budget", budget) : ""}
                ${investmentType ? row("Investment Type", investmentType) : ""}
                ${state ? row("State", state) : ""}
                ${fundingAssistance ? row("Funding Assistance", fundingAssistance) : ""}
                ${message ? row("Message", message, true) : ""}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 20px;background:#fafafa;border-top:1px solid #eeeeee">
              <p style="margin:0;font-size:11px;color:#888888;font-family:Arial,sans-serif">
                Submitted ${submittedAt} AEST &middot; buybuilderdirect.com.au
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── POST handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip = getIP(req);
  if (!(await checkRateLimit(ip))) {
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
    return NextResponse.json({ success: true });
  }

  // Timing check – require _t; reject too-fast or stale submissions as bots
  const elapsed = Date.now() - data._t;
  if (elapsed < MIN_FORM_MS || elapsed > MAX_FORM_MS) {
    return NextResponse.json({ success: true });
  }

  const firstName = sanitize(data.firstName);
  const lastName = sanitize(data.lastName);
  const message = sanitize(data.message ?? "");
  const phone = sanitize(data.phone);
  const cleanData = { ...data, firstName, lastName, message, phone };

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? "info@buybuilderdirect.com.au";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      console.error("RESEND_API_KEY is not set — cannot deliver enquiry");
      return NextResponse.json(
        {
          error:
            "Failed to send your message. Please try again or call us on +61 489 995 725.",
        },
        { status: 500 }
      );
    }
    console.log("[DEV] Contact form submission (no RESEND_API_KEY set):");
    console.log(cleanData);
    return NextResponse.json({ success: true });
  }

  const resendHeaders = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  const hasCustomerEmail = Boolean(data.email && EMAIL_RE.test(data.email));

  try {
    const notifyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: resendHeaders,
      body: JSON.stringify({
        from: `Buy Builder Direct <${fromEmail}>`,
        to: [toEmail],
        ...(hasCustomerEmail ? { reply_to: data.email } : {}),
        subject: `New ${data.formType === "lead" ? "Lead" : "Enquiry"} \u2014 ${firstName} ${lastName}`.trim(),
        html: buildEmailHtml(cleanData),
      }),
    });

    if (!notifyRes.ok) {
      const errBody = await notifyRes.text();
      console.error("Resend notify error:", notifyRes.status, errBody);
      throw new Error(`Resend notify error: ${notifyRes.status}`);
    }

    // Confirmation is best-effort (sandbox may block non-owner recipients)
    if (hasCustomerEmail) {
      const confirmRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: resendHeaders,
        body: JSON.stringify({
          from: `Buy Builder Direct <${fromEmail}>`,
          to: [data.email],
          subject: `We've received your enquiry \u2014 Buy Builder Direct`,
          html: buildConfirmationHtml(cleanData),
        }),
      });
      if (!confirmRes.ok) {
        const errBody = await confirmRes.text();
        console.error("Resend confirmation error:", confirmRes.status, errBody);
      }
    }

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
