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
 title: "Highest Residential Yield (8–14%)",
 desc: "Rooming houses consistently deliver the strongest gross yields available in residential property investment.",
 },
 {
 title: "Multiple Income Streams",
 desc: "Each room generates its own rental income — vacancy in one room doesn't stop your cash flow.",
 },
 {
 title: "Low Entry vs Returns",
 desc: "Entry from $400k in established corridors with returns that rival commercial property.",
 },
 {
 title: "VIC Specialist",
 desc: "BBD has deep expertise in Victoria's licensed rooming house compliance and builder network.",
 },
 {
 title: "Portfolio Scaling",
 desc: "Lower entry prices mean you can scale a multi-property portfolio faster than with standard housing.",
 },
 {
 title: "No Agent Markup",
 desc: "Builder-direct pricing cuts agent margins, keeping more $$$ in your portfolio.",
 },
];

const snapshot = [
 { label: "Typical Gross Yield", value: "8–14%" },
 { label: "Typical Entry Price", value: "$400k – $700k" },
 { label: "Best Suited For", value: "Yield maximisers, portfolio builders" },
 { label: "BBD Support Level", value: "Specialist" },
];

const faqs: FAQItem[] = [
 {
 question: "What is a rooming house?",
 answer:
 "A rooming house is a residential property where 4 or more people rent individual rooms under separate agreements. Unlike a share house, tenants have their own tenancy rights per room. In Victoria, rooming houses with 4+ residents require a rooming house operator's licence and must meet specific standards under the Residential Tenancies Act.",
 },
 {
 question: "Is a rooming house licence required in Victoria?",
 answer:
 "Yes. In Victoria, any property renting 4 or more rooms (even if fewer than 4 are occupied at a given time) must be registered as a rooming house and operated by a licensed rooming house operator. BBD's team and our builder partners walk you through compliance from design stage to registration — so you're never caught out.",
 },
 {
 question: "What yield can I realistically expect from a rooming house?",
 answer:
 "Well-structured rooming houses in Melbourne's middle ring typically deliver 8–14% gross yield. A 6-room house with rooms at $250 pw each generates $78,000 pa in gross rent. On a $600k all-in investment that's a 13% gross yield — compared to 3–4% from a standard rental.",
 },
 {
 question: "Can I build a rooming house outside Victoria?",
 answer:
 "Yes. While BBD has specialist depth in Victoria, we have builder partnerships in Queensland, New South Wales, and South Australia. Regulations differ by state — we guide you through local requirements wherever you invest.",
 },
 {
 question: "How many rooms can a rooming house have?",
 answer:
 "There is no fixed maximum. Practical limits are set by the land size, local planning overlays, and VIC rooming house standards (minimum room sizes, bathroom ratios, common area requirements). Most BBD clients build 4–8 room properties. We help you find the optimal configuration for your block and budget.",
 },
];

export default function RoomingHousesPage() {
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
 { label: "Rooming Houses" },
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
 Rooming House Investments —{" "}
 <span style={{ color: "#DC2626" }}>Build Direct &amp; Maximise Yield</span>
 </h1>

 <p className="mt-5 text-lg leading-relaxed max-w-2xl" style={{ color: "#A3A3A3" }}>
 Australia&apos;s highest-yielding residential investment, built at builder-direct pricing.
 BBD specialises in VIC rooming houses — James T. scaled to 3 properties and saved
 over $60,000.
 </p>

 <div className="mt-8 flex flex-col sm:flex-row gap-4">
 <Link href="/contact?type=rooming-houses" className="btn-primary text-base px-7 py-4">
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
 src="/images/projects/deer-park/deer-park-5.jpg"
 alt="Rooming house investment — staged bedroom"
 fill
 priority
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 50vw"
 />
 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)" }} />
 <div className="absolute bottom-4 left-4 rounded-xl px-5 py-3" style={{ background: "rgba(10,10,10,0.85)", border: "1px solid rgba(220,38,38,0.3)" }}>
 <p className="text-2xl font-black" style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}>8–14%</p>
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
 The Rooming House Advantage: Multiple Rents, One Property
 </h2>
 <div className="space-y-5 text-base leading-relaxed" style={{ color: "#A3A3A3" }}>
 <p>
 Rooming houses remain the highest-yielding strategy in Australian residential property
 — and for good reason. Rather than receiving a single rent from a single tenant, you
 collect individual rents from four, five, six or more tenants per property. The
 combined income dramatically outperforms a standard residential tenancy on the same
 land, often delivering gross yields between 8% and 14%.
 </p>
 <p>
 BBD&apos;s bread and butter in Victoria is the licensed rooming house. We have built
 deep relationships with VIC-specialist builders who understand the compliance
 requirements — minimum room sizes, bathroom ratios, fire safety — and who price at
 wholesale builder rates. This is not a product sold through a project marketer. You
 deal directly with the builder.
 </p>
 <p>
 James T. is one of BBD&apos;s most successful clients. He started with a single
 6-room rooming house in Melbourne&apos;s west, followed by two more in the northern
 suburbs. Across three builds, James saved more than $60,000 in agent markups — money
 he reinvested into furnishing packages that lifted his per-room rents by $40–$60 per
 week. His portfolio now generates over $220,000 pa in gross rent from three properties
 purchased for a combined $1.9M.
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
 title: "Direct Builder Access",
 body: "BBD connects you with VIC rooming house builders. You deal directly — no project marketer, no selling agent, no margin added to your build cost.",
 },
 {
 num: "02",
 title: "Builder-Direct $$$ Savings",
 body: "James saved $20,000+ per property going direct. On three rooming houses that's $60,000+ in extra capital — enough to furnish and equip every room professionally.",
 },
 {
 num: "03",
 title: "Specialist PM Connection",
 body: "Rooming house management is specialised. BBD connects you with licensed rooming house operators and property managers who handle compliance and maximise occupancy.",
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
 body: "Share your budget, target suburb, and room count. BBD assesses compliance requirements and optimal design for your site.",
 },
 {
 step: "2",
 title: "Match",
 body: "We match you with a VIC-specialist rooming house builder. You meet directly, agree on the design and fixed price contract.",
 },
 {
 step: "3",
 title: "Build",
 body: "Construction and compliance managed end-to-end. At handover, we connect you with a licensed rooming house manager.",
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
 James T. — 3-Property Rooming House Portfolio, Melbourne
 </h3>
 <p className="text-base leading-relaxed mb-6" style={{ color: "#A3A3A3" }}>
 James came to BBD wanting to build a high-yield portfolio without overextending his
 equity. BBD matched him with a Melbourne-based rooming house specialist and James
 built his first 6-room property in Melbourne&apos;s west. The builder-direct saving of
 $22,000 was immediately used to furnish all rooms. Encouraged by the results — rooms
 fully tenanted within 3 weeks of handover — James repeated the process twice more in
 Melbourne&apos;s northern suburbs. Three properties, three direct-build deals, $60,000+
 saved across the portfolio.
 </p>
 <div className="flex flex-wrap gap-6">
 {[
 { label: "Total Saved", value: "$60,000+" },
 { label: "Portfolio Gross Rent", value: "$220k+ pa" },
 { label: "Properties Built", value: "3" },
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
 <CTABand serviceName="Rooming House" slug="rooming-houses" />
 </>
 );
}
