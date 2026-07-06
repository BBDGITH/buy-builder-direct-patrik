"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import type { Metadata } from "next";

/* ── metadata can't be exported from a client component – use generateMetadata pattern ─ */
// (moved to a wrapper – see bottom of file)

const stats = [
  { value: 180, suffix: "+", label: "Properties Delivered" },
  { value: 7, suffix: "", label: "States Covered" },
  { value: 2.4, suffix: "M+", prefix: "$", label: "Saved by Investors" },
  { value: 7, suffix: "+", label: "Years Operating" },
];

const vettingCriteria = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Licensed & Insured",
    description: "Current builder's licence for their state, full construction insurance — domestic and public liability.",
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    title: "Track Record",
    description: "Minimum 5 completed investment builds with references we verify directly. No newcomers, no guesswork.",
  },
  {
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    title: "Financial Stability",
    description: "Solvency checks, ASIC records, and credit history — we ensure your builder can finish what they start.",
  },
  {
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    title: "Quality Standards",
    description: "Site inspections on active builds, defect history reviews. Your build done right — not just done.",
  },
];

const states = ["VIC", "NSW", "QLD", "WA", "SA", "NT", "TAS"];

const marqueePhotos = [
  { src: "/images/runge-st/exterior-01.jpg", label: "Exterior" },
  { src: "/images/runge-st/living-01.jpg", label: "Living & Dining" },
  { src: "/images/runge-st/kitchen-01.jpg", label: "Kitchen" },
  { src: "/images/runge-st/bathroom-01.jpg", label: "Bathroom" },
  { src: "/images/runge-st/bedroom-staged-01.jpg", label: "Master Bedroom" },
  { src: "/images/runge-st/walkin-robe-01.jpg", label: "Walk-in Robe" },
  { src: "/images/runge-st/virtual-staged-01.jpg", label: "Common Areas" },
  { src: "/images/runge-st/bedroom-staged-03.jpg", label: "Second Bedroom" },
];

// Animated counter hook
function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(parseFloat(current.toFixed(1)));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return { count, ref };
}

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const { count, ref } = useCounter(stat.value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="rounded-xl p-6 text-center"
      style={{ background: "#141414", border: "1px solid rgba(220,38,38,0.2)" }}
    >
      <p className="text-4xl font-bold mb-1" style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}>
        <span>{stat.prefix ?? ""}</span>
        <span ref={ref}>{count}</span>
        <span>{stat.suffix}</span>
      </p>
      <p className="text-sm font-medium" style={{ color: "#A3A3A3" }}>{stat.label}</p>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: "#0A0A0A", minHeight: "70vh" }}>
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(220,38,38,0.14) 0%, transparent 70%)" }} />
        <div className="container-site relative z-10 pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: "#DC2626" }}>
                Our Story
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl font-bold md:text-6xl mb-6" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
                About Buy Builder Direct
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl leading-relaxed mb-8" style={{ color: "#A3A3A3" }}>
                We exist to level the playing field for Australian property investors — giving you the
                same direct access to builders that developers have always enjoyed.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Get Free Assessment</Link>
                <Link href="/how-it-works" className="btn-secondary">How It Works</Link>
              </motion.div>
            </div>
            {/* Right: Stacked image cards */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
              className="hidden lg:block relative" style={{ height: "480px" }}>
              {/* Main image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{ right: "0", bottom: "40px", top: "0", left: "20px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)", border: "1px solid rgba(220,38,38,0.2)" }}>
                <Image src="/images/projects/mambourin/mambourin-1.jpg" alt="Investment property by Buy Builder Direct"
                  fill className="object-cover" sizes="500px" priority />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)" }} />
              </div>
              {/* Floating card – bottom left */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute bottom-0 left-0 rounded-xl overflow-hidden shadow-2xl"
                style={{ width: "180px", height: "130px", border: "2px solid rgba(220,38,38,0.3)" }}>
                <Image src="/images/projects/deer-park/deer-park-2.jpg" alt="Premium bedroom finish"
                  fill className="object-cover" sizes="180px" />
                <div className="absolute inset-0 flex items-end p-2.5"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)" }}>
                  <span className="text-xs font-semibold text-white">Builder-Direct Quality</span>
                </div>
              </motion.div>
              {/* Badge */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-6 right-0 rounded-xl px-4 py-3 shadow-xl"
                style={{ background: "rgba(28,28,28,0.95)", border: "1px solid rgba(220,38,38,0.3)" }}>
                <p className="text-2xl font-bold" style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}>7+ yrs</p>
                <p className="text-xs mt-0.5" style={{ color: "#A3A3A3" }}>Operating in Australia</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats counters ── */}
      <section className="py-12" style={{ background: "#141414", borderTop: "1px solid rgba(220,38,38,0.15)", borderBottom: "1px solid rgba(220,38,38,0.15)" }}>
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => <StatCard key={s.label} stat={s} />)}
          </div>
        </div>
      </section>

      {/* ── Photo Marquee strip ── */}
      <section className="py-8 overflow-hidden" style={{ background: "#0A0A0A" }}>
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#666666" }}>
            Builder-Direct Quality — Every Finish, Every Room
          </p>
        </div>
        <div className="flex gap-4" style={{ animation: "marquee 30s linear infinite", width: "max-content" }}>
          {[...marqueePhotos, ...marqueePhotos].map((photo, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden shrink-0"
              style={{ width: "240px", height: "160px", border: "1px solid rgba(220,38,38,0.12)" }}>
              <Image src={photo.src} alt={photo.label} fill className="object-cover" sizes="240px" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
              <span className="absolute bottom-2 left-3 text-xs font-semibold text-white">{photo.label}</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </section>

      {/* ── Mission + Image ── */}
      <section className="section" style={{ background: "#141414" }}>
        <div className="container-site">
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            {/* Image panel */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }} className="relative rounded-2xl overflow-hidden order-2 lg:order-1"
              style={{ height: "440px", border: "1px solid rgba(220,38,38,0.15)" }}>
              <Image src="/images/projects/shepparton/shepparton-1.jpg" alt="Our mission — direct builder relationships"
                fill className="object-cover" sizes="600px" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.4) 0%, transparent 60%)" }} />
              {/* Floating quote */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.5 }} className="absolute bottom-6 left-6 right-6 rounded-xl p-5 backdrop-blur-sm"
                style={{ background: "rgba(10,10,10,0.82)", border: "1px solid rgba(220,38,38,0.25)" }}>
                <p className="text-sm italic leading-relaxed" style={{ color: "#E5E5E5" }}>
                  &ldquo;BBD saved me $30k on my co-living build. The process was transparent end to end.&rdquo;
                </p>
                <p className="text-xs mt-2 font-semibold" style={{ color: "#DC2626" }}>— Sarah M., Melbourne VIC</p>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }} className="order-1 lg:order-2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: "#DC2626" }}>Our Mission</p>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
                Cut the middleman. Keep the savings.
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "#A3A3A3" }}>
                The Australian property market has long been structured to benefit intermediaries — not investors.
                Buyer&apos;s agents, project marketers, and developers all clip the ticket, adding 10–20% in invisible
                costs that erode your yield from day one.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#A3A3A3" }}>
                Buy Builder Direct connects investors directly with licensed, vetted builders — eliminating those
                markups entirely. Over 7 years, we&apos;ve saved our investors a combined $2.4M+ in fees.
              </p>
              <div className="flex flex-col gap-3">
                {["No agents. No markups. Builder-direct pricing.", "Vetted builders across 7 states and territories.", "180+ investment properties delivered Australia-wide."].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 rounded-full items-center justify-center" style={{ background: "#DC2626" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium" style={{ color: "#FFFFFF" }}>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Builder Vetting ── */}
      <section className="section" style={{ background: "#0A0A0A" }}>
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: "#DC2626" }}>Builder Quality</p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
              How We Vet Our Builders
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#A3A3A3" }}>
              Not every builder makes our platform. Our four-point check filters for quality, reliability, and financial integrity.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vettingCriteria.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(220,38,38,0.15)" }}
                className="rounded-xl p-6 cursor-default"
                style={{ background: "#141414", borderTop: "3px solid #DC2626", border: "1px solid rgba(220,38,38,0.15)", borderTopWidth: "3px" }}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "rgba(220,38,38,0.12)" }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-image section: Story ── */}
      <section className="section" style={{ background: "#141414" }}>
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: "#DC2626" }}>Our Story</p>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
                Born from a $47,000 lesson
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "#A3A3A3" }}>
                Our founders discovered firsthand how much money was being lost to hidden markups. A colleague
                purchased an investment property through a project marketing firm — only to find the builder had
                sold the same floorplan for <strong style={{ color: "#FFFFFF" }}>$47,000 less</strong> directly.
                That money was absorbed entirely by the marketing layer.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#A3A3A3" }}>
                That discovery led to a simple question: what if investors could access builder-direct prices themselves?
                Seven years later, BBD has facilitated 180+ builds across Australia and saved investors $2.4M+.
              </p>
            </motion.div>
            {/* Side-by-side images */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/runge-st/virtual-staged-02.jpg", label: "Open Plan Living", h: "h-52" },
                { src: "/images/runge-st/kitchen-01.jpg", label: "Premium Kitchen", h: "h-52" },
                { src: "/images/runge-st/bathroom-01.jpg", label: "Ensuite Bathroom", h: "h-44" },
                { src: "/images/runge-st/walkin-robe-01.jpg", label: "Walk-in Robe", h: "h-44" },
              ].map((img, i) => (
                <motion.div key={img.src} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ scale: 1.03 }} className={`relative rounded-xl overflow-hidden ${img.h}`}
                  style={{ border: "1px solid rgba(220,38,38,0.12)" }}>
                  <Image src={img.src} alt={img.label} fill className="object-cover" sizes="280px" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
                  <span className="absolute bottom-2 left-3 text-xs font-semibold text-white">{img.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Coverage ── */}
      <section className="section" style={{ background: "#0A0A0A" }}>
        <div className="container-site text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
              We Operate Nationwide
            </h2>
            <p className="text-lg mb-10" style={{ color: "#A3A3A3" }}>Active builder partnerships across every Australian state and territory</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {states.map((state, i) => (
              <motion.div key={state} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.1, backgroundColor: "#EF4444" }}
                className="rounded-lg px-7 py-3.5 text-sm font-bold tracking-wide cursor-default"
                style={{ background: "#DC2626", color: "#FFFFFF", minWidth: "80px" }}>
                {state}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden section"
        style={{ background: "linear-gradient(135deg, #1C1C1C 0%, #141414 100%)", borderTop: "1px solid rgba(220,38,38,0.15)" }}>
        <div className="container-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
              Ready to meet a vetted builder?
            </h2>
            <p className="text-lg mb-8" style={{ color: "#A3A3A3" }}>Free savings assessment. No obligation. No agent fees.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">Get My Free Assessment</Link>
              <a href="tel:0409005554" className="btn-secondary text-base px-8 py-4">Call 0409 005 554</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
