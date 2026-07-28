"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

const budgetOptions = [
 { value: "", label: "Select your budget" },
 { value: "Under $500k", label: "Under $500k" },
 { value: "$500k – $800k", label: "$500k – $800k" },
 { value: "$800k – $1.2M", label: "$800k – $1.2M" },
 { value: "$1.2M+", label: "$1.2M+" },
];

const investmentTypes = [
 { value: "", label: "Select investment type" },
 { value: "Co-Living Homes", label: "Co-Living Homes" },
 { value: "Rooming Houses", label: "Rooming Houses" },
 { value: "SDA / NDIS Housing", label: "SDA / NDIS Housing" },
 { value: "House & Land", label: "House & Land" },
 { value: "Custom Builds", label: "Custom Builds" },
 { value: "Developments", label: "Developments" },
 { value: "Knock Down and Rebuild", label: "Knock Down and Rebuild" },
 { value: "Not Sure – Help Me Decide", label: "Not Sure – Help Me Decide" },
];

const fundingOptions = [
 { value: "", label: "Select an option" },
 { value: "Yes", label: "Yes" },
 { value: "No", label: "No" },
 { value: "Not sure yet", label: "Not sure yet" },
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
 { value: "ACT", label: "ACT" },
];

type FormData = {
 firstName: string;
 lastName: string;
 email: string;
 phone: string;
 budget: string;
 investmentType: string;
 state: string;
 fundingAssistance: string;
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
 fundingAssistance: "",
 message: "",
};

const inputClass =
 "w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors";
const inputStyle = {
 background: "#1C1C1C",
 border: "1px solid rgba(255,255,255,0.1)",
 color: "#FFFFFF",
} as React.CSSProperties;

const labelStyle: React.CSSProperties = {
 display: "block",
 fontSize: "0.875rem",
 fontWeight: 600,
 color: "#A3A3A3",
 marginBottom: "0.375rem",
};

function Field({
 id,
 label,
 required,
 children,
 error,
}: {
 id: string;
 label: string;
 required?: boolean;
 children: React.ReactNode;
 error?: string;
}) {
 return (
  <div>
   <label htmlFor={id} style={labelStyle}>
    {label} {required && <span style={{ color: "#DC2626" }}>*</span>}
   </label>
   {children}
   {error && (
    <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>
     {error}
    </p>
   )}
  </div>
 );
}

export default function ContactForm() {
 const [form, setForm] = useState<FormData>(initialForm);
 const [errors, setErrors] = useState<Partial<FormData>>({});
 const [submitted, setSubmitted] = useState(false);
 const [submitting, setSubmitting] = useState(false);
 const [apiError, setApiError] = useState("");
 const formStartRef = useRef<number>(0);
 const honeypotRef = useRef<HTMLInputElement>(null);

 useEffect(() => {
  formStartRef.current = Date.now();
 }, []);

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
 ) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
  if (errors[name as keyof FormData]) {
   setErrors((prev) => ({ ...prev, [name]: "" }));
  }
 };

 const validate = (): boolean => {
  const newErrors: Partial<FormData> = {};
  if (!form.firstName.trim()) newErrors.firstName = "First name is required";
  if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
  if (!form.email.trim()) {
   newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
   newErrors.email = "Please enter a valid email address";
  }
  if (!form.phone.trim()) {
   newErrors.phone = "Phone number is required";
  } else if (form.phone.trim().length < 6) {
   newErrors.phone = "Please enter a valid phone number";
  }
  if (!form.budget) newErrors.budget = "Please select a budget range" as never;
  if (!form.investmentType) newErrors.investmentType = "Please select an investment type" as never;
  if (!form.state) newErrors.state = "Please select your state" as never;
  if (!form.fundingAssistance) newErrors.fundingAssistance = "Please select an option" as never;
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
 };

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!validate()) return;

  setSubmitting(true);
  setApiError("");

  try {
   const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
     ...form,
     formType: "contact",
     _hp: honeypotRef.current?.value ?? "",
     _t: formStartRef.current,
    }),
   });

   const json = await res.json() as { success?: boolean; error?: string };

   if (!res.ok) {
    setApiError(json.error ?? "Something went wrong. Please try again.");
    return;
   }

   setSubmitted(true);
  } catch {
   setApiError(
    "Network error. Please check your connection or call us on +61 489 995 725."
   );
  } finally {
   setSubmitting(false);
  }
 };

 if (submitted) {
  return (
   <div
    className="rounded-xl p-10 text-center"
    style={{ background: "#141414", border: "1px solid rgba(34,197,94,0.3)" }}
   >
    <div
     className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full"
     style={{ background: "rgba(34,197,94,0.15)" }}
    >
     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#22C55E" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
     </svg>
    </div>
    <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
     Message Sent!
    </h2>
    <p className="text-lg" style={{ color: "#A3A3A3" }}>
     Thanks {form.firstName}! We&apos;ll be in touch within 24 hours with
     your personalised savings assessment.
    </p>
    <p className="mt-3 text-sm" style={{ color: "#666666" }}>
     Confirmation sent to{" "}
     <span style={{ color: "#A3A3A3" }}>{form.email}</span>
    </p>
   </div>
  );
 }

 return (
  <div
   className="rounded-xl p-8"
   style={{ background: "#141414", border: "1px solid rgba(220,38,38,0.2)" }}
  >
   <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
    Tell Us About Your Goals
   </h2>

   <form onSubmit={handleSubmit} noValidate className="space-y-5">
    {/* Honeypot – hidden from humans, visible to bots */}
    <input
     ref={honeypotRef}
     type="text"
     name="_hp"
     tabIndex={-1}
     aria-hidden="true"
     autoComplete="off"
     style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
    />

    {/* Name row */}
    <div className="grid grid-cols-2 gap-4">
     <Field id="firstName" label="First Name" required error={errors.firstName}>
      <input
       id="firstName" name="firstName" type="text" required
       value={form.firstName} onChange={handleChange}
       placeholder="Sarah"
       className={inputClass}
       style={{ ...inputStyle, ...(errors.firstName ? { borderColor: "#EF4444" } : {}) }}
       onFocus={(e) => { if (!errors.firstName) e.currentTarget.style.borderColor = "#DC2626"; }}
       onBlur={(e) => { if (!errors.firstName) e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
      />
     </Field>
     <Field id="lastName" label="Last Name" required error={errors.lastName}>
      <input
       id="lastName" name="lastName" type="text" required
       value={form.lastName} onChange={handleChange}
       placeholder="Mitchell"
       className={inputClass}
       style={{ ...inputStyle, ...(errors.lastName ? { borderColor: "#EF4444" } : {}) }}
       onFocus={(e) => { if (!errors.lastName) e.currentTarget.style.borderColor = "#DC2626"; }}
       onBlur={(e) => { if (!errors.lastName) e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
      />
     </Field>
    </div>

    <Field id="email" label="Email Address" required error={errors.email}>
     <input
      id="email" name="email" type="email" required
      value={form.email} onChange={handleChange}
      placeholder="sarah@example.com.au"
      className={inputClass}
      style={{ ...inputStyle, ...(errors.email ? { borderColor: "#EF4444" } : {}) }}
      onFocus={(e) => { if (!errors.email) e.currentTarget.style.borderColor = "#DC2626"; }}
      onBlur={(e) => { if (!errors.email) e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
     />
    </Field>

    <Field id="phone" label="Phone Number" required error={errors.phone}>
     <input
      id="phone" name="phone" type="tel" required
      value={form.phone} onChange={handleChange}
      placeholder="04XX XXX XXX"
      className={inputClass}
      style={{ ...inputStyle, ...(errors.phone ? { borderColor: "#EF4444" } : {}) }}
      onFocus={(e) => { if (!errors.phone) e.currentTarget.style.borderColor = "#DC2626"; }}
      onBlur={(e) => { if (!errors.phone) e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
     />
    </Field>

    <Field id="budget" label="Budget Range" required error={errors.budget}>
     <select
      id="budget" name="budget" required
      value={form.budget} onChange={handleChange}
      className={inputClass}
      style={{ ...inputStyle, cursor: "pointer", ...(errors.budget ? { borderColor: "#EF4444" } : {}) }}
     >
      {budgetOptions.map((o) => (
       <option key={o.value} value={o.value} disabled={o.value === ""}>{o.label}</option>
      ))}
     </select>
    </Field>

    <Field id="investmentType" label="Investment Type" required error={errors.investmentType}>
     <select
      id="investmentType" name="investmentType" required
      value={form.investmentType} onChange={handleChange}
      className={inputClass}
      style={{ ...inputStyle, cursor: "pointer", ...(errors.investmentType ? { borderColor: "#EF4444" } : {}) }}
     >
      {investmentTypes.map((o) => (
       <option key={o.value} value={o.value} disabled={o.value === ""}>{o.label}</option>
      ))}
     </select>
    </Field>

    <Field id="state" label="Target State" required error={errors.state}>
     <select
      id="state" name="state" required
      value={form.state} onChange={handleChange}
      className={inputClass}
      style={{ ...inputStyle, cursor: "pointer", ...(errors.state ? { borderColor: "#EF4444" } : {}) }}
     >
      {states.map((o) => (
       <option key={o.value} value={o.value} disabled={o.value === ""}>{o.label}</option>
      ))}
     </select>
    </Field>

    <Field id="fundingAssistance" label="Do you need assistance with funding?" required error={errors.fundingAssistance}>
     <select
      id="fundingAssistance" name="fundingAssistance" required
      value={form.fundingAssistance} onChange={handleChange}
      className={inputClass}
      style={{ ...inputStyle, cursor: "pointer", ...(errors.fundingAssistance ? { borderColor: "#EF4444" } : {}) }}
     >
      {fundingOptions.map((o) => (
       <option key={o.value} value={o.value} disabled={o.value === ""}>{o.label}</option>
      ))}
     </select>
    </Field>

    <Field id="message" label="Additional Details">
     <textarea
      id="message" name="message" rows={4}
      value={form.message} onChange={handleChange}
      placeholder="Tell us anything else relevant — your timeline, existing portfolio, specific questions..."
      className={inputClass}
      style={{ ...inputStyle, resize: "vertical" }}
      onFocus={(e) => { e.currentTarget.style.borderColor = "#DC2626"; }}
      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
     />
    </Field>

    {apiError && (
     <div
      className="rounded-lg px-4 py-3 text-sm"
      style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", color: "#FCA5A5" }}
      role="alert"
     >
      {apiError}
     </div>
    )}

    <button
     type="submit"
     disabled={submitting}
     className="btn-primary w-full"
     style={{ opacity: submitting ? 0.7 : 1 }}
    >
     {submitting ? (
      <span className="flex items-center justify-center gap-2">
       <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
       </svg>
       Sending...
      </span>
     ) : (
      "Send My Assessment Request"
     )}
    </button>

    <p className="text-xs text-center" style={{ color: "#666666" }}>
     No spam. No agent calls. Just a real response from our team within 24 hours.
    </p>
   </form>
  </div>
 );
}
