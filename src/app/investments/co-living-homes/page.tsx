"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PropertyGallery from "@/components/shared/PropertyGallery";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTABand from "@/components/shared/CTABand";

const benefits = [
 {
 title: "High Yield (6–12%)",
 desc: "Co-living delivers some of the strongest gross rental yields in residential property.",
 },
 {
 title: "Low Vacancy",
 desc: "Urban demand from young professionals keeps rooms filled and cash flowing year-round.",
 },
 {
 title: "Urban Demand",
 desc: "Major cities face chronic undersupply of quality shared accommodation for working adults.",
 },
 {
 title: "BBD Builder Access",
 desc: "We connect you directly with co-living specialists — cutting agent markups out entirely.",
 },
 {
 title: "No Agent Fee",
 desc: "Buy at builder-direct pricing and pocket the 10–15% that would have gone to a sales agent.",
 },
 {
 title: "Rent-Ready Design",
 desc: "Layouts optimised for shared living — private ensuites, common areas, NBN-ready rooms.",
 },
];

const snapshot = [
 { label: "Typical Gross Yield", value: "6–12%" },
 { label: "Typical Entry Price", value: "$450k – $900k" },
 { label: "Best Suited For", value: "Yield-focused urban investors" },
 { label: "BBD Support Level", value: "Full end-to-end" },
];

const faqs: FAQItem[] = [
 {
 question: "What is a co-living investment property?",
 answer:
 "Co-living properties are purpose-built homes with 2–9 private bedrooms, each rented individually, sharing quality communal spaces. They attract young professionals seeking affordable urban living with community feel. As an investor you earn rent from each room rather than a single tenancy.",
 },
 {
 question: "What yield can I realistically expect?",
 answer:
 "Well-located co-living properties in Melbourne, Sydney, and Brisbane typically achieve 6–12% gross yield. The multi-room structure means total rent is significantly higher than a comparable single-tenancy dwelling on the same land.",
 },
 {
 question: "Is planning approval required for co-living?",
 answer:
 "Requirements vary by council and state. In Victoria, properties with fewer than 5 unrelated occupants generally sit under standard residential planning. Our builder partners and BBD's team guide you through local council requirements before you commit to a design.",
 },
 {
 question: "Which cities work best for co-living investment?",
 answer:
 "Melbourne (inner west and north), Sydney (inner west), Brisbane (inner city and near universities), and Perth CBD fringe are currently our strongest-performing corridors. BBD's market intel helps you choose the right suburb for maximum occupancy.",
 },
 {
 question: "How does BBD help me build a co-living property?",
 answer:
 "BBD connects you directly with vetted builders who specialise in co-living floor plans. You deal with the builder — not an agent. We coordinate the brief, match you to the right builder, support you through the build, and connect you with specialist property managers at handover.",
 },
];

export default function CoLivingHomesPage() {
 return (
 <>
 {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
 <section
 className="relative overflow-hidden pt-32 pb-20"
 style={{ background: "#0A0A0A" }}
 >
 {/* Decorative orb */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(220,38,38,0.15) 0%, rgba(220,38,38,0.05) 45%, transparent 70%)",
 }}
 />

 <div className="container-site relative z-10">
 <Breadcrumb
 items={[
 { label: "Home", href: "/" },
 { label: "Investments", href: "/investments" },
 { label: "Co-Living Homes" },
 ]}
 />

 <div className="mt-8 grid lg:grid-cols-2 items-center gap-10 pb-8 lg:pb-20">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
 >
 <p
 className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
 style={{
 borderColor: "rgba(220,38,38,0.4)",
 color: "#DC2626",
 background: "rgba(220,38,38,0.08)",
 }}
 >
 Investment Pathway
 </p>

 <h1
 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Co-Living Investment Properties —{" "}
 <span style={{ color: "#DC2626" }}>Built Direct</span>
 </h1>

 <p className="mt-5 text-lg leading-relaxed max-w-2xl" style={{ color: "#A3A3A3" }}>
 Unlock 6–12% yields in Australia&apos;s most in-demand urban corridors — by building
 direct with specialist co-living builders and skipping the agent markup entirely.
 </p>

 <div className="mt-8 flex flex-col sm:flex-row gap-4">
 <Link href="/contact?type=co-living-homes" className="btn-primary text-base px-7 py-4">
 Get My Free Assessment
 </Link>
 <a href="tel:0409005554" className="btn-secondary text-base px-7 py-4">
 0409 005 554
 </a>
 </div>
 </motion.div>
 {/* ── Hero Image ── */}
 <motion.div
 initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
 animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
 transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] as [number,number,number,number], delay: 0.3 }}
 className="relative hidden lg:block rounded-2xl overflow-hidden"
 style={{ height: "480px" }}
 >
 <Image
 src="/images/runge-st/living-01.jpg"
 alt="Co-living investment property interior"
 fill
 className="object-cover"
 sizes="50vw"
 />
 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)" }} />
 <div className="absolute bottom-4 left-4 rounded-xl px-5 py-3" style={{ background: "rgba(10,10,10,0.85)", border: "1px solid rgba(220,38,38,0.3)" }}>
 <p className="text-2xl font-black" style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}>6–12%</p>
 <p className="text-xs" style={{ color: "#A3A3A3" }}>Typical Gross Yield</p>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* ── 2. Overview ─────────────────────────────────────────────────── */}
 <section className="section" style={{ background: "#141414" }}>
 <div className="container-site max-w-4xl mx-auto">
 <h2
 className="text-3xl font-bold mb-6 md:text-4xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Why Co-Living Is Australia&apos;s Fastest-Growing Yield Play
 </h2>
 <div className="space-y-5 text-base leading-relaxed" style={{ color: "#A3A3A3" }}>
 <p>
 Co-living properties — homes purpose-built with 2 to 9 private bedrooms, shared
 kitchens and living areas — are rapidly becoming the go-to investment for Australian
 investors who want strong cash flow without speculative risk. Rather than collecting
 one rent from one tenant, you collect individual rents from each room. In inner-city
 Melbourne, a six-bedroom co-living property can generate $3,000–$4,500 per week in
 combined rental income from the same footprint a standard three-bedroom home would
 attract $600–$900 pw.
 </p>
 <p>
 Urban demand is structural and growing. Young professionals are priced out of
 apartments but won&apos;t accept share-house quality. Purpose-built co-living fills
 that gap — private ensuites, high-speed internet, modern communal spaces — creating
 low vacancy rates and high tenant retention. Inner-Melbourne and inner-Brisbane
 co-living vacancy typically sits below 3%, dramatically outperforming the broader
 rental market.
 </p>
 <p>
 The BBD advantage is simple: we connect you directly with builders who specialise in
 co-living floor plans and construction. There is no project marketer, no selling
 agent, no intermediary adding 10–15% to your purchase price. Sarah M., one of our
 Melbourne investors, saved over $30,000 on her Footscray co-living build — and used
 that saving to furnish every room professionally, lifting her yield further still.
 </p>
 </div>
 </div>
 </section>

 {/* ── 3. Key Benefits ─────────────────────────────────────────────── */}
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site">
 <h2
 className="text-3xl font-bold mb-10 text-center md:text-4xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Key Benefits
 </h2>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {benefits.map((b) => (
 <div
 key={b.title}
 className="rounded-xl p-6 transition-transform hover:-translate-y-1"
 style={{
 background: "#141414",
 border: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <span className="text-3xl mb-4 block"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
 <h3 className="font-bold text-lg mb-2" style={{ color: "#FFFFFF" }}>
 {b.title}
 </h3>
 <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
 {b.desc}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── 4. How BBD Helps ────────────────────────────────────────────── */}
 <section className="section" style={{ background: "#141414" }}>
 <div className="container-site max-w-4xl mx-auto">
 <h2
 className="text-3xl font-bold mb-10 md:text-4xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 How BBD Helps You
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {[
 {
 num: "01",
 title: "Direct Builder Access",
 body: "We match you with co-living specialists who build these properties every week. You communicate directly with the builder — no middleman, no information lost in translation.",
 },
 {
 num: "02",
 title: "10–15% Builder-Direct Savings",
 body: "By cutting out the agent and project marketer, you access the builder's base price. On a $600k co-living build, that's up to $90k saved before your first tenant moves in.",
 },
 {
 num: "03",
 title: "Rent-Ready Handover & PM Connection",
 body: "We connect you with co-living property managers at handover — specialists who understand room-by-room leasing, platform listing, and maximising your occupancy rate.",
 },
 ].map((item) => (
 <div key={item.num} className="flex flex-col gap-3">
 <span
 className="text-4xl font-black"
 style={{ color: "rgba(220,38,38,0.3)", fontFamily: "var(--font-display)" }}
 >
 {item.num}
 </span>
 <h3 className="font-bold text-lg" style={{ color: "#FFFFFF" }}>
 {item.title}
 </h3>
 <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
 {item.body}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── 5. Snapshot Table ───────────────────────────────────────────── */}
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site max-w-3xl mx-auto">
 <h2
 className="text-3xl font-bold mb-8 text-center md:text-4xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Investment Snapshot
 </h2>
 <div
 className="rounded-xl overflow-hidden"
 style={{ border: "1px solid rgba(220,38,38,0.2)" }}
 >
 {snapshot.map((row, i) => (
 <div
 key={row.label}
 className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 gap-2"
 style={{
 background: i % 2 === 0 ? "#141414" : "#1C1C1C",
 borderBottom:
 i < snapshot.length - 1 ? "1px solid rgba(220,38,38,0.1)" : "none",
 }}
 >
 <span className="text-sm font-semibold" style={{ color: "#A3A3A3" }}>
 {row.label}
 </span>
 <span className="font-bold" style={{ color: "#FFFFFF" }}>
 {row.value}
 </span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── 6. Process Preview ──────────────────────────────────────────── */}
 <section className="section" style={{ background: "#141414" }}>
 <div className="container-site max-w-4xl mx-auto text-center">
 <h2
 className="text-3xl font-bold mb-10 md:text-4xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 How It Works — 3 Simple Steps
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
 {[
 {
 step: "1",
 title: "Brief",
 body: "Tell us your goals, budget, and preferred location. We assess the right co-living configuration for your strategy.",
 },
 {
 step: "2",
 title: "Match",
 body: "BBD matches you with a vetted co-living builder. You meet them directly, review designs, and agree on price.",
 },
 {
 step: "3",
 title: "Build",
 body: "Construction begins. BBD supports you through the build, then connects you with a specialist PM at handover.",
 },
 ].map((s) => (
 <div key={s.step} className="flex flex-col items-center gap-4">
 <div
 className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black"
 style={{ background: "#DC2626", color: "#FFFFFF" }}
 >
 {s.step}
 </div>
 <h3 className="font-bold text-xl" style={{ color: "#FFFFFF" }}>
 {s.title}
 </h3>
 <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
 {s.body}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── 7. Case Study ───────────────────────────────────────────────── */}
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site max-w-3xl mx-auto">
 <div
 className="rounded-2xl p-8 md:p-10"
 style={{
 background: "#141414",
 border: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 <p
 className="mb-2 text-xs font-semibold uppercase tracking-widest"
 style={{ color: "#DC2626" }}
 >
 Case Study
 </p>
 <h3
 className="text-2xl font-bold mb-4"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Sarah M. — Footscray, Melbourne
 </h3>
 <p className="text-base leading-relaxed mb-6" style={{ color: "#A3A3A3" }}>
 Sarah was looking for her second investment property. She&apos;d researched co-living
 returns online but every path to market led through a project marketer charging a
 significant premium. BBD connected her directly with a co-living builder in Melbourne&apos;s
 inner west. She secured a 6-bedroom, 6-ensuite co-living home in Footscray at
 builder-direct pricing — saving $30,000 compared to similar off-the-plan offerings
 nearby. With all rooms rented at $350 pw each, Sarah&apos;s property generates $2,100 pw
 in gross rent on a $680k all-in investment.
 </p>
 <div className="flex flex-wrap gap-6">
 {[
 { label: "Saved", value: "$30,000" },
 { label: "Weekly Gross Rent", value: "$2,100" },
 { label: "Gross Yield", value: "~16%" },
 ].map((stat) => (
 <div key={stat.label}>
 <p className="text-2xl font-black" style={{ color: "#DC2626" }}>
 {stat.value}
 </p>
 <p className="text-xs mt-1" style={{ color: "#A3A3A3" }}>
 {stat.label}
 </p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ── Property Gallery ─────────────────────────────────────────── */}
 <PropertyGallery title="The Finish Quality" />

 {/* ── 8. FAQ ──────────────────────────────────────────────────────── */}
 <section className="section" style={{ background: "#141414" }}>
 <div className="container-site max-w-3xl mx-auto">
 <h2
 className="text-3xl font-bold mb-10 text-center md:text-4xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Frequently Asked Questions
 </h2>
 <FAQAccordion items={faqs} />
 </div>
 </section>

 {/* ── 9. CTA Band ─────────────────────────────────────────────────── */}
 <CTABand serviceName="Co-Living" slug="co-living-homes" />
 </>
 );
}
