"use client";

import Link from "next/link";
import Image from "next/image";
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

const imageReveal: Variants = {
 hidden: { opacity: 0, scale: 1.08, x: 40 },
 visible: {
  opacity: 1,
  scale: 1,
  x: 0,
  transition: { duration: 1.1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] },
 },
};

const floatCard: Variants = {
 hidden: { opacity: 0, y: 20 },
 visible: (delay: number) => ({
  opacity: 1,
  y: 0,
  transition: { duration: 0.6, delay, ease: "easeOut" },
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

   <div className="container-site relative z-10 pt-28 pb-20 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

     {/* ── Left: Text Content ── */}
     <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
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
       Co-Living · Rooming Houses · SDA · House &amp; Land · Custom Builds · Knock Down and Rebuild
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

     {/* ── Right: Property Image ── */}
     <div className="hidden lg:block relative">
      {/* Main image */}
      <motion.div
       initial="hidden"
       animate="visible"
       variants={imageReveal}
       className="relative rounded-2xl overflow-hidden"
       style={{
        height: "560px",
        boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(220,38,38,0.15)",
       }}
      >
       <Image
        src="/images/runge-st/exterior-01.jpg"
        alt="Premium investment property by Buy Builder Direct"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 1280px) 50vw, 600px"
       />
       {/* Gradient overlay */}
       <div
        className="absolute inset-0"
        style={{
         background:
          "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%), linear-gradient(to right, rgba(10,10,10,0.2) 0%, transparent 40%)",
        }}
       />
       {/* Bottom label */}
       <div className="absolute bottom-5 left-5 right-5">
        <div
         className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold backdrop-blur-sm"
         style={{
          background: "rgba(10,10,10,0.75)",
          border: "1px solid rgba(220,38,38,0.3)",
          color: "#FFFFFF",
         }}
        >
         <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#DC2626" }} />
         Featured Project — Direct Builder Delivery
        </div>
       </div>
      </motion.div>

      {/* Floating stat card — top left */}
      <motion.div
       custom={0.8}
       initial="hidden"
       animate="visible"
       variants={floatCard}
       className="absolute -left-8 top-10 rounded-xl px-5 py-4 shadow-2xl backdrop-blur-sm"
       style={{
        background: "rgba(28,28,28,0.95)",
        border: "1px solid rgba(220,38,38,0.25)",
        minWidth: "150px",
       }}
      >
       <p className="text-2xl font-bold" style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}>15%</p>
       <p className="text-xs mt-0.5" style={{ color: "#A3A3A3" }}>Average savings<br />vs agent price</p>
      </motion.div>

      {/* Floating interior preview — bottom right */}
      <motion.div
       custom={1.0}
       initial="hidden"
       animate="visible"
       variants={floatCard}
       className="absolute -bottom-6 -right-6 w-44 h-32 rounded-xl overflow-hidden shadow-2xl"
       style={{ border: "2px solid rgba(220,38,38,0.3)" }}
      >
       <Image
        src="/images/runge-st/living-01.jpg"
        alt="Premium interior finish"
        fill
        className="object-cover"
        sizes="176px"
       />
       <div
        className="absolute inset-0 flex items-end p-2"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }}
       >
        <span className="text-xs font-semibold text-white">Premium Interiors</span>
       </div>
      </motion.div>
     </div>

    </div>
   </div>

   {/* Scroll indicator */}
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.4, duration: 0.8 }}
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
