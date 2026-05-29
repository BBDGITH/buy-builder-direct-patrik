import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Case Studies | Buy Builder Direct",
 description:
 "Real investors, real results. See how Australian property investors have saved tens of thousands buying direct from builders through BBD.",
};

const stats = [
 { value: "$2.4M+", label: "Total Investor Savings" },
 { value: "180+", label: "Properties Delivered" },
 { value: "98%", label: "Investor Satisfaction" },
];

const caseStudies = [
 {
 name: "Sarah M.",
 location: "Melbourne, VIC",
 investmentType: "Co-Living",
 typeColor: "#DC2626",
 saved: "$30,000",
 savedLabel: "SAVED",
 situation:
 "Sarah was a first-time investor frustrated by the complexity of the standard property market. She wanted positive cash flow from her first investment, specifically targeting Melbourne's inner suburbs where the rental market for young professionals was exceptionally strong. Every agent she spoke to was selling packaged products at prices that didn't stack up.",
 solution:
 "BBD matched Sarah with a licensed co-living specialist builder in Footscray — a suburb where young professional demand for private rooms had dramatically outpaced supply. The builder designed a 6-room co-living property on a standard residential block. Sarah dealt directly with the builder from brief through to handover.",
 outcome:
 "Sarah's 6-room co-living property was handed over on time and fully tenanted within 3 weeks. The final build price came in $30,000 below the equivalent co-living product being sold through project marketers in the same area. With all rooms leased at market rate, the property was positively geared from the first full month of ownership.",
 quote:
 "The savings were real and the process was completely transparent. I knew exactly where every dollar was going — no surprises, no hidden markups.",
 },
 {
 name: "James T.",
 location: "Brisbane, QLD",
 investmentType: "Rooming Houses",
 typeColor: "#DC2626",
 saved: "$60,000+",
 savedLabel: "SAVED",
 situation:
 "James was an experienced investor with an existing portfolio and a clear goal: scale faster. He had been buying through buyers' agents and was frustrated by the pace and the margin he was giving up on each transaction. He wanted to do multiple builds in Brisbane's growth corridors without paying agent fees on every one.",
 solution:
 "BBD arranged three consecutive rooming house builds for James in Brisbane's south-west growth corridor — all with the same specialist builder who understood Queensland's boarding house licensing requirements inside and out. Because James was placing volume, there was genuine room to negotiate, and we helped him extract better terms on each successive build.",
 outcome:
 "Three rooming house properties, delivered over 18 months. Combined savings versus the agent-marketed equivalent: over $60,000. All three properties were positively geared from month one, with strong occupancy supported by the proximity to employment hubs and public transport. James has since introduced two colleagues to BBD.",
 quote:
 "Three builds, zero agent markups. BBD made scaling simple — and the direct builder relationship means I know exactly what I'm getting every time.",
 },
];

export default function CaseStudiesPage() {
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
 Social Proof
 </p>
 <h1
 className="text-5xl font-bold md:text-6xl lg:text-7xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Real Investors.{" "}
 <span style={{ color: "#DC2626" }}>Real Results.</span>
 </h1>
 <p
 className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed"
 style={{ color: "#A3A3A3" }}
 >
 The numbers are compelling. The stories behind them are even better.
 </p>
 </div>
 </section>

 {/* ── Stats Banner ──────────────────────────────────────────── */}
 <section
 className="py-10"
 style={{
 background: "#141414",
 borderBottom: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <div className="container-site">
 <div className="grid grid-cols-3 gap-6 text-center">
 {stats.map((s) => (
 <div key={s.label}>
 <p
 className="text-4xl font-bold md:text-5xl"
 style={{
 color: "#DC2626",
 fontFamily: "var(--font-display)",
 }}
 >
 {s.value}
 </p>
 <p className="mt-1 text-sm font-medium" style={{ color: "#A3A3A3" }}>
 {s.label}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Case Study Cards ──────────────────────────────────────── */}
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site">
 <div className="grid gap-10 md:grid-cols-2">
 {caseStudies.map((cs) => (
 <div
 key={cs.name}
 className="rounded-xl overflow-hidden flex flex-col"
 style={{
 background: "#141414",
 border: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 {/* Card header */}
 <div
 className="px-8 py-6 flex items-center justify-between gap-4"
 style={{
 background: "#1C1C1C",
 borderBottom: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <div>
 <h2
 className="text-2xl font-bold"
 style={{
 fontFamily: "var(--font-display)",
 color: "#FFFFFF",
 }}
 >
 {cs.name}
 </h2>
 <p className="text-sm mt-0.5" style={{ color: "#A3A3A3" }}>
 {cs.location}
 </p>
 </div>
 <div className="text-right shrink-0">
 <span
 className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide"
 style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626" }}
 >
 {cs.investmentType}
 </span>
 </div>
 </div>

 {/* Body */}
 <div className="flex-1 p-8 space-y-5">
 {/* Situation */}
 <div>
 <p
 className="text-xs font-bold uppercase tracking-widest mb-2"
 style={{ color: "#DC2626" }}
 >
 The Situation
 </p>
 <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
 {cs.situation}
 </p>
 </div>

 {/* Solution */}
 <div>
 <p
 className="text-xs font-bold uppercase tracking-widest mb-2"
 style={{ color: "#DC2626" }}
 >
 The Solution
 </p>
 <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
 {cs.solution}
 </p>
 </div>

 {/* Outcome */}
 <div>
 <p
 className="text-xs font-bold uppercase tracking-widest mb-2"
 style={{ color: "#DC2626" }}
 >
 The Outcome
 </p>
 <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
 {cs.outcome}
 </p>
 </div>

 {/* Quote */}
 <blockquote
 className="rounded-lg px-6 py-5 italic"
 style={{
 background: "rgba(220,38,38,0.06)",
 border: "1px solid rgba(220,38,38,0.2)",
 borderLeft: "3px solid #DC2626",
 }}
 >
 <p className="text-sm leading-relaxed" style={{ color: "#FFFFFF" }}>
 &ldquo;{cs.quote}&rdquo;
 </p>
 <p className="mt-2 text-xs font-semibold" style={{ color: "#A3A3A3" }}>
 — {cs.name}, {cs.location}
 </p>
 </blockquote>
 </div>

 {/* Savings callout */}
 <div
 className="px-8 py-5 flex items-center justify-between"
 style={{
 background: "#DC2626",
 }}
 >
 <p className="text-sm font-bold text-white uppercase tracking-wide">
 Total Saving
 </p>
 <p
 className="text-3xl font-bold text-white"
 style={{ fontFamily: "var(--font-display)" }}
 >
 {cs.saved} {cs.savedLabel}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Your Story Next CTA ───────────────────────────────────── */}
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
 Your story could be next.
 </h2>
 <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#A3A3A3" }}>
 Join 180+ investors who have saved millions by dealing direct.
 Your free savings assessment takes less than 5 minutes.
 </p>
 <Link href="/contact" className="btn-primary">
 Get My Free Savings Assessment
 </Link>
 </div>
 </section>
 </>
 );
}
