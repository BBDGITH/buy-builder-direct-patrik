"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pathways = [
 {
 title: "Co-Living Homes",
 description:
 "High-yield multi-room residential properties built for the modern rental market.",
 href: "/investments/co-living-homes",
 },
 {
 title: "Rooming Houses",
 description:
 "Multiple rental income streams under one roof — strong cash flow from day one.",
 href: "/investments/rooming-houses",
 },
 {
 title: "SDA / NDIS Homes",
 description:
 "Government-backed, specialist disability accommodation with premium guaranteed returns.",
 href: "/investments/sda-ndis-homes",
 },
 {
 title: "House & Land",
 description:
 "Fixed-price packages across growth corridors in all major Australian states.",
 href: "/investments/house-and-land",
 },
 {
 title: "Custom Builds",
 description:
 "Your vision, your specs — direct from builder at wholesale rates with no agent.",
 href: "/investments/custom-builds",
 },
 {
 title: "Developments",
 description:
 "Multi-unit and boutique development opportunities with end-to-end builder access.",
 href: "/investments/developments",
 },
];

export default function PathwayCards() {
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
 className="text-4xl font-bold md:text-5xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Investment Pathways
 </h2>
 <p className="mt-4 text-lg" style={{ color: "#A3A3A3" }}>
 Choose your strategy — we&apos;ll connect you with the right builder
 </p>
 </motion.div>

 {/* Cards grid */}
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {pathways.map((p, i) => (
 <motion.div
 key={p.href}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.08 }}
 >
 <Link
 href={p.href}
 className="group block h-full rounded-xl p-6 transition-all duration-300"
 style={{
 background: "#141414",
 borderTop: "3px solid #DC2626",
 border: "1px solid rgba(220,38,38,0.15)",
 borderTopWidth: "3px",
 }}
 onMouseEnter={(e) => {
 (e.currentTarget as HTMLElement).style.boxShadow =
 "0 0 0 1px rgba(220,38,38,0.5), 0 8px 32px rgba(220,38,38,0.15)";
 (e.currentTarget as HTMLElement).style.transform =
 "translateY(-4px)";
 }}
 onMouseLeave={(e) => {
 (e.currentTarget as HTMLElement).style.boxShadow = "none";
 (e.currentTarget as HTMLElement).style.transform =
 "translateY(0)";
 }}
 >
 <div className="w-10 h-10 mb-4 rounded-lg flex items-center justify-center" style={{ background: "rgba(220,38,38,0.15)" }} aria-hidden="true"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
 <h3
 className="text-xl font-bold mb-2"
 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
 >
 {p.title}
 </h3>
 <p className="text-sm leading-relaxed mb-4" style={{ color: "#A3A3A3" }}>
 {p.description}
 </p>
 <span
 className="text-sm font-semibold transition-colors"
 style={{ color: "#DC2626" }}
 >
 Learn More
 </span>
 </Link>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
