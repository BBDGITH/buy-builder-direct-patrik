"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BenefitItem {
  title: string;
  desc: string;
}

export default function BenefitsGrid({
  items,
  title = "Key Benefits",
}: {
  items: BenefitItem[];
  title?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section" style={{ background: "#0A0A0A" }}>
      <div className="container-site" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#DC2626" }}
          >
            Why Choose This
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-3xl font-bold md:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
          >
            {title}
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 16px 50px rgba(220,38,38,0.18), 0 0 0 1px rgba(220,38,38,0.45)",
              }}
              className="group relative rounded-2xl p-7 overflow-hidden cursor-default"
              style={{
                background: "linear-gradient(145deg, #161616 0%, #111111 100%)",
                border: "1px solid rgba(220,38,38,0.1)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* Hover red diagonal gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220,38,38,0.09) 0%, transparent 55%)",
                }}
              />

              {/* Watermark number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-3 right-4 select-none font-black leading-none group-hover:opacity-60 transition-opacity duration-300"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "5rem",
                  color: "rgba(220,38,38,0.05)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Animated top red line */}
              <div
                className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-tl-2xl"
                style={{
                  background: "linear-gradient(to right, #DC2626, rgba(220,38,38,0.3))",
                }}
              />

              {/* Icon */}
              <div
                className="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(220,38,38,0.1)",
                  border: "1px solid rgba(220,38,38,0.2)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#DC2626"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3
                  className="font-bold text-lg mb-2 leading-snug"
                  style={{ color: "#FFFFFF" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
