"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const studies = [
 {
 name: "Sarah M.",
 location: "Melbourne, VIC",
 investmentType: "Co-Living Property",
 saved: "$30,000",
 quote:
 "BBD saved me $30k on my co-living build. The builder was excellent and the process was transparent end to end. I had no idea how much I was leaving on the table by going through agents before.",
 initials: "SM",
 },
 {
 name: "James T.",
 location: "Brisbane, QLD",
 investmentType: "Rooming Houses",
 saved: "3 deals completed",
 quote:
 "I've now done 3 deals through BBD. No agents, no markups. My portfolio grew faster than I thought possible. The direct builder relationships BBD set up have been invaluable.",
 initials: "JT",
 },
];

export default function CaseStudies() {
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
 Real Investors. Real Savings.
 </h2>
 </motion.div>

 {/* Cards */}
 <div className="grid gap-8 md:grid-cols-2">
 {studies.map((s, i) => (
 <motion.div
 key={s.name}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.12 }}
 className="rounded-2xl p-8 flex flex-col"
 style={{
 background: "#1C1C1C",
 border: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 {/* Quote */}
 <blockquote className="flex-1 mb-6">
 <svg
 className="w-8 h-8 mb-4 opacity-40"
 fill="#DC2626"
 viewBox="0 0 24 24"
 aria-hidden="true"
 >
 <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
 </svg>
 <p className="text-base leading-relaxed italic" style={{ color: "#A3A3A3" }}>
 &ldquo;{s.quote}&rdquo;
 </p>
 </blockquote>

 {/* Author row */}
 <div className="flex items-center justify-between flex-wrap gap-4">
 <div className="flex items-center gap-3">
 {/* Avatar initials */}
 <div
 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
 style={{ background: "#DC2626", color: "#FFFFFF" }}
 >
 {s.initials}
 </div>
 <div>
 <p className="font-semibold text-sm" style={{ color: "#FFFFFF" }}>
 {s.name}
 </p>
 <p className="text-xs" style={{ color: "#666666" }}>
 {s.location}
 </p>
 </div>
 </div>

 {/* Tags */}
 <div className="flex flex-col items-end gap-1">
 <span
 className="text-xs font-medium px-3 py-1 rounded-full"
 style={{
 background: "rgba(220,38,38,0.12)",
 color: "#DC2626",
 border: "1px solid rgba(220,38,38,0.3)",
 }}
 >
 {s.investmentType}
 </span>
 <span className="text-xs font-bold" style={{ color: "#DC2626" }}>
 Saved {s.saved}
 </span>
 </div>
 </div>
 </motion.div>
 ))}
 </div>

 {/* Link */}
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.3 }}
 className="mt-10 text-center"
 >
 <Link
 href="/case-studies"
 className="text-sm font-semibold transition-colors"
 style={{ color: "#DC2626" }}
 >
 View All Case Studies
 </Link>
 </motion.div>
 </div>
 </section>
 );
}
