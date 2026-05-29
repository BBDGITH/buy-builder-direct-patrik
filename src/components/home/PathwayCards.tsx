"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const pathways = [
 {
  title: "Co-Living Homes",
  description:
   "High-yield multi-room residential properties built for the modern rental market.",
  href: "/investments/co-living-homes",
  image: "/images/runge-st/bedroom-staged-02.jpg",
 },
 {
  title: "Rooming Houses",
  description:
   "Multiple rental income streams under one roof — strong cash flow from day one.",
  href: "/investments/rooming-houses",
  image: "/images/runge-st/living-02.jpg",
 },
 {
  title: "SDA / NDIS Homes",
  description:
   "Government-backed, specialist disability accommodation with premium guaranteed returns.",
  href: "/investments/sda-ndis-homes",
  image: "/images/runge-st/bathroom-02.jpg",
 },
 {
  title: "House & Land",
  description:
   "Fixed-price packages across growth corridors in all major Australian states.",
  href: "/investments/house-and-land",
  image: "/images/runge-st/exterior-03.jpg",
 },
 {
  title: "Custom Builds",
  description:
   "Your vision, your specs — direct from builder at wholesale rates with no agent.",
  href: "/investments/custom-builds",
  image: "/images/runge-st/kitchen-01.jpg",
 },
 {
  title: "Developments",
  description:
   "Multi-unit and boutique development opportunities with end-to-end builder access.",
  href: "/investments/developments",
  image: "/images/runge-st/exterior-04.jpg",
 },
 {
  title: "Knock Down and Rebuild",
  description:
   "Demolish your existing structure and build a brand-new premium home on your land — direct from builder, no agent markups.",
  href: "/investments/knock-down-rebuild",
  image: "/images/runge-st/exterior-02.jpg",
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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
     {pathways.map((p, i) => (
      <motion.div
       key={p.href}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: i * 0.07 }}
      >
       <Link
        href={p.href}
        className="group block h-full rounded-xl overflow-hidden transition-all duration-300"
        style={{
         background: "#141414",
         border: "1px solid rgba(220,38,38,0.15)",
        }}
        onMouseEnter={(e) => {
         (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 0 1px rgba(220,38,38,0.5), 0 12px 40px rgba(220,38,38,0.12)";
         (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
         (e.currentTarget as HTMLElement).style.boxShadow = "none";
         (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
       >
        {/* Image thumbnail */}
        <div className="relative h-40 overflow-hidden">
         <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
         />
         <div
          className="absolute inset-0"
          style={{
           background:
            "linear-gradient(to bottom, transparent 40%, rgba(20,20,20,0.9) 100%)",
          }}
         />
         {/* Red top border accent */}
         <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "#DC2626" }} />
        </div>

        {/* Card body */}
        <div className="p-5">
         <h3
          className="text-lg font-bold mb-2"
          style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
         >
          {p.title}
         </h3>
         <p className="text-sm leading-relaxed mb-4" style={{ color: "#A3A3A3" }}>
          {p.description}
         </p>
         <span
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5"
          style={{ color: "#DC2626" }}
         >
          Learn More
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
         </span>
        </div>
       </Link>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
