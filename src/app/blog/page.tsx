import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Blog | Buy Builder Direct",
 description:
  "Property investment insights, builder updates, and market analysis from the Buy Builder Direct team.",
};

export default function BlogPage() {
 return (
  <>
   <section
    className="section"
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
      Insights & Updates
     </p>
     <h1
      className="text-5xl font-bold md:text-6xl"
      style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
     >
      The BBD Blog
     </h1>
     <p
      className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed"
      style={{ color: "#A3A3A3" }}
     >
      Property investment insights, market updates, and builder news from the
      Buy Builder Direct team.
     </p>
    </div>
   </section>

   <section className="section" style={{ background: "#0A0A0A" }}>
    <div className="container-site">
     <div
      className="mx-auto max-w-2xl rounded-2xl p-12 text-center"
      style={{
       background: "#141414",
       border: "1px solid rgba(220,38,38,0.2)",
      }}
     >
      <div
       className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
       style={{ background: "rgba(220,38,38,0.12)" }}
      >
       <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#DC2626"
        strokeWidth={1.5}
        aria-hidden="true"
       >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
       </svg>
      </div>
      <h2
       className="text-3xl font-bold mb-4"
       style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
      >
       Content Coming Soon
      </h2>
      <p className="text-lg mb-8" style={{ color: "#A3A3A3" }}>
       We&apos;re preparing insightful articles on property investment
       strategies, builder relationships, and how to maximise your returns by
       going direct.
      </p>
      <Link href="/contact" className="btn-primary">
       Get in Touch in the Meantime
      </Link>
     </div>
    </div>
   </section>
  </>
 );
}
