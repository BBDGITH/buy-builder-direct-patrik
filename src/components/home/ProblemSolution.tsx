"use client";

import { motion } from "framer-motion";

const columns = [
 {
 heading: "The Problem",
 body: "Rising construction costs, agent commissions up to 10%, and marketing levies are silently eating away at investor returns. Most buyers never see the wholesale price — they only see the inflated agent-marked-up number.",
 accent: false,
 },
 {
 heading: "The Solution",
 body: "Bypass the middleman entirely. Buy direct from vetted builders at wholesale rates. No agents, no markups, no hidden levies. BBD puts you in the room with the builder — so every dollar goes further.",
 accent: true,
 },
 {
 heading: "Our Expertise",
 body: "7+ years connecting Australian investors with quality builders nationwide. We provide end-to-end support from strategy and builder matching through to fixed-price contracts and rent-ready handover.",
 accent: false,
 },
];

export default function ProblemSolution() {
 return (
 <section className="section" style={{ background: "#141414" }}>
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
 className="text-4xl font-bold md:text-5xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Why the property game is changing
 </h2>
 </motion.div>

 {/* 3-column layout */}
 <div className="grid gap-8 md:grid-cols-3">
 {columns.map((col, i) => (
 <motion.div
 key={col.heading}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.1 }}
 className="rounded-xl p-8"
 style={
 col.accent
 ? {
 background: "rgba(220,38,38,0.1)",
 border: "2px solid #DC2626",
 }
 : {
 background: "#1C1C1C",
 border: "1px solid rgba(220,38,38,0.12)",
 }
 }
 >
 <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center" style={{ background: "rgba(220,38,38,0.15)" }} aria-hidden="true"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
 <h3
 className="text-2xl font-bold mb-4"
 style={{
 fontFamily: "var(--font-display)",
 color: col.accent ? "#DC2626" : "#FFFFFF",
 }}
 >
 {col.heading}
 </h3>
 <p className="text-base leading-relaxed" style={{ color: "#A3A3A3" }}>
 {col.body}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
