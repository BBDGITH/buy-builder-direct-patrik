import type { Metadata } from "next";
import Link from "next/link";
import LeadLink from "@/components/shared/LeadLink";

export const metadata: Metadata = {
 title: "Investment Pathways | Buy Builder Direct",
 description:
 "Explore 6 property investment pathways — co-living, rooming houses, SDA/NDIS, house & land, custom builds, and developments. Buy direct from vetted builders.",
};

const pathways = [
 {
 title: "Co-Living Homes",
 description:
 "High-yield multi-room residential properties built for the modern rental market. Co-living is ideally suited to young professional markets in inner and middle-ring suburbs, where demand for affordable private rooms consistently outpaces supply.",
 metric: "Yield: 6–12%",
 metricLabel: "Gross rental yield",
 tags: ["Inner suburbs", "Young professionals", "Positive cash flow"],
 href: "/investments/co-living-homes",
 },
 {
 title: "Rooming Houses",
 description:
 "Multiple rental income streams under one roof — strong cash flow from day one. Rooming houses are Victoria's most investor-friendly structure, and BBD has built deep relationships with specialist builders who understand the compliance requirements inside and out.",
 metric: "Yield: 8–14%",
 metricLabel: "Gross rental yield",
 tags: ["Victoria specialist", "Multiple income streams", "Day-one cash flow"],
 href: "/investments/rooming-houses",
 },
 {
 title: "SDA / NDIS Housing",
 description:
 "Government-backed, specialist disability accommodation with premium guaranteed returns. SDA income is set by the NDIA and paid directly from the NDIS, making it one of the most stable and reliable income streams available to property investors in Australia.",
 metric: "Yield: 8–15%+",
 metricLabel: "NDIA-set income",
 tags: ["Government-backed", "NDIS income", "Long-term leases"],
 href: "/investments/sda-ndis-homes",
 },
 {
 title: "House & Land",
 description:
 "Fixed-price turnkey packages across growth corridors in all major Australian states. House and land remains the most accessible entry point for new investors, combining capital growth potential with a straightforward build process and broad tenant appeal.",
 metric: "Yield: 4–7%",
 metricLabel: "Gross rental yield",
 tags: ["Capital growth", "Growth corridors", "Broad tenant appeal"],
 href: "/investments/house-and-land",
 },
 {
 title: "Custom Builds",
 description:
 "Your vision, your specs — direct from a builder at wholesale rates with no agent. Custom builds are ideal for investors with a specific brief, a particular site, or a strategy that doesn't fit a standard package. Work one-on-one with the builder from day one.",
 metric: "Fully personalised",
 metricLabel: "To your specification",
 tags: ["Your brief", "Direct builder access", "No restrictions"],
 href: "/investments/custom-builds",
 },
 {
 title: "Developments",
 description:
 "Multi-unit projects and knockdown-rebuild opportunities for portfolio scaling. Developments allow experienced investors to create multiple income streams from a single land parcel, typically delivering strong per-unit economics and excellent long-term capital outcomes.",
 metric: "Portfolio scaling",
 metricLabel: "Multi-unit economics",
 tags: ["Multi-unit", "KDR", "Portfolio scaling"],
 href: "/investments/developments",
 },
];

type ComparisonRow = {
 label: string;
 coliving: string;
 rooming: string;
 sda: string;
 handl: string;
 custom: string;
 dev: string;
};

const comparisonRows: ComparisonRow[] = [
 {
 label: "Typical Yield",
 coliving: "6–12%",
 rooming: "8–14%",
 sda: "8–15%+",
 handl: "4–7%",
 custom: "Varies",
 dev: "Varies",
 },
 {
 label: "Entry Level",
 coliving: "$550k+",
 rooming: "$600k+",
 sda: "$550k+",
 handl: "$400k+",
 custom: "Flexible",
 dev: "$800k+",
 },
 {
 label: "Best For",
 coliving: "Cash flow",
 rooming: "Cash flow",
 sda: "Stability",
 handl: "Growth",
 custom: "Control",
 dev: "Scaling",
 },
 {
 label: "BBD Support",
 coliving: "Full",
 rooming: "Full",
 sda: "Full",
 handl: "Full",
 custom: "Full",
 dev: "Full",
 },
];

export default function InvestmentsPage() {
 return (
 <>
 {/* ── Hero ──────────────────────────────────────────────────── */}
 <section
 className="section-hero"
 style={{
 background:
 "linear-gradient(135deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)",
 borderBottom: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <div className="container-site text-center">
 <p
 className="mb-4 text-sm font-semibold uppercase tracking-widest"
 style={{ color: "#DC2626" }}
 >
 Investment Hub
 </p>
 <h1
 className="text-5xl font-bold md:text-6xl lg:text-7xl"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Investment Pathways
 </h1>
 <p
 className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed"
 style={{ color: "#A3A3A3" }}
 >
 Choose the strategy that fits your goals — then let us connect you
 with the builder who specialises in it.
 </p>
 </div>
 </section>

 {/* ── Pathway Cards ─────────────────────────────────────────── */}
 <section className="section" style={{ background: "#0A0A0A" }}>
 <div className="container-site">
 <div className="grid gap-8 md:grid-cols-2">
 {pathways.map((p) => (
 <div
 key={p.href}
 className="group rounded-xl p-8"
 style={{
 background: "#141414",
 borderTop: "3px solid #DC2626",
 border: "1px solid rgba(220,38,38,0.15)",
 borderTopWidth: "3px",
 }}
 >
 <div className="flex items-start justify-between gap-4 mb-5">
 <div className="flex items-center gap-4">
 <div className="w-10 h-10 mb-3 rounded-lg flex items-center justify-center" style={{ background: "rgba(220,38,38,0.15)" }} aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
 <h2
 className="text-2xl font-bold"
 style={{
 color: "#FFFFFF",
 fontFamily: "var(--font-display)",
 }}
 >
 {p.title}
 </h2>
 </div>
 </div>

 <p
 className="text-base leading-relaxed mb-6"
 style={{ color: "#A3A3A3" }}
 >
 {p.description}
 </p>

 {/* Key metric */}
 <div
 className="rounded-lg px-5 py-4 mb-6 flex items-center justify-between"
 style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)" }}
 >
 <div>
 <p
 className="text-2xl font-bold"
 style={{ color: "#DC2626", fontFamily: "var(--font-display)" }}
 >
 {p.metric}
 </p>
 <p className="text-xs mt-0.5" style={{ color: "#A3A3A3" }}>
 {p.metricLabel}
 </p>
 </div>
 <div className="flex flex-wrap gap-2 justify-end">
 {p.tags.map((tag) => (
 <span
 key={tag}
 className="rounded-full px-3 py-1 text-xs font-medium"
 style={{
 background: "rgba(255,255,255,0.05)",
 color: "#A3A3A3",
 border: "1px solid rgba(255,255,255,0.08)",
 }}
 >
 {tag}
 </span>
 ))}
 </div>
 </div>

 <Link
 href={p.href}
 className="inline-flex items-center gap-2 font-semibold transition-colors"
 style={{ color: "#DC2626" }}
 >
 Explore {p.title}
 </Link>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Comparison Table ──────────────────────────────────────── */}
 <section className="section" style={{ background: "#141414" }}>
 <div className="container-site">
 <div className="text-center mb-12">
 <h2
 className="text-3xl font-bold md:text-4xl mb-4"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Side-by-Side Comparison
 </h2>
 <p className="text-lg" style={{ color: "#A3A3A3" }}>
 How the six pathways stack up across key investment criteria
 </p>
 </div>

 <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(220,38,38,0.2)" }}>
 <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
 <thead>
 <tr style={{ background: "#1C1C1C", borderBottom: "1px solid rgba(220,38,38,0.2)" }}>
 <th
 className="text-left px-5 py-4 font-semibold"
 style={{ color: "#A3A3A3", minWidth: "140px" }}
 >
 Criteria
 </th>
 {["Co-Living", "Rooming", "SDA/NDIS", "H&L", "Custom", "Dev"].map((col) => (
 <th
 key={col}
 className="px-4 py-4 font-bold text-center"
 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
 >
 {col}
 </th>
 ))}
 </tr>
 </thead>
 <tbody>
 {comparisonRows.map((row, i) => (
 <tr
 key={row.label}
 style={{
 background: i % 2 === 0 ? "#141414" : "#1C1C1C",
 borderBottom: "1px solid rgba(255,255,255,0.04)",
 }}
 >
 <td
 className="px-5 py-4 font-semibold"
 style={{ color: "#A3A3A3" }}
 >
 {row.label}
 </td>
 {[row.coliving, row.rooming, row.sda, row.handl, row.custom, row.dev].map(
 (val, j) => (
 <td
 key={j}
 className="px-4 py-4 text-center"
 style={{ color: "#FFFFFF" }}
 >
 {val}
 </td>
 )
 )}
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 {/* ── CTA ───────────────────────────────────────────────────── */}
 <section
 className="section"
 style={{
 background: "linear-gradient(135deg, #1C1C1C 0%, #141414 100%)",
 borderTop: "1px solid rgba(220,38,38,0.15)",
 }}
 >
 <div className="container-site text-center">
 <h2
 className="text-3xl font-bold md:text-4xl mb-4"
 style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
 >
 Not sure which pathway is right for you?
 </h2>
 <p className="text-lg mb-8" style={{ color: "#A3A3A3" }}>
 Let&apos;s talk. A 15-minute call with our team will clarify which
 strategy suits your goals, budget, and timeline.
 </p>
 <LeadLink href="/contact" className="btn-primary">
 Book a Free Strategy Call
 </LeadLink>
 </div>
 </section>
 </>
 );
}
