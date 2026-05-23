"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const trustBadges = [
 { label: "15% Avg. Savings" },
 { label: "Nationwide" },
 { label: "No Agent Fees" },
 { label: "Vetted Builders" },
];

const fadeUp: Variants = {
 hidden: { opacity: 0, y: 30 },
 visible: (delay: number) => ({
 opacity: 1,
 y: 0,
 transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
 }),
};

export default function HeroSection() {
 return (
 <section
 className="relative min-h-screen flex items-center overflow-hidden"
 style={{ background: "#0A0A0A" }}
 >
 {/* Decorative red orb — top right */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(220,38,38,0.18) 0%, rgba(220,38,38,0.06) 45%, transparent 70%)",
 }}
 />
 {/* Secondary orb — bottom left subtle */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute bottom-0 -left-64 w-[500px] h-[500px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 65%)",
 }}
 />

 <div className="container-site relative z-10 pt-28 pb-20 flex flex-col items-center text-center lg:items-start lg:text-left">
 {/* Eyebrow */}
 <motion.p
 custom={0}
 initial="hidden"
 animate="visible"
 variants={fadeUp}
 className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
 style={{
 borderColor: "rgba(220,38,38,0.4)",
 color: "#DC2626",
 background: "rgba(220,38,38,0.08)",
 }}
 >
 Australian Property Investment
 </motion.p>

 {/* H1 */}
 <motion.h1
 custom={0.12}
 initial="hidden"
 animate="visible"
 variants={fadeUp}
 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Save Up To{" "}
 <span style={{ color: "#DC2626" }}>15%</span>
 {" "}— Deal Direct With Builders
 </motion.h1>

 {/* Subheading */}
 <motion.p
 custom={0.24}
 initial="hidden"
 animate="visible"
 variants={fadeUp}
 className="mt-5 text-base font-medium tracking-wide uppercase"
 style={{ color: "#A3A3A3", letterSpacing: "0.1em" }}
 >
 Co-Living · Rooming Houses · SDA · House &amp; Land · Custom Builds
 </motion.p>

 {/* Body */}
 <motion.p
 custom={0.36}
 initial="hidden"
 animate="visible"
 variants={fadeUp}
 className="mt-6 max-w-xl text-lg leading-relaxed"
 style={{ color: "#A3A3A3" }}
 >
 Buy Builder Direct connects Australian investors directly with vetted
 builders — no agents, no markups. Keep more capital working for you.
 </motion.p>

 {/* CTAs */}
 <motion.div
 custom={0.48}
 initial="hidden"
 animate="visible"
 variants={fadeUp}
 className="mt-10 flex flex-col sm:flex-row gap-4"
 >
 <Link href="/contact" className="btn-primary text-base px-8 py-4">
 Get Your Free Savings Assessment
 </Link>
 <Link href="/investments" className="btn-secondary text-base px-8 py-4">
 Explore Investments
 </Link>
 </motion.div>

 {/* Trust badges */}
 <motion.div
 custom={0.6}
 initial="hidden"
 animate="visible"
 variants={fadeUp}
 className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4"
 >
 {trustBadges.map((badge) => (
 <div key={badge.label} className="flex items-center gap-2">
 <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "#DC2626" }} aria-hidden="true"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
 <span className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
 {badge.label}
 </span>
 </div>
 ))}
 </motion.div>
 </div>

 {/* Scroll indicator */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.2, duration: 0.8 }}
 className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
 >
 <span className="text-xs tracking-widest uppercase" style={{ color: "#666666" }}>
 Scroll
 </span>
 <motion.div
 animate={{ y: [0, 8, 0] }}
 transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
 >
 <svg
 className="w-5 h-5"
 fill="none"
 viewBox="0 0 24 24"
 stroke="#DC2626"
 strokeWidth={2}
 >
 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
 </svg>
 </motion.div>
 </motion.div>
 </section>
 );
}
