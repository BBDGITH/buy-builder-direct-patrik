"use client";

import Link from "next/link";

export default function StickyMobileCTA() {
 return (
 <div
 className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
 style={{
 background: "#141414",
 borderTop: "1px solid rgba(220,38,38,0.2)",
 boxShadow: "0 -8px 30px rgba(0,0,0,0.6)",
 backdropFilter: "blur(8px)",
 }}
 >
 <div className="flex items-stretch h-14">
 {/* Call Now */}
 <a
 href="tel:1300223776"
 aria-label="Call 1300 BBD PRO"
 className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-white border-r transition-colors hover:bg-white/5"
 style={{ borderColor: "rgba(220,38,38,0.2)" }}
 >
 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
 </svg>
 <span>Call Now</span>
 </a>

 {/* Get Free Quote */}
 <Link
 href="/contact"
 className="flex-1 flex items-center justify-center gap-2 text-sm font-bold text-white transition-colors"
 style={{ backgroundColor: "#DC2626" }}
 onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#EF4444")}
 onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#DC2626")}
 >
 Get Free Quote
 </Link>
 </div>
 </div>
 );
}
