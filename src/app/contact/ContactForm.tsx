"use client";

import { useState, FormEvent } from "react";

const budgetOptions = [
 { value: "", label: "Select your budget" },
 { value: "under-500k", label: "Under $500k" },
 { value: "500k-800k", label: "$500k – $800k" },
 { value: "800k-1.2m", label: "$800k – $1.2M" },
 { value: "1.2m-plus", label: "$1.2M+" },
];

const investmentTypes = [
 { value: "", label: "Select investment type" },
 { value: "co-living", label: "Co-Living Homes" },
 { value: "rooming-houses", label: "Rooming Houses" },
 { value: "sda-ndis", label: "SDA / NDIS Housing" },
 { value: "house-and-land", label: "House & Land" },
 { value: "custom-builds", label: "Custom Builds" },
 { value: "developments", label: "Developments" },
 { value: "not-sure", label: "Not Sure – Help Me Decide" },
];

const states = [
 { value: "", label: "Select your state" },
 { value: "VIC", label: "Victoria (VIC)" },
 { value: "NSW", label: "New South Wales (NSW)" },
 { value: "QLD", label: "Queensland (QLD)" },
 { value: "WA", label: "Western Australia (WA)" },
 { value: "SA", label: "South Australia (SA)" },
 { value: "NT", label: "Northern Territory (NT)" },
 { value: "TAS", label: "Tasmania (TAS)" },
];

type FormData = {
 firstName: string;
 lastName: string;
 email: string;
 phone: string;
 budget: string;
 investmentType: string;
 state: string;
 message: string;
};

const initialForm: FormData = {
 firstName: "",
 lastName: "",
 email: "",
 phone: "",
 budget: "",
 investmentType: "",
 state: "",
 message: "",
};

const inputStyle: React.CSSProperties = {
 width: "100%",
 background: "#1C1C1C",
 border: "1px solid rgba(255,255,255,0.1)",
 borderRadius: "0.5rem",
 padding: "0.75rem 1rem",
 color: "#FFFFFF",
 fontSize: "0.9375rem",
 outline: "none",
 transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
 display: "block",
 fontSize: "0.875rem",
 fontWeight: 600,
 color: "#A3A3A3",
 marginBottom: "0.375rem",
};

export default function ContactForm() {
 const [form, setForm] = useState<FormData>(initialForm);
 const [submitted, setSubmitted] = useState(false);
 const [submitting, setSubmitting] = useState(false);

 const handleChange = (
 e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
 ) => {
 const { name, value } = e.target;
 setForm((prev) => ({ ...prev, [name]: value }));
 };

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setSubmitting(true);
 // Simulate async submission
 await new Promise((resolve) => setTimeout(resolve, 800));
 setSubmitting(false);
 setSubmitted(true);
 };

 if (submitted) {
 return (
 <div
 className="rounded-xl p-10 text-center"
 style={{
 background: "#141414",
 border: "1px solid rgba(34,197,94,0.3)",
 }}
 >
 <div
 className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-2xl"
 style={{ background: "rgba(34,197,94,0.15)" }}
 >

          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#22C55E" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
 </div>
 <h2
 className="text-2xl font-bold mb-3"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Message Sent!
 </h2>
 <p className="text-lg" style={{ color: "#A3A3A3" }}>
 Thanks! We&apos;ll be in touch within 24 hours with your personalised
 savings assessment.
 </p>
 <p className="mt-3 text-sm" style={{ color: "#666666" }}>
 Keep an eye on{" "}
 <span style={{ color: "#A3A3A3" }}>{form.email}</span>
 </p>
 </div>
 );
 }

 return (
 <div
 className="rounded-xl p-8"
 style={{
 background: "#141414",
 border: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 <h2
 className="text-2xl font-bold mb-6"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Tell Us About Your Goals
 </h2>

 <form onSubmit={handleSubmit} noValidate className="space-y-5">
 {/* First + Last Name */}
 <div className="grid grid-cols-2 gap-4">
 <div>
 <label htmlFor="firstName" style={labelStyle}>
 First Name <span style={{ color: "#DC2626" }}>*</span>
 </label>
 <input
 id="firstName"
 name="firstName"
 type="text"
 required
 value={form.firstName}
 onChange={handleChange}
 placeholder="Sarah"
 style={inputStyle}
 />
 </div>
 <div>
 <label htmlFor="lastName" style={labelStyle}>
 Last Name <span style={{ color: "#DC2626" }}>*</span>
 </label>
 <input
 id="lastName"
 name="lastName"
 type="text"
 required
 value={form.lastName}
 onChange={handleChange}
 placeholder="Mitchell"
 style={inputStyle}
 />
 </div>
 </div>

 {/* Email */}
 <div>
 <label htmlFor="email" style={labelStyle}>
 Email Address <span style={{ color: "#DC2626" }}>*</span>
 </label>
 <input
 id="email"
 name="email"
 type="email"
 required
 value={form.email}
 onChange={handleChange}
 placeholder="sarah@example.com.au"
 style={inputStyle}
 />
 </div>

 {/* Phone */}
 <div>
 <label htmlFor="phone" style={labelStyle}>
 Phone Number <span style={{ color: "#DC2626" }}>*</span>
 </label>
 <input
 id="phone"
 name="phone"
 type="tel"
 required
 value={form.phone}
 onChange={handleChange}
 placeholder="04XX XXX XXX"
 style={inputStyle}
 />
 </div>

 {/* Budget */}
 <div>
 <label htmlFor="budget" style={labelStyle}>
 Budget Range <span style={{ color: "#DC2626" }}>*</span>
 </label>
 <select
 id="budget"
 name="budget"
 required
 value={form.budget}
 onChange={handleChange}
 style={{ ...inputStyle, cursor: "pointer" }}
 >
 {budgetOptions.map((o) => (
 <option key={o.value} value={o.value} disabled={o.value === ""}>
 {o.label}
 </option>
 ))}
 </select>
 </div>

 {/* Investment Type */}
 <div>
 <label htmlFor="investmentType" style={labelStyle}>
 Investment Type <span style={{ color: "#DC2626" }}>*</span>
 </label>
 <select
 id="investmentType"
 name="investmentType"
 required
 value={form.investmentType}
 onChange={handleChange}
 style={{ ...inputStyle, cursor: "pointer" }}
 >
 {investmentTypes.map((o) => (
 <option key={o.value} value={o.value} disabled={o.value === ""}>
 {o.label}
 </option>
 ))}
 </select>
 </div>

 {/* State */}
 <div>
 <label htmlFor="state" style={labelStyle}>
 Target State <span style={{ color: "#DC2626" }}>*</span>
 </label>
 <select
 id="state"
 name="state"
 required
 value={form.state}
 onChange={handleChange}
 style={{ ...inputStyle, cursor: "pointer" }}
 >
 {states.map((o) => (
 <option key={o.value} value={o.value} disabled={o.value === ""}>
 {o.label}
 </option>
 ))}
 </select>
 </div>

 {/* Message */}
 <div>
 <label htmlFor="message" style={labelStyle}>
 Additional Details
 </label>
 <textarea
 id="message"
 name="message"
 rows={4}
 value={form.message}
 onChange={handleChange}
 placeholder="Tell us anything else relevant — your timeline, existing portfolio, specific questions..."
 style={{ ...inputStyle, resize: "vertical" }}
 />
 </div>

 {/* Submit */}
 <button
 type="submit"
 disabled={submitting}
 className="btn-primary w-full"
 style={{ opacity: submitting ? 0.7 : 1 }}
 >
 {submitting ? "Sending..." : "Send My Assessment Request"}
 </button>

 <p className="text-xs text-center" style={{ color: "#666666" }}>
 No spam. No agent calls. Just a real response from our team.
 </p>
 </form>
 </div>
 );
}
