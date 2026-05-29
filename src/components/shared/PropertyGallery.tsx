"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const photos = [
  { src: "/images/runge-st/exterior-01.jpg", label: "Exterior", span: "col-span-2 row-span-2" },
  { src: "/images/runge-st/kitchen-01.jpg", label: "Kitchen" },
  { src: "/images/runge-st/living-01.jpg", label: "Living Area" },
  { src: "/images/runge-st/bathroom-01.jpg", label: "Bathroom" },
  { src: "/images/runge-st/bedroom-staged-01.jpg", label: "Bedroom" },
  { src: "/images/runge-st/walkin-robe-01.jpg", label: "Walk-in Robe" },
  { src: "/images/runge-st/virtual-staged-02.jpg", label: "Virtual Staged" },
];

export default function PropertyGallery({ title = "The Finish Quality" }: { title?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" style={{ background: "#0A0A0A" }} ref={ref}>
      <div className="container-site">
        {/* Heading */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#DC2626" }}
            >
              Sample Quality
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm max-w-xs text-right hidden sm:block"
            style={{ color: "#666666" }}
          >
            Example finishes from a recently completed Buy Builder Direct property.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 gallery-grid">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              style={{ minHeight: i === 0 ? "clamp(280px, 40vw, 404px)" : undefined }}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)" }}
              />
              {/* Red accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "#DC2626" }}
              />
              {/* Label */}
              <span
                className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "#FFFFFF" }}
              >
                {photo.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
