"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const steps = [
  {
    number: "01",
    label: "Step One",
    title: "Tell Us\nYour Goals",
    desc: "One free call. Tell us your budget, state, and target yield. We'll recommend the investment type that fits your strategy — no pressure, no pitch.",
    bullets: ["Free initial strategy session", "Investment type guidance", "No obligation to proceed"],
    image: "/images/runge-st/virtual-staged-01.jpg",
    imageAlt: "Virtual staged living space — the kind of finish you get",
    metric: "Free",
    metricLabel: "Strategy Session",
  },
  {
    number: "02",
    label: "Step Two",
    title: "Builder\nMatching",
    desc: "We match you with a specialist builder from our vetted panel — licensed, proven, and expert in your chosen investment type. Usually matched in 3–5 business days.",
    bullets: ["Matched to a specialist builder", "4-point vetting: licence, track record, stability, quality", "Introductions within 3–5 days"],
    image: "/images/runge-st/exterior-01.jpg",
    imageAlt: "Premium investment property exterior — Runge Street",
    metric: "3–5",
    metricLabel: "Days to Match",
  },
  {
    number: "03",
    label: "Step Three",
    title: "Customise\nYour Build",
    desc: "Work directly with the builder to design your exact investment — floor plan, finishes, room count, compliance. Not a locked package. Your property, your way.",
    bullets: ["Direct builder access throughout", "Full floorplan & finish control", "Compliance guidance included"],
    image: "/images/runge-st/kitchen-01.jpg",
    imageAlt: "Bespoke kitchen finishes — custom investment build",
    metric: "100%",
    metricLabel: "Customisable",
  },
  {
    number: "04",
    label: "Step Four",
    title: "Transparent\nContract",
    desc: "Fixed price. Builder invoice is your invoice — no agent overlay, no hidden levy. We review every contract so you understand exactly what you're signing.",
    bullets: ["Fixed-price, builder-direct contracts", "BBD contract review included", "Zero hidden fees or levies"],
    image: "/images/runge-st/bedroom-staged-01.jpg",
    imageAlt: "Staged bedroom — rent-ready finish quality",
    metric: "0",
    metricLabel: "Hidden Fees",
  },
  {
    number: "05",
    label: "Step Five",
    title: "Rent-Ready\nHandover",
    desc: "Keys in hand, income from day one. We assist with the practical completion inspection and connect you with specialist property managers for your investment type.",
    bullets: ["Practical completion inspection", "Property management connections", "Income-earning from day one"],
    image: "/images/runge-st/exterior-02.jpg",
    imageAlt: "Investment property — ready for tenants",
    metric: "Day 1",
    metricLabel: "Start Earning",
  },
];

const agentRoute = [
  "2–3% marketing levy on top of build price",
  "Agent fees baked into every quote",
  "Multiple intermediaries slow the process",
  "Hidden markups you'll never see itemised",
  "Limited packages — take it or leave it",
  "Commission-driven recommendations",
];

const builderDirect = [
  "Zero marketing levy — it goes to zero",
  "Builder invoice is your invoice",
  "You speak directly to the builder",
  "Line-by-line transparent pricing",
  "Full customisation with the builder",
  "Impartial matching based on your brief",
];

const timeline = [
  { phase: "Discovery", timing: "Week 1", detail: "Goal setting, investment type selection, budget confirmation" },
  { phase: "Match", timing: "Week 2", detail: "Builder matching, intro meeting, Q&A" },
  { phase: "Customise", timing: "Weeks 3–4", detail: "Floorplan, finishes, compliance, quote" },
  { phase: "Contract", timing: "Week 5", detail: "Fixed-price contract, signing, deposit" },
  { phase: "Build", timing: "6–18 months", detail: "Construction with direct builder access" },
  { phase: "Handover", timing: "Build + 1 wk", detail: "Inspection, keys, property management" },
];

/* ─── Sub-components ────────────────────────────────────────────────────── */

const easeSmooth: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

function StepSection({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 1;

  const base = { duration: 0.65, ease: easeSmooth };

  return (
    <div
      ref={ref}
      className="relative grid lg:grid-cols-2 min-h-[360px] lg:min-h-[520px]"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* ── Content panel ─────────────────────────────── */}
      <div
        className={`relative flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 lg:px-16 xl:px-20 ${isEven ? "lg:order-2" : ""}`}
        style={{ background: "#0A0A0A" }}
      >
        {/* Watermark number */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none leading-none font-black"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(8rem, 18vw, 14rem)",
            color: "rgba(220,38,38,0.04)",
            letterSpacing: "-0.05em",
          }}
        >
          {step.number}
        </span>

        <div className="relative z-10 max-w-xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...base, delay: 0 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#DC2626" }}
          >
            {step.label}
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...base, delay: 0.1 }}
            className="font-bold leading-[1.05]"
            style={{
              fontFamily: "var(--font-display)",
              color: "#FFFFFF",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              whiteSpace: "pre-line",
            }}
          >
            {step.title}
          </motion.h2>

          {/* Desc */}
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...base, delay: 0.2 }}
            className="mt-5 text-base leading-relaxed"
            style={{ color: "#A3A3A3" }}
          >
            {step.desc}
          </motion.p>

          {/* Bullets */}
          <motion.ul
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...base, delay: 0.3 }}
            className="mt-6 space-y-2.5"
          >
            {step.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm" style={{ color: "#CCCCCC" }}>
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(220,38,38,0.15)" }}
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </motion.ul>

          {/* Metric badge */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...base, delay: 0.4 }}
            className="mt-8 inline-flex items-center gap-3 rounded-xl px-5 py-3"
            style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)" }}
          >
            <span
              className="text-2xl font-black"
              style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}
            >
              {step.metric}
            </span>
            <span className="text-sm" style={{ color: "#A3A3A3" }}>
              {step.metricLabel}
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── Image panel ───────────────────────────────── */}
      <div
        className={`relative overflow-hidden ${isEven ? "lg:order-1" : ""}`}
        style={{ minHeight: "clamp(260px, 50vw, 500px)" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] as [number,number,number,number], delay: 0.15 }}
        >
          <Image
            src={step.image}
            alt={step.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.4) 100%)" }}
          />
        </motion.div>

        {/* Step number chip on image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute top-6 right-6 flex h-14 w-14 items-center justify-center rounded-full z-10"
          style={{ background: "#DC2626" }}
        >
          <span
            className="text-lg font-black"
            style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
          >
            {step.number}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function HowItWorksPage() {
  const compRef = useRef<HTMLDivElement>(null);
  const compInView = useInView(compRef, { once: true, margin: "-60px" });

  const tlRef = useRef<HTMLDivElement>(null);
  const tlInView = useInView(tlRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ══ HERO — full-bleed image ══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ height: "75vh", minHeight: "520px" }}>
        <Image
          src="/images/projects/mambourin/mambourin-1.jpg"
          alt="Premium investment property — Buy Builder Direct"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,1) 100%)",
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#DC2626" }}
          >
            The Process
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: easeSmooth }}
            className="font-black leading-[1.0]"
            style={{
              fontFamily: "var(--font-display)",
              color: "#FFFFFF",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              letterSpacing: "-0.03em",
            }}
          >
            How It Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-xl text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Five steps. Zero agents. Direct to builder — the entire way.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute bottom-8 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.4)" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ STEPS ════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0A0A0A" }}>
        {steps.map((step, i) => (
          <StepSection key={step.number} step={step} index={i} />
        ))}
      </section>

      {/* ══ COMPARISON ══════════════════════════════════════════════════ */}
      <section className="section" style={{ background: "#141414" }}>
        <div className="container-site" ref={compRef}>
          {/* Heading */}
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={compInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#DC2626" }}
            >
              The Difference
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={compInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl font-bold md:text-5xl"
              style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
            >
              What You Avoid
            </motion.h2>
          </div>

          <div className="grid gap-1 md:grid-cols-2">
            {/* ── Old Way ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={compInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-tl-2xl rounded-bl-2xl md:rounded-tr-none md:rounded-br-none rounded-2xl p-8"
              style={{ background: "#1C1C1C", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ background: "rgba(255,255,255,0.06)", color: "#666" }}
                >
                  ✕
                </span>
                <h3 className="text-lg font-bold" style={{ color: "#666666", fontFamily: "var(--font-display)" }}>
                  The Agent Route
                </h3>
              </div>
              <ul className="space-y-4">
                {agentRoute.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    animate={compInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "#555555" }}
                  >
                    <svg className="w-4 h-4 shrink-0 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#444" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* ── Builder Direct ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={compInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="rounded-tr-2xl rounded-br-2xl md:rounded-tl-none md:rounded-bl-none rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(220,38,38,0.25)",
                borderTop: "3px solid #DC2626",
              }}
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)" }}
              />
              <div className="mb-6 flex items-center gap-3 relative z-10">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626" }}
                >
                  ✓
                </span>
                <h3 className="text-lg font-bold" style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}>
                  Builder Direct
                </h3>
              </div>
              <ul className="space-y-4 relative z-10">
                {builderDirect.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    animate={compInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "#CCCCCC" }}
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 mt-0.5 items-center justify-center rounded-full"
                      style={{ background: "rgba(220,38,38,0.12)" }}
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={3} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: "#0A0A0A" }}>
        <div className="container-site" ref={tlRef}>
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={tlInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#DC2626" }}
            >
              The Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={tlInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl font-bold md:text-5xl"
              style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
            >
              Typical Build Timeline
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={tlInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg"
              style={{ color: "#A3A3A3" }}
            >
              From first conversation to keys in hand
            </motion.p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Animated vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={tlInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute left-6 top-4 bottom-4 w-px origin-top hidden md:block"
              style={{ background: "linear-gradient(to bottom, #DC2626, rgba(220,38,38,0.1))" }}
            />

            <div className="space-y-5">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.phase}
                  initial={{ opacity: 0, x: -24 }}
                  animate={tlInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  {/* Dot */}
                  <div
                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xs font-black"
                    style={{ background: "#DC2626", color: "#FFFFFF", fontFamily: "var(--font-display)" }}
                  >
                    {i + 1}
                  </div>
                  <div
                    className="flex-1 rounded-xl p-5"
                    style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-base font-bold" style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}>
                        {t.phase}
                      </h3>
                      <span
                        className="rounded-full px-3 py-0.5 text-xs font-semibold"
                        style={{ background: "rgba(220,38,38,0.12)", color: "#DC2626" }}
                      >
                        {t.timing}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: "#A3A3A3" }}>
                      {t.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA — image background ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <Image
          src="/images/projects/deer-park/deer-park-2.jpg"
          alt="Rent-ready investment property interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 100%)" }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 py-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#DC2626" }}
          >
            Get Started
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              color: "#FFFFFF",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-lg text-lg"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            A free 15-minute call is all it takes to get matched with the right builder.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book My Free Assessment
            </Link>
            <a
              href="tel:0409005554"
              className="text-base font-semibold transition-colors"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              or call 0409 005 554 →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
