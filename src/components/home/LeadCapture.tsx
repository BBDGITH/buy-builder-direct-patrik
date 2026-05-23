"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const investmentTypes = [
 "Co-Living",
 "Rooming House",
 "SDA/NDIS",
 "House & Land",
 "Custom Build",
 "Development",
 "Not sure",
];

const states = ["VIC", "NSW", "QLD", "WA", "SA", "NT", "TAS"];

interface FormData {
 firstName: string;
 phone: string;
 investmentType: string;
 state: string;
}

export default function LeadCapture() {
 const [form, setForm] = useState<FormData>({
 firstName: "",
 phone: "",
 investmentType: "",
 state: "",
 });
 const [submitted, setSubmitted] = useState(false);

 const handleChange = (
 e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
 ) => {
 setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 console.log("BBD Lead Capture submission:", form);
 setSubmitted(true);
 };

 return (
 <section
 className="section"
 style={{
 background: "#141414",
 borderTop: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 <div className="container-site">
 <div className="grid gap-12 lg:grid-cols-2 items-center">
 {/* Left: Form */}
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <h2
 className="text-4xl font-bold mb-3 md:text-5xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Ready to Save on Your Next Investment?
 </h2>
 <p className="text-lg mb-8" style={{ color: "#A3A3A3" }}>
 Get your free savings assessment — takes 2 minutes
 </p>

 {submitted ? (
 <div
 className="rounded-xl p-8 text-center"
 style={{
 background: "rgba(34,197,94,0.1)",
 border: "1px solid rgba(34,197,94,0.3)",
 }}
 >
 <svg className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="#22C55E" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
 <h3
 className="text-xl font-bold mb-2"
 style={{ color: "#22C55E" }}
 >
 Assessment Request Received!
 </h3>
 <p className="text-sm" style={{ color: "#A3A3A3" }}>
 Our team will be in touch within 1 business day to discuss
 your savings assessment.
 </p>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
 {/* First Name */}
 <div>
 <label
 htmlFor="firstName"
 className="block text-sm font-medium mb-1.5"
 style={{ color: "#A3A3A3" }}
 >
 First Name <span style={{ color: "#DC2626" }}>*</span>
 </label>
 <input
 id="firstName"
 name="firstName"
 type="text"
 required
 value={form.firstName}
 onChange={handleChange}
 placeholder="e.g. Sarah"
 className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
 style={{
 background: "#1C1C1C",
 border: "1px solid rgba(220,38,38,0.2)",
 color: "#FFFFFF",
 }}
 onFocus={(e) => {
 e.currentTarget.style.borderColor = "#DC2626";
 }}
 onBlur={(e) => {
 e.currentTarget.style.borderColor = "rgba(220,38,38,0.2)";
 }}
 />
 </div>

 {/* Phone */}
 <div>
 <label
 htmlFor="phone"
 className="block text-sm font-medium mb-1.5"
 style={{ color: "#A3A3A3" }}
 >
 Phone <span style={{ color: "#DC2626" }}>*</span>
 </label>
 <input
 id="phone"
 name="phone"
 type="tel"
 required
 value={form.phone}
 onChange={handleChange}
 placeholder="04XX XXX XXX"
 className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
 style={{
 background: "#1C1C1C",
 border: "1px solid rgba(220,38,38,0.2)",
 color: "#FFFFFF",
 }}
 onFocus={(e) => {
 e.currentTarget.style.borderColor = "#DC2626";
 }}
 onBlur={(e) => {
 e.currentTarget.style.borderColor = "rgba(220,38,38,0.2)";
 }}
 />
 </div>

 {/* Investment Type */}
 <div>
 <label
 htmlFor="investmentType"
 className="block text-sm font-medium mb-1.5"
 style={{ color: "#A3A3A3" }}
 >
 Investment Type <span style={{ color: "#DC2626" }}>*</span>
 </label>
 <select
 id="investmentType"
 name="investmentType"
 required
 value={form.investmentType}
 onChange={handleChange}
 className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors appearance-none"
 style={{
 background: "#1C1C1C",
 border: "1px solid rgba(220,38,38,0.2)",
 color: form.investmentType ? "#FFFFFF" : "#666666",
 }}
 >
 <option value="" disabled>
 Select investment type
 </option>
 {investmentTypes.map((t) => (
 <option key={t} value={t} style={{ color: "#FFFFFF" }}>
 {t}
 </option>
 ))}
 </select>
 </div>

 {/* State */}
 <div>
 <label
 htmlFor="state"
 className="block text-sm font-medium mb-1.5"
 style={{ color: "#A3A3A3" }}
 >
 State <span style={{ color: "#DC2626" }}>*</span>
 </label>
 <select
 id="state"
 name="state"
 required
 value={form.state}
 onChange={handleChange}
 className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors appearance-none"
 style={{
 background: "#1C1C1C",
 border: "1px solid rgba(220,38,38,0.2)",
 color: form.state ? "#FFFFFF" : "#666666",
 }}
 >
 <option value="" disabled>
 Select your state
 </option>
 {states.map((s) => (
 <option key={s} value={s} style={{ color: "#FFFFFF" }}>
 {s}
 </option>
 ))}
 </select>
 </div>

 <button type="submit" className="btn-primary w-full py-4 text-base mt-2">
 Get My Free Assessment
 </button>

 <p className="text-xs text-center" style={{ color: "#666666" }}>
 No spam. No obligation. We respect your privacy.
 </p>
 </form>
 )}
 </motion.div>

 {/* Right: Book a call */}
 <motion.div
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="flex flex-col justify-center"
 >
 <div
 className="rounded-2xl p-8"
 style={{
 background: "rgba(220,38,38,0.08)",
 border: "1px solid rgba(220,38,38,0.25)",
 }}
 >
 <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#DC2626" }}>
 Prefer to talk?
 </p>
 <h3
 className="text-2xl font-bold mb-4"
 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
 >
 Or Book a Call Directly
 </h3>
 <p className="text-sm leading-relaxed mb-6" style={{ color: "#A3A3A3" }}>
 Speak directly with an investment specialist. We&apos;ll discuss your
 goals, target state, and investment strategy — no pressure, no
 obligation.
 </p>

 <a
 href="tel:1300223776"
 className="flex items-center gap-3 mb-2"
 style={{ color: "#FFFFFF" }}
 >
 <span
 className="flex h-10 w-10 items-center justify-center rounded-full shrink-0 text-lg"
 style={{ background: "#DC2626" }}
 >

          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
 </span>
 <div>
 <p className="font-bold text-lg">1300 BBD PRO</p>
 <p className="text-xs" style={{ color: "#A3A3A3" }}>
 1300 223 776
 </p>
 </div>
 </a>

 <div
 className="mt-4 pt-4 text-sm"
 style={{
 color: "#A3A3A3",
 borderTop: "1px solid rgba(255,255,255,0.06)",
 }}
 >
 <p className="font-medium mb-1" style={{ color: "#FFFFFF" }}>
 Business Hours
 </p>
 <p>Mon – Fri: 8:30am – 6:00pm AEST</p>
 <p>Sat: 9:00am – 1:00pm AEST</p>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
