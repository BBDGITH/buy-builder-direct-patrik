const items = [
 {
 value: "$$$",
 label: "Kept In Your Deal",
 },
 {
 value: "Nationwide",
 label: "Coverage — All 7 States",
 },
 {
 value: "Direct",
 label: "Builder Access",
 },
 {
 value: "Zero",
 label: "Hidden Fees",
 },
];

export default function TrustBar() {
 return (
 <div
 style={{
 background: "#141414",
 borderTop: "1px solid rgba(220,38,38,0.25)",
 borderBottom: "1px solid rgba(220,38,38,0.25)",
 }}
 >
 <div className="container-site py-6">
 <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
 {items.map((item) => (
 <div
 key={item.label}
 className="flex items-center gap-3"
 >
 {/* Red checkmark icon */}
 <span
 className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
 style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626" }}
 aria-hidden="true"
 >

            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
 </span>
 <div>
 <p
 className="text-base font-bold leading-tight"
 style={{ color: "#FFFFFF" }}
 >
 {item.value}
 </p>
 <p className="text-xs leading-tight" style={{ color: "#A3A3A3" }}>
 {item.label}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 );
}
