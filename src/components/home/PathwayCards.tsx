"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const pathways = [
  {
    title: "Co-Living Homes",
    yield: "6–12% yield",
    description: "High-yield multi-room properties built for the modern rental market — up to 4× a standard tenancy income.",
    href: "/investments/co-living-homes",
    image: "/images/runge-st/living-01.jpg",
  },
  {
    title: "Rooming Houses",
    yield: "8–14% yield",
    description: "Multiple income streams under one roof. Victoria's highest-yielding residential strategy.",
    href: "/investments/rooming-houses",
    image: "/images/runge-st/bedroom-staged-02.jpg",
  },
  {
    title: "SDA / NDIS Homes",
    yield: "8–15%+ yield",
    description: "Government-backed NDIS income with long-term tenancies and genuine social impact.",
    href: "/investments/sda-ndis-homes",
    image: "/images/runge-st/bathroom-02.jpg",
  },
  {
    title: "House & Land",
    yield: "4–7% yield",
    description: "Fixed-price turnkey packages across Australia's strongest growth corridors.",
    href: "/investments/house-and-land",
    image: "/images/runge-st/exterior-03.jpg",
  },
  {
    title: "Custom Builds",
    yield: "Your design",
    description: "Your vision, your specs — at wholesale builder rates with zero agent markup.",
    href: "/investments/custom-builds",
    image: "/images/runge-st/kitchen-01.jpg",
  },
  {
    title: "Developments",
    yield: "5–10%+ yield",
    description: "Multi-unit and knockdown-rebuild projects — one deal, multiple income streams.",
    href: "/investments/developments",
    image: "/images/runge-st/exterior-04.jpg",
  },
  {
    title: "Knock Down & Rebuild",
    yield: "Up to 15% saving",
    description: "Demolish the old, build premium new — on your land, direct from builder.",
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
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          style={{ gridAutoRows: "280px" }}
        >
          {pathways.map((p, i) => (
            <motion.div
              key={p.href}
              className={i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}
              style={{ minHeight: i === 0 ? "564px" : "280px" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={p.href}
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
