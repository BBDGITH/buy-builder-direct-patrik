"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
 question: string;
 answer: string;
}

interface FAQAccordionProps {
 items: FAQItem[];
}

function FAQRow({ item, index }: { item: FAQItem; index: number }) {
 const [open, setOpen] = useState(false);
 const buttonId = `faq-btn-${index}`;
 const panelId = `faq-panel-${index}`;

 return (
 <div
 className="rounded-xl overflow-hidden"
 style={{ border: "1px solid rgba(220,38,38,0.15)" }}
 >
 <button
 id={buttonId}
 onClick={() => setOpen((p) => !p)}
 className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold transition-colors"
 style={{
 background: open ? "rgba(220,38,38,0.06)" : "#141414",
 color: "#FFFFFF",
 }}
 aria-expanded={open}
 aria-controls={panelId}
 >
 <span>{item.question}</span>
 <svg
 className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-300 ${
 open ? "rotate-180" : ""
 }`}
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
 aria-labelledby={buttonId}
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
 {item.answer}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
 return (
 <div className="flex flex-col gap-3">
 {items.map((item, i) => (
 <FAQRow key={i} item={item} index={i} />
 ))}
 </div>
 );
}
