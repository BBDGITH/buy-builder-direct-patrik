import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
 title: "Knock Down and Rebuild | Buy Builder Direct",
 description:
  "Demolish your existing structure and build a brand-new premium home directly with a vetted builder — no agents, no markups, full control over design and finish.",
};

const benefits = [
 {
  title: "Your Land, New Home",
  description:
   "Use your existing land asset to build a brand-new, modern home without the cost of purchasing a new block. Maximise the value of what you already own.",
 },
 {
  title: "Direct Builder Pricing",
  description:
   "No agent in the middle means no markup. You deal directly with the builder from demolition to final handover, saving up to 15% on typical project costs.",
 },
 {
  title: "Full Design Control",
  description:
   "Choose your floor plan, finishes, fixtures, and layout. Knock Down and Rebuild gives you complete customisation — built to your brief, not a developer's template.",
 },
 {
  title: "Increased Property Value",
  description:
   "A brand-new build on an established block in an established suburb is one of the strongest capital growth strategies available to Australian investors.",
 },
 {
  title: "Compliance Handled",
  description:
   "Our vetted builders manage council approvals, demolition permits, and all regulatory requirements — end-to-end, with full transparency.",
 },
 {
  title: "Faster Build Timeline",
  description:
   "Rebuilding on your own land eliminates the delays of land title transfers and new estate registrations. Demolition to completion is typically faster than house and land.",
 },
];

const steps = [
 { number: "01", title: "Site Assessment", description: "We assess your existing property for demolition feasibility, council zoning, and rebuild potential." },
 { number: "02", title: "Builder Matching", description: "We match you directly with a vetted builder who specialises in Knock Down and Rebuild projects in your area." },
 { number: "03", title: "Design & Approval", description: "Work one-on-one with your builder to design the new home. Council and demolition permits are managed for you." },
 { number: "04", title: "Demolition", description: "The existing structure is professionally demolished and the site is prepared for the new build." },
 { number: "05", title: "Construction", description: "Your new home is constructed to your specifications with full transparency and regular site updates." },
 { number: "06", title: "Handover", description: "Final inspection, handover, and keys — your premium new build is ready to occupy or rent." },
];

export default function KnockDownRebuildPage() {
 return (
  <>
   {/* ── Hero ── */}
   <section
    className="relative section-hero overflow-hidden"
    style={{
     background: "linear-gradient(135deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)",
     borderBottom: "1px solid rgba(220,38,38,0.15)",
    }}
   >
    <div
     aria-hidden="true"
     className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
     style={{
      background:
       "radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 70%)",
     }}
    />
    <div className="container-site relative z-10">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
       <p className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: "#DC2626" }}>
        Investment Pathway
       </p>
       <h1
        className="text-5xl font-bold md:text-6xl mb-6"
        style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
       >
        Knock Down<br />and Rebuild
       </h1>
       <p className="text-xl leading-relaxed mb-8" style={{ color: "#A3A3A3" }}>
        Demolish your existing structure and build a brand-new premium home on
        your land — direct from a vetted builder, with no agent and no markups.
        One of the smartest strategies in the Australian property market.
       </p>
       <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/contact" className="btn-primary">
         Get a Free Assessment
        </Link>
        <Link href="/how-it-works" className="btn-secondary">
         How It Works
        </Link>
       </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden" style={{ height: "420px", border: "1px solid rgba(220,38,38,0.2)" }}>
       <Image
        src="/images/projects/mambourin/mambourin-16.jpg"
        alt="Knock Down and Rebuild project"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
       />
       <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)" }} />
      </div>
     </div>
    </div>
   </section>

   {/* ── Why KDR ── */}
   <section className="section" style={{ background: "#0A0A0A" }}>
    <div className="container-site">
     <div className="text-center mb-12">
      <h2 className="text-4xl font-bold md:text-5xl mb-4" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
       Why Knock Down and Rebuild?
      </h2>
      <p className="text-lg max-w-2xl mx-auto" style={{ color: "#A3A3A3" }}>
       Transform an ageing or underperforming property into a high-value asset —
       without leaving the suburb you know.
      </p>
     </div>
     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((b, i) => (
       <div
        key={b.title}
        className="rounded-xl p-7"
        style={{
         background: "#141414",
         border: "1px solid rgba(220,38,38,0.15)",
         borderTop: "3px solid #DC2626",
        }}
       >
        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4 text-sm font-bold" style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626" }}>
         {String(i + 1).padStart(2, "0")}
        </div>
        <h3 className="text-xl font-bold mb-3" style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}>
         {b.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
         {b.description}
        </p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* ── Process ── */}
   <section className="section" style={{ background: "#141414" }}>
    <div className="container-site">
     <div className="text-center mb-12">
      <h2 className="text-4xl font-bold md:text-5xl mb-4" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
       The Process
      </h2>
      <p className="text-lg" style={{ color: "#A3A3A3" }}>
       From your existing home to a brand-new build — in six clear steps.
      </p>
     </div>
     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
       <div
        key={step.number}
        className="rounded-xl p-6"
        style={{
         background: "#1C1C1C",
         border: "1px solid rgba(255,255,255,0.06)",
        }}
       >
        <p className="text-3xl font-black mb-3" style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}>
         {step.number}
        </p>
        <h3 className="text-lg font-bold mb-2" style={{ color: "#FFFFFF" }}>
         {step.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
         {step.description}
        </p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* ── Gallery ── */}
   <section className="section" style={{ background: "#0A0A0A" }}>
    <div className="container-site">
     <div className="text-center mb-10">
      <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
       See the Finish
      </h2>
      <p className="text-lg" style={{ color: "#A3A3A3" }}>
       Premium quality, delivered direct from builder
      </p>
     </div>
     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[
       { src: "/images/runge-st/exterior-03.jpg", label: "Exterior Facade" },
       { src: "/images/runge-st/kitchen-01.jpg", label: "Modern Kitchen" },
       { src: "/images/runge-st/bathroom-01.jpg", label: "Premium Bathroom" },
       { src: "/images/runge-st/virtual-staged-02.jpg", label: "Open Living" },
       { src: "/images/runge-st/bedroom-staged-03.jpg", label: "Master Bedroom" },
       { src: "/images/runge-st/walkin-robe-01.jpg", label: "Walk-in Robe" },
      ].map((img) => (
       <div key={img.src} className="relative overflow-hidden rounded-xl" style={{ height: "200px", border: "1px solid rgba(220,38,38,0.12)" }}>
        <Image src={img.src} alt={img.label} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }} />
        <div className="absolute bottom-3 left-3">
         <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-md backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}>
          {img.label}
         </span>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* ── CTA ── */}
   <section
    className="section"
    style={{
     background: "linear-gradient(135deg, #1C1C1C 0%, #141414 100%)",
     borderTop: "1px solid rgba(220,38,38,0.15)",
    }}
   >
    <div className="container-site text-center">
     <h2 className="text-3xl font-bold md:text-4xl mb-4" style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}>
      Ready to rebuild on your land?
     </h2>
     <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#A3A3A3" }}>
      Get a free assessment and we&apos;ll connect you with the right builder
      for your Knock Down and Rebuild project.
     </p>
     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/contact" className="btn-primary">
       Get Free Assessment
      </Link>
      <Link href="/investments" className="btn-secondary">
       Explore Other Pathways
      </Link>
     </div>
    </div>
   </section>
  </>
 );
}
