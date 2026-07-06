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
 title: "Full Customisation",
 desc: "Every room, every finish, every floor plan decision is yours. Build exactly the investment property your strategy demands.",
 },
 {
 title: "Direct Builder Communication",
 desc: "You speak directly with the builder — no intermediary filtering your instructions or adding a margin.",
 },
 {
 title: "No Design Markup",
 desc: "Bespoke design at wholesale builder pricing. The cost of customisation is the builder's rate — not a developer's premium.",
 },
 {
 title: "Yield Optimisation",
 desc: "We help you design for return — room count, bathroom configuration, and layout chosen to maximise your specific yield target.",
 },
 {
 title: "Quality Control",
 desc: "With direct access to your builder, you can inspect, query, and direct at every stage of construction.",
 },
 {
 title: "End-to-End Support",
 desc: "BBD coordinates brief, design, permits, construction, and handover — so you have one point of contact throughout.",
 },
];

const snapshot = [
 { label: "Typical Gross Yield", value: "Varies by design" },
 { label: "Typical Entry Price", value: "$550k – $1.5M" },
 { label: "Best Suited For", value: "Experienced investors, specific-vision builds" },
 { label: "BBD Support Level", value: "Full coordination" },
];

const faqs: FAQItem[] = [
 {
 question: "Can I choose any builder for a custom investment build?",
 answer:
 "BBD works with a vetted network of custom builders across Australia. We match you with a builder whose specialism, location, and pricing align with your brief. If you already have a builder in mind, we can assess whether they&apos;re a suitable match and facilitate the direct relationship.",
 },
 {
 question: "What design control do I have over my custom build?",
 answer:
 "Complete control. You determine the floor plan, number of rooms, bathroom count, finishes, materials, and any investment-specific features (ensuites per room, lock-up garages, separate entries). BBD helps you translate your investment goals into a design brief that maximises your return.",
 },
 {
 question: "How does pricing work for a custom build — is it fixed?",
 answer:
 "Custom builds use a fixed-price construction contract once the design is finalised and permits are approved. Variations requested after contract execution may incur additional costs. BBD works with builders who are transparent about pricing from the earliest stages — no surprise invoices after you&apos;ve committed.",
 },
 {
 question: "What is a realistic timeline for a custom investment build?",
 answer:
 "Design, permits, and pre-construction typically take 3–6 months. Construction adds another 9–18 months depending on complexity, size, and state. BBD provides you with a realistic timeline at the brief stage — and our builder partners provide contractual timelines before you sign.",
 },
 {
 question: "Can I use my own architect for a custom build?",
 answer:
 "Yes. If you have an existing architect or prefer to engage your own, BBD will work with that relationship. Alternatively, many of our builder partners have in-house designers and draftspersons capable of producing fully custom investment-grade designs without the cost of a separate architectural engagement.",
 },
];

export default function CustomBuildsPage() {
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
 { label: "Custom Builds" },
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
 Custom Investment Builds —{" "}
 <span style={{ color: "#DC2626" }}>Your Design, Builder-Direct Pricing</span>
 </h1>

 <p className="mt-5 text-lg leading-relaxed max-w-2xl" style={{ color: "#A3A3A3" }}>
 Full design control at wholesale builder pricing. Communicate directly with your
 builder — no intermediary, no markup, no compromise on your investment vision.
 </p>

 <div className="mt-8 flex flex-col sm:flex-row gap-4">
 <Link href="/contact?type=custom-builds" className="btn-primary text-base px-7 py-4">
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
 src="/images/projects/doreen/doreen-3.jpg"
 alt="Custom build — bespoke kitchen finishes"
 fill
 priority
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 50vw"
 />
 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)" }} />
 <div className="absolute bottom-4 left-4 rounded-xl px-5 py-3" style={{ background: "rgba(10,10,10,0.85)", border: "1px solid rgba(220,38,38,0.3)" }}>
 <p className="text-2xl font-black" style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}>Bespoke</p>
 <p className="text-xs" style={{ color: "#A3A3A3" }}>Builder-Direct Design</p>
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
 Build Exactly What Your Strategy Demands — At Wholesale Pricing
 </h2>
 <div className="space-y-5 text-base leading-relaxed" style={{ color: "#A3A3A3" }}>
 <p>
 Experienced investors often reach a point where off-the-shelf house designs no longer
 fit their yield targets. You know the suburb, you know the tenant profile, and you
 know what configuration will maximise your return. What you need is a builder who
 will deliver that vision at a fair price — and a pathway to reach that builder
 without an agent or developer taking a cut along the way.
 </p>
 <p>
 That&apos;s exactly what BBD provides for custom builds. We connect you directly with
 vetted custom builders whose specialism matches your brief — whether that&apos;s a
 7-room co-living configuration, a purpose-built dual-income layout, or a high-spec
 residential property designed for premium tenants. You communicate with the builder
 directly throughout design, permits, and construction. No Chinese whispers through an
 intermediary. No design markups disguised as &quot;management fees&quot;.
 </p>
 <p>
 BBD&apos;s role is coordination: we translate your investment goals into a builder
 brief, match you with the right custom builder from our network, and stay in your
 corner through the entire process — from first conversation to final inspection. This
 is the pathway for investors who know what they want and want to keep more of their
 capital in the build — not in margins.
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
 body: "BBD&apos;s network includes experienced custom builders across all states. We match your brief to the right specialist and facilitate a direct builder relationship — no middleman.",
 },
 {
 num: "02",
 title: "Wholesale Builder Pricing",
 body: "Access builder rates without developer margins. Whether your build is $600k or $1.5M, you pay what the builder charges — not what a marketer thinks you&apos;ll pay.",
 },
 {
 num: "03",
 title: "Full Coordination",
 body: "BBD manages the brief, builder match, design process, permit coordination, and handover. One point of contact for the entire build journey.",
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
 body: "Share your vision — location, rooms, yield target, finishes, budget. BBD translates this into a detailed builder brief.",
 },
 {
 step: "2",
 title: "Match",
 body: "We match you with a custom builder from our vetted network. You meet directly, refine the design, and agree on a fixed-price contract.",
 },
 {
 step: "3",
 title: "Build",
 body: "Your custom investment property is built to your specification. BBD stays in your corner through construction and handover.",
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
 Custom 8-Room Investment Property — Inner Brisbane
 </h3>
 <p className="text-base leading-relaxed mb-6" style={{ color: "#A3A3A3" }}>
 An experienced Brisbane investor came to BBD with a specific brief: 8 rooms with
 private ensuites on a 600m² block in inner Brisbane. Every developer quote came back
 above $1.1M. Through BBD&apos;s direct builder connection, the same configuration was
 delivered at $940,000 — a $160,000 saving. With rooms rented individually at
 $320 pw, the property generates $133,000 pa in gross rent — a 14.1% gross yield.
 </p>
 <div className="flex flex-wrap gap-6">
 {[
 { label: "Saved vs Developer", value: "$160,000" },
 { label: "Annual Gross Rent", value: "$133,000" },
 { label: "Gross Yield", value: "14.1%" },
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
 <CTABand serviceName="Custom Build" slug="custom-builds" />
 </>
 );
}
