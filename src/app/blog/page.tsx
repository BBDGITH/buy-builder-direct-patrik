import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
 title: "Blog | Buy Builder Direct",
 description:
  "Property investment insights, builder updates, and market analysis from the Buy Builder Direct team.",
};

export default function BlogPage() {
 return (
  <>
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       {blogs.map((blog) => (
        <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group block">
         <div
          className="h-full rounded-2xl p-8 flex flex-col transition-transform duration-300 group-hover:-translate-y-2"
          style={{
           background: "#141414",
           border: "1px solid rgba(220,38,38,0.2)",
          }}
         >
          <p className="text-[#DC2626] text-sm font-semibold mb-3 tracking-widest uppercase">
           {blog.date}
          </p>
          <h2
           className="text-2xl font-bold mb-4 group-hover:text-[#DC2626] transition-colors"
           style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
          >
           {blog.title}
          </h2>
          <p className="text-[#A3A3A3] text-sm leading-relaxed mb-6 flex-grow">
           {blog.metaDescription}
          </p>
          <div className="text-sm font-semibold text-white mt-auto inline-flex items-center gap-2">
           Read Article
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
           </svg>
          </div>
         </div>
        </Link>
       ))}
      </div>
    </div>
   </section>
  </>
 );
}
