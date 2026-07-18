"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const pathways = [
  {
    id: "custom-builds",
    title: "Custom Builds",
    description: "Tailored investment properties on your land or ours. Designed for maximum yield and tenant appeal.",
    image: "/images/projects/doreen/doreen-7.jpg",
    link: "/investments/custom-builds",
    yield: "Your design",
  },
  {
    id: "developments",
    title: "Unit Developments",
    description: "From duplexes to multi-unit sites, we manage the end-to-end process of developing high-return properties.",
    image: "/images/projects/deer-park/deer-park-2.jpg",
    link: "/investments/developments",
    yield: "5–10%+ yield",
  },
  {
    id: "sda-ndis",
    title: "SDA & NDIS Homes",
    description: "Purpose-built, compliant Specialist Disability Accommodation delivering secure, government-backed returns.",
    image: "/images/projects/mambourin/mambourin-11.jpg",
    link: "/investments/sda-ndis-homes",
    yield: "8–15%+ yield",
  },
  {
    id: "house-land",
    title: "House & Land Packages",
    description: "Turnkey investment packages in high-growth corridors. Fixed price, builder-direct value.",
    image: "/images/projects/birdsmouth-la/birdsmouth-la-1.jpg",
    link: "/investments/house-and-land",
    yield: "4–7% yield",
  },
  {
    id: "co-living",
    title: "Co-Living Homes",
    description: "Optimized residential designs that increase rental yield by catering to multiple independent tenants.",
    image: "/images/projects/doreen/doreen-3.jpg",
    link: "/investments/co-living-homes",
    yield: "6–12% yield",
  },
  {
    id: "knock-down",
    title: "Knock Down & Rebuild",
    description: "Unlock the value of your existing block. We replace aging properties with high-performing investments.",
    image: "/images/projects/rowville/rowville-1.jpg",
    link: "/investments/knock-down-rebuild",
    yield: "Save $$$",
  },
  {
    id: "rooming-houses",
    title: "Rooming Houses (Class 1B)",
    description: "High cash-flow, multi-income properties built to strict Class 1B commercial standards for maximum ROI.",
    image: "/images/projects/deer-park/deer-park-5.jpg",
    link: "/investments/rooming-houses",
    yield: "8–14% yield",
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
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#DC2626" }}
          >
            7 Pathways
          </p>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
          >
            Choose Your Strategy
          </h2>
          <p className="mt-4 text-lg" style={{ color: "#A3A3A3" }}>
            We connect you directly with the right builder — no agent, no markup
          </p>
        </motion.div>

        {/* ── Cards grid — first card featured (2 cols × 2 rows) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pathway-grid">
          {pathways.map((p, i) => (
            <motion.div
              key={p.link}
              className={`${i === 0 ? "sm:col-span-2 lg:row-span-2 min-h-[220px] sm:min-h-[524px] lg:min-h-[564px]" : "min-h-[200px] sm:min-h-[260px] lg:min-h-[280px]"}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={p.link}
                className="group relative block w-full h-full overflow-hidden rounded-2xl cursor-pointer"
                style={{ height: "100%" }}
              >
                {/* Background image */}
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={i === 0 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 25vw"}
                />

                {/* Base dark gradient — always visible */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,5,5,0.97) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.15) 100%)",
                  }}
                />

                {/* Hover: subtle red tint overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(220,38,38,0.07)" }}
                />

                {/* Hover: inset red border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1.5px rgba(220,38,38,0.6), 0 20px 60px rgba(220,38,38,0.18)",
                  }}
                />

                {/* Animated top red line */}
                <div
                  className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full z-20 transition-all duration-500"
                  style={{
                    background: "linear-gradient(to right, #DC2626, rgba(220,38,38,0.3))",
                  }}
                />

                {/* Content pinned to bottom */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-6">
                  {/* Yield badge */}
                  <span
                    className="mb-3 self-start text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(220,38,38,0.18)",
                      color: "#DC2626",
                      border: "1px solid rgba(220,38,38,0.4)",
                    }}
                  >
                    {p.yield}
                  </span>

                  <h3
                    className="font-bold leading-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#FFFFFF",
                      fontSize: i === 0 ? "1.85rem" : "1.1rem",
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Description — visible on featured, reveals on hover for small */}
                  <p
                    className={`mt-2 text-sm leading-relaxed transition-all duration-400 overflow-hidden ${
                      i === 0
                        ? "opacity-100 max-h-20"
                        : "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20"
                    }`}
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {p.description}
                  </p>

                  {/* CTA arrow */}
                  <div
                    className="mt-3 flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 opacity-60 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                    style={{ color: "#DC2626" }}
                  >
                    <span>Explore</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
