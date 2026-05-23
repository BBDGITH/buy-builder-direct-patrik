"use client";

import { motion } from "framer-motion";

const steps = [
 {
 number: 1,
 title: "Tell Us Your Goals",
 description:
 "Browse investment types and share your goals, budget, and target state. We tailor our approach to your strategy.",
 },
 {
 number: 2,
 title: "Builder Matching",
 description:
 "We match you with vetted builders in your target state who specialise in your chosen investment type.",
 },
 {
 number: 3,
 title: "Customise Your Build",
 description:
 "Choose floor plans, finishes, and timeline directly with the builder — no middleman, full control.",
 },
 {
 number: 4,
 title: "Transparent Transaction",
 description:
 "Fixed-price contracts, builder invoices, no hidden fees. You see exactly what you're paying and why.",
 },
 {
 number: 5,
 title: "Rent-Ready Handover",
 description:
 "We connect you with property management if needed so your investment is earning from day one.",
 },
];

export default function ProcessStepper() {
 return (
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site">
 {/* Heading */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="mb-16 text-center"
 >
 <h2
 className="text-4xl font-bold md:text-5xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 How It Works — 5 Simple Steps
 </h2>
 </motion.div>

 {/* Desktop: horizontal stepper */}
 <div className="hidden md:flex items-start gap-0">
 {steps.map((step, i) => (
 <div key={step.number} className="flex-1 flex flex-col items-center text-center relative">
 {/* Connector line (not on last) */}
 {i < steps.length - 1 && (
 <div
 className="absolute top-6 left-1/2 w-full h-0.5"
 style={{ background: "rgba(220,38,38,0.3)", zIndex: 0 }}
 />
 )}
 {/* Step circle */}
 <motion.div
 initial={{ opacity: 0, scale: 0.7 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: i * 0.12 }}
 className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-base font-bold shrink-0"
 style={{ background: "#DC2626", color: "#FFFFFF" }}
 >
 {step.number}
 </motion.div>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.12 + 0.1 }}
 className="mt-4 px-4"
 >
 <h3
 className="text-base font-bold mb-2"
 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
 >
 {step.title}
 </h3>
 <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
 {step.description}
 </p>
 </motion.div>
 </div>
 ))}
 </div>

 {/* Mobile: vertical stepper */}
 <div className="flex flex-col gap-0 md:hidden">
 {steps.map((step, i) => (
 <div key={step.number} className="flex gap-5">
 {/* Left: circle + line */}
 <div className="flex flex-col items-center">
 <motion.div
 initial={{ opacity: 0, scale: 0.7 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: i * 0.1 }}
 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
 style={{ background: "#DC2626", color: "#FFFFFF" }}
 >
 {step.number}
 </motion.div>
 {i < steps.length - 1 && (
 <div
 className="mt-2 w-0.5 flex-1 min-h-[2rem]"
 style={{ background: "rgba(220,38,38,0.3)" }}
 />
 )}
 </div>
 {/* Right: content */}
 <motion.div
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.1 }}
 className="pb-8"
 >
 <h3
 className="text-lg font-bold mb-1"
 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
 >
 {step.title}
 </h3>
 <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
 {step.description}
 </p>
 </motion.div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
