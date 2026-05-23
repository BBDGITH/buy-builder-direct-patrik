"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
 {
 name: "Sarah M.",
 location: "Melbourne, VIC",
 text: "Saved $30k on my co-living build. Incredible process — BBD handled everything from builder matching to contract review. I couldn't be happier.",
 stars: 5,
 initials: "SM",
 },
 {
 name: "James T.",
 location: "Brisbane, QLD",
 text: "3 rooming houses done through BBD. Best decision I ever made for my portfolio. No agents, no markups — just direct builder access and real savings.",
 stars: 5,
 initials: "JT",
 },
 {
 name: "David K.",
 location: "Sydney, NSW",
 text: "SDA build with BBD — government-backed income from day one. The team understood the NDIS space deeply and matched me with a specialist builder instantly.",
 stars: 5,
 initials: "DK",
 },
];

export default function Testimonials() {
 const [current, setCurrent] = useState(0);
 const [paused, setPaused] = useState(false);

 const next = useCallback(() => {
 setCurrent((p) => (p + 1) % testimonials.length);
 }, []);

 const prev = () => {
 setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
 };

 useEffect(() => {
 if (paused) return;
 const id = setInterval(next, 3000);
 return () => clearInterval(id);
 }, [paused, next]);

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
 What Our Investors Say
 </h2>
 </motion.div>

 {/* Carousel */}
 <div
 className="relative max-w-2xl mx-auto"
 onMouseEnter={() => setPaused(true)}
 onMouseLeave={() => setPaused(false)}
 >
 {/* Testimonial card */}
 <div
 className="rounded-2xl p-8 min-h-[240px] flex flex-col justify-between overflow-hidden relative"
 style={{
 background: "#1C1C1C",
 border: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 <AnimatePresence mode="wait">
 <motion.div
 key={current}
 initial={{ opacity: 0, x: 40 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -40 }}
 transition={{ duration: 0.4 }}
 className="flex flex-col gap-4"
 >
 {/* Stars */}
 <div className="flex gap-1" aria-label={`${testimonials[current].stars} stars`}>
 {Array.from({ length: testimonials[current].stars }).map((_, i) => (
 <span key={i} className="text-lg" style={{ color: "#DC2626" }}>

              <svg className="w-4 h-4 inline" fill="#DC2626" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
 </span>
 ))}
 </div>

 {/* Text */}
 <p className="text-base leading-relaxed italic" style={{ color: "#A3A3A3" }}>
 &ldquo;{testimonials[current].text}&rdquo;
 </p>

 {/* Author */}
 <div className="flex items-center gap-3 mt-2">
 <div
 className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold shrink-0"
 style={{ background: "#DC2626", color: "#FFFFFF" }}
 >
 {testimonials[current].initials}
 </div>
 <div>
 <p className="font-semibold text-sm" style={{ color: "#FFFFFF" }}>
 {testimonials[current].name}
 </p>
 <p className="text-xs" style={{ color: "#666666" }}>
 {testimonials[current].location}
 </p>
 </div>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 {/* Controls */}
 <div className="mt-6 flex items-center justify-center gap-4">
 <button
 onClick={prev}
 className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
 style={{ borderColor: "rgba(220,38,38,0.3)", color: "#DC2626" }}
 aria-label="Previous testimonial"
 >
 ‹
 </button>

 {/* Dots */}
 <div className="flex gap-2">
 {testimonials.map((_, i) => (
 <button
 key={i}
 onClick={() => setCurrent(i)}
 className="h-2 rounded-full transition-all duration-300"
 style={{
 width: i === current ? "1.5rem" : "0.5rem",
 background: i === current ? "#DC2626" : "rgba(220,38,38,0.3)",
 }}
 aria-label={`Go to testimonial ${i + 1}`}
 aria-current={i === current ? "true" : "false"}
 />
 ))}
 </div>

 <button
 onClick={next}
 className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
 style={{ borderColor: "rgba(220,38,38,0.3)", color: "#DC2626" }}
 aria-label="Next testimonial"
 >
 ›
 </button>
 </div>
 </div>
 </div>
 </section>
 );
}
