"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTABand from "@/components/shared/CTABand";

const benefits = [
 {
 title: "Government-Backed Income",
 desc: "SDA payments are funded by the NDIS — not reliant on individual tenant income or market fluctuations.",
 },
 {
 title: "8–15%+ Gross Yield",
 desc: "SDA rent contributions sit well above market rate, making these among the highest-yielding compliant investments available.",
 },
 {
 title: "Long Tenancies (2–5 Years)",
 desc: "NDIS participants seek stable, long-term housing — dramatically reducing vacancy and turnover costs.",
 },
 {
 title: "Undersupply Market",
 desc: "Australia faces a critical shortage of SDA-compliant homes vs registered participants on waiting lists.",
 },
 {
 title: "SDA-Compliant Builders",
 desc: "BBD partners exclusively with builders registered and experienced in SDA design categories.",
 },
 {
 title: "Social Impact",
 desc: "Your investment directly improves quality of life for Australians with significant disability — purpose and profit aligned.",
 },
];

const snapshot = [
 { label: "Typical Gross Yield", value: "8–15%+" },
 { label: "Typical Entry Price", value: "$600k – $1.2M" },
 { label: "Best Suited For", value: "Impact investors, income seekers" },
 { label: "BBD Support Level", value: "Specialist compliance support" },
];

const faqs: FAQItem[] = [
 {
 question: "What is Specialist Disability Accommodation (SDA)?",
 answer:
 "SDA is a category of housing funded by the National Disability Insurance Scheme (NDIS) for Australians with extreme functional impairment or very high support needs. The NDIS pays a rent contribution (above market rate) directly to the SDA provider on behalf of eligible participants. As an SDA property owner, you receive that contribution as your rental income.",
 },
 {
 question: "How is SDA rent paid — and how secure is it?",
 answer:
 "SDA payments are made by the NDIS directly to the registered SDA provider (which may be you or a managing entity), not by the tenant. Payments are indexed and reviewed annually. Because they come from Federal Government funding rather than individual tenant income, they are considered highly secure. The NDIS has committed to SDA as a long-term housing solution.",
 },
 {
 question: "What compliance and design requirements apply to SDA properties?",
 answer:
 "SDA properties must be built to one of four design categories: Improved Liveability, Robust, Fully Accessible, or High Physical Support. Each has specific requirements around ceiling heights, doorways, reinforced walls, assistive technology provisions, and more. BBD works exclusively with builders who have registered SDA experience and understand these standards inside out.",
 },
 {
 question: "Which states have the highest demand for SDA housing?",
 answer:
 "The NDIS reports significant SDA shortfalls in Victoria, New South Wales, and Queensland — particularly in regional and outer-metropolitan areas. Western Australia and South Australia are also undersupplied. BBD can advise on specific LGAs with waiting lists and approved SDA participants actively seeking housing.",
 },
 {
 question: "Is the SDA model at risk if government policy changes?",
 answer:
 "The NDIS is legislated under Federal law and SDA is a core component of Australia's disability housing framework. While any government program carries policy risk, SDA has bipartisan support and a 20-year design horizon. Existing SDA agreements also carry a degree of contractual protection. BBD recommends discussing this with your financial adviser as part of your overall risk assessment.",
 },
];

export default function SdaNdisHomesPage() {
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
 { label: "SDA / NDIS Homes" },
 ]}
 />

 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
 className="mt-8 max-w-4xl"
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
 SDA / NDIS Housing Investment —{" "}
 <span style={{ color: "#DC2626" }}>Government-Backed Returns</span>
 </h1>

 <p className="mt-5 text-lg leading-relaxed max-w-2xl" style={{ color: "#A3A3A3" }}>
 Invest in purpose-built disability housing funded by the NDIS. Yields of 8–15%+,
 long tenancies, and a genuine social impact — built direct with SDA-compliant
 specialist builders.
 </p>

 <div className="mt-8 flex flex-col sm:flex-row gap-4">
 <Link href="/contact?type=sda-ndis-homes" className="btn-primary text-base px-7 py-4">
 Get My Free Assessment
 </Link>
 <a href="tel:1300223776" className="btn-secondary text-base px-7 py-4">
 1300 BBD PRO
 </a>
 </div>
 </motion.div>
 </div>
 </section>

 {/* ── 2. Overview ─────────────────────────────────────────────────── */}
 <section className="section" style={{ background: "#141414" }}>
 <div className="container-site max-w-4xl mx-auto">
 <h2
 className="text-3xl font-bold mb-6 md:text-4xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 NDIS-Funded Housing: Stable Returns With Real-World Impact
 </h2>
 <div className="space-y-5 text-base leading-relaxed" style={{ color: "#A3A3A3" }}>
 <p>
 Specialist Disability Accommodation (SDA) is a government-funded housing program
 under the National Disability Insurance Scheme (NDIS). The NDIS pays above-market
 rent contributions directly to SDA property owners on behalf of registered
 participants — people with extreme functional impairment or very high support needs
 who require purpose-built housing. This creates a uniquely secure income stream for
 investors: rent that comes from Federal funding, not individual tenant financial
 capacity.
 </p>
 <p>
 The returns are compelling. SDA rent contributions are set well above standard market
 rent, reflecting the specialised nature of the accommodation. Investors typically
 achieve 8–15%+ gross yields depending on design category, location, and participant
 profile. Tenancy lengths are long — often 2–5 years or more — dramatically reducing
 vacancy risk and ongoing management burden. And Australia&apos;s SDA supply is still
 critically short of registered demand, meaning properties in the right locations are
 tenanted quickly.
 </p>
 <p>
 BBD partners with builders who are experienced in SDA design categories and
 construction compliance. You access their pricing directly — no developer margin, no
 project marketer premium. Our team walks you through the SDA framework, connects you
 with the right builder, and supports you through compliance, registration, and
 tenanting. The result: a purpose-built, government-income property acquired at the
 best possible cost basis.
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
 title: "SDA-Compliant Builder Access",
 body: "BBD's network includes builders registered and experienced in all four SDA design categories. You deal with them directly at builder-direct pricing.",
 },
 {
 num: "02",
 title: "Compliance & Registration Guidance",
 body: "SDA registration and NDIS compliance is complex. BBD's team supports you through the process — from design sign-off to NDIS provider registration.",
 },
 {
 num: "03",
 title: "Tenanting Support",
 body: "We connect you with SDA specialist property managers and support coordinators who work directly with NDIS participants seeking accommodation.",
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
 body: "Tell us your budget, preferred state, and target SDA design category. We assess your eligibility and strategy.",
 },
 {
 step: "2",
 title: "Match",
 body: "BBD matches you with a verified SDA-compliant builder. You review designs, confirm compliance specs, and sign a fixed-price contract.",
 },
 {
 step: "3",
 title: "Build",
 body: "Your SDA property is built to compliance standards. We support registration and connect you with tenanting specialists at handover.",
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

 {/* ── 7. Outcome Highlight (no specific case study) ───────────────── */}
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
 High Physical Support SDA — Melbourne Metro
 </h3>
 <p className="text-base leading-relaxed mb-6" style={{ color: "#A3A3A3" }}>
 A BBD client investing in a 2-participant High Physical Support SDA home in
 Melbourne&apos;s outer east accessed builder-direct pricing through our specialist
 network, saving approximately $55,000 vs comparable SDA offerings on the developer
 market. The property was tenanted by registered NDIS participants within 6 weeks of
 NDIS registration, and has remained fully tenanted since. NDIS rent contributions
 deliver consistent monthly income irrespective of broader rental market conditions.
 </p>
 <div className="flex flex-wrap gap-6">
 {[
 { label: "Builder-Direct Saving", value: "~$55,000" },
 { label: "Time to Tenant", value: "6 Weeks" },
 { label: "Gross Yield", value: "11.2%" },
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
 <CTABand serviceName="SDA / NDIS" slug="sda-ndis-homes" />
 </>
 );
}
