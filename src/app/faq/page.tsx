import type { Metadata } from "next";
import Link from "next/link";
import LeadLink from "@/components/shared/LeadLink";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
 title: "FAQ | Buy Builder Direct",
 description:
 "Answers to the most common questions about Buy Builder Direct — how we work, how much you save, and what the process looks like.",
};

export default function FAQPage() {
 return (
 <>
 {/* ── Hero ──────────────────────────────────────────────────── */}
 <section
 className="section-hero"
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
 Got Questions?
 </p>
 <h1
 className="text-5xl font-bold md:text-6xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Frequently Asked Questions
 </h1>
 <p
 className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed"
 style={{ color: "#A3A3A3" }}
 >
 Everything you need to know about buying direct from builders in
 Australia.
 </p>
 </div>
 </section>

 {/* ── Accordion ─────────────────────────────────────────────── */}
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site max-w-3xl mx-auto">
 <FAQAccordion />
 </div>
 </section>

 {/* ── Bottom CTA ────────────────────────────────────────────── */}
 <section
 className="section"
 style={{
 background: "linear-gradient(135deg, #1C1C1C 0%, #141414 100%)",
 borderTop: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <div className="container-site text-center">
 <h2
 className="text-3xl font-bold md:text-4xl mb-4"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Still have questions?
 </h2>
 <p className="text-lg mb-8" style={{ color: "#A3A3A3" }}>
 Our team responds within 24 hours — no scripts, no runaround.
 </p>
 <LeadLink href="/contact" className="btn-primary">
 Contact Us
 </LeadLink>
 </div>
 </section>
 </>
 );
}
