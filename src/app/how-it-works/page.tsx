import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "How It Works | Buy Builder Direct",
 description:
 "5 simple steps from brief to rent-ready. Learn exactly how Buy Builder Direct connects Australian investors directly with vetted builders.",
};

const steps = [
 {
 number: 1,
 title: "Tell Us Your Goals",
 description1:
 "The process begins with a simple, obligation-free conversation about your investment objectives. We want to understand your budget, your preferred state, your target rental yield, and the investment type that aligns with your strategy — whether that's co-living, a rooming house, SDA housing, or a standard house and land package.",
 description2:
 "There are no wrong answers here. If you're not sure what type of investment suits you best, our team will walk you through the options and help you make an informed decision based on your financial goals, risk appetite, and timeline.",
 bullets: [
 "Free initial strategy session",
 "Investment type guidance provided",
 "No pressure to proceed",
 ],
 },
 {
 number: 2,
 title: "Builder Matching",
 description1:
 "Once we understand your brief, we match you with one or more vetted builders from our panel who specialise in your chosen investment type and operate in your target state. Every builder on our platform has passed our four-point vetting process — licensing, track record, financial stability, and quality standards.",
 description2:
 "You won't be paired with someone who has never built a co-living property if that's your strategy. We match based on genuine specialisation, so you're speaking with builders who have done this before, know the compliance requirements, and can deliver on time.",
 bullets: [
 "Matched to a specialist builder",
 "Vetting documents available on request",
 "Usually matched within 3–5 business days",
 ],
 },
 {
 number: 3,
 title: "Customise Your Build",
 description1:
 "After your introduction meeting, you work directly with the builder to customise the project to your specification. This includes floorplan selection, finishes, room configurations, energy efficiency features, and any council-specific requirements for your investment type.",
 description2:
 "You have full control here. Unlike buying off-the-plan through a developer, you're not choosing from a limited set of locked packages. You're working with the builder directly to create the investment property you actually want, not a generic product designed to maximise the developer's margin.",
 bullets: [
 "Direct access to the builder throughout",
 "Full floorplan and finish customisation",
 "Compliance guidance for your investment type",
 ],
 },
 {
 number: 4,
 title: "Transparent Transaction",
 description1:
 "Once the design is finalised, the builder provides a fixed-price contract — with the actual builder's invoice, no project marketing overlay, no agency fee, and no hidden levies. You pay the builder directly, which means every dollar goes to the people doing the work.",
 description2:
 "We review all contracts on your behalf to ensure the scope of works, payment schedule, defect liability period, and handover conditions are investor-friendly. We flag anything unusual and help you negotiate where needed. You should never sign a construction contract without fully understanding it.",
 bullets: [
 "Fixed-price, builder-direct contracts",
 "BBD contract review included",
 "No hidden fees or marketing levies",
 ],
 },
 {
 number: 5,
 title: "Rent-Ready Handover",
 description1:
 "At practical completion, you receive the keys to a fully built investment property. We assist with the practical completion inspection to ensure every item on the handover checklist has been addressed before you accept the build.",
 description2:
 "From there, we can connect you with investment-grade property managers who specialise in your chosen investment type — particularly important for co-living and SDA properties, which require specialist management. Our goal is to get your investment generating income from day one.",
 bullets: [
 "Practical completion inspection assistance",
 "Property management connections available",
 "Income-earning from day one",
 ],
 },
];

const agentRoute = [
 "Agent/marketing fees: 2–3% of contract value",
 "Marketing levy charged to investors",
 "Slow, opaque process with multiple intermediaries",
 "Hidden markups embedded in developer price",
 "Limited customisation — set packages only",
 "Commission-driven recommendations",
];

const builderDirect = [
 "No agent, no marketing levy — zero",
 "Builder invoice is your invoice",
 "Streamlined: you speak directly to the builder",
 "100% transparent pricing, line by line",
 "Full customisation with the builder",
 "Impartial matching based on your brief",
];

const documents = [
 "Government-issued photo ID (passport or driver's licence)",
 "Proof of deposit funds or equity access confirmation",
 "Pre-approval or formal finance approval letter",
 "Signed investment brief / scope of works",
 "Council zoning confirmation for your target site",
];

const timeline = [
 { phase: "Discovery", timing: "Week 1", detail: "Goal setting, investment type selection, budget confirmation" },
 { phase: "Match", timing: "Week 2", detail: "Builder matching, introductory meeting, initial Q&A" },
 { phase: "Customise", timing: "Weeks 3–4", detail: "Floorplan selection, finish specification, quote preparation" },
 { phase: "Contract", timing: "Week 5", detail: "Fixed-price contract review, signing, deposit payment" },
 { phase: "Build", timing: "Varies by type", detail: "Construction commences — typically 6–18 months depending on build type" },
 { phase: "Handover", timing: "Build + 1 week", detail: "Practical completion inspection, keys, property management handover" },
];

export default function HowItWorksPage() {
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
 The Process
 </p>
 <h1
 className="text-5xl font-bold md:text-6xl lg:text-7xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 How It Works
 </h1>
 <p
 className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed"
 style={{ color: "#A3A3A3" }}
 >
 5 simple steps from brief to rent-ready — and you deal direct with
 the builder the entire way.
 </p>
 </div>
 </section>

 {/* ── Full Step Timeline ────────────────────────────────────── */}
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site">
 <div className="space-y-16">
 {steps.map((step, i) => (
 <div
 key={step.number}
 className="grid gap-10 md:grid-cols-2 items-start"
 >
 {/* Left: content */}
 <div className={i % 2 === 1 ? "md:order-2" : ""}>
 <div className="flex items-center gap-4 mb-5">
 <div
 className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl font-bold"
 style={{ background: "#DC2626", color: "#FFFFFF", fontFamily: "var(--font-display)" }}
 >
 {step.number}
 </div>
 <h2
 className="text-2xl font-bold md:text-3xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 {step.title}
 </h2>
 </div>
 <p className="text-base leading-relaxed mb-4" style={{ color: "#A3A3A3" }}>
 {step.description1}
 </p>
 <p className="text-base leading-relaxed mb-6" style={{ color: "#A3A3A3" }}>
 {step.description2}
 </p>
 <div
 className="rounded-lg p-5"
 style={{
 background: "#141414",
 border: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 <p
 className="text-xs font-bold uppercase tracking-wider mb-3"
 style={{ color: "#DC2626" }}
 >
 What You Get
 </p>
 <ul className="space-y-2">
 {step.bullets.map((b) => (
 <li
 key={b}
 className="flex items-start gap-2 text-sm"
 style={{ color: "#A3A3A3" }}
 >
 <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
 {b}
 </li>
 ))}
 </ul>
 </div>
 </div>

 {/* Right: illustration placeholder */}
 <div className={i % 2 === 1 ? "md:order-1" : ""}>
 <div
 className="w-full rounded-xl flex items-center justify-center"
 style={{
 background: "#1C1C1C",
 border: "1px solid rgba(255,255,255,0.06)",
 height: "280px",
 }}
 >
 <div className="text-center">
 <p
 className="text-5xl mb-3"
 style={{ color: "rgba(220,38,38,0.4)" }}
 >
 {step.number}
 </p>
 <p
 className="text-sm font-medium"
 style={{ color: "#666666" }}
 >
 Step {step.number} — {step.title}
 </p>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── What You Avoid ────────────────────────────────────────── */}
 <section className="section" style={{ background: "#141414" }}>
 <div className="container-site">
 <div className="text-center mb-12">
 <h2
 className="text-3xl font-bold md:text-4xl mb-4"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 What You Avoid
 </h2>
 <p className="text-lg" style={{ color: "#A3A3A3" }}>
 The traditional agent route vs. buying builder direct
 </p>
 </div>

 <div className="grid gap-6 md:grid-cols-2">
 {/* Agent Route */}
 <div
 className="rounded-xl p-8"
 style={{
 background: "#1C1C1C",
 border: "1px solid rgba(255,255,255,0.06)",
 }}
 >
 <h3
 className="text-xl font-bold mb-6"
 style={{ color: "#A3A3A3", fontFamily: "var(--font-display)" }}
 >
 The Agent Route
 </h3>
 <ul className="space-y-3">
 {agentRoute.map((item) => (
 <li
 key={item}
 className="flex items-start gap-3 text-sm leading-relaxed"
 style={{ color: "#666666" }}
 >
 <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
 {item}
 </li>
 ))}
 </ul>
 </div>

 {/* Builder Direct */}
 <div
 className="rounded-xl p-8"
 style={{
 background: "#141414",
 borderTop: "3px solid #DC2626",
 border: "1px solid rgba(220,38,38,0.2)",
 borderTopWidth: "3px",
 }}
 >
 <h3
 className="text-xl font-bold mb-6"
 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
 >
 Builder Direct
 </h3>
 <ul className="space-y-3">
 {builderDirect.map((item) => (
 <li
 key={item}
 className="flex items-start gap-3 text-sm leading-relaxed"
 style={{ color: "#A3A3A3" }}
 >
 <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
 {item}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </section>

 {/* ── Document Checklist ────────────────────────────────────── */}
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site max-w-3xl mx-auto">
 <div className="text-center mb-10">
 <h2
 className="text-3xl font-bold md:text-4xl mb-4"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 What You&apos;ll Need
 </h2>
 <p className="text-lg" style={{ color: "#A3A3A3" }}>
 Documents to have ready when you get started
 </p>
 </div>

 <div
 className="rounded-xl p-8"
 style={{
 background: "#141414",
 border: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 <ul className="space-y-4">
 {documents.map((doc, i) => (
 <li
 key={doc}
 className="flex items-start gap-4"
 style={{ borderBottom: i < documents.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", paddingBottom: i < documents.length - 1 ? "1rem" : "0" }}
 >
 <div
 className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold mt-0.5"
 style={{ background: "#DC2626", color: "#FFFFFF" }}
 >
 {i + 1}
 </div>
 <p className="text-base" style={{ color: "#A3A3A3" }}>{doc}</p>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </section>

 {/* ── Timeline Overview ─────────────────────────────────────── */}
 <section className="section" style={{ background: "#141414" }}>
 <div className="container-site">
 <div className="text-center mb-12">
 <h2
 className="text-3xl font-bold md:text-4xl mb-4"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Typical Build Timeline
 </h2>
 <p className="text-lg" style={{ color: "#A3A3A3" }}>
 From first conversation to keys in hand
 </p>
 </div>

 <div className="relative">
 {/* Vertical line */}
 <div
 className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block"
 style={{ background: "rgba(220,38,38,0.2)", marginLeft: "1.75rem" }}
 />

 <div className="space-y-6">
 {timeline.map((t, i) => (
 <div key={t.phase} className="flex gap-6 items-start">
 <div
 className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xs font-bold text-center leading-tight relative z-10"
 style={{ background: "#DC2626", color: "#FFFFFF" }}
 >
 {i + 1}
 </div>
 <div
 className="flex-1 rounded-xl p-5"
 style={{
 background: "#1C1C1C",
 border: "1px solid rgba(255,255,255,0.06)",
 }}
 >
 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h3
 className="text-lg font-bold"
 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
 >
 {t.phase}
 </h3>
 <span
 className="rounded-full px-3 py-0.5 text-xs font-semibold"
 style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626" }}
 >
 {t.timing}
 </span>
 </div>
 <p className="text-sm" style={{ color: "#A3A3A3" }}>{t.detail}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ── CTA ───────────────────────────────────────────────────── */}
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
 Start your journey
 </h2>
 <p className="text-lg mb-8" style={{ color: "#A3A3A3" }}>
 A free 15-minute call is all it takes to get matched with the right builder.
 </p>
 <Link href="/contact" className="btn-primary">
 Book My Free Assessment
 </Link>
 </div>
 </section>
 </>
 );
}
