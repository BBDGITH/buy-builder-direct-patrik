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
 title: "Turnkey Convenience",
 desc: "Land and construction bundled into one seamless package — register, build, settle, rent.",
 },
 {
 title: "Capital Growth",
 desc: "New dwellings in growth corridors have consistently outperformed established stock over 10-year cycles.",
 },
 {
 title: "Builder Promotions",
 desc: "BBD accesses builder promotions — upgrades, incentives, and pricing — not available through retail channels.",
 },
 {
 title: "Land + Build Combined",
 desc: "One contract, one point of contact. Simplify the investment process from land selection to handover.",
 },
 {
 title: "Fixed Price Contract",
 desc: "No cost blowouts. Your construction price is locked in before the slab is poured.",
 },
 {
 title: "Nationwide",
 desc: "BBD has house and land packages across all major growth corridors in VIC, NSW, QLD, WA, and SA.",
 },
];

const snapshot = [
 { label: "Typical Gross Yield", value: "4–7%" },
 { label: "Typical Entry Price", value: "$450k – $850k" },
 { label: "Best Suited For", value: "Capital growth + stability seekers" },
 { label: "BBD Support Level", value: "Access to exclusive packages" },
];

const faqs: FAQItem[] = [
 {
 question: "What's included in a house and land package?",
 answer:
 "A house and land package combines a registered (or soon-to-register) land lot with a fixed-price house construction contract. The price typically covers the land purchase, slab, frame, lockup, fit-out, and practical completion. Some packages include flooring, landscaping, and driveway — BBD clarifies exactly what is included for each package before you commit.",
 },
 {
 question: "Can I choose the land myself, or does BBD choose it?",
 answer:
 "You choose. BBD presents you with available lots in your target corridors and provides suburb-level yield and growth data to support your decision. You can also bring your own land and we&apos;ll match you with the right builder for the house component.",
 },
 {
 question: "Are there stamp duty savings on house and land packages?",
 answer:
 "In most states, you pay stamp duty only on the land component when buying a house and land package — not on the full improved property value. In Victoria, NSW, and QLD this can represent a significant saving compared to purchasing an established property. BBD recommends confirming your specific position with a conveyancer or solicitor.",
 },
 {
 question: "What is a typical build timeline for a house and land package?",
 answer:
 "From land registration to practical completion, most house and land builds take 12–18 months depending on state, builder, and land development stage. BBD&apos;s builder partners provide fixed construction timelines in their contracts — you know before you sign how long the build will take.",
 },
 {
 question: "Can I negatively gear a house and land package?",
 answer:
 "Yes. New builds offer strong tax depreciation benefits — both building write-down and plant and equipment — which, combined with interest deductions, can make a house and land package very tax-effective. BBD recommends working with a property-savvy accountant to model your specific tax position.",
 },
];

export default function HouseAndLandPage() {
 return (
 <>
 {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
 <section
 className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 lg:pb-20"
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
 { label: "House & Land" },
 ]}
 />

 <div className="mt-6 grid lg:grid-cols-2 items-center gap-8 lg:gap-10 pb-6 lg:pb-20">
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
 House &amp; Land Packages —{" "}
 <span style={{ color: "#DC2626" }}>Buy Direct, Save More</span>
 </h1>

 <p className="mt-5 text-lg leading-relaxed max-w-2xl" style={{ color: "#A3A3A3" }}>
 Turnkey investment packages across Australia&apos;s strongest growth corridors — at
 builder-direct pricing with exclusive promotions not available through retail channels.
 </p>

 <div className="mt-8 flex flex-col sm:flex-row gap-4">
 <Link href="/contact?type=house-and-land" className="btn-primary text-base px-7 py-4">
 Get My Free Assessment
 </Link>
 <a href="tel:+61489995725" className="btn-secondary text-base px-7 py-4">
 +61 489 995 725
 </a>
 </div>
 </motion.div>
 {/* ── Hero Image ── */}
 <motion.div
 initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
 animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
 transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] as [number,number,number,number], delay: 0.3 }}
 className="relative block rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-[480px]"
 >
 <Image
 src="/images/projects/birdsmouth-la/birdsmouth-la-1.jpg"
 alt="House and land investment — exterior front view"
 fill
 priority
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 50vw"
 />
 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)" }} />
 <div className="absolute bottom-4 left-4 rounded-xl px-5 py-3" style={{ background: "rgba(10,10,10,0.85)", border: "1px solid rgba(220,38,38,0.3)" }}>
 <p className="text-2xl font-black" style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}>4–7%</p>
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
 Stable Cash Flow + Capital Growth, Without the Complexity
 </h2>
 <div className="space-y-5 text-base leading-relaxed" style={{ color: "#A3A3A3" }}>
 <p>
 House and land packages offer Australian investors the simplest entry point into new
 residential property investment. You select a land lot in a growth corridor, pair it
 with a builder&apos;s fixed-price house design, and the result is a brand-new,
 depreciation-rich investment property — delivered turnkey, on time, and on budget.
 Gross yields typically sit between 4–7%, with the primary return driver being
 capital growth as the corridor matures around your property.
 </p>
 <p>
 The BBD difference is access. Our builder relationships mean we can present packages
 — including builder promotions, upgrade incentives, and preferred-partner pricing —
 that are simply not available to retail buyers walking into a display home. Major
 builders offer exclusive pricing to volume partners, and BBD passes that advantage
 directly to you. The 10–15% saving on a $700k package represents $70,000–$105,000 in
 additional equity from day one.
 </p>
 <p>
 From regional growth centres in Victoria and Queensland, to expanding outer-metro
 corridors in Western Australia and South Australia, BBD&apos;s nationwide builder
 network means we can find the right package for your strategy — wherever
 the opportunity is strongest right now.
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
 title: "Exclusive Builder Access",
 body: "BBD has preferred-partner agreements with major residential builders. We access promotions and pricing that retail buyers never see — saving you 10–15% from the start.",
 },
 {
 num: "02",
 title: "Growth Corridor Intelligence",
 body: "We track infrastructure pipelines, population growth data, and rental demand by suburb — so you invest in corridors with genuine growth fundamentals, not just marketing hype.",
 },
 {
 num: "03",
 title: "Turnkey to Tenanted",
 body: "From land selection to lease-up, BBD supports the entire process. At handover, we connect you with local property managers to minimise the gap between completion and your first rent.",
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
 body: "Share your budget, preferred corridor, and investment goals. BBD presents matching house and land options with growth data.",
 },
 {
 step: "2",
 title: "Match",
 body: "We match you with the right builder and package. You review the land, the house design, and the fixed-price contract — then sign direct.",
 },
 {
 step: "3",
 title: "Build",
 body: "Construction is managed by the builder with BBD in your corner. At handover we connect you with a local property manager to tenant quickly.",
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
 4-Bedroom House &amp; Land — South East Queensland Growth Corridor
 </h3>
 <p className="text-base leading-relaxed mb-6" style={{ color: "#A3A3A3" }}>
 A BBD client targeting Queensland&apos;s growth corridor was quoted $765,000 through a
 project marketer. Through BBD&apos;s preferred-partner builder relationship, the same
 home was secured at $680,000 — a saving of $85,000 before the slab was poured. The
 property was tenanted 11 days after practical completion at $680 pw, delivering a
 gross yield of 5.2% from day one, with corridor infrastructure upgrades forecast to
 drive significant capital growth over the next decade.
 </p>
 <div className="flex flex-wrap gap-6">
 {[
 { label: "Saved vs Retail", value: "$85,000" },
 { label: "Weekly Rent", value: "$680 pw" },
 { label: "Gross Yield", value: "5.2%" },
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
 <CTABand serviceName="House & Land" slug="house-and-land" />
 </>
 );
}
