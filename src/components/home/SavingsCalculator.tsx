"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function formatCurrency(value: number): string {
 if (value >= 1_000_000) {
 return `$${(value / 1_000_000).toFixed(2)}M`;
 }
 return `$${value.toLocaleString("en-AU")}`;
}

export default function SavingsCalculator() {
 const [price, setPrice] = useState(700000);

 const agentMarkup = Math.round(price * 0.1);
 const bbdSaving = Math.round(price * 0.15);
 const extraCapital = bbdSaving;

 return (
 <section
 className="section"
 style={{
 background: "#141414",
 borderTop: "1px solid rgba(220,38,38,0.15)",
 borderBottom: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <div className="container-site">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="max-w-3xl mx-auto"
 >
 {/* Heading */}
 <div className="text-center mb-10">
 <h2
 className="text-4xl font-bold md:text-5xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 See How Much You Could Save
 </h2>
 <p className="mt-4 text-lg" style={{ color: "#A3A3A3" }}>
 Move the slider to your target purchase price
 </p>
 </div>

 {/* Calculator card */}
 <div
 className="rounded-2xl p-8"
 style={{
 background: "#1C1C1C",
 border: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 {/* Price display */}
 <div className="text-center mb-6">
 <p className="text-sm font-medium uppercase tracking-widest mb-1" style={{ color: "#A3A3A3" }}>
 Purchase Price
 </p>
 <p
 className="text-5xl font-bold"
 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
 >
 {formatCurrency(price)}
 </p>
 </div>

 {/* Slider */}
 <div className="mb-8">
 <input
 type="range"
 min={300000}
 max={2000000}
 step={10000}
 value={price}
 onChange={(e) => setPrice(Number(e.target.value))}
 className="w-full h-2 rounded-full appearance-none cursor-pointer"
 style={{
 accentColor: "#DC2626",
 background: `linear-gradient(to right, #DC2626 ${
 ((price - 300000) / (2000000 - 300000)) * 100
 }%, #333 0%)`,
 }}
 aria-label="Purchase price slider"
 aria-valuemin={300000}
 aria-valuemax={2000000}
 aria-valuenow={price}
 />
 <div className="flex justify-between mt-2 text-xs" style={{ color: "#666666" }}>
 <span>$300k</span>
 <span>$2M</span>
 </div>
 </div>

 {/* Results */}
 <div className="grid gap-4 sm:grid-cols-3">
 <div
 className="rounded-xl p-5 text-center"
 style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.05)" }}
 >
 <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "#A3A3A3" }}>
 Agent Markup Saved
 </p>
 <p className="text-2xl font-bold" style={{ color: "#FFFFFF" }}>
 {formatCurrency(agentMarkup)}
 </p>
 <p className="text-xs mt-1" style={{ color: "#666666" }}>
 10% agent markup
 </p>
 </div>

 <div
 className="rounded-xl p-5 text-center"
 style={{
 background: "rgba(220,38,38,0.1)",
 border: "2px solid #DC2626",
 }}
 >
 <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "#DC2626" }}>
 BBD Total Saving
 </p>
 <p className="text-2xl font-bold" style={{ color: "#DC2626" }}>
 {formatCurrency(bbdSaving)}
 </p>
 <p className="text-xs mt-1" style={{ color: "#A3A3A3" }}>
 15% average saving
 </p>
 </div>

 <div
 className="rounded-xl p-5 text-center"
 style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.05)" }}
 >
 <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "#A3A3A3" }}>
 Extra Capital Working
 </p>
 <p className="text-2xl font-bold" style={{ color: "#FFFFFF" }}>
 {formatCurrency(extraCapital)}
 </p>
 <p className="text-xs mt-1" style={{ color: "#666666" }}>
 stays in your portfolio
 </p>
 </div>
 </div>

 {/* CTA */}
 <div className="mt-8 text-center">
 <Link href="/contact" className="btn-primary text-base px-8 py-4">
 Claim Your Savings Assessment
 </Link>
 <p className="mt-3 text-xs" style={{ color: "#666666" }}>
 Estimates based on typical agent markups. Actual savings vary by property and builder.
 </p>
 </div>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
