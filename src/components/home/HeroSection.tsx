"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const trustBadges = [
  { label: "Save $$$" },
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
      className="relative overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Full-bleed background — user-provided front elevation */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/home-bg-v3.jpg"
          alt="Buy Builder Direct investment property exterior"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.78) 38%, rgba(10,10,10,0.45) 65%, rgba(10,10,10,0.28) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 75% 25%, rgba(220,38,38,0.14) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="container-site relative z-10 pt-28 pb-20 md:pt-32 md:pb-24 overflow-x-clip">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-3xl w-full min-h-[68vh] lg:min-h-[75vh] justify-center">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor: "rgba(220,38,38,0.4)",
              color: "#DC2626",
              background: "rgba(220,38,38,0.12)",
            }}
          >
            Australian Property Investment
          </motion.p>

          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
          >
            Buy Direct From The Builder and{" "}
            <span style={{ color: "#DC2626" }}>Save $$$</span>
          </motion.h1>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 w-full max-w-full text-[11px] leading-relaxed font-medium tracking-wide uppercase sm:text-sm px-1"
            style={{ color: "#A3A3A3", letterSpacing: "0.06em", wordBreak: "break-word" }}
          >
            Co-Living · Rooming Houses · SDA · House &amp; Land · Custom Builds ·
            Knock Down &amp; Rebuild · Dual Key Homes · Multi Gen Housing
          </motion.p>

          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "#C4C4C4" }}
          >
            Buy Builder Direct connects Australian investors directly with vetted
            builders — no agents, no markups. Keep more capital working for you.
          </motion.p>

          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-full sm:w-auto"
          >
            <Link href="/contact" className="btn-primary text-base px-6 py-4 w-full sm:w-auto" onClick={() => (window as unknown as { fbq?: Function }).fbq?.("track", "Lead")}>
              Get Your Free Savings Assessment
            </Link>
            <Link href="/investments" className="btn-secondary text-base px-6 py-4 w-full sm:w-auto">
              Explore Investments
            </Link>
          </motion.div>

          <motion.div
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-4 sm:gap-x-8 gap-y-3 w-full max-w-full"
          >
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#DC2626" }}
                  aria-hidden="true"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1">
        <span className="text-[10px] tracking-widest uppercase" style={{ color: "#666666" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
