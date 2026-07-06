"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const rooms = [
  {
    src: "/images/projects/shepparton/shepparton-1.jpg",
    label: "Exterior",
    span: "col-span-2 row-span-2",
    mobileSpan: "col-span-2",
  },
  {
    src: "/images/projects/doreen/doreen-3.jpg",
    label: "Kitchen",
    span: "col-span-1 row-span-1",
    mobileSpan: "col-span-1",
  },
  {
    src: "/images/projects/mambourin/mambourin-11.jpg",
    label: "Bathroom",
    span: "col-span-1 row-span-1",
    mobileSpan: "col-span-1",
  },
  {
    src: "/images/projects/doreen/doreen-7.jpg",
    label: "Living & Dining",
    span: "col-span-1 row-span-1",
    mobileSpan: "col-span-1",
  },
  {
    src: "/images/projects/deer-park/deer-park-2.jpg",
    label: "Master Bedroom",
    span: "col-span-1 row-span-1",
    mobileSpan: "col-span-1",
  },
  {
    src: "/images/projects/mambourin/mambourin-4.jpg",
    label: "Lounge Room",
    span: "col-span-1 row-span-1",
    mobileSpan: "col-span-1",
  },
  {
    src: "/images/projects/deer-park/deer-park-5.jpg",
    label: "Second Bedroom",
    span: "col-span-1 row-span-1",
    mobileSpan: "col-span-1",
  },
];

function ImageCard({
 src,
 label,
 index,
 className,
}: {
 src: string;
 label: string;
 index: number;
 className?: string;
}) {
 const [hovered, setHovered] = useState(false);

 return (
  <motion.div
   initial={{ opacity: 0, y: 24 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, margin: "-60px" }}
   transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
   className={`relative overflow-hidden rounded-xl cursor-pointer ${className ?? ""}`}
   style={{
    minHeight: "200px",
    border: "1px solid rgba(220,38,38,0.12)",
    boxShadow: hovered
     ? "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(220,38,38,0.3)"
     : "0 4px 20px rgba(0,0,0,0.3)",
    transition: "box-shadow 0.3s ease",
   }}
   onMouseEnter={() => setHovered(true)}
   onMouseLeave={() => setHovered(false)}
  >
   <motion.div
    animate={{ scale: hovered ? 1.06 : 1 }}
    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    className="absolute inset-0"
   >
    <Image
     src={src}
     alt={label}
     fill
     className="object-cover"
     sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 400px"
    />
   </motion.div>
   {/* Overlay */}
   <div
    className="absolute inset-0 transition-opacity duration-300"
    style={{
     background: hovered
      ? "linear-gradient(to top, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.1) 60%, transparent 100%)"
      : "linear-gradient(to top, rgba(10,10,10,0.55) 0%, transparent 55%)",
    }}
   />
   {/* Label */}
   <motion.div
    animate={{ y: hovered ? 0 : 4, opacity: hovered ? 1 : 0.85 }}
    transition={{ duration: 0.3 }}
    className="absolute bottom-3 left-3"
   >
    <span
     className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-md backdrop-blur-sm"
     style={{
      background: "rgba(10,10,10,0.7)",
      color: "#FFFFFF",
      border: "1px solid rgba(255,255,255,0.1)",
     }}
    >
     {label}
    </span>
   </motion.div>
   {/* Red accent line on hover */}
   <motion.div
    animate={{ scaleX: hovered ? 1 : 0 }}
    transition={{ duration: 0.3 }}
    className="absolute top-0 left-0 right-0 h-0.5 origin-left"
    style={{ background: "#DC2626" }}
   />
  </motion.div>
 );
}

export default function PropertyShowcase() {
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
     <p
      className="mb-3 text-xs font-semibold uppercase tracking-widest"
      style={{ color: "#DC2626" }}
     >
      Project Spotlight
     </p>
     <h2
      className="text-4xl font-bold md:text-5xl"
      style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
     >
      6 Runge Street
     </h2>
     <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#A3A3A3" }}>
      A premium multi-bedroom investment property delivered direct from builder —
      showcasing the quality and finish you get when you cut out the agent.
     </p>
    </motion.div>

    {/* Desktop: Asymmetric grid */}
    <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4" style={{ height: "580px" }}>
     {/* Large feature image */}
     <ImageCard
      src={rooms[0].src}
      label={rooms[0].label}
      index={0}
      className="col-span-2 row-span-2"
     />
     {/* 4 smaller images */}
     {rooms.slice(1, 5).map((room, i) => (
      <ImageCard
       key={room.src}
       src={room.src}
       label={room.label}
       index={i + 1}
       className="col-span-1 row-span-1"
      />
     ))}
    </div>

    {/* Mobile: 2-column grid */}
    <div className="grid md:hidden grid-cols-2 gap-3">
     {rooms.map((room, i) => (
      <div
       key={room.src}
       className={`relative overflow-hidden rounded-xl ${room.mobileSpan}`}
       style={{ height: room.mobileSpan === "col-span-2" ? "240px" : "160px" }}
      >
       <ImageCard src={room.src} label={room.label} index={i} />
      </div>
     ))}
    </div>

    {/* Bottom row: extra images + CTA */}
    <div className="hidden md:grid grid-cols-3 gap-4 mt-4" style={{ height: "200px" }}>
     <ImageCard src={rooms[5].src} label={rooms[5].label} index={5} className="col-span-1" />
     <ImageCard src={rooms[6].src} label={rooms[6].label} index={6} className="col-span-1" />
     {/* CTA card */}
     <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="col-span-1 rounded-xl flex flex-col items-center justify-center gap-4 p-6 text-center"
      style={{
       background: "rgba(220,38,38,0.08)",
       border: "1px solid rgba(220,38,38,0.3)",
      }}
     >
      <div>
       <p className="text-lg font-bold" style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}>
        Want results like this?
       </p>
       <p className="text-sm mt-1" style={{ color: "#A3A3A3" }}>
        Get connected with a vetted builder today
       </p>
      </div>
      <Link href="/contact" className="btn-primary text-sm px-6 py-3">
       Get Free Assessment
      </Link>
     </motion.div>
    </div>

    {/* Mobile CTA */}
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: true }}
     transition={{ duration: 0.5, delay: 0.3 }}
     className="md:hidden mt-6 text-center"
    >
     <Link href="/contact" className="btn-primary">
      Get Free Assessment
     </Link>
    </motion.div>
    </div>

    {/* Floor Plans Section */}
    <div className="mt-24 pt-16 border-t border-[rgba(220,38,38,0.2)] text-center">
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <p
       className="mb-3 text-xs font-semibold uppercase tracking-widest"
       style={{ color: "#DC2626" }}
      >
       Example Layouts
      </p>
      <h2
       className="text-3xl font-bold md:text-4xl"
       style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
      >
       High-Yield Floor Plans
      </h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#A3A3A3" }}>
       Purpose-built co-living and rooming house designs optimized for maximum rental yield and tenant comfort.
      </p>
     </motion.div>

     <div className="mt-12 grid md:grid-cols-2 gap-8">
      {/* Greenfield */}
      <motion.div
       initial={{ opacity: 0, x: -20 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: 0.2 }}
       className="rounded-xl overflow-hidden shadow-2xl"
       style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#1C1C1C" }}
      >
       <div className="relative w-full aspect-[4/3] bg-white">
        <Image
         src="/images/floorplan-greenfield.png"
         alt="Greenfield Site Floor Plan"
         fill
         className="object-contain"
        />
       </div>
       <div className="p-6 text-left border-t border-white/10">
        <h3 className="text-xl font-bold text-white mb-2">Greenfield Site</h3>
        <p className="text-gray-400 text-sm">
         Minimum block size: 16X32 &middot; House Size: 295sqm &middot; 9 Bedrooms
        </p>
       </div>
      </motion.div>

      {/* Brownfield */}
      <motion.div
       initial={{ opacity: 0, x: 20 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: 0.4 }}
       className="rounded-xl overflow-hidden shadow-2xl"
       style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#1C1C1C" }}
      >
       <div className="relative w-full aspect-[4/3] bg-white">
        <Image
         src="/images/floorplan-brownfield.png"
         alt="Brownfield Infill Site Floor Plan"
         fill
         className="object-contain"
        />
       </div>
       <div className="p-6 text-left border-t border-white/10">
        <h3 className="text-xl font-bold text-white mb-2">9x9 Brownfield/Infill Site</h3>
        <p className="text-gray-400 text-sm">
         Minimum block size: 550sqm &middot; House Size: 295sqm &middot; 9 Bedrooms
        </p>
       </div>
      </motion.div>
     </div>
    </div>

   </section>
  );
}
