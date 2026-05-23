import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
 title: "Contact Us | Buy Builder Direct",
 description:
 "Get your free savings assessment. Tell us your property investment goals and we'll match you with the right vetted builder.",
};

export default function ContactPage() {
 return (
 <>
 {/* ── Hero ──────────────────────────────────────────────────── */}
 <section
 className="section"
 style={{
 background:
 "linear-gradient(135deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)",
 borderBottom: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <div className="container-site text-center">
 <p
 className="mb-4 text-sm font-semibold uppercase tracking-widest"
 style={{ color: "#DC2626" }}
 >
 Free Assessment
 </p>
 <h1
 className="text-5xl font-bold md:text-6xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Get Your Free Savings Assessment
 </h1>
 <p
 className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed"
 style={{ color: "#A3A3A3" }}
 >
 Tell us your goals — we&apos;ll match you with a vetted builder and
 show you exactly how much you can save.
 </p>
 </div>
 </section>

 {/* ── Split Layout ──────────────────────────────────────────── */}
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site">
 <div className="grid gap-12 lg:grid-cols-2 items-start">
 {/* Left: Form */}
 <ContactForm />

 {/* Right: Contact details */}
 <div className="space-y-6">
 {/* Contact card */}
 <div
 className="rounded-xl p-8"
 style={{
 background: "#141414",
 border: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 <h2
 className="text-2xl font-bold mb-6"
 style={{
 fontFamily: "var(--font-display)",
 color: "#FFFFFF",
 }}
 >
 Get in Touch
 </h2>

 <div className="space-y-5">
 <div className="flex items-start gap-4">
 <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
 <div>
 <p className="font-semibold" style={{ color: "#FFFFFF" }}>
 1300 BBD PRO
 </p>
 <p className="text-sm" style={{ color: "#A3A3A3" }}>
 Call us for a same-day callback
 </p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
 <div>
 <p className="font-semibold" style={{ color: "#FFFFFF" }}>
 hello@buybuilderdirect.com.au
 </p>
 <p className="text-sm" style={{ color: "#A3A3A3" }}>
 We respond within 24 hours
 </p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
 <div>
 <p className="font-semibold" style={{ color: "#FFFFFF" }}>
 Mon–Fri 9am–6pm AEST
 </p>
 <p className="text-sm" style={{ color: "#A3A3A3" }}>
 Outside hours? Leave a message and we&apos;ll call back
 next business day.
 </p>
 </div>
 </div>
 </div>

 <div
 className="mt-6 rounded-lg p-4"
 style={{
 background: "rgba(220,38,38,0.08)",
 border: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 <p className="text-sm font-semibold mb-1" style={{ color: "#DC2626" }}>
 We respond within 24 hours
 </p>
 <p className="text-sm" style={{ color: "#A3A3A3" }}>
 No scripts, no call centres. You&apos;ll hear from a real
 investment specialist who has read your brief.
 </p>
 </div>
 </div>

 {/* Booking card */}
 <div
 className="rounded-xl p-8"
 style={{
 background: "#141414",
 borderTop: "3px solid #DC2626",
 border: "1px solid rgba(220,38,38,0.15)",
 borderTopWidth: "3px",
 }}
 >
 <h3
 className="text-xl font-bold mb-2"
 style={{
 fontFamily: "var(--font-display)",
 color: "#FFFFFF",
 }}
 >
 Prefer to talk now?
 </h3>
 <p className="text-sm mb-5" style={{ color: "#A3A3A3" }}>
 Book a free 15-minute call directly in our calendar — no
 waiting, no phone tag.
 </p>
 <button
 className="btn-secondary w-full"
 disabled
 aria-label="Calendly booking coming soon"
 >
 Book a 15-Min Call (Coming Soon)
 </button>
 <p
 className="text-xs mt-3 text-center"
 style={{ color: "#666666" }}
 >
 Calendly integration coming soon — use the form in the
 meantime.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── Trust Strip ───────────────────────────────────────────── */}
 <section
 className="py-6"
 style={{
 background: "#141414",
 borderTop: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <div className="container-site">
 <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-semibold">
 {["No agent fees", "No obligation", "100% free assessment"].map(
 (item) => (
 <div key={item} className="flex items-center gap-2">
 <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
 <span style={{ color: "#A3A3A3" }}>{item}</span>
 </div>
 )
 )}
 </div>
 </div>
 </section>
 </>
 );
}
