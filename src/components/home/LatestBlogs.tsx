import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function LatestBlogs() {
  // Get the 3 most recent blogs
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-[rgba(220,38,38,0.1)]">
      <div className="container-site">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white" style={{ fontFamily: "var(--font-display)" }}>
            Latest Insights
          </h2>
          <p className="text-[#A3A3A3] max-w-2xl mx-auto">
            Stay updated with the latest strategies, yield analyses, and investment tips for the Australian property market.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full" style={{ background: "#DC2626" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              <div className="group h-full bg-[#111111] border border-white/10 rounded-xl p-8 hover:border-[#DC2626]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <span className="text-sm font-semibold text-[#DC2626] mb-4 block">
                  {blog.date}
                </span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#DC2626] transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-[#A3A3A3] text-sm leading-relaxed mb-8 flex-grow">
                  {blog.metaDescription}
                </p>
                <div className="mt-auto inline-flex items-center text-white text-sm font-bold uppercase tracking-wider group-hover:text-[#DC2626] transition-colors">
                  Read Article
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/blog" className="inline-block px-8 py-3 rounded-full border border-[#DC2626] text-[#DC2626] font-bold hover:bg-[#DC2626] hover:text-white transition-all duration-300">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
