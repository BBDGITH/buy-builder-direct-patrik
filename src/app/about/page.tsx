import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "About Us | Buy Builder Direct",
 description:
 "Learn how Buy Builder Direct has helped Australian investors save millions by cutting out the middleman and dealing direct with vetted builders.",
};

const stats = [
 { value: "180+", label: "Properties Delivered" },
 { value: "7", label: "States Covered" },
 { value: "$2.4M+", label: "Saved by Investors" },
 { value: "7+", label: "Years Operating" },
];

const vettingCriteria = [
 {
 title: "Licensed & Insured",
 description:
 "Every builder must hold a current builder's licence for their state and carry full construction insurance — domestic and public liability.",
 },
 {
 title: "Track Record",
 description:
 "We require a minimum of 5 completed investment builds, with references we verify directly. No newcomers with no evidence.",
 },
 {
 title: "Financial Stability",
 description:
 "Builders undergo financial health checks — we look at solvency, ASIC records, and credit history before any relationship begins.",
 },
 {
 title: "Quality Standards",
 description:
 "We conduct site inspections on active builds and review defect histories. Your build should be done right, not just done.",
 },
];

const states = ["VIC", "NSW", "QLD", "WA", "SA", "NT", "TAS"];

export default function AboutPage() {
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
 Our Story
 </p>
 <h1
 className="text-5xl font-bold md:text-6xl lg:text-7xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 About Buy Builder Direct
 </h1>
 <p
 className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed"
 style={{ color: "#A3A3A3" }}
 >
 We exist to level the playing field for Australian property
 investors — giving you the same direct access to builders that
 developers have always enjoyed.
 </p>
 </div>
 </section>

 {/* ── Mission + Stats ───────────────────────────────────────── */}
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site">
 <div className="grid gap-12 md:grid-cols-2 items-start">
 {/* Left: mission text */}
 <div>
 <h2
 className="text-3xl font-bold md:text-4xl mb-6"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Our Mission
 </h2>
 <p
 className="text-lg leading-relaxed mb-5"
 style={{ color: "#A3A3A3" }}
 >
 The Australian property investment industry has long been
 structured to benefit intermediaries — not investors. Buyer's
 agents, project marketers, and developers all clip the ticket
 before the property reaches you, adding 10–20% in invisible
 costs that erode your yield from day one.
 </p>
 <p
 className="text-lg leading-relaxed mb-5"
 style={{ color: "#A3A3A3" }}
 >
 Buy Builder Direct was built on a single premise: cut out the
 middleman entirely. By connecting investors directly to licensed,
 vetted builders, we eliminate those markups and pass the savings
 straight to you — typically 10–15% off the equivalent agent or
 developer price.
 </p>
 <p
 className="text-lg leading-relaxed"
 style={{ color: "#A3A3A3" }}
 >
 Over 7+ years of operation, we have built relationships with
 builders across all seven states and territories, spanning
 co-living, rooming houses, SDA/NDIS, house and land, custom
 builds, and full developments.
 </p>
 </div>

 {/* Right: stats */}
 <div className="grid grid-cols-2 gap-6">
 {stats.map((s) => (
 <div
 key={s.label}
 className="rounded-xl p-6 text-center"
 style={{
 background: "#141414",
 border: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 <p
 className="text-4xl font-bold mb-2"
 style={{
 color: "#DC2626",
 fontFamily: "var(--font-display)",
 }}
 >
 {s.value}
 </p>
 <p className="text-sm font-medium" style={{ color: "#A3A3A3" }}>
 {s.label}
 </p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ── Our Story ─────────────────────────────────────────────── */}
 <section className="section" style={{ background: "#141414" }}>
 <div className="container-site max-w-3xl mx-auto">
 <h2
 className="text-3xl font-bold md:text-4xl mb-8 text-center"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Our Story
 </h2>
 <div className="space-y-5">
 <p className="text-lg leading-relaxed" style={{ color: "#A3A3A3" }}>
 Buy Builder Direct was founded after our team — all experienced
 property investors — discovered firsthand how much money was being
 lost to hidden agent markups. A colleague purchased a brand-new
 investment property through a popular project marketing firm,
 only to find out the builder had sold the same floorplan for
 $47,000 less directly. The margin had been absorbed entirely by
 the marketing layer.
 </p>
 <p className="text-lg leading-relaxed" style={{ color: "#A3A3A3" }}>
 That experience led to a simple question: what if investors could
 access those builder-direct prices themselves? The answer required
 building trust on both sides — convincing builders that working
 directly with end investors was worth their time, and convincing
 investors that they could safely navigate a build without an agent
 holding their hand.
 </p>
 <p className="text-lg leading-relaxed" style={{ color: "#A3A3A3" }}>
 Seven years later, Buy Builder Direct has facilitated over 180
 investment property builds across Australia, saving investors a
 combined $2.4 million in fees and markups. Our model is simple,
 transparent, and investor-first — and it always will be.
 </p>
 </div>
 </div>
 </section>

 {/* ── Builder Vetting ───────────────────────────────────────── */}
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site">
 <div className="text-center mb-12">
 <h2
 className="text-3xl font-bold md:text-4xl mb-4"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 How We Vet Our Builders
 </h2>
 <p className="text-lg max-w-2xl mx-auto" style={{ color: "#A3A3A3" }}>
 Not every builder makes it onto our platform. Our vetting process
 filters for quality, reliability, and financial integrity.
 </p>
 </div>

 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 {vettingCriteria.map((c) => (
 <div
 key={c.title}
 className="rounded-xl p-6"
 style={{
 background: "#141414",
 borderTop: "3px solid #DC2626",
 border: "1px solid rgba(220,38,38,0.15)",
 borderTopWidth: "3px",
 }}
 >
 <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "#DC2626" }} aria-hidden="true"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
 <h3
 className="text-lg font-bold mb-3"
 style={{
 color: "#FFFFFF",
 fontFamily: "var(--font-display)",
 }}
 >
 {c.title}
 </h3>
 <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
 {c.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Coverage Map ──────────────────────────────────────────── */}
 <section className="section" style={{ background: "#141414" }}>
 <div className="container-site text-center">
 <h2
 className="text-3xl font-bold md:text-4xl mb-4"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 We Operate Nationwide
 </h2>
 <p className="text-lg mb-10" style={{ color: "#A3A3A3" }}>
 Active builder partnerships across every Australian state and
 territory
 </p>

 <div className="flex flex-wrap justify-center gap-4 mb-8">
 {states.map((state) => (
 <div
 key={state}
 className="rounded-lg px-6 py-3 text-sm font-bold tracking-wide"
 style={{
 background: "#DC2626",
 color: "#FFFFFF",
 minWidth: "80px",
 }}
 >
 {state}
 </div>
 ))}
 </div>

 <p className="text-sm" style={{ color: "#A3A3A3" }}>
 New builder partnerships added regularly — reach out if you don&apos;t
 see your area listed.
 </p>
 </div>
 </section>

 {/* ── CTA Band ──────────────────────────────────────────────── */}
 <section
 className="section"
 style={{
 background:
 "linear-gradient(135deg, #1C1C1C 0%, #141414 100%)",
 borderTop: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <div className="container-site text-center">
 <h2
 className="text-3xl font-bold md:text-4xl mb-4"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Ready to meet a vetted builder?
 </h2>
 <p className="text-lg mb-8" style={{ color: "#A3A3A3" }}>
 Get your free savings assessment — no obligation, no agent fees.
 </p>
 <Link href="/contact" className="btn-primary">
 Get My Free Assessment
 </Link>
 </div>
 </section>
 </>
 );
}
