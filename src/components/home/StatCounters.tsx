"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
 { value: 2.4, suffix: "M+", prefix: "$", label: "Total Client Savings", decimals: 1 },
 { value: 180, suffix: "+", prefix: "", label: "Properties Delivered", decimals: 0 },
 { value: 7, suffix: "", prefix: "", label: "States Covered", decimals: 0 },
 { value: 98, suffix: "%", prefix: "", label: "Client Satisfaction", decimals: 0 },
];

function useCountUp(target: number, duration: number, start: boolean, decimals: number) {
 const [count, setCount] = useState(0);

 useEffect(() => {
 if (!start) return;
 let startTime: number | null = null;
 const step = (timestamp: number) => {
 if (!startTime) startTime = timestamp;
 const elapsed = timestamp - startTime;
 const progress = Math.min(elapsed / duration, 1);
 // Ease out
 const eased = 1 - Math.pow(1 - progress, 3);
 setCount(parseFloat((eased * target).toFixed(decimals)));
 if (progress < 1) requestAnimationFrame(step);
 };
 requestAnimationFrame(step);
 }, [start, target, duration, decimals]);

 return count;
}

function StatItem({ stat }: { stat: typeof stats[0] }) {
 const ref = useRef<HTMLDivElement>(null);
 const inView = useInView(ref, { once: true });
 const count = useCountUp(stat.value, 1800, inView, stat.decimals);

 return (
 <div ref={ref} className="text-center">
 <p
 className="text-5xl font-bold md:text-6xl"
 style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}
 >
 {stat.prefix}
 {stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.round(count)}
 {stat.suffix}
 </p>
 <p className="mt-2 text-sm font-medium uppercase tracking-widest" style={{ color: "#A3A3A3" }}>
 {stat.label}
 </p>
 </div>
 );
}

export default function StatCounters() {
 return (
 <section
 className="section"
 style={{
 background: "#0A0A0A",
 borderTop: "1px solid rgba(220,38,38,0.15)",
 borderBottom: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <div className="container-site">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="grid grid-cols-2 gap-10 md:grid-cols-4"
 >
 {stats.map((stat) => (
 <StatItem key={stat.label} stat={stat} />
 ))}
 </motion.div>
 </div>
 </section>
 );
}
