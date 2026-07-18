"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function SavingsCalculator() {
  const [price, setPrice] = useState(750000);

  const result = useMemo(() => {
    // Conservative estimate band (not advertised as a fixed %)
    const low = Math.round(price * 0.08);
    const mid = Math.round(price * 0.11);
    const high = Math.round(price * 0.14);
    return { low, mid, high };
  }, [price]);

  const progress = ((price - 300000) / (2000000 - 300000)) * 100;

  return (
    <section
      className="section"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
        >
          {/* Left copy */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#DC2626" }}
            >
              Savings Estimator
            </p>
            <h2
              className="text-3xl font-bold md:text-4xl leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
            >
              How much $$$ could stay in your portfolio?
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "#A3A3A3" }}>
              Cut out agent markups and marketing layers. This estimator shows a
              realistic dollar range based on your purchase price — not a fixed
              headline claim.
            </p>
            <ul className="mt-6 space-y-3 text-sm" style={{ color: "#C4C4C4" }}>
              {[
                "Builder-direct pricing",
                "No agent commission layer",
                "More capital for deposits & yields",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-sm shrink-0"
                    style={{ background: "#DC2626" }}
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right interactive panel */}
          <div className="lg:col-span-8">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #1C1C1C 0%, #141414 55%, #1a0a0a 100%)",
                border: "1px solid rgba(220,38,38,0.35)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
              }}
            >
              {/* Top bar */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(220,38,38,0.08)" }}
              >
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#DC2626" }}>
                  BBD Direct Pricing Model
                </span>
                <span className="text-xs" style={{ color: "#888" }}>
                  Indicative only
                </span>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#888" }}>
                      Target purchase price
                    </p>
                    <p
                      className="text-4xl md:text-5xl font-bold"
                      style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
                    >
                      {formatCurrency(price)}
                    </p>
                  </div>
                  <p className="text-sm" style={{ color: "#A3A3A3" }}>
                    Drag to adjust
                  </p>
                </div>

                <input
                  type="range"
                  min={300000}
                  max={2000000}
                  step={10000}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-2.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    accentColor: "#DC2626",
                    background: `linear-gradient(to right, #DC2626 ${progress}%, #2a2a2a 0%)`,
                  }}
                  aria-label="Purchase price slider"
                />
                <div className="flex justify-between mt-2 text-xs" style={{ color: "#666" }}>
                  <span>$300k</span>
                  <span>$2M</span>
                </div>

                {/* Dollar outcomes */}
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div
                    className="rounded-xl p-4"
                    style={{ background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: "#888" }}>
                      Conservative
                    </p>
                    <p className="text-2xl font-bold" style={{ color: "#FFFFFF" }}>
                      {formatCurrency(result.low)}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#666" }}>lower-end estimate</p>
                  </div>

                  <div
                    className="rounded-xl p-4 relative"
                    style={{
                      background: "rgba(220,38,38,0.12)",
                      border: "2px solid #DC2626",
                    }}
                  >
                    <span
                      className="absolute -top-2.5 left-4 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded"
                      style={{ background: "#DC2626", color: "#fff" }}
                    >
                      Likely
                    </span>
                    <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: "#F87171" }}>
                      Typical $$$ kept
                    </p>
                    <p className="text-2xl font-bold" style={{ color: "#DC2626" }}>
                      {formatCurrency(result.mid)}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#A3A3A3" }}>stays in your deal</p>
                  </div>

                  <div
                    className="rounded-xl p-4"
                    style={{ background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: "#888" }}>
                      Upside
                    </p>
                    <p className="text-2xl font-bold" style={{ color: "#FFFFFF" }}>
                      {formatCurrency(result.high)}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#666" }}>stronger deals</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/contact" className="btn-primary w-full sm:w-auto text-center px-8 py-3.5">
                    Get a Personalised $$$ Assessment
                  </Link>
                  <p className="text-xs text-center sm:text-left" style={{ color: "#666" }}>
                    Estimates only. Actual savings depend on property, builder, and market conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
