import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) {
    return {
      title: "Blog Not Found | Buy Builder Direct",
    };
  }
  return {
    title: `${blog.title} | Buy Builder Direct`,
    description: blog.metaDescription,
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 text-[#FFFFFF]">
      <div className="container-site max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-[#DC2626] mb-8 hover:underline">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
        <p className="text-sm text-[#A3A3A3] mb-4">{blog.date}</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>
          {blog.title}
        </h1>
        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
