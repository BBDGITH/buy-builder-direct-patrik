"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
 {
 question: 'What does "buy direct from builder" mean?',
 answer:
 "It means you purchase your investment property at the builder's wholesale price — without an agent, project marketer, or selling intermediary adding their margin. BBD connects you directly to vetted builders so you negotiate and transact with them, not through a third party.",
 },
 {
 question: "How much can I really save?",
 answer:
 "Most of our investors keep substantial $$$ in their deal by cutting agent and project-marketing markups. On a mid-range purchase, that can mean tens of thousands — capital that stays in your portfolio instead of fees.",
 },
 {
 question: "Do you charge fees?",
 answer:
 "BBD is remunerated by our builder partners — not by you. There are no hidden fees, no referral charges added to your purchase price, and no commissions paid by the investor. Our interest is aligned with yours: a great deal.",
 },
 {
 question: "What states do you cover?",
 answer:
 "We have vetted builder partnerships across all 7 Australian states and territories: VIC, NSW, QLD, WA, SA, NT, and TAS. Wherever your investment strategy takes you, we can help.",
 },
 {
 question: "What investment types do you specialise in?",
 answer:
 "We specialise in Co-Living Homes, Rooming Houses, SDA/NDIS Homes, House & Land packages, Custom Builds, and multi-unit Developments. Each pathway is matched to the right builder for that investment type.",
 },
 {
 question: "Can you help with property management after the build?",
 answer:
 "Yes. As part of our rent-ready handover service, we connect clients with property managers who specialise in their investment type — whether that's co-living, NDIS/SDA, or standard residential. You don't have to source this yourself.",
 },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
 const [open, setOpen] = useState(false);
 const id = `faq-${index}`;
 const panelId = `faq-panel-${index}`;

 return (
 <div
 className="rounded-xl overflow-hidden"
 style={{ border: "1px solid rgba(220,38,38,0.15)" }}
 >
 <button
 id={id}
 onClick={() => setOpen((p) => !p)}
 className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold transition-colors"
 style={{
 background: open ? "rgba(220,38,38,0.06)" : "#141414",
 color: "#FFFFFF",
 }}
 aria-expanded={open}
 aria-controls={panelId}
 >
 <span>{faq.question}</span>
 <svg
 className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
 fill="none"
 viewBox="0 0 24 24"
 stroke="#DC2626"
 strokeWidth={2}
 aria-hidden="true"
 >
 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
 </svg>
 </button>

 <AnimatePresence initial={false}>
 {open && (
 <motion.div
 id={panelId}
 role="region"
 aria-labelledby={id}
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.3 }}
 style={{ overflow: "hidden" }}
 >
 <div
 className="px-6 pb-5 pt-2 text-sm leading-relaxed"
 style={{ color: "#A3A3A3", background: "#1C1C1C" }}
 >
 {faq.answer}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
}

export default function FAQPreview() {
 return (
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site">
 {/* Heading */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="mb-10 text-center"
 >
 <h2
 className="text-4xl font-bold md:text-5xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Common Questions
 </h2>
 </motion.div>

 {/* Accordion */}
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="max-w-3xl mx-auto flex flex-col gap-3"
 >
 {faqs.map((faq, i) => (
 <FAQItem key={i} faq={faq} index={i} />
 ))}
 </motion.div>

 {/* Link */}
 <div className="mt-10 text-center">
 <Link
 href="/faq"
 className="text-sm font-semibold transition-colors"
 style={{ color: "#DC2626" }}
 >
 See All FAQs
 </Link>
 </div>
 </div>
 </section>
 );
}
