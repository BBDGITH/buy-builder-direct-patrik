"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const benefits = [
 {
 title: "Save $$$",
 description:
 "Eliminate agent commissions and marketing levies. Buy at the builder's price — not the marked-up retail price investors typically pay.",
 },
 {
 title: "Transparent Pricing",
 description:
 "No hidden fees, fixed-price contracts. You see exactly what you pay and why — before you sign anything.",
 },
 {
 title: "Quality Builders",
 description:
 "Every builder is vetted for licence, insurance, and track record. We only work with builders who meet our strict standards.",
 },
 {
 title: "Nationwide Access",
 description:
 "Builder partnerships across VIC, NSW, QLD, WA, SA, NT and TAS. Wherever you want to invest, we have vetted builders there.",
 },
];

type ComparisonRow = {
 factor: string;
 agent: string;
 bbd: string;
 highlight?: boolean;
};

const comparisonRows: ComparisonRow[] = [
 {
 factor: "Purchase Price",
 agent: "Retail + agent markup (up to 10%)",
 bbd: "Wholesale builder price",
 },
 {
 factor: "Marketing Levies",
 agent: "Included (hidden in price)",
 bbd: "Zero",
 },
 {
 factor: "Agent Commission",
 agent: "3–6% of sale price",
 bbd: "Zero",
 },
 {
 factor: "Price Transparency",
 agent: "Limited — you see the end price only",
 bbd: "Detailed cost breakdown",
 },
 {
 factor: "Builder Relationship",
 agent: "Agent is the intermediary",
 bbd: "Direct relationship with builder",
 },
];

export default function WhyBuyDirect() {
 const [tableOpen, setTableOpen] = useState(false);

 return (
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site">
 {/* Heading */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="mb-12 text-center"
 >
 <h2
 className="text-4xl font-bold md:text-5xl inline-block"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Why Buy Direct?
 </h2>
 {/* Red underline decoration */}
 <div
 className="mx-auto mt-3 h-1 w-24 rounded-full"
 style={{ background: "#DC2626" }}
 />
 </motion.div>

 {/* Benefit cards — 2×2 */}
 <div className="grid gap-6 sm:grid-cols-2">
 {benefits.map((b, i) => (
 <motion.div
 key={b.title}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.1 }}
 className="rounded-xl p-6"
 style={{
 background: "#141414",
 border: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <div className="w-10 h-10 mb-3 rounded-lg flex items-center justify-center" style={{ background: "rgba(220,38,38,0.15)" }} aria-hidden="true"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
 <h3
 className="text-xl font-bold mb-2"
 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
 >
 {b.title}
 </h3>
 <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
 {b.description}
 </p>
 </motion.div>
 ))}
 </div>

 {/* Comparison accordion */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.3 }}
 className="mt-10"
 >
 <button
 onClick={() => setTableOpen((p) => !p)}
 className="w-full flex items-center justify-between rounded-xl px-6 py-4 font-semibold transition-colors"
 style={{
 background: "#141414",
 border: "1px solid rgba(220,38,38,0.3)",
 color: "#FFFFFF",
 }}
 aria-expanded={tableOpen}
 >
 <span>Builder Direct vs Agent Route — Savings Breakdown</span>
 <svg
 className={`w-5 h-5 transition-transform duration-300 ${tableOpen ? "rotate-180" : ""}`}
 fill="none"
 viewBox="0 0 24 24"
 stroke="#DC2626"
 strokeWidth={2}
 >
 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
 </svg>
 </button>

 {tableOpen && (
 <div
 className="mt-2 rounded-xl overflow-hidden"
 style={{ border: "1px solid rgba(220,38,38,0.15)" }}
 >
 <table className="w-full text-sm">
 <thead>
 <tr style={{ background: "#1C1C1C" }}>
 <th
 className="text-left px-6 py-3 font-semibold"
 style={{ color: "#A3A3A3" }}
 >
 Factor
 </th>
 <th
 className="text-left px-6 py-3 font-semibold"
 style={{ color: "#A3A3A3" }}
 >
 Via Agent
 </th>
 <th
 className="text-left px-6 py-3 font-semibold"
 style={{ color: "#DC2626" }}
 >
 Via BBD (Direct)
 </th>
 </tr>
 </thead>
 <tbody>
 {comparisonRows.map((row, i) => (
 <tr
 key={row.factor}
 style={{
 background: row.highlight
 ? "rgba(220,38,38,0.08)"
 : i % 2 === 0
 ? "#141414"
 : "#1C1C1C",
 borderTop: "1px solid rgba(255,255,255,0.04)",
 }}
 >
 <td
 className="px-6 py-3 font-medium"
 style={{ color: row.highlight ? "#DC2626" : "#FFFFFF" }}
 >
 {row.factor}
 </td>
 <td className="px-6 py-3" style={{ color: "#A3A3A3" }}>
 {row.agent}
 </td>
 <td
 className="px-6 py-3 font-medium"
 style={{ color: row.highlight ? "#DC2626" : "#FFFFFF" }}
 >
 {row.bbd}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 )}
 </motion.div>
 </div>
 </section>
 );
}
