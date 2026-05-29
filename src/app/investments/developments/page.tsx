"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PropertyGallery from "@/components/shared/PropertyGallery";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTABand from "@/components/shared/CTABand";
import BenefitsGrid from "@/components/shared/BenefitsGrid";

const benefits = [
 {
 title: "Portfolio Scaling",
 desc: "One site, multiple dwellings. Developments compress your cost-per-unit and accelerate portfolio growth.",
 },
 {
 title: "Multi-Unit Returns",
 desc: "Collect rent from 2–6 dwellings on a single title — dramatically lifting your income per dollar invested.",
 },
 {
 title: "KDR Specialist Builders",
 desc: "Knock-down-rebuild requires specialist experience. BBD's network includes dedicated KDR builders across all major states.",
 },
 {
 title: "Development Approval Support",
 desc: "BBD and our builder partners navigate council DA requirements, overlays, and planning constraints — so you don't have to.",
 },
 {
 title: "Builder-Direct Savings",
 desc: "Multi-unit builds through BBD cut out the developer middleman entirely — saving 10–15% on construction costs.",
 },
 {
 title: "End-to-End Management",
 desc: "From site assessment to handover, BBD coordinates the entire development process with vetted multi-unit builders.",
 },
];

const snapshot = [
 { label: "Typical Gross Yield", value: "5–10%+ (multi-unit)" },
 { label: "Typical Entry Price", value: "$700k+" },
 { label: "Best Suited For", value: "Experienced developers, portfolio scalers" },
 { label: "BBD Support Level", value: "Full coordination" },
];

const faqs: FAQItem[] = [
 {
 question: "What's the difference between a unit development and a knock-down-rebuild (KDR)?",
 answer:
 "A unit development involves building multiple new dwellings on a site — typically 2–6 townhouses or units. A knock-down-rebuild (KDR) involves demolishing an existing structure and building one or more new dwellings in its place. BBD handles both. KDR is often the right choice when you own or purchase a property in an established suburb where land value is high and existing improvements are low.",
 },
 {
 question: "What council approval is needed for a unit development?",
 answer:
 "Most multi-unit developments require a Development Application (DA) or Planning Permit lodged with the local council. Requirements vary significantly by state, council, and zoning. BBD works with builders and town planners who are experienced in navigating local planning frameworks — and we assess development feasibility before you commit to a site.",
 },
 {
 question: "What is a realistic timeline for a unit development?",
 answer:
 "DA approval typically takes 3–9 months depending on council and complexity. Construction adds 12–18 months for a 2–4 unit development. Budget for a total timeline of 18–30 months from site acquisition to handover. BBD provides project-specific timeline estimates at the brief stage based on your site, state, and council.",
 },
 {
 question: "Do you have dual-occupancy or duplex specialist builders?",
 answer:
 "Yes. Dual-occupancy (two dwellings on one title) and duplex builds are among the most popular development strategies BBD supports. Our builder network includes specialists in duplex configurations across VIC, NSW, QLD, and WA — including side-by-side and front-and-back designs. We match the builder to your site and zoning.",
 },
 {
 question: "Can I sell some units and keep others as investment?",
 answer:
 "Absolutely. A common strategy is to develop 3–4 units, sell 1–2 at completion to recycle capital (and potentially realise profit), and retain the remainder as income-producing investments. BBD helps you model this strategy and connects you with conveyancers experienced in subdivision and strata titling.",
 },
];

export default function DevelopmentsPage() {
 return (
 <>
 {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
 <section
 className="relative overflow-hidden pt-32 pb-20"
 style={{ background: "#0A0A0A" }}
 >
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
 { label: "Developments" },
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
 Unit Developments &amp; KDR —{" "}
 <span style={{ color: "#DC2626" }}>Scale Your Portfolio Direct</span>
 </h1>

 <p className="mt-5 text-lg leading-relaxed max-w-2xl" style={{ color: "#A3A3A3" }}>
 Multi-unit developments and knock-down-rebuilds at builder-direct pricing. Scale your
 portfolio faster with BBD coordinating every step of the development process.
 </p>

 <div className="mt-8 flex flex-col sm:flex-row gap-4">
 <Link href="/contact?type=developments" className="btn-primary text-base px-7 py-4">
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
 src="/images/runge-st/exterior-04.jpg"
 alt="Unit development — investment property exterior"
 fill
 className="object-cover"
 sizes="50vw"
 />
 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)" }} />
 <div className="absolute bottom-4 left-4 rounded-xl px-5 py-3" style={{ background: "rgba(10,10,10,0.85)", border: "1px solid rgba(220,38,38,0.3)" }}>
 <p className="text-2xl font-black" style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}>5–10%+</p>
 <p className="text-xs" style={{ color: "#A3A3A3" }}>Multi-Unit Gross Yield</p>
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
 Scale Your Portfolio: Multiple Dwellings, One Builder-Direct Deal
 </h2>
 <div className="space-y-5 text-base leading-relaxed" style={{ color: "#A3A3A3" }}>
 <p>
 Unit developments and knock-down-rebuilds represent the next step for investors
 ready to accelerate portfolio growth. Rather than building one dwelling per site, you
 maximise the land&apos;s potential by developing 2–6 dwellings — and collecting
 multiple rental incomes from a single purchase and development cycle. When the
 numbers work, this is one of the most capital-efficient strategies available to
 Australian property investors.
 </p>
 <p>
 Knock-down-rebuild (KDR) is particularly powerful in established suburbs where
 land value has outstripped the value of existing improvements. By demolishing an
 outdated dwelling and rebuilding two or more modern units, investors can simultaneously
 reset the asset&apos;s depreciation schedule, significantly increase rental income, and
 create equity through the development uplift. BBD&apos;s KDR specialist builders
 manage the demolition, design, permits, and construction as a seamless process.
 </p>
 <p>
 The BBD advantage on developments is significant. Major development projects have
 historically been accessible only through expensive developer channels — with margins
 of 20–30% baked into the price. BBD connects experienced investors directly with
 vetted multi-unit builders. You pay builder-direct pricing, retain full control, and
 keep the development margin for yourself. Our team coordinates the entire process:
 site assessment, DA support, builder matching, construction oversight, and handover.
 </p>
 </div>
 </div>
 </section>

 {/* ── 3. Key Benefits ─────────────────────────────────────────────── */}
 <BenefitsGrid items={benefits} title="Key Benefits" />

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
 title: "Multi-Unit Builder Access",
 body: "BBD&apos;s network includes multi-unit specialists — from duplex builders to 6-unit townhouse developers. You deal with them directly at builder-direct pricing, not developer pricing.",
 },
 {
 num: "02",
 title: "DA & Planning Support",
 body: "Development approval is the biggest risk in any project. BBD&apos;s team and builder partners have navigated hundreds of DAs — we assess feasibility and steer you through the planning process.",
 },
 {
 num: "03",
 title: "End-to-End Coordination",
 body: "Site assessment, builder match, DA lodgement support, construction oversight, subdivision, and handover — BBD coordinates the full development pipeline so you don&apos;t have to manage multiple parties.",
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
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {[
 {
 step: "1",
 title: "Brief",
 body: "Share your site (or target area), unit count, budget, and exit strategy. BBD assesses development feasibility and planning constraints.",
 },
 {
 step: "2",
 title: "Match",
 body: "We match you with a vetted multi-unit builder. You meet directly, review designs, and agree on a fixed-price development contract.",
 },
 {
 step: "3",
 title: "Build",
 body: "BBD coordinates DA support, construction oversight, and handover. Subdivision and strata titling managed in parallel for efficiency.",
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

 {/* ── 7. Outcome Highlight ────────────────────────────────────────── */}
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
 Typical Outcome
 </p>
 <h3
 className="text-2xl font-bold mb-4"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 4-Unit KDR Townhouse Development — Western Sydney
 </h3>
 <p className="text-base leading-relaxed mb-6" style={{ color: "#A3A3A3" }}>
 A BBD client purchased a tired 3-bedroom home in Western Sydney&apos;s middle ring.
 Through BBD&apos;s KDR specialist builder network, they designed and built 4 two-bedroom
 townhouses on the site at $1.42M all-in (land + demolition + construction). The same
 project through a developer channel was quoted at $1.75M — a $330,000 premium. Two
 townhouses were sold at completion, fully recycling the capital invested. Two were
 retained as income-producing assets delivering $820 pw combined gross rent and a
 9.2% gross yield on the retained equity.
 </p>
 <div className="flex flex-wrap gap-6">
 {[
 { label: "Saved vs Developer", value: "$330,000" },
 { label: "Units Developed", value: "4" },
 { label: "Yield on Retained Units", value: "9.2%" },
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
 <CTABand serviceName="Development" slug="developments" />
 </>
 );
}
